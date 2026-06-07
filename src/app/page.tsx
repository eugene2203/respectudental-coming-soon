import MainBanner from "@/components/pages/main-page/MainBanner";
import MainLaboratoryBlock from "@/components/pages/main-page/MainLaboratoryBlock";
import AreasOfExpertiseBlock from "@/components/pages/main-page/AreasOfExpertiseBlock";
import TechnologiesAndMaterials from "@/components/pages/main-page/TechnologiesAndMaterials";
import { Metadata } from "next";
import QuestionsBlock from "@/components/pages/contacts-page/QuestionsBlock";

export const metadata: Metadata = {
  title: "Respect U Dental Lab | Premium Dental Restorations in Brooklyn, NY",
  description: "Brooklyn's premier dental laboratory offering high-quality crowns, implants, bridges, and prosthetics. Innovative technology, fast turnaround, precision craftsmanship. Serving dental clinics across NYC.",
  keywords: ["dental lab Brooklyn", "dental laboratory NYC", "dental crowns Brooklyn", "dental implants lab", "prosthetics Brooklyn", "dental restorations"],
  openGraph: {
    type: "website",
    title: "Respect U Dental Lab | Premium Dental Restorations Brooklyn",
    description: "High-quality dental laboratory services for your clinic. Innovative leadership, cutting-edge technology, dedicated professionals.",
    url: "https://respectudental.com",
    images: [
      {
        url: "https://respectudental.com/images/logo-respectu-1200-630.png",
        width: 1200,
        height: 630,
        alt: "Respect U Dental Lab Logo",
      },
    ],
  },
    alternates: {
        canonical: 'https://respectudental.com',
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


export default function Home() {

  return (
      <>
          <script
              id="faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

        <MainBanner/>
        <MainLaboratoryBlock/>
        <AreasOfExpertiseBlock/>
        <TechnologiesAndMaterials/>
        <QuestionsBlock/>
      </>
  )
}