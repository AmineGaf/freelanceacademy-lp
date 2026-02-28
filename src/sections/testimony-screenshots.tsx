import React from "react";

import TestimonyScreenshotsGrid from "@components/testimony-screenshots-grid";
import TitleTicket from "@components/title-ticket";

import { TESTIMONY_SCREENSHOTS_CONTENT } from "@content/testimony-screenshots";

const TestimonyScreenshots = () => {
  return (
    <section className="flex flex-col gap-14 text-gray-100">
      <div className="flex flex-col gap-4 items-center max-w-[41.5625rem] mx-auto text-center">
        <div className="flex flex-col gap-6">
          <h2 className="linear-text bg-text text-center font-gedinarone text-h2 max-lg:text-h3">
            {TESTIMONY_SCREENSHOTS_CONTENT.title}
          </h2>
          <p className="text-light-blue-w1 text-h5 max-lg:text-body-lg font-gedinarone text-center font-normal">
            {TESTIMONY_SCREENSHOTS_CONTENT.subtitle}
          </p>
        </div>
      </div>
      <TestimonyScreenshotsGrid screenshots={TESTIMONY_SCREENSHOTS_CONTENT.screenshots} />
    </section>
  );
};

export default TestimonyScreenshots;
