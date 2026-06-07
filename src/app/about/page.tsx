import BreadCrumbs from "@/components/common/BreadCrumbs";
import AboutBanner from "@/components/pages/about-page/AboutBanner";
import MissionBlock from "@/components/pages/about-page/MissionBlock";
import AboutLaboratoryBlock from "@/components/pages/about-page/AboutLaboratoryBlock";
import TeamBlock from "@/components/pages/about-page/TeamBlock";
import ReadyToPartnerBlock from "@/components/pages/about-page/ReadyToPartnerBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Respect U Dental Lab - Brooklyn's Premier Dental Laboratory",
    description: "Learn about Respect U Dental Lab's mission, cutting-edge technology, and commitment to precision dental restorations. Serving Brooklyn dentists with innovative leadership and dedicated professionals.",
    keywords: ["about dental lab", "Brooklyn dental laboratory", "dental lab team", "dental technology Brooklyn", "precision dental work"],
    openGraph: {
        title: "About Respect U Dental Lab | Brooklyn's Trusted Partner",
        description: "Innovative leadership, cutting-edge technology, and dedicated professionals. From simple restorations to complex clinical cases.",
        url: "https://respectudental.com/about",
    },
    alternates: {
        canonical: 'https://respectudental.com/about',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://respectudental.com' },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://respectudental.com/about' },
    ],
}


export default function AboutPage() {

    return (
        <>
            <script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <BreadCrumbs page={'About Us'}/>
            <AboutBanner/>
            <MissionBlock/>
            <AboutLaboratoryBlock/>
            {/*<TeamBlock/>*/}
            {/*<ReadyToPartnerBlock/>*/}
        </>
    )
}