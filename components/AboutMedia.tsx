import Image from "next/image";

const AboutMedia = () => {
  return (
    <div className="w-[800px] ml-auto mr-auto mb-[133.333px] relative">
      <Image
        src="/poster-juanpe.avif"
        width={784}
        height={384}
        alt="poster"
        className=""
      />
      <p className="p-[.625rem] m-0 max-w-[19vw] text-xs font-semibold">Why Ableton - Juanpe Bolivar</p>
      {/* <span className="h-[6.25rem] w-[6.26rem] bg-blue-600  flex items-center justify-center min-h-0 p-0 rounded-[50%] mr-auto ml-auto z-[1]" /> */}
    </div>
  );
};

export default AboutMedia;
