# Respect U Dental Lab - Website

A modern, SEO-optimized fullstack web application for Respect U Dental Lab built with Next.js 16, TypeScript, and MariaDB.

## Tech Stack

- **Framework**: Next.js 16.2.6 (App Router)
- **Language**: TypeScript 7.8.0
- **Database**: MariaDB 11.6
- **ORM**: Prisma 7.8.0
- **PDF Generation**: Puppeteer 24.43.1
- **Email**: Mailgun.js 13.0.1
- **Forms**: React Hook Form 7.75.0 + Zod 4.4.3
- **Rate Limiting**: rate-limiter-flexible 5.0.3
- **Containerization**: Docker + Docker Compose

## Features

- ✅ SEO optimized (metadata, JSON-LD, Open Graph, sitemap)
- ✅ Contact form with email notifications
- ✅ Order form with PDF generation and email delivery
- ✅ Rate limiting (1 request/second per IP)
- ✅ Form validation with Zod
- ✅ Responsive design
- ✅ Docker containerization
- ✅ MariaDB database with Prisma ORM

## Project Structure

```
respectudental.com/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   └── forms/        # ContactForm, OrderForm
│   ├── actions/          # Server Actions
│   ├── lib/              # Utilities (prisma, mailgun, pdf, rate-limiter)
│   └── types/            # TypeScript types
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── prisma.config.ts  # Prisma configuration
├── public/images/        # Static assets
├── docker-compose.yml    # Docker services
├── Dockerfile            # App container
└── .env.example          # Environment variables template
```

## Getting Started

### Prerequisites

- Node.js 24.x
- Docker & Docker Compose
- Mailgun account (for email functionality)

### Installation

1. **Clone and install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env
```

Edit `.env` and fill in your credentials:
- `DATABASE_URL` - MariaDB connection string
- `MAILGUN_API_KEY` - Your Mailgun API key
- `MAILGUN_DOMAIN` - Your Mailgun domain
- `MAILGUN_FROM_EMAIL` - Sender email address
- `ADMIN_EMAIL` - Email to receive notifications

3. **Generate Prisma Client**:
```bash
npx prisma generate
```

### Development

**Option 1: Local Development (without Docker)**

1. Start MariaDB locally or use a cloud instance
2. Run migrations:
```bash
npx prisma migrate dev
```
3. Start dev server:
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000)

**Option 2: Docker Development**

1. Start all services:
```bash
docker-compose up -d
```
2. Run migrations:
```bash
docker-compose exec app npx prisma migrate deploy
```
3. Open [http://localhost:3000](http://localhost:3000)
4. Access Adminer (DB UI): [http://localhost:8080](http://localhost:8080)

### Production Build

```bash
npm run build
npm run start
```

### Docker Production

```bash
docker-compose up -d
```

## Database Migrations

Create a new migration:
```bash
npx prisma migrate dev --name migration_name
```

Apply migrations in production:
```bash
npx prisma migrate deploy
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | MariaDB connection string | Yes |
| `MAILGUN_API_KEY` | Mailgun API key | Yes |
| `MAILGUN_DOMAIN` | Mailgun domain | Yes |
| `MAILGUN_FROM_EMAIL` | Sender email | Yes |
| `ADMIN_EMAIL` | Admin notification email | Yes |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | No (default: 1) |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window in ms | No (default: 1000) |
| `PDF_STORAGE_PATH` | PDF storage directory | No (default: /tmp) |

## Pages

- `/` - Home page
- `/about` - About Us (placeholder)
- `/services` - Services (placeholder)
- `/contact` - Contact page (placeholder)
- `/privacy` - Privacy Policy (placeholder)
- `/terms` - Terms of Service (placeholder)

## Forms

### Contact Form
- Fields: Full Name, Email, Message
- Validation: Zod schema
- Rate limiting: 1 request/second
- Email notification to admin

### Order Form
- Fields: Client Name, Phone, Email, Order Description
- Validation: Zod schema
- Rate limiting: 1 request/second
- PDF generation with order details
- Email notification to admin with PDF attachment

## PDF Cleanup

PDFs are stored in `/tmp` directory. Set up a cron job to clean old PDFs:

```bash
# Clean PDFs older than 7 days
0 0 * * * find /tmp -name "order-*.pdf" -mtime +7 -delete
```

## Security

- Rate limiting on all forms (1 req/sec per IP)
- Input validation with Zod
- SQL injection protection via Prisma
- XSS protection via React
- CSRF protection via Next.js
- Environment variables for secrets

## Troubleshooting

**Prisma Client not found**:
```bash
npx prisma generate
```

**Database connection error**:
- Check `DATABASE_URL` in `.env`
- Ensure MariaDB is running
- Verify credentials

**PDF generation fails**:
- Ensure Chromium is installed (Docker handles this)
- Check `/tmp` directory permissions

**Email not sending**:
- Verify Mailgun credentials
- Check Mailgun domain verification
- Review logs for errors

## License

Private - Respect U Dental Lab

## Support

For issues or questions, contact: contact@respectudental.com
