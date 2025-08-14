import testimonierOne from "~/assets/images/testimony-section/Seifeddine Chettaoui.jpg";
import thumbnailOne from "~/assets/images/testimony-section/Seifeddine Chettaoui Thumbnail.png";
import testimonierTwo from "~/assets/images/testimony-section/Taki.png";
import thumbnailTwo from "~/assets/images/testimony-section/Taki Thumbnail.png";
import testimonierThree from "~/assets/images/testimony-section/Intidhar Ben Mrad.png";
import thumbnailThree from "~/assets/images/testimony-section/Intidhar Ben Mrad Thumbnail.png";
import testimonierFour from "~/assets/images/testimony-section/Amine.png";
import thumbnailFour from "~/assets/images/testimony-section/Amine Thumbnail.png";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export interface ITestimonyDetails {
  thumbnail?: string | StaticImport;
  age?: ReactNode;
  income?: ReactNode;
  rating?: number;
  quote?: ReactNode;
  vidTitle?: string;
  videoCode?: string;
}
export interface ITestimonier {
  avatar: StaticImageData;
  name: string;
  age: ReactNode;
  income: ReactNode;
  selected?: boolean;
}

export const TESTIMONY_CONTENT = {
  ticket: "Testimonials",
  title: "تسمعش كلامنا، اسمع كلام الشبيبة لي بدت",
  subtitle: "",
  testimony: {
    users: [
      {
        avatar: testimonierOne,
        name: "سيف الدين الشتاوي",
        age: <span className="font-sora">18</span>,
        income: <span className="font-sora">3000</span>,
      },
      {
        avatar: testimonierTwo,
        name: "تقي الزيتوني",
        age: <span className="font-sora">20</span>,
        income: <span className="font-sora">2000</span>,
      },
      {
        avatar: testimonierThree,
        name: "إنتظار بن مراد",
        age: <span className="font-sora">27</span>,
        income: <span className="font-sora">1000</span>,
      },
      {
        avatar: testimonierFour,
        name: "محمد أمين",
        age: <span className="font-sora">20</span>,
        income: <span className="font-sora">1000</span>,
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
        videoCode: "67e57ca1403562dbea691366",
      },
    ] as ITestimonyDetails[],
  },
};
