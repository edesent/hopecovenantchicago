import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { church, isDemo, pastor, siteUrl } from "@/lib/site";
import "./globals.css";

// Dated things (the next service, events that expire) switch over on their own; re-render hourly.
export const revalidate = 3600;

const playfair = localFont({
  src: "../fonts/playfair-display-700.woff2",
  variable: "--font-playfair",
  display: "swap",
  weight: "700",
});
const cinzel = localFont({
  src: "../fonts/cinzel-700.woff2",
  variable: "--font-cinzel",
  display: "swap",
  weight: "700",
});
const vibes = localFont({
  src: "../fonts/great-vibes-400.woff2",
  variable: "--font-vibes",
  display: "swap",
  weight: "400",
});
const archivo = localFont({
  src: [
    { path: "../fonts/archivo-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/archivo-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-archivo",
  display: "swap",
});

const description =
  "HOPE Covenant Kingdom Fellowship International, Family of Churches, is a Christian, Bible-centered fellowship in Chicago, established in January 2018 and led by Bishop Mikal D. Boddie, D.Div. Kingdom Growth • Covenant Life.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${church.name} · Chicago`,
    template: `%s · ${church.short}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: church.name,
    title: church.name,
    description,
    url: siteUrl,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${church.name} — Family of Churches` }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: isDemo ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#1f0305",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: church.name,
  url: siteUrl,
  description,
  foundingDate: church.founded,
  address: {
    "@type": "PostalAddress",
    ...(church.showStreet ? { streetAddress: `${church.streetNumber} ${church.street}`.trim() } : {}),
    addressLocality: church.city,
    addressRegion: church.stateCode,
    postalCode: church.zip,
    addressCountry: "US",
  },
  sameAs: [church.facebook, church.facebookGroup, church.youtube].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cinzel.variable} ${vibes.variable} ${archivo.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Demo tracking (CRM → Demo Tracking). Remove at go-live. */}
        <script async src="https://www.elijahdesent.com/demo.js" />
      </body>
    </html>
  );
}
