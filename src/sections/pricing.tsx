import React from "react";
import brandLogo from "~/assets/images/BrandLogo.webp";
import Image from "next/image";
import { PRICING_CONTENT } from "@/content/pricing";
import { v4 as uuidv4 } from "uuid";
import PricingVideo from "@/components/pricing-video";
import glowingImage from "~/assets/nav-glowing.png";
import Price from "@/components/price";
import TitleTicket from "@/components/title-ticket";
import PricingStar from "@/components/ui/icons/pricing-star";
import MainCta from "@/components/main-cta";
import GuaranteeOffer from "@/components/guarantee-offer";

const Pricing = () => {
  const mainContent = PRICING_CONTENT.main;
  return (
    <section className="section relative flex flex-col gap-14" id="pricing">
      <div className="flex flex-col gap-4 items-center mx-auto text-center">
        <TitleTicket content={PRICING_CONTENT.ticket} />
        <h2 className="linear-text bg-text text-center font-gedinarone text-h2 max-lg:text-h2-m">
          {PRICING_CONTENT.title}
        </h2>
        <p className="text-light-blue-w1 text-h5 max-lg:text-h5-m font-gedinarone text-center">
          {PRICING_CONTENT.subtitle}
        </p>
      </div>
      <div
        className="flex justify-between gap-12 pricing-container max-lg:flex-col "
        dir="rtl"
      >
        <div className="p-12 max-lg:p-8 rounded-[2.5rem] flex flex-col gap-8 relative w-full bg-black-w1 border border-dark-blue shadow-pricing overflow-hidden">
          <div className="absolute -top-[1101px] w-[2124.432px] h-[2107.026px] -right-[800px] flex">
            <Image
              src={glowingImage}
              alt="thumbnail"
              width="2593"
              height="2542"
              className="w-full h-full"
              loading="eager"
            />
          </div>
          <div className="relative flex flex-col gap-8">
            <div className="flex flex-col gap-6" dir="rtl">
              <div className="flex justify-start">
                <Image
                  src={brandLogo}
                  className="object-cover"
                  alt="Freelance Academy"
                  width={150}
                  height={38}
                />
              </div>
              <h1 className="text-grey-w0 text-right font-gedinarone text-h2">
                {mainContent.title}
              </h1>
            </div>
            <Price />
            <div className=" flex flex-col gap-10">
              <div className="flex w-full flex-col items-start max-lg:items-center">
                <ul className="flex gap-3 flex-col items-start">
                  {mainContent.items.map((element) => {
                    return (
                      <li className="flex items-start gap-3" key={uuidv4()}>
                        <div className="w-6 aspect-square rounded-full bg-pricing-star shadow-small-icon border border-blue-w3 flex items-center justify-center">
                          <PricingStar />
                        </div>
                        <h5 className="text-grey-w1 [&>span]:text-blue font-normal">
                          {element.content}
                        </h5>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <a
                  className="flex gap-4 max-lg:w-full max-lg:flex-col"
                  href="https://wa.me/21693912041?text=عسلامة، نحب نسجل في الأكاديمي "
                >
                  <MainCta />
                </a>
                <GuaranteeOffer />
              </div>
            </div>
          </div>
        </div>
        <PricingVideo />
      </div>
    </section>
  );
};

export default Pricing;
