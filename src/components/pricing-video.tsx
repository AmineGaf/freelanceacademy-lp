import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import PricingCheck from "@components/ui/icons/PricingCheck";
import Video from "@components/ui/video";
import Card from "@components/ui/card";
import WhatsappButton from "@components/whatsapp-button";

import pricingThumnail from "~assets/images/pricing-section/Help.jpg";

import { PRICING_CONTENT } from "@content/pricing";

const PricingVideo = () => {
  const videoContent = PRICING_CONTENT.video;

  return (
    <Card className="px-4 py-12 rounded-rounded w-full lg:max-w-[396px] flex flex-col gap-8 max-lg:w-full shadow-features border-2 border-white/15">
      <div>
        <h3 className="text-white font-gedinarone">{videoContent.title}</h3>
        <p className="text-grey-w1 font-normal">{videoContent.sub}</p>
      </div>
      <div className="flex flex-col gap-6 grayscale text-gray-300">
        <Video videoCode={"6685c51d70a16ee4eb210343"} horizontal>
          <Image
            src={pricingThumnail}
            alt="thumbnail"
            width="814"
            height="470"
            className=" aspect-[814/470]"
            loading="eager"
          />
        </Video>
        <WhatsappButton />
      </div>
      <div>
        <ul className="flex gap-3 flex-col items-start">
          {videoContent.items.map((element) => {
            return (
              <li className="flex items-start gap-3" key={uuidv4()}>
                <PricingCheck />
                <h5 className="font-normal antialiased font-gedinarone text-center !text-grey-w1 text-body md:text-body-xl max-md:text-right">
                  {element.content}
                </h5>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default PricingVideo;
