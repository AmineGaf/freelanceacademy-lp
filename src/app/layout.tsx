import PHProvider from "@/app/providers/posthog";
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
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '668538532566082');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=668538532566082&ev=
            PageView&noscript=1"/>
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
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
