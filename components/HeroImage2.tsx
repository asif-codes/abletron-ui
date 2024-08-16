import Image from "next/image";

const HeroImage2 = () => {
  return (
    <div className="ml-[133.333px] mr-[133.333px] w-auto">
      <Image src="/poster-meet-the-makers.avif" width={1333} height={750} alt="poster" className="mb-[133.33px]"/>
    </div>
  );
};

export default HeroImage2;
