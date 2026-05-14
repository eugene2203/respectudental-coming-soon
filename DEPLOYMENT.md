# Deployment Guide - Respect U Dental Lab

## 📋 Project Overview

Full-stack Next.js 16 application with TypeScript, Prisma ORM, MariaDB, and Docker deployment.

**Tech Stack:**
- **Frontend/Backend**: Next.js 16.2.6 (App Router) + TypeScript 5
- **Database**: MariaDB 11.6 with Prisma ORM 5.22.0
- **Forms**: React Hook Form + Zod validation
- **Email**: Mailgun.js 13.0.1
- **PDF Generation**: Puppeteer 24.43.1
- **Security**: Google reCAPTCHA v3 + Rate Limiting
- **Styling**: Tailwind CSS 4
- **Deployment**: Docker + Docker Compose

---

## 🔧 Development Mode (Hot Reload)

### Quick Start
```bash
./dev.sh
```

### What Happens
1. Starts MariaDB on port **3307** (external)
2. Starts Next.js dev server on port **3000**
3. Starts Adminer on port **8080**
4. Mounts source code as volume → **instant hot reload**
5. Runs `npx prisma generate` on startup
6. Runs `npm run dev` with file watching

### File Structure
```
docker-compose.dev.yml  → Development configuration
Dockerfile.dev          → Lightweight dev image
dev.sh                  → Start script
```

### Key Features
- **Volume Mounts**: Source code changes apply instantly
- **Isolated node_modules**: Prevents conflicts with host
- **Prisma Auto-generation**: Schema changes auto-apply
- **Fast Refresh**: Next.js HMR enabled

### Environment Variables (.env)
```bash
NODE_ENV=development
DATABASE_URL="mysql://respectu_user:respectu_pass@localhost:3307/respectudental"
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🚀 Production Mode (Optimized Build)

### Quick Start
```bash
./prod.sh
```

### What Happens
1. Multi-stage Docker build:
   - **Stage 1 (deps)**: Install dependencies
   - **Stage 2 (builder)**: Build Next.js + Generate Prisma Client
   - **Stage 3 (runner)**: Minimal production image
2. Creates standalone Next.js build
3. Starts on port **3000** (external)
4. MariaDB on port **3307** (external)

### File Structure
```
docker-compose.yml      → Production configuration
Dockerfile              → Multi-stage production build
prod.sh                 → Start script
```

### Key Features
- **Standalone Output**: Self-contained Next.js server
- **Minimal Image**: Only production dependencies
- **Security**: Non-root user (nextjs:nodejs)
- **Optimized**: Static assets pre-built

### Environment Variables (.env)
```bash
NODE_ENV=production
DATABASE_URL="mysql://respectu_user:respectu_pass@db:3306/respectudental"
NEXT_PUBLIC_SITE_URL=https://respectudental.com
```

---

## 🔐 Critical Configuration Details

### 1. **Prisma + OpenSSL Issue**

**Problem**: Prisma 5.22.0 on Alpine Linux cannot auto-detect OpenSSL version.

**Solution**:
```dockerfile
# Dockerfile (line 5, 36-43)
RUN apk add --no-cache openssl
```

**Why**: 
- Alpine uses `musl libc` instead of `glibc`
- Prisma binary engines require OpenSSL for database connections
- Without it: `Error: Cannot find module '@prisma/engines'`

**Environment Variables** (optional, for explicit control):
```yaml
PRISMA_QUERY_ENGINE_LIBRARY=/usr/lib/libssl.so.3
PRISMA_CLI_QUERY_ENGINE_TYPE=library
```

---

### 2. **Prisma Version Downgrade (7.8.0 → 5.22.0)**

**Problem**: Prisma 7.x changed configuration syntax:
```prisma
# ❌ Prisma 7.x - REMOVED url from schema
datasource db {
  provider = "mysql"
  # url removed - must use adapter in PrismaClient constructor
}

# ✅ Prisma 5.x - Classic syntax
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

**Why We Downgraded**:
- Prisma 7 requires complex adapter setup
- Breaking changes in migration workflow
- Prisma 5.22.0 is stable and production-ready
- Simpler configuration for Docker deployment

**Files Changed**:
- `package.json`: `"prisma": "^5.22.0"`
- `prisma/schema.prisma`: Added `url = env("DATABASE_URL")`

---

### 3. **Port Configuration**

**MariaDB**: Port **3306** was occupied on server
```yaml
# docker-compose.yml
ports:
  - "3307:3306"  # External:Internal
```

**Connection Strings**:
- **From Host**: `mysql://user:pass@localhost:3307/db`
- **From Docker**: `mysql://user:pass@db:3306/db` (internal network)

---

### 4. **File Permissions & Directories**

**Problem**: Next.js needs write access for cache and PDFs.

**Solution**:
```dockerfile
# Dockerfile (line 47-54)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN mkdir -p /app/.next/cache /app/tmp && \
    chown -R nextjs:nodejs /app/.next/cache /app/tmp

USER nextjs
```

**Why**:
- Next.js creates `.next/cache` at runtime
- Puppeteer writes PDFs to `/app/tmp`
- Without permissions: `EACCES: permission denied`

**PDF Storage**:
```bash
PDF_STORAGE_PATH=/app/tmp  # Inside container
```

---

### 5. **Google Fonts Loading**

**Problem**: Docker build fails when fetching Google Fonts (network timeout).

**Solution**: Load fonts via CDN at runtime instead of build-time optimization.

```tsx
// src/app/layout.tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
</head>
```

**Removed**:
```tsx
// ❌ This caused build failures in Docker
import { Inter } from "next/font/google";
const inter = Inter({ ... });
```

---

### 6. **Standalone Output Configuration**

**next.config.ts**:
```typescript
const nextConfig: NextConfig = {
  output: 'standalone',  // ← Critical for Docker
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};
```

**Why**:
- Creates self-contained server in `.next/standalone`
- Includes only necessary dependencies
- Reduces image size from ~1GB to ~200MB
- Required for production Docker deployment

**Dockerfile copies**:
```dockerfile
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
```

---

### 7. **Database Credentials**

**Development**:
```bash
MYSQL_USER=respectu_user
MYSQL_PASSWORD=respectu_pass
MYSQL_DATABASE=respectudental
MYSQL_ROOT_PASSWORD=rootpassword_secure_2026
```

**Production**: Use strong passwords in `.env` (not committed to git).

**Important**: 
- If changing credentials, must recreate DB volume:
```bash
docker-compose down -v  # ← Deletes data!
docker-compose up -d
```

---

### 8. **Prisma Migrations**

**Development**:
```bash
docker-compose -f docker-compose.dev.yml exec app npx prisma migrate dev
```

**Production**:
```bash
docker-compose exec app npx prisma migrate deploy
```

**Schema Changes**:
1. Edit `prisma/schema.prisma`
2. Run migration command
3. Prisma Client auto-regenerates

---

## 📦 Database Management

### Adminer (Web UI)
- **URL**: http://localhost:8080
- **Server**: `db` (or `localhost:3307` from host)
- **Username**: `respectu_user`
- **Password**: `respectu_pass`
- **Database**: `respectudental`

### CLI Access
```bash
# From host
mysql -h 127.0.0.1 -P 3307 -u respectu_user -p

# From container
docker-compose exec db mysql -u respectu_user -p
```

---

## 🌐 Nginx Reverse Proxy (Production Server)

### Configuration
```nginx
server {
    listen 443 ssl http2;
    server_name respectudental.com;

    ssl_certificate /etc/letsencrypt/live/respectudental.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/respectudental.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 80;
    server_name respectudental.com;
    return 301 https://$host$request_uri;
}
```

### Apply Configuration
```bash
sudo nano /etc/nginx/sites-available/respectudental.com
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 Security Checklist

### Before Production Deployment

1. **Environment Variables**:
   - [ ] Change `MYSQL_ROOT_PASSWORD` to strong password
   - [ ] Set real `MAILGUN_API_KEY`
   - [ ] Set real `RECAPTCHA_SECRET_KEY`
   - [ ] Update `ADMIN_EMAIL`
   - [ ] Set `NODE_ENV=production`

2. **Database**:
   - [ ] Backup strategy configured
   - [ ] Strong passwords set
   - [ ] Port 3307 firewalled (only localhost access)

3. **SSL/TLS**:
   - [ ] Let's Encrypt certificates installed
   - [ ] Auto-renewal configured
   - [ ] HTTPS redirect enabled

4. **Docker**:
   - [ ] Containers restart on failure (`restart: unless-stopped`)
   - [ ] Logs rotation configured
   - [ ] Volume backups automated

---

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot find module '@prisma/engines'"
**Cause**: Missing OpenSSL in Alpine  
**Fix**: Already handled in Dockerfile (line 5, 43)

### Issue 2: "EACCES: permission denied, mkdir '/app/.next/cache'"
**Cause**: Wrong file ownership  
**Fix**: Already handled with `--chown=nextjs:nodejs` (line 47-50)

### Issue 3: "Port 3306 already in use"
**Cause**: Another MySQL/MariaDB running  
**Fix**: Using port 3307 (line 13 in docker-compose.yml)

### Issue 4: "npm warn exec The following package was not found and will be installed: prisma@7.8.0"
**Cause**: Docker cache with old Prisma version  
**Fix**: 
```bash
docker-compose down
docker-compose build --no-cache app
docker-compose up -d
```

### Issue 5: Hot reload not working in dev mode
**Cause**: File watching issues  
**Fix**: Already set `WATCHPACK_POLLING=true` in docker-compose.dev.yml

---

## 📊 Performance Optimization

### Production Build
- Standalone output: ~200MB (vs ~1GB full build)
- Static assets pre-compressed
- Image optimization enabled
- Server Components by default

### Database
- Indexes on frequently queried fields
- Connection pooling via Prisma
- Healthcheck ensures DB ready before app starts

---

## 🔄 Deployment Workflow

### Development → Production

1. **Test locally**:
```bash
./dev.sh
# Make changes, test features
```

2. **Build production image**:
```bash
./prod.sh
# Test production build locally
```

3. **Deploy to server**:
```bash
git pull origin main
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

4. **Run migrations** (if schema changed):
```bash
docker-compose exec app npx prisma migrate deploy
```

5. **Check logs**:
```bash
docker-compose logs -f app
```

---

## 📝 Environment Variables Reference

### Required
```bash
DATABASE_URL                    # MySQL connection string
MAILGUN_API_KEY                 # Mailgun API key
MAILGUN_DOMAIN                  # Your domain
ADMIN_EMAIL                     # Where to send notifications
NEXT_PUBLIC_RECAPTCHA_SITE_KEY  # reCAPTCHA public key
RECAPTCHA_SECRET_KEY            # reCAPTCHA private key
```

### Optional
```bash
MYSQL_ROOT_PASSWORD             # Default: rootpassword
MYSQL_USER                      # Default: user
MYSQL_PASSWORD                  # Default: password
MYSQL_DATABASE                  # Default: respectudental
RATE_LIMIT_MAX_REQUESTS         # Default: 1
RATE_LIMIT_WINDOW_MS            # Default: 1000
PDF_STORAGE_PATH                # Default: /app/tmp
NODE_ENV                        # development | production
```

---

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Docker Compose**: https://docs.docker.com/compose/
- **Mailgun API**: https://documentation.mailgun.com/
- **reCAPTCHA v3**: https://developers.google.com/recaptcha/docs/v3

---

## 🆘 Support

For issues or questions:
1. Check logs: `docker-compose logs -f app`
2. Check database: http://localhost:8080 (Adminer)
3. Review this document
4. Check GitHub issues

---

**Last Updated**: 2026-05-14  
**Version**: 1.0.0  
**Maintainer**: Development Team
