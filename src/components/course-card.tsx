import React from "react";

import Reveal from "@animations/reveal";

interface ICourseCard {
  selected: boolean;
  index: number;
  thumbnail: string;
  title: string;
  description: string;
  duration?: React.ReactNode;
  order: string;
}

const LinearContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-linear-border shadow-border-top rounded-full overflow-hidden w-fit ml-auto">
      <div
        className="w-full py-2 px-8 flex items-center gap-2"
        style={{ background: "#161A20" }}
      >
        <div className="[&>span]:text-blue-w2 text-right w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

const CourseCard = (props: ICourseCard) => {
  return (
    <Reveal>
      <div
        className={`flex justify-between lg:gap-[128px] min-h-[840px] items-center py-24 max-lg:flex-col-reverse max-lg:items-end max-lg:pl-4  ${
          props.selected ? "opacity-100" : "opacity-40"
        }`}
        dir="rtl"
      >
        <div className="flex justify-start w-full">
          <div className="text-right flex flex-col items-start gap-[24px] max-w-[480px]">
            <h4 className="text-grey-w0 text-h4">{props.title}</h4>
            <img
              src={props.thumbnail}
              alt={props.title}
              className="w-full max-w-[450px] h-[300px] object-contain"
              width={338}
              height={241}
            />
            <p className="font-normal text-grey-w1 text-body md:text-body-xl antialiased tracking-wide">
              {props.description}
            </p>

            {props.duration && (
              <LinearContainer>
                <div className="font-bold text-grey-w0 tracking-wide">
                  <b className="text-grey-w1">طول الحصة: </b>
                  {props.duration}
                </div>
              </LinearContainer>
            )}
          </div>
        </div>
        <div className="relative w-full lg:h-[700px]">
          <h1 className="top-[50svh] sticky font-gedinarone text-center text-grey-w0 text-h1 max-lg:text-start max-lg:text-h3">
            <span
              className="text-right font-bold font-sora text-blue-w2 text-[140px] max-lg:text-display tracking-[-1.4px] max-lg:tracking-[-0.02em] latin-digits"
              dir="ltr"
              lang="en"
            >
              {props.index + 1}
            </span>
            {props.order}
          </h1>
        </div>
      </div>
    </Reveal>
  );
};

export default CourseCard;
