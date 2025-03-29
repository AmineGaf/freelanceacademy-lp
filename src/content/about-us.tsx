import Investment from "@/components/ui/icons/investment";
import Profit from "@/components/ui/icons/profit";
import User from "@/components/ui/icons/user";

export const ABOUTUS_CONTENT = {
  title: "علاش الفريلانس هو فرصتك الذهبية في 2025؟",
  sub: 
  `الفريلانس ما عادش مجرد "خدمة إضافية" اليوم هو طريق مُثبت للحرية المالية، المرونة، و النمو الشخصي. سواء حاب تعملو كعمل جانبي أو كوظيفة كاملة، الفرص لا تنتهي`,
  cards: [
    {
      icon: <Profit/> ,
      title: "مداخيل بلا حدود",
      desc: "دخلك ما يكونش مربوط بعدد السوايع اللي تخدمها، كل ما تطوّر مهاراتك، تزيد مداخيلك.",
    },
    {
      icon: <Investment />,
      title: "تكاليف منخفضة / ما تحتاجش استثمار كبير",
      desc: "كل اللي يلزمك هو pc، إنترنات، و شوية وقت.",
    },
    {
      icon: <User />,
      title: " تنجم تبدأ من الصفر / ما تحتاج حتى خبرة سابقة",
      desc: "باش تتعلم كل شي خطوة بخطوة، من كيفاش تبني أول بورتفوليو متاعك حتى كيفاش تلقى أول كلاينت",
    },
  ],
};
