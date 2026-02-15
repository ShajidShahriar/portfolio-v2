import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shajid Shahriar | Portfolio",
  description: "Senior Software Engineer Portfolio",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
