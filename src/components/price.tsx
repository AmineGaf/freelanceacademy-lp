import { PRICING_CONTENT } from "@/content/pricing";
import React from "react";

const Price = () => {
  return (
    <div>
      <h4 className="text-right text-grey-w1 line-through">
        {PRICING_CONTENT.main.from}
      </h4>
      <h1 className="text-right text-grey-w1 linear-text bg-price ">
        {PRICING_CONTENT.main.to}
      </h1>
    </div>
  );
};

export default Price;
