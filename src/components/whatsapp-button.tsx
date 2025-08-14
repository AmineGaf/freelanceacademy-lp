import React from "react";

import { cn } from "@libs/utils";

import Button from "@components/ui/button";
import Whatsapp from "@components/ui/icons/Whatsap";

import { SHARED_CONTENT } from "@content/shared";

const WhatsappButton = ({ className }: { className?: string }) => {
  return (
    <a href="https://wa.me/21693912041?text=عسلامة قصي، نحب نعرف أكثر معلومات عل دورات متاعكم ؟">
      <Button
        className={cn("gap-4 [&>span]:p-0 w-full text-body-sm", className)}
        variant={"outline"}
      >
        {SHARED_CONTENT.whatsApp}
        <Whatsapp />
      </Button>
    </a>
  );
};

export default WhatsappButton;
