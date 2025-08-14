"use client";

import React from "react";

import useWindowSize from "@hooks/use-window-size";

import TestimonyCarousel from "@components/testimony-carousel";
import TestimonyScroll from "@components/testimony-scroll";
import TitleTicket from "@components/title-ticket";

import { TESTIMONY_CONTENT } from "@content/testimony";

const Testimony = () => {
  const { isTablet } = useWindowSize();
  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col gap-4 items-center max-w-[41.5625rem] mx-auto text-center">
        <TitleTicket content={TESTIMONY_CONTENT.ticket} />
        <div className="flex flex-col gap-6">
          <h2 className="linear-text bg-text text-center font-gedinarone text-h2 max-lg:text-h3">
            {TESTIMONY_CONTENT.title}
          </h2>
          <p className="text-light-blue-w1 text-h5 max-lg:text-body-lg font-gedinarone text-center font-normal">
            {TESTIMONY_CONTENT.subtitle}
          </p>
        </div>
      </div>
      {isTablet ? <TestimonyCarousel /> : <TestimonyScroll />}
    </section>
  );
};

export default Testimony;
