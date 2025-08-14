"use client";
import React from "react";
import { TESTIMONY_CONTENT } from "@/content/testimony";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "@/components/embla-carousel/carousel";
import RatingStar from "@/components/ui/icons/RatingStar";
import Video from "@/components/ui/video";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const TestimonyCarousel = () => {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    direction: "rtl",
  };
  const testimoniesArray = TESTIMONY_CONTENT.testimony.details;
  return (
    <div>
      <Carousel options={OPTIONS}>
        {testimoniesArray.map((testimonies) => (
          <div className="embla__slide" key={uuidv4()}>
            <div className="flex flex-col items-end gap-6 lg:py-4 lg:pl-16">
              <div className="flex gap-2">
                {[...Array(testimonies.rating)].map(() => {
                  return <RatingStar key={uuidv4()} />;
                })}
              </div>
              {testimonies.thumbnail && testimonies.videoCode ? (
                <>
                  <span className="text-grey-w0 text-h3 text-left">
                    {testimonies.vidTitle}
                  </span>
                  <Video videoCode={testimonies.videoCode} className="w-full">
                    <Image
                      src={testimonies.thumbnail}
                      alt="thumbnail"
                      width="814"
                      height="470"
                      className=" w-full"
                      loading="eager"
                    />
                  </Video>
                </>
              ) : (
                <p dir="ltr" className="font-gedinarone text-grey-w0 text-h3">
                  {testimonies.quote}
                </p>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonyCarousel;
