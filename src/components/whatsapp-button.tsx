"use client";

import React from "react";
import { cn } from "@libs/utils";
import Button from "@components/ui/button";
import Whatsapp from "@components/ui/icons/Whatsap";
import { SHARED_CONTENT } from "@content/shared";
import { useFacebookPixel, trackFacebookEvent } from "@hooks/use-facebook-pixel";

type WhatsappButtonProps = {
  className?: string;
};

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ className }) => {
  const pixelId = "785636104090927";

  useFacebookPixel(pixelId);

  const handleClick = () => {
    trackFacebookEvent("Contact", {
      content_name: "Freelance Academy WhatsApp Button",
    });

    window.open(
      "https://wa.me/21693912041?text=عسلامة قصي، نحب نعرف أكثر معلومات عل دورات متاعكم ؟",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className={cn("gap-4 [&>span]:p-0 w-full text-body-sm", className)}
    >
      {SHARED_CONTENT.whatsApp}
      <Whatsapp />
    </Button>
  );
};

export default WhatsappButton;
