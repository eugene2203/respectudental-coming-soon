import { Metadata } from "next";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import ContactBanner from "@/components/pages/contacts-page/ContactBanner";
import FormBlock from "@/components/pages/contacts-page/FormBlock";
import ReachOutTabsBlock from "@/components/pages/contacts-page/ReachOutTabsBlock";
import MapBlock from "@/components/pages/contacts-page/MapBlock";
import QuestionsBlock from "@/components/pages/contacts-page/QuestionsBlock";

export const metadata: Metadata = {
  title: "Contact Us | Respect U Dental Lab - Brooklyn, NY | (718) 200-1532",
  description: "Get in touch with Respect U Dental Lab. Located at 1 Woodside Ave, Brooklyn, NY 11223. Call (718) 200-1532 or email contact@respectudental.com. Fast response, professional service.",
  keywords: ["contact dental lab Brooklyn", "dental lab phone number", "Brooklyn dental laboratory contact", "dental lab address Brooklyn"],
  openGraph: {
    title: "Contact Respect U Dental Lab | Brooklyn, NY",
    description: "Reach out to our team for dental laboratory services. 1 Woodside Ave, Brooklyn, NY 11223. (718) 200-1532",
    url: "https://respectudental.com/contact",
  },
  alternates: {
      canonical: 'https://respectudental.com/contact',
  },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How do I send my first case to your laboratory?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can send a physical impression via our local courier service or upload digital scan files (STL) using the digital gateway on our website. We accept scans from all major intraoral scanners (3Shape TRIOS, iTero, Medit, etc.).',
            },
        },
        {
            '@type': 'Question',
            name: 'What is your standard turnaround time?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Single crowns & veneers — 5–7 business days. Bridges (3–4 units) — 7–10 business days. Implant restorations — 7–10 business days. Full-arch cases (All-on-4 / All-on-6) — 10–15 business days. Partial & full dentures — 10–14 business days. Night guards & retainers — 3–5 business days.',
            },
        },
        {
            '@type': 'Question',
            name: 'What materials do you use for removable restorations?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We work with acrylic resin (PMMA), flexible resin (Valplast/TCS), and Chrome Cobalt for partial frameworks. All materials meet FDA requirements and are sourced from certified suppliers.',
            },
        },
    ],
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://respectudental.com' },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://respectudental.com/contact' },
    ],
}

export default function ContactPage() {

    return (
        <>
            <script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <BreadCrumbs page={'Contact Us'}/>
            <ContactBanner/>
            <FormBlock/>
            {/*<ReachOutTabsBlock/>*/}
            <MapBlock/>
            <QuestionsBlock/>
        </>
    )
}