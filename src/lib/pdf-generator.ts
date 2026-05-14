import puppeteer from 'puppeteer'
import { join } from 'path'
import { writeFile } from 'fs/promises'

export interface OrderData {
  clientName: string
  clientPhone: string
  clientEmail: string
  orderDescription: string
  orderId: string
  createdAt: Date
}

function generateInvoiceHTML(data: OrderData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Invoice - ${data.orderId}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Arial', sans-serif;
      padding: 40px;
      color: #2c3e50;
    }
    .header {
      text-align: center;
      margin-bottom: 40px;
      border-bottom: 3px solid #9BCDCB;
      padding-bottom: 20px;
    }
    .logo {
      font-size: 28px;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 10px;
    }
    .tagline {
      color: #92C18D;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .invoice-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    .info-block h3 {
      color: #9BCDCB;
      margin-bottom: 10px;
      font-size: 14px;
      text-transform: uppercase;
    }
    .info-block p {
      margin: 5px 0;
      font-size: 14px;
    }
    .order-details {
      background: #f8fbfb;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    .order-details h2 {
      color: #2c3e50;
      margin-bottom: 15px;
      font-size: 18px;
    }
    .order-details p {
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .footer {
      text-align: center;
      margin-top: 50px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      color: #7f8c8d;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">Respect U Dental Lab</div>
    <div class="tagline">No Mistakes</div>
  </div>

  <div class="invoice-info">
    <div class="info-block">
      <h3>Order Information</h3>
      <p><strong>Order ID:</strong> ${data.orderId}</p>
      <p><strong>Date:</strong> ${data.createdAt.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}</p>
    </div>
    <div class="info-block">
      <h3>Client Information</h3>
      <p><strong>Name:</strong> ${data.clientName}</p>
      <p><strong>Email:</strong> ${data.clientEmail}</p>
      <p><strong>Phone:</strong> ${data.clientPhone}</p>
    </div>
  </div>

  <div class="order-details">
    <h2>Order Description</h2>
    <p>${data.orderDescription}</p>
  </div>

  <div class="footer">
    <p>Respect U Dental Lab | 1 Woodside Ave, Brooklyn, NY 11223</p>
    <p>Phone: +1 (718) 200-1532 | Email: contact@respectudental.com</p>
    <p>www.respectudental.com</p>
  </div>
</body>
</html>
  `
}

export async function generateOrderPDF(data: OrderData): Promise<string> {
  const pdfDir = process.env.PDF_STORAGE_PATH || '/tmp'
  const filename = `order-${data.orderId}-${Date.now()}.pdf`
  const filepath = join(pdfDir, filename)

  const html = generateInvoiceHTML(data)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'domcontentloaded' })
    await page.pdf({
      path: filepath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    })

    return filepath
  } finally {
    await browser.close()
  }
}