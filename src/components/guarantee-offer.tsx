import React from "react";

import GuardShield from "@components/ui/icons/GuardShield";
import { SHARED_CONTENT } from "@content/shared";

const GuaranteeOffer = () => {
  return (
    <div className="flex gap-2">
      <GuardShield />
      <span className=" font-normal antialiased font-gedinarone text-center text-grey-w1 text-body md:text-body-xl max-md:text-right">
        {SHARED_CONTENT.gurantee}
      </span>
    </div>
  );
};

export default GuaranteeOffer;
