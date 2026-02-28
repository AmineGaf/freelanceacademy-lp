import testimonierOne from "~/assets/images/testimony-section/Seifeddine Chettaoui.jpg";
import thumbnailOne from "~/assets/images/testimony-section/Seifeddine Chettaoui Thumbnail.png";
import testimonierTwo from "~/assets/images/testimony-section/taher-avatar.png";
import thumbnailTwo from "~/assets/images/testimony-section/taher-thumb.png";
import testimonierThree from "~/assets/images/testimony-section/youssef-avatar.jpg";
import thumbnailThree from "~/assets/images/testimony-section/youssef-thumbnail.png";
import testimonierFour from "~/assets/images/testimony-section/achreb-avatar.jpg";
import thumbnailFour from "~/assets/images/testimony-section/ahcref-thumb.png";
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
  title: "تسمعش كلامنا، اسمع كلام الشبيبة لي بدات",
  subtitle: "",
  testimony: {
    users: [
      {
        avatar: testimonierOne,
        name: "سيف الدين الشتاوي",
        // age: <span className="font-sora">18</span>,
        // income: <span className="font-sora">3000</span>,
      },
      {
        avatar: testimonierTwo,
        name: "محمد طاهر الجويني ",
        // age: <span className="font-sora">20</span>,
        // income: <span className="font-sora">2000</span>,
      },
      {
        avatar: testimonierThree,
        name: "يوسف عمري ",
        // age: <span className="font-sora">27</span>,
        // income: <span className="font-sora">1000</span>,
      },
      {
        avatar: testimonierFour,
        name: "أشرف ",
        // age: <span className="font-sora">20</span>,
        // income: <span className="font-sora">1000</span>,
      },
      {
        avatar: testimonierFour,
        name: "نزار ",
        // age: <span className="font-sora">20</span>,
        // income: <span className="font-sora">1000</span>,
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
          "ما كنتش نتصور اللي بش نلقا ه\ا الكل في freelance academy",
        rating: 5,
        videoCode: "6977eb1411ec7dfcb9605147",
      },
      {
        thumbnail: thumbnailThree,
        vidTitle:
          "زجعت حق ال formation من أول client",
        rating: 5,
        videoCode: "6977eb14c2fb61ce19195652",
      },
      {
        thumbnail: thumbnailFour,
        vidTitle: "ال formation استثمار كاينك خذيت قطعة أرض و قاعد يطلع سومها",
        rating: 5,
        videoCode: "697a4a772e22890817f66579",
      },
      {
        thumbnail: thumbnailFour,
        vidTitle: "ال formation استثمار كاينك خذيت قطعة أرض و قاعد يطلع سومها",
        rating: 5,
        videoCode: "697a4a772e22890817f66579",
      },
    ] as ITestimonyDetails[],
  },
};
