import React, { ReactNode } from "react";

const TitleTicket = ({ content }: { content: ReactNode }) => {
  return (
    <div className="bg-linear-border shadow-border-top rounded-full overflow-hidden w-fit mx-auto">
      <div
        className="w-full py-2 px-8 flex items-center gap-2"
        style={{ background: "#161A20" }}
      >
        <div className="[&>span]:text-blue-w2">{content}</div>
        <div className="relative w-4 aspect-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle opacity="0.33" cx="8" cy="8" r="8" fill="#0057FF" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              className=""
            >
              <circle opacity="0.66" cx="4" cy="4" r="4" fill="#0057FF" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleTicket;
