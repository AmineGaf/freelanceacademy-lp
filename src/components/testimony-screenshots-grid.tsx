"use client";

import React from "react";
import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogTrigger,
} from "@components/ui/dialog";

const dialogVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

type TestimonyScreenshotsGridProps = {
  screenshots: string[];
};

const TestimonyScreenshotsGrid = ({ screenshots }: TestimonyScreenshotsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {screenshots.map((src, index) => (
        <Dialog key={src} transition={{ duration: 0.2, ease: "easeOut" }}>
          <DialogTrigger>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-features transition-all duration-300 hover:border-blue-w2/40 hover:shadow-[0_0_24px_rgba(7,109,236,0.15)] cursor-pointer">
              <div className="aspect-[4/3] relative bg-black-w0/50">
                <Image
                  src={src}
                  alt={`شهادة من الطالبة ${index + 1}`}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/90 text-body-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sora">
                    اضغط باش تشوف
                  </span>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContainer className="z-50 p-4">
            <DialogContent
              variants={dialogVariants}
              className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <div className="relative w-full h-full min-h-[50vh] flex items-center justify-center">
                <Image
                  src={src}
                  alt={`شهادة من الطالبة ${index + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                />
              </div>
            </DialogContent>
            <DialogClose
              className="fixed end-6 top-6 z-[60] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-black/80"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { delay: 0.1 } },
                exit: { opacity: 0 },
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </DialogClose>
          </DialogContainer>
        </Dialog>
      ))}
    </div>
  );
};

export default TestimonyScreenshotsGrid;
