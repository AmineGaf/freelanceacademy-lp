import Fast from "@/assets/icons/fast";
import GuaranteeI from "@/assets/icons/guarantee-i";
import Security from "@/assets/icons/security";
import Updates from "@/assets/icons/updates";
import React from "react";

const Guarantee = () => {
  return (
    <section className="pt-0">
      <div className="shadow-guarantee grid lg:grid-cols-4 sm:grid-cols-2 px-4 gap-4 rounded-3xl border border-blue-w1">
        <div className="w-full flex items-center justify-center gap-3 px-4 py-10 text-lg">
          <span>شراء آمن</span>
          <Fast />
        </div>
        <div className="w-full flex items-center justify-center gap-3 px-4 py-10 text-lg">
          <span>تحديث دائم</span>
          <GuaranteeI />
        </div>
        <div className="w-full flex items-center justify-center gap-3 px-4 py-10 text-lg">
          <span>مُفعَّل مدى الحياة</span>
          <Updates />
        </div>
        <div className="w-full flex items-center justify-center gap-3 px-4 py-10 text-lg">
          <span>دخول فوري</span>
          <Security />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
