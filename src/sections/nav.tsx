import React from "react";
import Image from "next/image";
import mainLogo from "~/assets/images/BrandLogo.webp";
import Link from "next/link";

const Nav = () => {
  return (
    <nav
      dir="rtl"
      className="justify-center flex items-center container-width py-0 pb-6"
    >
      <Link href="/">
        <Image
          src={mainLogo}
          className="object-cover"
          alt="Freelance Academy"
          width={120}
          height={38}
        />
      </Link>
    </nav>
  );
};

export default Nav;
