import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Rajuice Space | Blockchain Developer",
  description: "Portfolio of Rajuice Space - EVM & Solana Blockchain Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelFont.variable} antialiased bg-[#0a0a0f] text-white font-pixel`}>
        {children}
      </body>
    </html>
  );
}
