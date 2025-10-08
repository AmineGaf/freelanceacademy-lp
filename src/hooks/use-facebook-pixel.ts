import { useEffect } from "react";

export type PixelEventData = Record<string, string | number | boolean | null | undefined>; 

let initialized = false;
let ReactPixel: typeof import("react-facebook-pixel") | null = null;

export const useFacebookPixel = (pixelId: string) => {
  useEffect(() => {
    if (typeof window === "undefined" || initialized) return;

    import("react-facebook-pixel").then((module) => {
      ReactPixel = module.default;
      ReactPixel.init(pixelId);
      initialized = true;
    }).catch((error) => {
      console.warn("Failed to load Facebook Pixel:", error);
    });
  }, [pixelId]);
};

export const trackFacebookEvent = (event: string, data?: PixelEventData) => {
  if (typeof window === "undefined" || !ReactPixel) return;
  ReactPixel.track(event, data);
};
