'use client'
import TestimonyCarousel from "@/components/testimony-carousel";
import TestimonyScroll from "@/components/testimony-scroll";
import TitleTicket from "@/components/title-ticket";
import { TESTIMONY_CONTENT } from "@/content/testimony";
import useWindowSize from "@/hooks/use-window-size";
import React from "react";

const Testimony = () => {
  const { isTablet } = useWindowSize();
  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col gap-4 items-center mx-auto">
        <TitleTicket content={TESTIMONY_CONTENT.ticket} />
        <h2 className="linear-text bg-text text-center">
          {TESTIMONY_CONTENT.title}
        </h2>
        <p className="text-light-blue-w1 text-lg text-center">
          {TESTIMONY_CONTENT.subtitle}
        </p>
      </div>
      {isTablet ? <TestimonyCarousel /> : <TestimonyScroll />}
    </section>
  );
};

export default Testimony;
