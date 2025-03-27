import AboutUsCard from "@/components/about-us-card";
import { ABOUTUS_CONTENT } from "@/content/about-us";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const AboutUs = () => {
  const cardsArray = ABOUTUS_CONTENT.cards;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 items-center max-w-[41.5625rem] mx-auto">
        <h2 className="linear-text bg-text text-center">{ABOUTUS_CONTENT.title}</h2>
        <p className="text-light-blue-w1 text-lg text-center">
          {ABOUTUS_CONTENT.sub}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {cardsArray.map((item) => (
          <AboutUsCard icon={item.icon} title={item.title} desc={item.desc} key={uuidv4()} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
