import { Metadata } from "next";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import ServicesBanner from "@/components/pages/services-page/ServicesBanner";
import SpecializationsBlock from "@/components/pages/services-page/SpecializationsBlock";
import WorkflowBlock from "@/components/pages/services-page/WorkflowBlock";
import TestBlock from "@/components/pages/services-page/TestBlock";
import MicroscopicControlBlock from "@/components/pages/services-page/MicroscopicControlBlock";

export const metadata: Metadata = {
  title: "Dental Lab Services | Crowns, Implants, Bridges & Dentures - Brooklyn NY",
  description: "Full-service dental laboratory offering crowns, bridges, implants, dentures, and custom prosthetics. Fast turnaround, precision craftsmanship, cutting-edge technology. Serving Brooklyn dentists.",
  keywords: ["dental lab services", "dental crowns Brooklyn", "dental implants lab", "dental bridges", "dentures Brooklyn", "prosthetics lab"],
  openGraph: {
    title: "Our Dental Laboratory Services | Respect U Dental Lab",
    description: "Comprehensive dental lab services: crowns, implants, bridges, dentures, and custom prosthetics with precision and speed.",
    url: "https://respectudental.com/services",
  },
};

export default function ServicesPage() {

    return (
        <>
            <BreadCrumbs page={'Our Services'}/>
            <ServicesBanner/>
            <SpecializationsBlock/>
            <WorkflowBlock/>
            <MicroscopicControlBlock/>
            <TestBlock/>
        </>
    )
}