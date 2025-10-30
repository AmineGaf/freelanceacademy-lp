import { useEffect } from "react";

export type PixelEventData = Record<string, string | number | boolean | null | undefined>;

type ReactFacebookPixel = {
  init: (pixelId: string) => void;
  pageView: () => void;
  track: (event: string, data?: PixelEventData) => void;
};

let ReactPixel: ReactFacebookPixel | null = null;
let initialized = false;
let pixelReady: Promise<void> | null = null;

export const useFacebookPixel = (pixelId: string) => {
  useEffect(() => {
    if (typeof window === "undefined" || initialized) return;

    pixelReady = import("react-facebook-pixel")
      .then((module) => {
        const pixelModule = (module as unknown as { default?: ReactFacebookPixel }).default ?? (module as unknown as ReactFacebookPixel);
        ReactPixel = pixelModule;
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
        initialized = true;
      })
      .catch((error) => {
        console.warn("Failed to load Facebook Pixel:", error);
      });
  }, [pixelId]);
};

export const trackFacebookEvent = async (event: string, data?: PixelEventData) => {
  if (typeof window === "undefined") return;

  if (pixelReady) await pixelReady;
  if (!ReactPixel) return;

  ReactPixel.track(event, data);
};
