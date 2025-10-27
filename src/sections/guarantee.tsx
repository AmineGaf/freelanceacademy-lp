import React from "react";

import Fast from "@components/ui/icons/fast";
import GuaranteeI from "@components/ui/icons/guarantee-i";
import Security from "@components/ui/icons/security";
import Updates from "@components/ui/icons/updates";

const Guarantee = () => {
  return (
    <section className="pt-0">
      <div className="shadow-guarantee grid lg:grid-cols-4 text-gray-100 sm:grid-cols-2 px-4 gap-4 rounded-3xl border border-blue-w1">
        <div className="w-full flex items-center justify-center gap-3 px-4 py-10 text-body-lg">
          <span>شراء آمن</span>
          <Fast />
        </div>
        <div className="w-full flex items-center justify-center gap-3 px-4 py-10 text-body-lg">
          <span>تحديث دائم</span>
          <GuaranteeI />
        </div>
        <div className="w-full flex items-center justify-center gap-3 px-4 py-10 text-body-lg">
          <span>مُفعَّل مدى الحياة</span>
          <Updates />
        </div>
        <div className="w-full flex items-center justify-center gap-3 px-4 py-10 text-body-lg">
          <span>دخول فوري</span>
          <Security />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
