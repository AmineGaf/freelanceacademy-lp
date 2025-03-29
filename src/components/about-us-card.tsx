import React, { ReactNode } from "react";
import Card from "@/components/ui/card";
interface IAboutUsCard {
  icon: ReactNode;
  title: string;
  desc: string;
}

const AboutUsCard = ({ icon, title, desc }: IAboutUsCard) => {
  return (
    <Card className="border border-dark-blue shadow-small-card rounded-[32px] py-10 px-6 flex flex-col items-center gap-4">
      <div className="w-16 aspect-square flex justify-center items-center bg-small-icon shadow-small-icon" style={{
        border: "1px solid #2E409C"
      }}>
        {icon}
      </div>
      <h4 className="text-center">{title}</h4>
      <p className="text-center text-grey">{desc}</p>
    </Card>
  );
};

export default AboutUsCard;
