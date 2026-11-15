import type { Metadata, Viewport } from "next";
import Reveal from "@/components/Reveal";
import { church, isDemo, pastor, siteUrl } from "@/lib/site";
import "./globals.css";

// Dated things (the next service, events that expire) switch over on their own; re-render hourly.
export const revalidate = 3600;

// Fonts must be self-hosted (next/font/google can fail the build on Vercel):
//   bash scripts/get-font.sh "Young Serif" 400        -> src/fonts/young-serif-400.woff2
// then load them here with next/font/local and put the variables on <html>:
//
//   import localFont from "next/font/local";
//   const display = localFont({ src: "../fonts/young-serif-400.woff2", variable: "--font-display", display: "swap" });
//   <html lang="en" className={`${display.variable} ${body.variable}`}>

const description = `TODO(demo) one or two plain sentences: ${church.name} in <town>, service times, ${pastor.title} ${pastor.name}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: church.name,
    template: `%s · ${church.short}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: church.name,
    title: church.name,
    description,
    // TODO(demo) one of their real photos, e.g. /photos/front.jpg
    images: [],
  },
  twitter: { card: "summary_large_image" },
  robots: isDemo ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#ffffff", // TODO(demo)
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: church.name,
  url: siteUrl,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${church.streetNumber} ${church.street}`.trim(),
    addressLocality: church.city,
    addressRegion: church.stateCode,
    postalCode: church.zip,
    addressCountry: "US",
  },
  sameAs: [church.facebook, church.youtube].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {/* TODO(demo) <Header /> — render the phone menu as a SIBLING of any backdrop-blur header, never inside it */}
        <main>{children}</main>
        {/* TODO(demo) <Footer /> */}
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Demo tracking (CRM → Demo Tracking). Remove at go-live. */}
        <script async src="https://www.elijahdesent.com/demo.js" />
      </body>
    </html>
  );
}
