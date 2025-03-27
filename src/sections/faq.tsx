import FaqCard from "@/components/faq-card";
import TitleTicket from "@/components/title-ticket";
import { FAQ_CONTENT } from "@/content/faq";
import React from "react";
import {v4 as uuidv4} from 'uuid'

const Faq = () => {
  const FAQArray = FAQ_CONTENT.items;
  return (
    <section className="flex gap-16 flex-col max-md:flex-col">
      <div className="flex flex-col gap-4 items-center mx-auto">
        <TitleTicket content={FAQ_CONTENT.ticket} />
        <h2 className="linear-text bg-text text-center">{FAQ_CONTENT.title}</h2>
        <p className="text-light-blue-w1 text-lg text-center">
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {FAQArray.map((item) => (
          <FaqCard question={item.question} answer={item.answer} key={uuidv4()} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
