import testimonierOne from "@/assets/images/testimony-section/Seifeddine Chettaoui.jpg";
import thumbnailOne from "@/assets/images/testimony-section/Seifeddine Chettaoui Thumbnail.png";
import testimonierTwo from "@/assets/images/testimony-section/Taki.png";
import thumbnailTwo from "@/assets/images/testimony-section/Taki Thumbnail.png";
import testimonierThree from "@/assets/images/testimony-section/Intidhar Ben Mrad.png";
import thumbnailThree from "@/assets/images/testimony-section/Intidhar Ben Mrad Thumbnail.png";
import testimonierFour from "@/assets/images/testimony-section/Amine.png";
import thumbnailFour from "@/assets/images/testimony-section/Amine Thumbnail.png"
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";

export interface ITestimonyDetails {
  thumbnail?: string | StaticImport;
  age?: number;
  income?: number;
  rating?: number;
  quote?: string;
  vidTitle?: string;
  videoCode?: string;
}
export interface ITestimonier {
  avatar: StaticImageData;
  name: string;
  age: number;
  income: number;
  selected?: boolean;
}

export const TESTIMONY_CONTENT = {
  ticket: "Testimonials",
  title: "تسمعش كلامنا، اسمع كلام الشبيبة لي بدت",
  subtitle:
    "برنامج Agency Navigator مقسم إلى 6 مراحل. يمكنك رؤية ما يوجد في كل مرحلة أدناه.عند الانضمام اليوم، ستحصل أيضًا على وصول إلى برنامجين إضافيين بقيمة 1500 دولار لكل منهما، مجانًا.",
  testimony: {
    users: [
      {
        avatar: testimonierOne,
        name: "سيف الدين الشتاوي",
        age: 18,
        income: 3000,
      },
      {
        avatar: testimonierTwo,
        name: "تقي الزيتوني",
        age: 20,
        income: 2000,
      },
      {
        avatar: testimonierThree,
        name: "إنتظار بن مراد",
        age: 27,
        income: 1000,
      },
      {
        avatar: testimonierFour,
        name: "محمد أمين",
        age: 20,
        income: 1000,
      },
    ] as ITestimonier[],
    details: [
      {
        thumbnail: thumbnailOne,
        vidTitle: "نتعلم و نطبق, و مالشهرالأول رجعت فلوس الدورات اربعة مرات",
        rating: 5,
        videoCode: "67e5259aefb96565b074a991",
      },
      {
        thumbnail: thumbnailTwo,
        vidTitle:
          "كي خذيت الدورة ماشي فيبالي بروحي مقدم ياخي طلعت فاهم 1 بالمئة و ما نعرف شيئ",
        rating: 5,
        videoCode: "67e524bfefb96565b074a29c",
      },
      {
        thumbnail: thumbnailThree,
        vidTitle:
          "اللي قريتو 3 سنين في الجامعة في فرانسا مافادنيش قد ما فادوني الدورات",
        rating: 5,
        videoCode: "67e524bf8331a289e34485ae",
      },
      {
        thumbnail: thumbnailFour,
        vidTitle: "بش يعلمك حاجات حتى و انت مكش فايق اللي تتعلم فاهم",
        rating: 5,
        videoCode: '67e57ca1403562dbea691366'
      },
    ] as ITestimonyDetails[],
  },
};
