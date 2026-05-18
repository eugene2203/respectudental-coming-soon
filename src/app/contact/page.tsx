import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Respect U Dental Lab - Brooklyn, NY | (718) 200-1532",
  description: "Get in touch with Respect U Dental Lab. Located at 1 Woodside Ave, Brooklyn, NY 11223. Call (718) 200-1532 or email contact@respectudental.com. Fast response, professional service.",
  keywords: ["contact dental lab Brooklyn", "dental lab phone number", "Brooklyn dental laboratory contact", "dental lab address Brooklyn"],
  openGraph: {
    title: "Contact Respect U Dental Lab | Brooklyn, NY",
    description: "Reach out to our team for dental laboratory services. 1 Woodside Ave, Brooklyn, NY 11223. (718) 200-1532",
    url: "https://respectudental.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--light-bg)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[var(--dark-blue)] mb-4">Contact Us</h1>
        <p className="text-xl text-[var(--dark-blue)]">Need to be designed</p>
      </div>
    </div>
  );
}