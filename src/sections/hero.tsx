import React from "react";
import Image from "next/image";

import Video from "@components/ui/video";
import MainCta from "@components/main-cta";

import thumbnail from "~assets/images/hero-section/thumbnail.png";

import { HERO_CONTENT } from "@content/hero";

const Hero = () => {
  return (
    <section className="pt-0 flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <div className="max-w-[800px] max-lg:flex-col flex justify-center w-full mx-auto">
          <div className="text-grey-w0 text-center max-md:text-center [&>span]:text-green-w0 flex flex-col gap-8">
            <h1 className="linear-text text-display bg-text text-center">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-light-blue-w1 text-h5 font-normal">
              {HERO_CONTENT.sub}
            </p>
          </div>
        </div>
      </div>
      <Video
        videoCode={"67e513a1efb96565b07430fe"}
        className="sm:w-[90%] after:z-10 rounded-3xl relative"
      >
        <div className="bg-linear-border p-1 shadow-border-top">
          <Image
            src={thumbnail}
            alt="thumbnail"
            width="814"
            height="470"
            className="w-full h-full"
            loading="eager"
          />
        </div>
      </Video>
      <a href="#pricing">
        <MainCta />
      </a>
    </section>
  );
};

export default Hero;
