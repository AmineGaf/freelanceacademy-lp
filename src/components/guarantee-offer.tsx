import GuardShield from "@/components/ui/icons/GuardShield";
import { SHARED_CONTENT } from "@/content/shared";
import React from "react";

const GuaranteeOffer = () => {
  return (
    <div className="flex gap-2">
      <GuardShield />
      <span className=" font-normal antialiased font-sora text-center text-grey-w1 text-md md:text-xl max-md:text-right">
        {SHARED_CONTENT.gurantee}
      </span>
    </div>
  );
};

export default GuaranteeOffer;
