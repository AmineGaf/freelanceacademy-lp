import React from "react";
import { v4 as uuidv4 } from "uuid";

import FaqCard from "@components/faq-card";
import TitleTicket from "@components/title-ticket";

import { FAQ_CONTENT } from "@content/faq";

const Faq = () => {
  const FAQArray = FAQ_CONTENT.items;
  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col gap-4 items-center max-w-[41.5625rem] mx-auto text-center">
        <TitleTicket content={FAQ_CONTENT.ticket} />
        <div className="flex flex-col gap-6">
          <h2 className="linear-text bg-text text-center font-gedinarone text-h2 max-lg:text-h3">
            {FAQ_CONTENT.title}
          </h2>
          <p className="text-light-blue-w1 text-h5 max-lg:text-body-lg text-center font-normal">
            {FAQ_CONTENT.sub}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {FAQArray.map((item) => (
          <FaqCard
            question={item.question}
            answer={item.answer}
            key={uuidv4()}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
