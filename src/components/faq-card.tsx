"use client";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import { cn } from "@/libs/utils";

interface IFAQCard {
  question: React.ReactNode;
  answer: React.ReactNode;
}

const FaqCard = ({ question, answer }: IFAQCard) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Card
      onClick={handleToggle}
      className={cn(
        "bg-black-w1 transition-all",
        toggle ? "border-2 border-dark-blue shadow-small-card" : ""
      )}
      noDown
    >
      <div className="flex flex-col gap-6 p-8 cursor-pointer select-none ">
        <div
          className={cn(
            "flex flex-col transition-[gap]",
            toggle ? "gap-6" : "gap-0"
          )}
        >
          <div className="flex justify-between items-center">
            <h5 className="font-gedinarone text-grey-w0">{question}</h5>
            <div className="relative w-6 h-6">
              <span className="block top-1/2 left-1/2 absolute bg-grey w-5 h-[2px] -translate-x-1/2 -translate-y-1/2" />
              <span
                className={cn(
                  "block top-1/2 left-1/2 absolute bg-grey w-5 h-[2px] transition -translate-x-1/2 -translate-y-1/2",
                  toggle ? "rotate-0" : "rotate-90"
                )}
              />
            </div>
          </div>
          <div
            className={cn(
              "grid transition-[grid-template-rows] overflow-hidden !rounded-none",
              toggle ? " grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <p className="min-h-0 font-medium text-grey-w1 md:text-lg lg:text-xl antialiased tracking-wide">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FaqCard;
