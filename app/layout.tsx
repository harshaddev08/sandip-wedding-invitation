import type { Metadata } from "next";
import { Noto_Serif_Gujarati, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";

const notoSerifGujarati = Noto_Serif_Gujarati({
  variable: "--font-serif-gujarati",
  subsets: ["gujarati", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSansGujarati = Noto_Sans_Gujarati({
  variable: "--font-sans-gujarati",
  subsets: ["gujarati", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sandip & Sarita's Wedding",
  description: "Join us in celebrating the wedding of Sandip & Sarita",
  openGraph: {
    title: "Sandip & Sarita's Wedding",
    description: "Join us in celebrating the wedding of Sandip & Sarita",
    images: [
      {
        url: "/placeholder-1.jpg",
        width: 1200,
        height: 630,
        alt: "Sandip & Sarita's Wedding",
      },
    ],
    type: "website",
    locale: "gu_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandip & Sarita's Wedding",
    description: "Join us in celebrating the wedding of Sandip & Sarita",
    images: ["/placeholder-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu">
      <body
        className={`${notoSerifGujarati.variable} ${notoSansGujarati.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
