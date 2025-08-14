import courseOne from "~/assets/images/courses-section/course_1.webp";
import courseTwo from "~/assets/images/courses-section/course_2.webp";
import courseThree from "~/assets/images/courses-section/course_3.webp";
import courseFour from "~/assets/images/courses-section/course_4.webp";
import surprise from "~/assets/images/courses-section/surprise.webp";

export const COURSES_CONTENT = {
  title: "شنوا بش نتعلم؟",
  subtitle:
    "بش تنجم تنجح و توصل للهدف متاعك فما منهجية لازمك تبعها بداية من Mindset العقلية للأساسيات للحاجات المتقدمة و هذا لي كان وراه ترتيب الدورات المسجلة هذي  بجودة عالية و كيفاش حتى تسوق المهارة هذي.",
  courses: [
    {
      order: "الدورة الأولى",
      thumbnail: courseOne,
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
      order: "مفاجأة",
      thumbnail: surprise,
      title: "Secret Bonus",
      description: "",
    },
  ],
};
