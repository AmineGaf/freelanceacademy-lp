import { CONTENT_SECTION_CONTENT } from "@/content/content";
import contentBg from "@/assets/images/courses-section/courses-bg.png";
import React from "react";
import Image from "next/image";
import ContentCard from "@/components/content-card";
import MainCta from "@/components/main-cta";

const Content = () => {
  return (
    <section className="relative flex flex-col gap-24">
      <div className="flex flex-col gap-4 items-center max-w-[41.5625rem] mx-auto">
        <h2 className="flex flex-col">
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
