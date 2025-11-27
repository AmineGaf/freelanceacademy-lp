import courseOne from "~/assets/images/courses-section/course_1.png";
import courseTwo from "~/assets/images/courses-section/course_2.png";
import courseThree from "~/assets/images/courses-section/course_3.png";
import courseFour from "~/assets/images/courses-section/course_4.webp";
import courseFive from "~/assets/images/courses-section/course_5.png";
import courseSix from "~/assets/images/courses-section/course_6.png";

export const COURSES_CONTENT = {
  title: "شنوا بش نتعلم؟",
  subtitle:
    "بش تنجم تنجح و توصل للهدف متاعك فما منهجية لازمك تبعها بداية من Mindset العقلية للأساسيات للحاجات المتقدمة و هذا لي كان وراه ترتيب الدورات المسجلة هذي  بجودة عالية و كيفاش حتى تسوق المهارة هذي.",
  courses: [
    {
      order: "الدورة الأولى",
      thumbnail: courseOne,
      isPremium: false,
      title: "Freelance Mastery",
      description:
        "دورة شاملة للعمل الحر تشمل المهارات الأساسية، بناء العقلية، تقنيات البيع، الدفع، وتحسين تقديم الخدمات. تعلم كيفية التوسع وتطوير عملك بنجاح.",
      duration: (
        <>
          <span className="font-sora">3</span> ساعات و{" "}
          <span className="font-sora">10</span> دقيقة
        </>
      ),
    },
    {
      order: "الدورة الثانية",
      thumbnail: courseTwo,
      isPremium: false,
      title: "Content Craft",
      description:
        "Course تعلمك صناعة المحتوى ,كيفاش تعمل اول فيديو حتى بتاليفون, كيفاش تنجم تستغلها ك Freelancer و كيفاش حتى تجيب برشا Views",
      duration: (
        <>
          <span className="font-sora">1</span> ساعات و{" "}
          <span className="font-sora">32</span> دقيقة
        </>
      ),
    },
    {
      order: "الدورة الثالثة",
      thumbnail: courseFour,
      isPremium: false,
      title: "Shorts Playbook",
      description:
        "تحب تتعلم Editing كما فديوات قصي بضبط ؟ سيف و قصي بش يعلموك من صفر كيفاش تنجم تمنتج فديوات بجودة عالية و كيفاش حتى تسوق المهارة هذي.",
      duration: (
        <>
          <span className="font-sora">3</span> ساعات و{" "}
          <span className="font-sora">11</span> دقيقة
        </>
      ),
    },
    {
      order: "الدورة الرابعة",
      isPremium: false,
      thumbnail: courseThree,
      title: "Meta School",
      description:
        "Media Buying او ما يعرف ب Sponsoring في تونس مهارة مهمة لأي صاحب مشروع و قادرة تدخلو برشا فلوس. اذاكا علاه تنجم تعرضها على اي مشروع و تخلص و هذا شنوة بش تتعلم مع بشير الي استغلها و دخل منها فلوس كFreelancer.",
      duration: (
        <>
          <span className="font-sora">3</span> ساعات
        </>
      ),
    },
    {
      order: "الدورة الخامسة",
      thumbnail: courseFive,
      isPremium: false,
      title: "Winner's Mindset",
      description:
        "دورة تساعدك على بناء عقلية النمو، تعزيز الثقة والانضباط، فهم قوة علم الأعصاب، واتخاذ خطوات عملية نحو النجاح. رحلة عملية لتطوير صورتك الذاتية واكتشاف العملية الحقيقية للوصول إلى أهدافك.",
      duration: (
        <>
          <span className="font-sora">3</span> ساعات
        </>
      ),
    },
    {
      order: "الدورة السادسة",
      isPremium: true,
      thumbnail: courseSix,
      title: "Scale Mastery",
      description:
        " Scale Mastery دورة عملية تنقلك من مجرد فريلانسر إلى صاحب وكالة متكاملة. ستتعلم كيف تغيّر عاداتك وتبني أنظمة قوية، تجذب العملاء عبر استراتيجيات فعّالة، وتفوض العمل من خلال التوظيف الذكي. خطوة بخطوة، ستكتشف كيف تنتقل من العمل الفردي إلى بناء فريق، تطوير عادات قيادية، وصناعة علامة تجارية قوية تثبت حضورك في السوق.",
      duration: (
        <>
          <span className="font-sora">3</span> ساعات
        </>
      ),
    },
    // {
    //   order: "مفاجأة",
    //   thumbnail: surprise,
    //   title: "Secret Bonus",
    //   description: "",
    // },
  ],
};
