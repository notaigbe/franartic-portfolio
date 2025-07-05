// app/layout.js
import "./globals.css";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});



export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


export const metadata = {
  title: "Francisca Otaigbe | Franartic SFX Artist Portfolio",
  description: "Bridal, Glam, SFX makeup by Francisca Otaigbe in Lagos State, Nigeria",
  authors: [{ name: "Francisca Otaigbe" }],
  robots: "index, follow",
  openGraph: {
    title: "Francisca Otaigbe | Franartic SFX Artist Portfolio",
    description: "Bridal, Glam, SFX makeup by Francisca Otaigbe in Lagos State, Nigeria",
    type: "website",
    locale: "en_NG",
    url: "https://franartic.com",
    siteName: "Franartic SFX Artist Portfolio",
    images: [
      {
        url: "/assets/img/me.jpg",
        width: 400,
        height: 400,
        alt: "Francisca Otaigbe",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://franartic.com",
  },
  other: {
    "application/ld+json": JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Francisca Otaigbe',
      jobTitle: 'Makeup Artist',
      url: 'https://franartic.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressCountry: 'NG',
      },
      sameAs: [
        'https://www.instagram.com/franartic',
        'https://www.facebook.com/franartic',
        'https://www.tiktok.com/@franartic',
        'https://www.x.com/franartic',
      ],
    })
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
