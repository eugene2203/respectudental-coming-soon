import { NextRequest, NextResponse } from 'next/server'
import { readFile, unlink } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const fileName = searchParams.get('file')

    if (!fileName || !fileName.startsWith('case-rx-') || !fileName.endsWith('.pdf')) {
      return NextResponse.json({ error: 'Invalid file name' }, { status: 400 })
    }

    const filePath = join(process.cwd(), 'tmp', fileName)

    // Read the PDF file
    const pdfBuffer = await readFile(filePath)

    // Delete the file after reading
    await unlink(filePath).catch(err => console.error('Failed to delete temp file:', err))

    // Return PDF as downloadable file
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    })
  } catch (error) {
    console.error('Download PDF error:', error)
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}