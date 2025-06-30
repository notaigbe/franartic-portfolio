// app/layout.js
import "./globals.css";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: "Francisca Otaigbe | Franartic SFX Artist Portfolio",
  description:
    "Bridal, Glam, SFX makeup by Francisca Otaigbe in Lagos State, Nigeria",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
