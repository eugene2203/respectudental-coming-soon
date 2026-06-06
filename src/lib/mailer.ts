import Mailgun from 'mailgun.js';
import FormData from 'form-data';
import {MailgunMessageData} from "mailgun.js/definitions";

export interface MailOptions {
    to: string | string[];
    subject: string;
    html: string;
    attachments?: { filename: string; data: Buffer }[];
}

export async function sendMail({ to, subject, html, attachments }: MailOptions) {
    const mailgun = new Mailgun(FormData);

    const mg = mailgun.client({
        username: 'api',
        key: process.env.MAILGUN_API_KEY!,
    });



    const messageData: MailgunMessageData = {
        from: `Respectu Dental <${process.env.MAILGUN_FROM_EMAIL!}>`,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
    };

    if (attachments?.length) {
        messageData.attachment = attachments.map(({ filename, data }) => ({
            filename,
            data,
        }));
    }

    console.log(messageData);

    return mg.messages.create(process.env.MAILGUN_DOMAIN!, messageData);
}