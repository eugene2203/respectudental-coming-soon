import React from "react";
import FaqItem from "@/components/pages/contacts-page/FaqItem";

type FaqItemData = {
    title: string;
    text: string;
};

export default function QuestionsBlock() {
    const faqData: FaqItemData[] = [
        {title: 'How do I send my first case to your laboratory?', text: 'You can send a physical impression via our local courier service or upload digital scan files (STL) using the digital gateway on our website. We accept scans from all major intraoral scanners (3Shape TRIOS, iTero, Medit, etc.).'},
        {title: 'What is your standard turnaround time?', text: 'text'},
        {title: 'Do you offer custom shade matching services?', text: 'text'},
        {title: 'What materials do you use for removable restorations?', text: 'text'}
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
