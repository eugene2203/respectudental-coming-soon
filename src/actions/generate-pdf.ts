'use server'

import puppeteer from 'puppeteer'
import { writeFile, mkdir, readFile } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'
import type { SubmitCaseFormData } from '@/lib/validations'

const INCLUDED_LABELS: Record<string, string> = {
  digitalFile: 'Digital file',
  impression: 'Impression',
  biteRegistration: 'Bite registration',
  masterCast: 'Master cast',
  opposingCast: 'Opposing cast',
  studyModel: 'Study model',
}

function generateCheckboxHTML(isChecked: boolean, label: string, labelPosition: 'top' | 'bottom'): string {
  const checkboxClass = isChecked ? 'checkbox checked' : 'checkbox'
  const itemClass = labelPosition === 'top' ? 'checkbox-item label-top' : 'checkbox-item'

  return `
    <div class="${itemClass}">
      <div class="${checkboxClass}"></div>
      <div class="checkbox-label">${label}</div>
    </div>
  `
}

function generateTeethCheckboxes(involvedTeeth: string[], start: number, end: number, labelPosition: 'top' | 'bottom'): string {
  let html = ''
  for (let i = start; i <= end; i++) {
    const toothNum = i.toString()
    const isChecked = involvedTeeth.includes(toothNum)
    html += generateCheckboxHTML(isChecked, toothNum, labelPosition)
  }
  return html
}

function generateIncludedCheckboxes(included: string[]): string {
  return Object.entries(INCLUDED_LABELS)
    .map(([value, label]) => {
      const isChecked = included.includes(value)
      const checkboxClass = isChecked ? 'checkbox checked' : 'checkbox'
      return `
        <div class="checkbox-list-item">
          <div class="${checkboxClass}"></div>
          <span>${label}</span>
        </div>
      `
    })
    .join('')
}

async function fillTemplate(data: SubmitCaseFormData): Promise<string> {
  // Read template
  const templatePath = join(process.cwd(), 'src/templates/submit-case-pdf.html')
  let html = await readFile(templatePath, 'utf-8')

  // Read and encode logo as base64
  const logoPath = join(process.cwd(), 'public/images/logo-pdf-05x.png')
  const logoBuffer = await readFile(logoPath)
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`

  // Generate checkboxes
  const upperCheckboxes = generateTeethCheckboxes(data.involvedTeeth, 1, 16, 'top')
  const lowerCheckboxes = generateTeethCheckboxes(data.involvedTeeth, 17, 32, 'bottom')
  const includedCheckboxes = generateIncludedCheckboxes(data.included)

  // Replace placeholders
  html = html
    .replace('{{logoBase64}}', logoBase64)
    .replace('{{practiceName}}', data.practiceName || '—')
    .replace('{{patientName}}', data.patientName || '—')
    .replace('{{rx}}', data.rx || '—')
    .replace('{{todayDate}}', data.todayDate || '—')
    .replace('{{returnDate}}', data.returnDate || '—')
    .replace('{{shade}}', data.shade || '—')
    .replace('{{involvedTeethUpperCheckboxes}}', upperCheckboxes)
    .replace('{{involvedTeethLowerCheckboxes}}', lowerCheckboxes)
    .replace('{{includedCheckboxes}}', includedCheckboxes)
    .replace('{{fixedRestorationOptions}}', data.fixedRestorationOptions || '')
    .replace('{{fixedSpecificInstructions}}', data.fixedSpecificInstructions || '')
    .replace('{{removableRestoration}}', data.removableRestoration || '')
    .replace('{{removableSpecificInstructions}}', data.removableSpecificInstructions || '')
    .replace('{{additionalInstructions}}', data.additionalInstructions || '')

  return html
}

export async function generateSubmitCasePDF(data: SubmitCaseFormData): Promise<{ success: boolean; pdfPath?: string; error?: string }> {
  let browser

  try {
    // Debug: log received data
    console.log('PDF Generation - Received data:', {
      involvedTeeth: data.involvedTeeth,
      included: data.included,
    })

    // Fill template with data
    const html = await fillTemplate(data)

    // Launch Puppeteer
    browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium-browser',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    })

    const page = await browser.newPage()

    // Set content and wait for images to load
    await page.setContent(html, { waitUntil: 'load' })

    // Wait for images to load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve
          }))
      )
    })

    // Generate PDF in landscape orientation
    const pdfBuffer = await page.pdf({
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: {
        top: '8mm',
        right: '10mm',
        bottom: '8mm',
        left: '10mm',
      },
    })

    // Save to tmp
    const tmpDir = join(process.cwd(), 'tmp')
    await mkdir(tmpDir, { recursive: true })

    const fileName = `case-rx-${randomUUID()}.pdf`
    const filePath = join(tmpDir, fileName)
    await writeFile(filePath, pdfBuffer)

    return {
      success: true,
      pdfPath: `/tmp/${fileName}`,
    }
  } catch (error) {
    console.error('PDF generation error:', error)
    return {
      success: false,
      error: 'Failed to generate PDF. Please try again.',
    }
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}