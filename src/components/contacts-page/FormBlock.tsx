import React from "react";
import ContactInfo from "@/components/contacts-page/ContactInfo";
import ContactForm from "@/components/forms/ContactForm";

export default function FormBlock() {
    return (
        <section className="form-section section-padding-small">
            <div className="container">
                <div className="xl:flex gap-10">
                    <ContactInfo/>
                    <div className="contact-form-block">
                        <h3 className="pb-4 mb-3">Send Us a Message</h3>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
}