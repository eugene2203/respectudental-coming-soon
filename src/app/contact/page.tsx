import { Metadata } from "next";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import ContactBanner from "@/components/pages/contacts-page/ContactBanner";
import FormBlock from "@/components/pages/contacts-page/FormBlock";
import ReachOutTabsBlock from "@/components/pages/contacts-page/ReachOutTabsBlock";
import MapBlock from "@/components/pages/contacts-page/MapBlock";


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
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <BreadCrumbs page={'Contact Us'}/>
            <ContactBanner/>
            <FormBlock/>
            {/*<ReachOutTabsBlock/>*/}
            <MapBlock/>
        </>
    )
}