import "@/styles/globals.css";
import { Navbar } from "@/components";

import { Hind_Siliguri } from "next/font/google";
import type { Metadata } from "next";

const hindSiligury = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: {
    default:
      " Buy Book Online - Best Online Book Shop in Bangladesh | Rokomari.com",
    template: "%s | Rokomari.com",
  },
  description:
    "salahaat.com is the largest online bookstore in Bangladesh. Buy Novel, Story, Islamic, Computer Programming, Children, West Bengal, Fiction, Non fiction, Medical, Engineering, Gift cards & Text books from the biggest selection of Bangla books at lowest price. Cash on delivery, Happy return policy & Free shipping offer available. Shop Now!",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Saif Ahmed", url: "https://saportfolio.vercel.app/" }],
  colorScheme: "light",
  creator: "Coding SA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#E8F3F1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hindSiligury.variable} antialiased font-hind`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
