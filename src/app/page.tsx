import BlueGlowing from "@/components/blue-glowing";
import AboutUs from "@/sections/about-us";
import Content from "@/sections/content";
import Faq from "@/sections/faq";
import Features from "@/sections/features";
import Guarantee from "@/sections/guarantee";
import Hero from "@/sections/hero";
import Pricing from "@/sections/pricing";
import Testimony from "@/sections/testimony";

export default function Home() {
  return (
    <div>
      <Hero />
      <Guarantee />
      <div className="bg-section-container w-full rounded-s-[64px] rounded-e-[64px] relative p-1 pb-0 shadow-section-border">
        <BlueGlowing />
        <AboutUs />
      </div>
      <Features />
      <Testimony />
      <Pricing />
      <Faq />
    </div>
  );
}
