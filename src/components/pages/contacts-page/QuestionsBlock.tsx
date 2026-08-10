import React from "react";
import FaqItem from "@/components/pages/contacts-page/FaqItem";

type FaqItemData = {
    title: string;
    text: string;
};

export default function QuestionsBlock() {
    const faqData: FaqItemData[] = [
        {
            title: 'How do I send my first case to your laboratory?',
            text: '<p>You can send a physical impression via our local courier service or upload digital scan files (STL) using the digital gateway on our website. We accept scans from all major intraoral scanners (3Shape TRIOS, iTero, Medit, etc.).</p>'},
        {
            title: 'What is your standard turnaround time?',
            text: '<p>Our standard turnaround time depends on the type of restoration:</p>\n' +
                '<ul><li>Single crowns & veneers — 5–7 business days</li>\n' +
                '<li>Bridges (3–4 units) — 5–7 business days</li>\n' +
                '<li>Implant restorations — 7–10 business days</li>\n' +
                '<li>Full-arch cases (All-on-4 / All-on-X) — 10–15 business days</li>\n' +
                '<li>Cast "RPD" Frame — 10 business days</li>\n' +
                '<li>Night guards & retainers — 3–5 business days</li>\n' +
                '</ul>\n' +
                '<p>We also offer rush service for time-sensitive cases. Please contact us directly to discuss availability and expedited options.</p>\n' +
                '<p>All turnaround times begin from the moment we receive your case with complete and accurate impressions or scans. Cases received before 12:00 PM EST are processed the same business day.</p>'},
        {
            title: 'What materials do you use for removable restorations?',
            text: '<p>We work with a carefully selected range of high-quality materials to ensure durability, aesthetics, and patient comfort:</p>\n' +
                '<p>Denture Bases</p>\n' +
                '<ul>\n' +
                '<li>Acrylic resin ("Keystone"/Diamond`d) — our standard material, proven, durable, and easy to adjust and repair</li>\n' +
                '<li>Flexible resin (Valplast / TCS) — for patients who require a metal-free, lightweight, and tissue-friendly option</li>\n' +
                '<li>Cast "RPD" Metalframe — for partial denture frameworks requiring maximum strength and minimal bulk</li>\n' +
                '</ul>\n' +
                '<p>Denture Teeth</p>\n' +
                '<ul>\n' +
                '<li>Denture teeth (Vita, Ivoclar, Poli-dent "Ref-line", Enigma...)  — good aesthetics at an accessible price point</li>\n' +
                '<li>Porcelain teeth — available upon request for cases requiring superior wear resistance and a natural look</li>\n' +
                '</ul>\n' +
                '<p>Implant-Supported Removables</p>\n' +
                '<ul>\n' +
                '<li>Milled PMMA — for high-precision implant overdentures and All-on-X temporaries</li>\n' +
                '<li>Zirconia-based options — available for full-arch implant cases requiring final-quality strength and esthetics</li>\n' +
                '</ul>\n' +
                '<p>All materials we use meet FDA requirements and are sourced from trusted, certified suppliers. If your case requires a specific material or brand, we\'re happy to accommodate — just include a note with your prescription or contact us directly.</p>'}
    ]

    return (
        <section className="questions-section section-padding-small">
            <div className="container">
                <div className="text-center mb-4">
                    <div className="sticker-item mb-3">FAQ</div>
                    <h2 className="section-title">Partnership Frequently Asked Questions</h2>
                    <p>All the essential operational details in one quick guide.</p>
                </div>
                <div className="faq-block">
                    {faqData.map((item, i) => (
                        <FaqItem key={`faq-item-${i}`} title={item.title} text={item.text} />
                    ))}
                </div>
            </div>
        </section>
    );
}
