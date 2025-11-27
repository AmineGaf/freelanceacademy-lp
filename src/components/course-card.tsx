import React from "react";

import Reveal from "@animations/reveal";
import Medal from "@components/ui/icons/Medal";

interface ICourseCard {
  selected: boolean;
  index: number;
  thumbnail: string;
  title: string;
  description: string;
  duration?: React.ReactNode;
  order: string;
  isPremium?: boolean;
}

const LinearContainer = ({ children, isPremium }: { children: React.ReactNode; isPremium?: boolean }) => {
  return (
    <div className={`bg-linear-border shadow-border-top rounded-full overflow-hidden w-fit ml-auto ${isPremium ? 'ring-2 ring-yellow-500/30 ring-offset-2 ring-offset-transparent' : ''}`}>
      <div
        className="w-full py-2 px-8 flex items-center gap-2"
        style={{ background: isPremium ? "linear-gradient(135deg, #1a1a1a 0%, #2d1f0e 100%)" : "#161A20" }}
      >
        <div className={`text-right w-full ${isPremium ? '[&>span]:text-yellow-400' : '[&>span]:text-blue-w2'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 5.5-5.5 5 5 0 0 1 5.5 5.5v4" />
  </svg>
);

const PremiumBadges = () => (
  <div className="absolute top-4 right-4 md:right-auto sm:top-6 sm:left-6 md:top-8 md:left-8 z-10 flex flex-col gap-2 sm:gap-3 md:gap-4">
    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r max-w-fit from-yellow-500/20 via-yellow-400/20 to-yellow-500/20 border border-yellow-500/40 backdrop-blur-sm shadow-lg shadow-yellow-500/20">
      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full">
        <Medal />
      </div>
      <span className="text-yellow-400 font-bold text-xs sm:text-sm font-sora whitespace-nowrap">Premium</span>
    </div>
    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r max-w-fit from-green-500/20 via-emerald-400/20 to-green-500/20 border border-green-500/40 backdrop-blur-sm shadow-lg shadow-green-500/20">
      <div className="text-green-400">
        <LockIcon />
      </div>
      <span className="text-green-400 font-bold text-xs sm:text-sm font-sora leading-tight">
        <span className="hidden sm:inline">Unlocked for Successful Students</span>
        <span className="sm:hidden">Unlocked</span>
      </span>
    </div>
  </div>
);

const CourseCard = (props: ICourseCard) => {
  const isPremium = props.isPremium || false;
  
  return (
    <Reveal>
      <div
        className={`relative flex justify-between text-gray-100 lg:gap-[128px] min-h-[840px] items-center py-24 max-lg:flex-col-reverse max-lg:items-end max-lg:pl-4 ${
          props.selected ? "opacity-100" : "opacity-40"
        } ${isPremium ? "premium-course" : ""}`}
        dir="rtl"
      >
        {isPremium && <PremiumBadges />}


        {isPremium && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 pointer-events-none" />
        )}

        <div className="flex justify-start w-full relative z-0">
          <div className="text-right flex flex-col items-start gap-[24px] max-w-[480px]">
            <div className="flex items-center gap-3">
              <h4 className={`text-h4 ${isPremium ? 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent font-bold pr-5 pt-6' : 'text-gray-300'}`}>
                {props.title}
              </h4>
            </div>
            <div className={`relative ${isPremium ? 'p-2 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20' : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={props.thumbnail}
                alt={props.title}
                className={`w-full max-w-[450px] h-[300px] object-contain ${isPremium ? 'drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]' : ''}`}
                width={338}
                height={241}
              />
              {isPremium && (
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent rounded-xl pointer-events-none" />
              )}
            </div>
            <p className={`font-normal text-body md:text-body-xl antialiased tracking-wide ${isPremium ? 'text-grey-w0' : 'text-grey-w1'}`}>
              {props.description}
            </p>

            {props.duration && (
              <LinearContainer isPremium={isPremium}>
                <div className={`font-bold tracking-wide ${isPremium ? 'text-yellow-100' : 'text-grey-w0'}`}>
                  <b className={isPremium ? 'text-yellow-300' : 'text-grey-w1'}>طول الحصة: </b>
                  {props.duration}
                </div>
              </LinearContainer>
            )}
          </div>
        </div>
        <div className="relative w-full lg:h-[700px]">
          <h1 className={`top-[50svh] sticky font-gedinarone text-center text-h1 max-lg:text-start max-lg:text-h3 ${isPremium ? 'text-yellow-50' : 'text-grey-w0'}`}>
            <span
              className={`text-right font-bold font-sora text-[140px] max-lg:text-display tracking-[-1.4px] max-lg:tracking-[-0.02em] latin-digits ${
                isPremium 
                  ? 'bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]' 
                  : 'text-blue-w2'
              }`}
              dir="ltr"
              lang="en"
            >
              {props.index + 1}
            </span>
            {props.order}
          </h1>
          {isPremium && (
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
          )}
        </div>
      </div>
    </Reveal>
  );
};

export default CourseCard;
