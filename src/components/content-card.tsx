import React from "react";
import Card from "./ui/card";
import { cn } from "@/libs/utils";
import ContentCheck from "@/assets/icons/content-check";

const ContentCard = () => {
  return (
    <Card
      className={cn(
        "border border-white/10 bg-white/5 shadow-features rounded-[32px] relative py-10 px-6 flex flex-col items-center gap-4 max-lg:!col-span-1 min-h-[400px]"
      )}
    >
      <div className="w-16 aspect-square rounded-full bg-blue flex items-center justify-center absolute top-0 -translate-y-1/2">
        <ContentCheck />
      </div>
      <h4>Lorem ipsum dolor sit amet.</h4>
    </Card>
  );
};

export default ContentCard;
