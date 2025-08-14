import { IAboutUsCard } from "@/components/feature-card";
import { ReactNode } from "react";
import support from "~/assets/images/features-section/support.png";
import security from "~/assets/images/features-section/security.png";
import live from "~/assets/images/features-section/live.png";
import safe from "~/assets/images/features-section/safe.png";

interface IFeaturesContent {
  ticket: ReactNode;
  title: { top: ReactNode; sub: string };
  cards: IAboutUsCard[];
}

export const FEATURES_CONTENT: IFeaturesContent = {
  ticket: <span>Join The Waitlist Today</span>,
  title: {
    top: <>أحسن اختيار كان تحب</>,
    sub: " تتعلم Freelance",
  },
  cards: [
    {
      image: support,
      title: (
        <>
          دعم <span className="font-sora">24/7</span> على الواتساب:
        </>
      ),
      desc: "عندك مشكل؟ عندك سؤال؟ الفريق موجود بالنهار و الليل باش يعاونك.",
      grid: "col-span-2",
    },
    {
      image: live,
      title: "تتعلم من فريلانسرز ناجحين مازالو يخدمو في المجال:",
      desc: `المدرّسين متاعنا مش مجرد "خبراء"، بل ناس تخدم بالفريلانس يوميًا و ناجحة فيه وهما اللي باش يعلموك كيفاش تنجح بنفس الطريقة.`,
      grid: "col-span-4",
    },
    {
      image: safe,
      title: (
        <>
          <span className="font-sora">6</span> دورات بسعر واحد:
        </>
      ),
      desc: "خريطة طريق كاملة تغطّي كل شي من المبتدئ حتى الاستراتيجيات المتقدّمة و زيد عليها جلسات شهرية و محتوى جديد بصفة مستمرّة.",
      grid: "col-span-3",
    },
    {
      image: security,
      title: "خلاص مرّة وحدة، دخول مدى الحياة:",
      desc: "ما ثماش اشتراكات شهرية أو رسوم خفية. تدفع مرة وحدة و يبقى عندك النفاذ مدى الحياة لكل المحتوى.",
      grid: "col-span-3",
    },
  ],
};
