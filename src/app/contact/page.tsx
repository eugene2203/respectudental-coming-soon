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
};

export default function ContactPage() {

    return (
        <>
            <BreadCrumbs page={'Contact Us'}/>
            <ContactBanner/>
            <FormBlock/>
            {/*<ReachOutTabsBlock/>*/}
            <MapBlock/>
            <QuestionsBlock/>
        </>
    )
}