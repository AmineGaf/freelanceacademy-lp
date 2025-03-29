import React from "react";
import RatingStar from "@/components/ui/icons/RatingStar";
import Video from "@/components/ui/video";
import { TESTIMONY_CONTENT } from "@/content/testimony";
import Image from "next/image";
const TestimoniesBlock = () => {
  const testimoniesArray = TESTIMONY_CONTENT.testimony.details;
  return (
    <div className="">
      {testimoniesArray.map((testimonies , index) => (
        <div className="w-full h-screen min-w-[100%]" key={`block-${index}`}>
          <div className="flex flex-col items-end gap-6 lg:py-4 lg:pl-16">
            <div className="flex gap-2">
              {[...Array(testimonies.rating)].map(() => {
                return <RatingStar key={`star-${index}`} />;
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
              <p dir="ltr" className="font-sora text-grey-w0 text-h3">
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
