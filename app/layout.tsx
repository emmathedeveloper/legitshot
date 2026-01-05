import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Nav from "@/components/Nav";
import BackgroundImage from "@/components/BackgroundImage";

// const Lobster = localFont({ src: './fonts/lobster.ttf' })

const Poppins = localFont({ src: './fonts/poppins.ttf' })

export const metadata: Metadata = {
  title: "LegitShot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Poppins.className}`}>
        <BackgroundImage>
          <Nav />
          {children}
        </BackgroundImage>
      </body>
    </html>
  );
}
