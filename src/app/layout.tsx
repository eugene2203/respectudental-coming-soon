import type { Metadata } from "next";
import { Inter } from 'next/font/google';

import "@/styles/tailwind.css";
import "@/styles/app.scss";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

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
    <html lang="en" className={inter.className}>
      <head>
        {/* Google Tag Manager */}
        <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3P2HWQJ');`,
            }}
        />
        {/* End Google Tag Manager */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
                "https://www.instagram.com/respectudental"
              ]
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — сразу после открывающего <body> */}
        <noscript>
          <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W3P2HWQJ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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