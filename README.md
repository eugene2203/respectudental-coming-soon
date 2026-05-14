# Respect U Dental Lab - Website

Full-stack Next.js application for Respect U Dental Lab with contact forms, order management, PDF generation, and email notifications.

## 🚀 Quick Start

### Development (Hot Reload)
```bash
./dev.sh
```
- Opens on http://localhost:3000
- Changes apply instantly
- Adminer on http://localhost:8080

### Production
```bash
./prod.sh
```
- Optimized build
- Standalone Next.js server
- Ready for deployment

## 📋 Tech Stack

- **Framework**: Next.js 16.2.6 (App Router) + TypeScript 5
- **Database**: MariaDB 11.6 + Prisma ORM 5.22.0
- **Styling**: Tailwind CSS 4
- **Forms**: React Hook Form + Zod
- **Email**: Mailgun.js
- **PDF**: Puppeteer
- **Security**: reCAPTCHA v3 + Rate Limiting
- **Deployment**: Docker + Docker Compose

## 🔧 Configuration

1. Copy environment variables:
```bash
cp .env.example .env
```

2. Fill in required values:
```bash
MAILGUN_API_KEY=your_key_here
RECAPTCHA_SECRET_KEY=your_key_here
ADMIN_EMAIL=your_email@domain.com
```

3. Start development:
```bash
./dev.sh
```

## 📚 Documentation

See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Detailed setup instructions
- Production deployment guide
- Troubleshooting
- Configuration details
- Nginx setup
- Security checklist

## 🗂️ Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── actions/          # Server Actions (forms)
│   ├── components/       # React components
│   ├── lib/              # Utilities (Prisma, Mailgun, PDF, etc.)
│   └── types/            # TypeScript types
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
├── docker-compose.yml    # Production config
├── docker-compose.dev.yml # Development config
├── Dockerfile            # Production image
├── Dockerfile.dev        # Development image
├── dev.sh                # Start development
└── prod.sh               # Start production
```

## 🔐 Features

- ✅ Contact form with email notifications
- ✅ Order form with PDF generation
- ✅ Google reCAPTCHA v3 protection
- ✅ Rate limiting (1 req/sec)
- ✅ Email via Mailgun
- ✅ Database persistence
- ✅ SEO optimized (meta tags, Schema.org)
- ✅ Docker deployment
- ✅ Hot reload in development

## 📄 Pages

- `/` - Home page
- `/about` - About company
- `/services` - Services offered
- `/contact` - Contact form
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## 🛠️ Development Commands

```bash
# Start dev environment
./dev.sh

# Start production environment
./prod.sh

# Run Prisma migrations
docker-compose -f docker-compose.dev.yml exec app npx prisma migrate dev

# View logs
docker-compose logs -f app

# Access database
docker-compose exec db mysql -u respectu_user -p
```

## 🌐 Production Deployment

1. Set up Nginx reverse proxy (see DEPLOYMENT.md)
2. Configure SSL certificates
3. Update `.env` with production values
4. Run `./prod.sh`
5. Apply database migrations

## 📝 License

Private project for Respect U Dental Lab.

## 📧 Contact

- **Website**: https://respectudental.com
- **Email**: contact@respectudental.com
- **Phone**: +1 (718) 200-1532
- **Address**: 1 Woodside Ave, Brooklyn, NY 11223
