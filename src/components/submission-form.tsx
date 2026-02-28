"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import GuaranteeOffer from "@components/guarantee-offer";
import { PRICING_CONTENT } from "@content/pricing";
import { SHARED_CONTENT } from "@content/shared";
import { useFacebookPixel, trackFacebookEvent } from "@hooks/use-facebook-pixel";

type FormValues = Record<string, string>;

const SubmissionForm = () => {
  const formContent = PRICING_CONTENT.form;
  const pixelId = "785636104090927";

  useFacebookPixel(pixelId);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    trackFacebookEvent("Lead", {
      content_name: "Freelance Academy Form Submission",
      form_data: JSON.stringify(data),
    });

    const phone = "21693912041";
    let message = "عسلامة، نحب نسجل في الأكاديمي\n\n";
    for (const item of formContent.items) {
      const value = data[item.value as keyof FormValues] || "";
      message += `${item.label}: ${value}\n`;
    }

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {formContent.items.map((element) => (
        <div className="flex flex-col gap-2" key={element.value}>
          <label htmlFor={element.value} className="text-grey-w1 text-right font-sans font-light text-h5 transition-colors duration-200 hover:text-grey-w0">
            {element.label}
          </label>
          <input
            type={element.type}
            id={element.value}
            {...register(element.value, { required: `${element.label} مطلوب` })}
            className="text-grey-w1 text-right font-sans font-light text-h5 bg-black-w1 border border-dark-blue rounded-lg p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-w2 focus:ring-opacity-50 focus:border-blue-w2 focus:shadow-lg focus:shadow-blue-w2/20 hover:border-blue-w3 hover:shadow-md hover:shadow-blue-w3/10 placeholder:text-grey/60"
            placeholder={`أدخل ${element.label.toLowerCase()}`}
          />
          {errors[element.value] && <p className="text-sm text-red-500">{errors[element.value]?.message}</p>}
        </div>
      ))}

      <div className="flex flex-col gap-4 items-start">
        <button type="submit" disabled={isSubmitting} className="px-6 py-3 rounded-lg bg-dark-blue text-grey-w0 text-sm font-medium hover:bg-blue-w3 transition-colors">
          {isSubmitting ? "جاري الإرسال..." : SHARED_CONTENT.callToAction}
        </button>
        <GuaranteeOffer />
      </div>
    </form>
  );
};

export default SubmissionForm;
