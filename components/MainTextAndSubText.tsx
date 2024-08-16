import Link from "next/link";

const MainTextAndSubText = () => {
  return (
    <div className="w-[50vw] ml-auto mr-auto mb-[8.33vw]">
      <div className="mr-auto ml-auto">
        <h1 className="mt-0 text-2xl mb-[.7em] font-semibold mr-auto ml-auto w-[800px] leading-normal">
          We make{" "}
          <Link className="text-[#0000ff]" href="/">
            Live
          </Link>
          ,{" "}
          <Link className="text-[#0000ff]" href="/">
            Push
          </Link>
          ,{" "}
          <Link className="text-[#0000ff]" href="/">
            Note
          </Link>{" "}
          and{" "}
          <Link className="text-[#0000ff]" href="/">
            Link
          </Link>{" "}
          — unique software and hardware for music creation and performance.
          With these products, our community of users creates amazing things.
        </h1>
        <p className="mt-0 text-base mb-[.7em] font-normal mr-auto ml-auto w-[800px] leading-normal relative">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
    </div>
  );
};

export default MainTextAndSubText;
