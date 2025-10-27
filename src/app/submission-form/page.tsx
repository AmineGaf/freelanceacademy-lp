"use client";

import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

import Price from "@components/price";
import PricingStar from "@components/ui/icons/pricing-star";
import brandLogo from "~assets/images/BrandLogo.webp";
import { PRICING_CONTENT } from "@content/pricing";
import SubmissionForm from "@components/submission-form";

const Page = () => {
  const mainContent = PRICING_CONTENT.main;
  const formContent = PRICING_CONTENT.form;

  return (
    <div className="flex w-full flex-col jåustify-center items-center bg-background p-5 md:py-10 md:px-0">
      <div className="w-full max-w-6xl mb-6 flex justify-end">
        <Link
          href="/"
          className="px-4 py-2 rounded-xl text-sm font-medium text-gray-200 bg-dark-blue hover:bg-blue-w3 transition-colors"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-9 gap-10 text-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 p-8 md:p-12 rounded-[2.5rem] flex flex-col gap-8 relative w-full border border-dark-blue shadow-pricing overflow-hidden bg-background"
        >
          <div className="relative flex flex-col gap-8">
            <div className="flex flex-col gap-6" dir="rtl">
              <h1 className="text-grey-w0 text-right font-gedinarone text-h2">
                {formContent.title}
              </h1>
              <p className="text-grey-w1 text-right font-sans font-light text-h5">
                {formContent.subtitle}
              </p>
            </div>

            <SubmissionForm />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4 p-8 md:p-12 rounded-[2.5rem] flex flex-col gap-8 relative w-full overflow-hidden bg-black-w1 border border-dark-blue"
        >
          <div className="relative flex flex-col gap-8">
            <div className="flex flex-col gap-6" dir="rtl">
              <div className="flex justify-start">
                <Image
                  src={brandLogo}
                  className="object-cover"
                  alt="Freelance Academy"
                  width={150}
                  height={38}
                />
              </div>
              <h1 className="text-grey-w0 text-right font-gedinarone text-h2">
                {mainContent.title}
              </h1>
            </div>

            <Price />

            <div className="flex flex-col gap-10">
              <div className="flex w-full flex-col items-start max-lg:items-center">
                <ul className="flex gap-3 flex-col items-start">
                  {mainContent.items.map((element) => (
                    <li className="flex items-start gap-3" key={uuidv4()}>
                      <div className="w-6 aspect-square mt-1 rounded-full bg-pricing-star shadow-small-icon border border-blue-w3 flex items-center justify-center">
                        <PricingStar />
                      </div>
                      <h5 className="text-grey-w1 [&>span]:text-blue font-normal">
                        {element.content}
                      </h5>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
