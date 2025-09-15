import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO / META DATA
export const metadata = {
  title: "Nourishing & Hosting Cameroon | Fresh Meat & Guest Houses",
  description:
    "Premium pigs, poultry, beef, and fish in Cameroon, plus cozy guest houses in Douala and Yaoundé. Discover quality food and top-tier hospitality under one roof.",
  keywords: [
    "poultry Cameroon",
    "pig farm Douala",
    "guest houses Yaoundé",
    "beef and fish supply Cameroon",
    "real estate Douala",
    "guest house booking Cameroon",
    "agribusiness Cameroon",
    "farm fresh meat Cameroon",
  ],
  openGraph: {
    title: "Nourishing & Hosting Cameroon",
    description:
      "Fresh pigs, poultry, beef, and fish, plus cozy guest houses in Douala and Yaoundé.",
    url: "https://yourdomain.com",
    siteName: "Your Company Name",
    images: [
      {
        url: "/poultry2.jpg", // 🔹 create an og-image.jpg in public folder
        width: 1200,
        height: 630,
        alt: "Fresh Meat & Guest Houses in Cameroon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nourishing & Hosting Cameroon",
    description:
      "Fresh pigs, poultry, beef, and fish, plus cozy guest houses in Douala and Yaoundé.",
    images: ["/og-image.jpg"],
    creator: "@YourTwitterHandle",
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
