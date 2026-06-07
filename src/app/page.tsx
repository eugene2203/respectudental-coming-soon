import MainBanner from "@/components/pages/main-page/MainBanner";
import MainLaboratoryBlock from "@/components/pages/main-page/MainLaboratoryBlock";
import AreasOfExpertiseBlock from "@/components/pages/main-page/AreasOfExpertiseBlock";
import TechnologiesAndMaterials from "@/components/pages/main-page/TechnologiesAndMaterials";
import { Metadata } from "next";

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
        url: "https://respectudental.com/images/logo-respectu.png",
        width: 256,
        height: 256,
        alt: "Respect U Dental Lab Logo",
      },
    ],
  },
};

export default function Home() {

  return (
      <>
        <MainBanner/>
        <MainLaboratoryBlock/>
        <AreasOfExpertiseBlock/>
        <TechnologiesAndMaterials/>
      </>
  )
}