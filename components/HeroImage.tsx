import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="">
      <img
        alt="hero-image"
        src="/header.avif"
        className="pl-[8.33vw] pr-[8.33vw] pb-[8.33vw] relative"
      />
      <Image
        alt="text"
        src="/abelton1.svg"
        width={430}
        height={104}
        className="absolute top-[50%] left-[50%] -ml-[215px] -mt-[22px]"
      />
    </div>
  );
};

export default HeroImage;
