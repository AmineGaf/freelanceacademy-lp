import React from "react";
import Image from "next/image";

import ContentCard from "@components/content-card";
import MainCta from "@components/main-cta";

import contentBg from "~assets/images/courses-section/courses-bg.png";

import { CONTENT_SECTION_CONTENT } from "@content/content";

const Content = () => {
  return (
    <section className="relative flex flex-col gap-24">
      <div className="flex flex-col gap-4 items-center max-w-[41.5625rem] mx-auto text-center">
        <h2 className="flex flex-col font-gedinarone text-h2 max-lg:text-h3 gap-6">
          <span className="linear-text bg-text text-center">
            {CONTENT_SECTION_CONTENT.title.top}
          </span>
          <span className="linear-text bg-text text-center">
            {CONTENT_SECTION_CONTENT.title.sub}
          </span>
        </h2>
      </div>
      <div className="flex justify-between max-lg:flex-col gap-16">
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
      <MainCta />
      <div className="absolute -bottom-[15svw] -z-10">
        <Image src={contentBg} alt={""} width={1156} height={769} />
      </div>
    </section>
  );
};

export default Content;
