import AboutCollage from "@/components/AboutCollage";
import AboutCollage2 from "@/components/AboutCollage2";
import AboutMedia from "@/components/AboutMedia";
import HeroImage from "@/components/HeroImage";
import HeroImage2 from "@/components/HeroImage2";
import HeroImage3 from "@/components/HeroImage3";
import MainTextAndSubText from "@/components/MainTextAndSubText";
import MainTextAndSubText2 from "@/components/MainTextAndSubText2";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div id="main" className="max-w-[100rem] m-auto bg-[#fff]">
      <Navbar />
      <main>
        <HeroImage />
        <MainTextAndSubText />
        <AboutCollage />
        <MainTextAndSubText2
          mainText="Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
          subText="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
        />
        <AboutMedia />
        <MainTextAndSubText2
          mainText="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
          subText="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
        />
        <AboutCollage2 />
        <MainTextAndSubText2
          mainText="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
          subText="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."
        />
        <HeroImage2 />
        <MainTextAndSubText2
          mainText="We’re passionate about what we do, but we’re equally passionate about improving who we are."
          subText="We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices."
        />
        <HeroImage3 />
      </main>
    </div>
  );
}
