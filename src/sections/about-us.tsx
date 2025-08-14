import React from "react";
import { v4 as uuidv4 } from "uuid";

import AboutUsCard from "@components/about-us-card";

import { ABOUTUS_CONTENT } from "@content/about-us";

const AboutUs = () => {
  const cardsArray = ABOUTUS_CONTENT.cards;

  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col gap-4 items-center max-w-[41.5625rem] mx-auto text-center">
        <div className="flex flex-col gap-6">
          <h2 className="linear-text bg-text text-center text-h2 max-lg:text-h3">
            {ABOUTUS_CONTENT.title}
          </h2>
          <p className="text-light-blue-w1 text-h5 max-lg:text-body-lg text-center font-normal">
            {ABOUTUS_CONTENT.sub}
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {cardsArray.map((item) => (
          <AboutUsCard
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            key={uuidv4()}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
