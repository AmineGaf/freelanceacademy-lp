"use client";

import { COURSES_CONTENT } from "@/content/courses";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

import { useMediaQuery } from "react-responsive";
import { Icons } from "@/components/ui/icons";
import CourseCard from "@/components/course-card";

const AnimationProgressBar = ({ topGap = 0 }: { topGap: number }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [progressFullLength, setProgressFullLength] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (progressRef.current) {
        const progressClientRect = progressRef.current.getBoundingClientRect();
        setProgressFullLength(progressClientRect.height);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (progressRef.current) {
      resizeObserver.observe(progressRef.current);
    }
    handleResize();
    return () => {
      if (progressRef.current) {
        resizeObserver.unobserve(progressRef.current);
      }
    };
  }, [progressRef.current]);

  // Simple progress within the bar itself
  const { scrollYProgress } = useScroll({
    target: progressRef,
    offset: [`${topGap + 200}px end`, "end end"],
  });

  const height = useTransform(
    scrollYProgress,
    [0, 1],
    ["20px", `${Math.round(progressFullLength) - topGap - 172}px`]
  );
  return (
    <div
      className="left-[50%] max-lg:left-4 absolute mt-6 h-full"
      ref={progressRef}
      style={{ top: `${topGap + 32}px` }}
    >
      <motion.div
        className="z-[1] absolute bg-progress-linear shadow-progress w-[2px] transition-all duration-200 ease-out"
        style={{ height }}
      />
      <motion.div
        style={{ y: height }}
        className="transition-all duration-200 ease-out"
      >
        <Icons.ScrollArrow className="-top-0.5 left-[calc(50%_-_7px)] absolute" />
      </motion.div>
      <div
        className="bg-progress-highlight w-[2px] h-full"
        style={{
          height: `calc(100% - ${topGap + 192}px)`,
        }}
      />
    </div>
  );
};

const AnimationSectionBody = ({
  children,
  titleHeight,
}: {
  children: ReactNode;
  titleHeight: number;
}) => {
  const isPhone = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`${titleHeight}px end`, "end end"],
  });

  const maxWidth = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    ["100%", "100%", "100%", "80%`"]
  );

  return (
    <motion.div
      style={!isPhone ? { maxWidth } : { maxWidth: "100%" }}
      className="w-full max-w-[1280px] mx-auto h-full relative"
      ref={sectionRef}
    >
      {children}
    </motion.div>
  );
};

const Courses = () => {
  const coursesArray = COURSES_CONTENT.courses;
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleHeight, setTitleHeight] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      const height = titleRef.current.getBoundingClientRect().height;
      setTitleHeight(height + 96);
    }
  });

  return (
    <section className="flex flex-col gap-14 p-0 !max-w-full relative h-full">
      <AnimationSectionBody titleHeight={titleHeight}>
        <AnimationProgressBar topGap={titleHeight} />
        <div className="relative px-3 md:px-8 lg:px-16 py-24 max-lg:p-4 max-lg:pt-16 w-full max-h-[calc(100% - 333px)]">
          <div
            className="flex flex-col items-center gap-4 mx-auto w-full max-w-[60.125rem]"
            ref={titleRef}
          >
            <div className="flex flex-col gap-4 items-center max-w-[41.5625rem] mx-auto text-center">
              <h2 className="linear-text bg-text text-center font-gedinarone text-h2 max-lg:text-h2-m">
                {COURSES_CONTENT.title}
              </h2>
              <p className="text-light-blue-w1 text-h5 max-lg:text-h5-m font-gedinarone text-center">
                {COURSES_CONTENT.subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto pr-3 md:pr-5 lg:pr-8 max-w-[1280px]">
          {coursesArray.map((element, index) => {
            return (
              <CourseCard
                selected={true}
                index={index}
                thumbnail={element.thumbnail.src}
                title={element.title}
                description={element.description}
                duration={element.duration}
                order={element.order}
                key={`${index}-${element.order}`}
              />
            );
          })}
        </div>
      </AnimationSectionBody>
    </section>
  );
};

export default Courses;
