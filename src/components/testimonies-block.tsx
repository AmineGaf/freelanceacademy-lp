import React from "react";
import Image from "next/image";
import Video from "@components/ui/video";
import RatingStar from "@components/ui/icons/RatingStar";

import { TESTIMONY_CONTENT } from "@content/testimony";

const TestimoniesBlock = () => {
  const testimoniesArray = TESTIMONY_CONTENT.testimony.details;
  return (
    <div>
      {testimoniesArray.map((testimonies, index) => (
        <div className="w-full h-screen min-w-[100%]" key={`block-${index}`}>
          <div className="flex flex-col items-end gap-6 lg:py-4 lg:pl-16">
            <div className="flex gap-2">
              {[...Array(testimonies.rating)].map((_, starIndex) => {
                return <RatingStar key={`star-${index}-${starIndex}`} />;
              })}
            </div>
            {testimonies.videoCode ? (
              <>
                <span className="text-grey-w0 text-h3 text-left">
                  {testimonies.vidTitle}
                </span>
                <Video videoCode={testimonies.videoCode} className="w-full">
                  {testimonies.thumbnail ? (
                    <Image
                      src={testimonies.thumbnail}
                      alt="thumbnail"
                      width="814"
                      height="470"
                      className=" w-full"
                      loading="eager"
                    />
                  ) : undefined}
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
    </div>
  );
};

export default TestimoniesBlock;
