import BreadCrumbs from "@/components/common/BreadCrumbs";
import Link from "next/link";

export default function PrivacyPAge() {

    return (
        <>
            <BreadCrumbs page={'Terms Of Service'}/>
            <section className="terms-of-service-section pb-16 pt-8">
                <div className="container">
                    <div>
                        <h1 className="mb-0 text-center font-bold">Terms Of Service</h1>
                        <p className="mb-0 text-center">ARC DENTISTRY CORP</p>
                        <p className="mb-16 text-center">Last Updated: March 25, 2026</p>
                    </div>
                    <div>
                        <p>
                            Welcome to ARC DENTISTRY CORP. These Terms of Service ("Terms") govern
                            your relationship with our website located at <a href="https://www.arc-dentistry.com" target="_blank">https://www.arc-dentistry.com</a> and the dental services operated by
                            ARC DENTISTRY CORP ("us," "we," or "our").
                        </p>
                        <p>
                            Please read these Terms carefully before using our Site or requesting our services. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. By accessing or using the Service you agree to be bound by these Terms.
                        </p>
                        <h2>1. SMS/Text Messaging Terms (A2P 10DLC Compliance)</h2>
                        <p>
                            By providing your phone number and opting in to receive communications from us,
                            you agree to the following terms regarding our SMS program:
                        </p>
                        <p>ARC DENTISTRY CORP Messaging Program</p>
                        <p>
                            Description of Messages: When you opt-in to our SMS service, you can expect to
                            receive messages regarding appointment confirmations, appointment reminders,
                            reschedule notifications, post-service follow-up messages, and responses to dental
                            service inquiries. Users who separately provide marketing consent may also receive
                            promotional messages regarding seasonal specials, discounts, and service updates.
                        </p>
                        <p>
                            Help Instructions: If you are experiencing issues with the messaging program you
                            can reply with the keyword "HELP" for more assistance, or you can get help directly
                            at <a href="mailto:bookings@arc-dentistry.com">bookings@arc-dentistry.com</a>
                            or by calling <a href="tel:17126421467">+1 (712) 642-1467</a>.<br/>
                            Carrier Liability: Carriers are not liable for delayed or undelivered messages.
                        </p>
                        <p>
                            Rates and Frequency: Message and data rates may apply for any messages sent to you
                            from us and to us from you. Message frequency varies based on your interactions
                            with our service. If you have any questions about your text plan or data plan,
                            it is best to contact your wireless provider.
                        </p>
                        <p>
                            Age Restriction: By using this service, you represent and warrant that you are at
                            least 18 years of age. If you are under 18 years old, you may not use or access our
                            services or opt into our messaging program.
                        </p>
                        <p>
                            Privacy: If you have any questions regarding privacy, please read our Privacy Policy:
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </p>
                        <h2>2. Services</h2>
                        <p>
                            ARC DENTISTRY CORP provides dental services including but not limited to dental
                            veneers, dental crowns, dental implants, and smile makeover treatments.
                            All services are subject to availability and are provided at our clinic
                            located in Bogotá, Colombia.
                        </p>
                        <h2>3. Appointments and Bookings</h2>
                        <p>
                            All appointments are subject to availability and confirmation. We reserve the
                            right to reschedule or cancel appointments due to operational needs.
                            Patients will be notified via SMS or email of any scheduling changes in a
                            timely manner.
                        </p>
                        <h2>4. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws
                            of the United States applicable to agreements made and performed therein.
                            Our failure to enforce any right or provision of these Terms will not be
                            considered a waiver of those rights.
                        </p>
                        <h2>5. Changes to Terms</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace
                            these Terms at any time. If a revision is material we will try to
                            provide at least 30 days notice prior to any new terms taking effect.
                            By continuing to access or use our Service after those revisions become
                            effective, you agree to be bound by the revised terms.
                        </p>
                        <h2>6. Privacy Policy</h2>
                        <p>
                            Your use of the messaging program is also governed by our Privacy Policy. View it here:
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </p>
                        <h2>7. How Can You Contact Us?</h2>
                        <p>
                            If you have questions or comments about these Terms, you may contact us by email or by post to:
                        </p>
                        <div>
                            <p>ARC DENTISTRY CORP</p>
                            <p>
                                📍
                                <a href="https://maps.google.com/?q=2681+North+Flamingo+RD+2506+S+Sunrise+Florida+33323"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                    2681 North Flamingo RD 2506 S sunrise, Florida. 33323
                                </a>
                            </p>
                            <p>📞 Phone: <a href="tel:17126421467">+1 (712) 642-1467</a></p>
                            <p>✉️ Email: <a href="mailto:bookings@arc-dentistry.com" target="_blank">bookings@arc-dentistry.com</a></p>
                            <p>🌐 Website: <a href="https://www.arc-dentistry.com" target="_blank"> https://www.arc-dentistry.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}