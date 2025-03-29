import PHProvider from "@/app/provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./embla.css";
import Nav from "@/sections/nav";
import Footer from "@/sections/footer";
import NavGlowing from "@/components/nav-glowing";
import FooterGlowing from "@/components/footer-glowing";

const sora = localFont({
  src: "../../public/assets/fonts/Sora-VariableFont_wght.ttf",
  variable: "--font-sora",
  weight: "100 700 900",
});

export const metadata: Metadata = {
  title: "Freelance Academy",
  description: "Freelance Academy Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${sora.style} antialiased bg-background relative`}>
        <PHProvider>
          <NavGlowing />
          <Nav />
          {children}
          <Footer />
          <FooterGlowing />
        </PHProvider>
      </body>
    </html>
  );
}
