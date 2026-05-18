import { Metadata } from "next";

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
    <div className="min-h-screen flex items-center justify-center bg-[var(--light-bg)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[var(--dark-blue)] mb-4">Our Services</h1>
        <p className="text-xl text-[var(--dark-blue)]">Need to be designed</p>
      </div>
    </div>
  );
}