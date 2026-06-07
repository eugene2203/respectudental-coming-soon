import type { Metadata } from "next";
import "@/styles/tailwind.css";
import "@/styles/app.scss";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: "Respect U Dental Lab | Crowns, Implants & Prosthetics in Brooklyn, NY",
  description: "Respect U Dental Lab - A New Vision for Dental Restorations. Dental lab in Brooklyn, NY providing crowns, implants and prosthetics for dental clinics. Fast turnaround and high precision work.",
  keywords: ["dental lab", "Brooklyn", "NY", "crowns", "implants", "prosthetics", "dental restorations"],
  authors: [{ name: "Respect U Dental Lab" }],
  openGraph: {
    type: "website",
    url: "https://respectudental.com/",
    title: "Respect U Dental Lab | Crowns, Implants & Prosthetics in Brooklyn, NY",
    description: "Respect U Dental Lab - A New Vision for Dental Restorations. No Mistakes.",
    images: [
      {
        url: "https://respectudental.com/images/logo-respectu-1200-630.png",
        width: 1200,
        height: 630,
        alt: "Respect U Dental Lab Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Respect U Dental Lab | Crowns, Implants & Prosthetics in Brooklyn, NY",
    description: "Respect U Dental Lab - A New Vision for Dental Restorations. No mistakes.",
    images: ["https://respectudental.com/images/logo-respectu-1200-630.png"],
  },
  icons: {
    icon: [
      { url: "/images/favicon2.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon2.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon2.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon2.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon2.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "additionalType": "https://schema.org/MedicalOrganization",
              "name": "Respect U Dental Lab",
              "image": "https://respectudental.com/images/logo-respectu.png",
              "@id": "https://respectudental.com",
              "url": "https://respectudental.com",
              "telephone": "+17182001532",
              "areaServed": "Brooklyn, New York",
              "knowsAbout": [
                "Dental crowns",
                "Dental implants",
                "Prosthetics",
                "Digital dentistry"
              ],
              "audience": {
                "@type": "BusinessAudience",
                "audienceType": "Dental clinics and dentists"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1 Woodside Ave",
                "addressLocality": "Brooklyn",
                "addressRegion": "NY",
                "postalCode": "11223",
                "addressCountry": "US"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                // "https://www.facebook.com/respectudental",
                "https://www.instagram.com/respectudental",
                // "https://www.linkedin.com/company/respectudental"
              ]
            }),
          }}
        />
      </head>
      <body>
        <div className="main-wrap flex flex-col min-h-screen relative">
          <Header />
          <main className="grow">{children}</main>
          <Toaster position="top-right" richColors />
          <Footer />
        </div>
      </body>
    </html>
  );
}