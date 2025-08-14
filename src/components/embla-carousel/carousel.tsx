import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  DotButton,
  useDotButton,
} from "@components/embla-carousel/carousel-controls";
import { v4 as uuidv4 } from "uuid";
import { TESTIMONY_CONTENT } from "@content/testimony";
import TestimonierCard from "@components/testimonier-card";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
};

const Carousel = ({ children, options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const testimonierArray = TESTIMONY_CONTENT.testimony.users;

  return (
    <div className="embla flex flex-col gap-16" dir="rtl">
      <div className="embla__controls">
        <div className="embla__dots flex-initial">
          {testimonierArray.map((testimonier, index) => (
            <DotButton
              key={uuidv4()}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot !w-full max-sm:justify-center".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            >
              <TestimonierCard
                avatar={testimonier.avatar}
                name={testimonier.name}
                age={testimonier.age}
                income={testimonier.income}
              />
            </DotButton>
          ))}
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
    </div>
  );
};

export default Carousel;
