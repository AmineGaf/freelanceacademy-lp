import React, { ReactNode } from "react";
import Card from "@/components/ui/card";
import { cn } from "@/libs/utils";
import Image, { StaticImageData } from "next/image";

export interface IAboutUsCard {
  image: StaticImageData;
  title: ReactNode;
  desc: string;
  grid: "col-span-2" | "col-span-3" | "col-span-4";
}

const FeatureCard = ({ image, title, desc, grid }: IAboutUsCard) => {
  return (
    <Card
      className={cn(
        "border border-white/10 bg-white/5 shadow-features rounded-[32px] py-10 px-6 flex flex-col items-center gap-4 max-lg:!col-span-1",
        grid
      )}
    >
      <div className="w-full h-full bg-feature-card flex justify-center items-center max-h-[18.75rem] overflow-hidden">
        <Image height={400} width={600} src={image} alt={""} />
      </div>
      <h4>{title}</h4>
      <p className="text-center text-grey">{desc}</p>
    </Card>
  );
};

export default FeatureCard;
