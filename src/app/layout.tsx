import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bermel Giorgis | Sacred Waters",
  description: "Bermel Giorgis (which means Barrel George) is a revered holy site in Ethiopia, known for its mystical waters that offer spiritual healing and glimpses of divine realms. It is deeply connected to Saint George and serves as a place for profound transformation and revelation.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bermel Giorgis",
    "alternateName": "Bermel Georgis",
    "url": "https://bermelgiorgis-tsebel.vercel.app",
    "logo": "https://bermelgiorgis-tsebel.vercel.app/icon.png",
    "description": "Bermel Giorgis (meaning Barrel George) is a revered holy site in Ethiopia, known for its mystical waters that offer spiritual healing and glimpses of divine realms. It is deeply connected to Saint George and serves as a place for profound transformation and revelation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Qwara",
      "addressCountry": "Ethiopia",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.390050322463525",
      "longitude": "35.74829690239708",
    },
    "image": [
      "https://bermelgiorgis-tsebel.vercel.app/images/holy-site.png",
      "https://bermelgiorgis-tsebel.vercel.app/images/sacred-statue-2025.png",
    ],
    "keywords": "Bermel Giorgis, Barrel George, holy site in Ethiopia, Saint George, baptismal site, spiritual healing, divine experiences",
  };



  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://bermelgiorgis-tsebel.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <Header />
        <main aria-label="Main content" className="container mx-auto py-8 px-4 sm:px-8">{children}</main>
        <Footer />
        <Script src="//code.tidio.co/birktvauoepafzhhqrocwl7alcwd0xq9.js" strategy="afterInteractive" async />
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const interFont = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "Bermel Giorgis | Sacred Holy Water in Ethiopia",
//   description:
//     "Discover Bermel Giorgis, a miraculous holy water site in Ethiopia. Known for its spiritual revelations and healing powers, it offers visitors a transformative experience connected to faith and divine grace.",
//   icons: {
//     icon: "/icon.png",
//   },
// };

// const structuredData = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   name: "Bermel Giorgis",
//   url: "https://bermelgiorgis.vercel.app",
//   logo: "https://bermelgiorgis.vercel.app/icon.png",
//   description:
//     "Bermel Giorgis is a holy water site in Ethiopia celebrated for its miraculous spiritual experiences and healing properties.",
//   address: {
//     "@type": "PostalAddress",
//     addressLocality: "Qwara",
//     addressCountry: "Ethiopia",
//   },
//   geo: {
//     "@type": "GeoCoordinates",
//     latitude: "12.3900",
//     longitude: "35.7482",
//   },
//   keywords:
//     "Bermel Giorgis, sacred holy water, Ethiopia spiritual experiences, faith healing, Saint George",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="canonical" href="https://bermelgiorgis.vercel.app" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
//       </head>
//       <body
//         className={`${interFont.variable} antialiased bg-gray-100 text-gray-900`}
//       >
//         <Header />
//         <main className="container mx-auto p-4 sm:p-8">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
