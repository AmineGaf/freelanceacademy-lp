import React from "react";
import { SHARED_CONTENT } from "@/content/shared";
import Whatsapp from "@/assets/icons/Whatsap";
import Button from "./ui/button";
import { cn } from "@/libs/utils";

const WhatsappButton = ({ className }: { className?: string }) => {
  return (
    <a href="https://wa.me/21693912041?text=عسلامة قصي، نحب نعرف أكثر معلومات عل دورات متاعكم ؟">
      <Button
        className={cn("gap-4 [&>span]:p-0 w-full text-sm", className)}
        variant={"outline"}
      >
        {SHARED_CONTENT.whatsApp}
        <Whatsapp />
      </Button>
    </a>
  );
};

export default WhatsappButton;
