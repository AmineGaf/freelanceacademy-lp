import FeatureCard from "@/components/feature-card";
import TitleTicket from "@/components/title-ticket";
import { FEATURES_CONTENT } from "@/content/features";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Features = () => {
  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col gap-4 items-center max-w-[41.5625rem] mx-auto">
        <TitleTicket content={FEATURES_CONTENT.ticket} />
        <h2 className="flex flex-col">
          <span className="linear-text bg-text text-center">
            {FEATURES_CONTENT.title.top}
          </span>
          <span className="linear-text bg-text text-center">
            {FEATURES_CONTENT.title.sub}
          </span>
        </h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-6 grid-cols-1">
        {FEATURES_CONTENT.cards.map((card) => (
          <FeatureCard
            image={card.image}
            title={card.title}
            desc={card.desc}
            grid={card.grid}
            key={uuidv4()}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
