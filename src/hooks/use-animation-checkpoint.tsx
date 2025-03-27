"use client";

import { ScrollOffset } from "@/types/types";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState, type RefObject } from "react";

export const useAnimationCheckpoint = <T extends HTMLElement, U>(
  ref: RefObject<T>,
  contentArray: U[],
  offset: ScrollOffset
) => {
  const [checkpointValue, setCheckpointValue] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });
  const scrollCheckpoints = useTransform(
    scrollYProgress,
    [0, 1],
    [0, contentArray.length - 1]
  );

  useMotionValueEvent(scrollCheckpoints, "change", (value) => {
    const roundedIndex = Math.round(value);
    if (roundedIndex >= 0 && roundedIndex < contentArray.length) {
      setCheckpointValue(roundedIndex);
    }
  });

  return { checkpointValue };
};
