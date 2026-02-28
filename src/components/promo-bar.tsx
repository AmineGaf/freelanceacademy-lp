import React from "react";

const PromoBar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-black-w1/95 border-b border-red-500/40 backdrop-blur-sm">
      <div className="container-width mx-auto flex items-center justify-center gap-3 px-mob-x py-2">
        <div
          className="relative flex h-7 w-7 shrink-0 items-center justify-center [filter:drop-shadow(0_0_12px_rgba(248,113,113,0.65))]"
          aria-hidden
        >
          <svg width="24" height="21" viewBox="0 0 24 21" fill="none">
            <path
              d="M12 0L24 21H0L12 0Z"
              fill="rgba(239,68,68,0.2)"
              stroke="rgba(248,113,113,0.7)"
              strokeWidth="1.5"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center mt-1 text-[11px] font-bold text-red-300">
            !
          </span>
        </div>
        <p className="font-gedinarone text-body-sm sm:text-body-lg text-light-blue-w1 text-center">
          اخر فرصة بش تنظم و تتعلم{" "}
          <span className="text-blue-w2">Freelance</span>
          {", "}قيد قبل ما تفوتك!
        </p>
      </div>
    </div>
  );
};

export default PromoBar;

