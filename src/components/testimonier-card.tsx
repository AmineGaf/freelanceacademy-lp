"use client";

import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import { cn } from "@libs/utils";

import { ITestimonier } from "@content/testimony";

const TestimonierCard = (props: ITestimonier) => {
  return (
    <div
      className={cn(
        "transition-opacity testimonier-card max-sm:flex max-sm:flex-col max-sm:items-center"
      )}
      data-selected={props.selected}
      key={uuidv4()}
    >
      <div className="rounded-full w-12 h-12 overflow-hidden shadow-testimonier border-2 border-solid border-transparent">
        <Image src={props.avatar} alt={props.name} width={400} height={400} />
      </div>
      <div className="text-right font-normal text-grey-w0 lg:text-body-lg max-sm:text-body-sm">
        <b>{props.name}</b> - {props.age} عام
      </div>
      <h4 className="text-right max-lg:text-center linear-text bg-testimony-text">
        {props.income} د.ت / شهر
      </h4>
    </div>
  );
};

export default TestimonierCard;
