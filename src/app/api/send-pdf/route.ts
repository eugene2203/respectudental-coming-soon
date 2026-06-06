import { NextRequest, NextResponse } from 'next/server'
import { readFile, unlink } from 'fs/promises'
import { join } from 'path'
import { sendMail } from '@/lib/mailer';

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

    const attachment = {
      filename: fileName,
      data: pdfBuffer,
    };

    try {
      await sendMail({
        to: process.env.MAILGUN_TO_EMAIL!,
        subject: `RX Form from website respectudental.com`,
        html: `<p>RX Form from website respectudental.com</p>`,
        attachments: [attachment],
      });

      return NextResponse.json({ success: true });
    } catch (err) {
      console.error('PDF mail error:', err);
      return NextResponse.json({ error: 'Mail failed' }, { status: 500 });
    }

    // Return PDF as downloadable file
    // return new NextResponse(pdfBuffer, {
    //   headers: {
    //     'Content-Type': 'application/pdf',
    //     'Content-Disposition': `attachment; filename="${fileName}"`,
    //   },
    // })
  } catch (error) {
    console.error('PDF mail error:', error)
    return NextResponse.json({ error: 'Mail failed' }, { status: 500 })
  }
}