import React, { ReactNode } from "react";

import { cn } from "@/libs/utils";

import Close from "@/assets/icons/Close";
import PlayIcon from "@/assets/icons/PlayIcon";
import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogTrigger,
  DialogVideo,
} from "./dialog";
import Card from "./card";

interface IVideoPlayer {
  className?: string;
  children: ReactNode;
  videoCode: string;
  horizontal?: boolean;
}

const video = ({
  className,
  children,
  videoCode,
  horizontal,
}: IVideoPlayer) => {
  return (
    <Dialog
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <DialogTrigger>
        <Card className={cn("w-full mx-auto", className)}>
          <div className="relative">
            <div className="top-1/2 left-1/2 z-[2] absolute -translate-x-1/2 -translate-y-1/2">
              <PlayIcon />
            </div>
            <div className="rounded-rounded w-full h-full absolute left-0 top-0 bg-video-gradiant" />
            {children}
          </div>
        </Card>
      </DialogTrigger>
      <DialogContainer className="z-50">
        <DialogContent
          variants={dialogRevealVariants}
          className="relative h-full w-full"
        >
          <div className="top-1/2 left-1/2 absolute w-full max-w-[50vw] max-sm:max-w-[80vw] max-lg:max-w-[70vw] -translate-x-1/2 -translate-y-1/2 aspect-video">
            <DialogVideo
              code={videoCode}
              className="rounded-[4px] h-full object-cover"
              horizontal={horizontal}
            />
          </div>
        </DialogContent>
        <DialogClose
          className="fixed right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <Close />
        </DialogClose>
      </DialogContainer>
    </Dialog>
  );
};

export default video;

const dialogRevealVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};
