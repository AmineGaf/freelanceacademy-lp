"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

import TestimoniesBlock from "@components/testimonies-block";
import { TESTIMONY_CONTENT } from "@content/testimony";
import TestimonierCard from "@components/testimonier-card";

const TestimonyScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgressValue, setScrollProgressValue] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setScrollProgressValue(value);
  });

  const testimonierArray = TESTIMONY_CONTENT.testimony.users;
  const testimonyContentPatern = 1 / testimonierArray.length;

  return (
    <div className="flex gap-8" ref={containerRef}>
      <TestimoniesBlock />
      <div className="min-w-[17.75rem] h-screen flex gap-8 flex-col sticky top-8">
        {testimonierArray.map((testimonier, index) => {
          return (
            <TestimonierCard
              avatar={testimonier.avatar}
              name={testimonier.name}
              age={testimonier.age}
              income={testimonier.income}
              selected={
                scrollProgressValue > testimonyContentPatern * index &&
                scrollProgressValue < testimonyContentPatern * (index + 1)
              }
              key={`card-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonyScroll;
