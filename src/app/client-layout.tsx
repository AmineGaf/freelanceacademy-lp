"use client";

import { usePathname } from "next/navigation";
import Nav from "@sections/nav";
import Footer from "@sections/footer";
import NavGlowing from "@components/nav-glowing";
import FooterGlowing from "@components/footer-glowing";
import PromoBar from "@components/promo-bar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFormPage = pathname.startsWith("/submission-form");

  return (
    <>
      {!isFormPage && (
        <>
          <PromoBar />
          <NavGlowing />
          <Nav />
        </>
      )}

      {children}

      {!isFormPage && (
        <>
          <Footer />
          <FooterGlowing />
        </>
      )}
    </>
  );
}
