import Link from "next/link";

const MainTextAndSubText2 = ({
  mainText,
  subText,
}: {
  mainText: string;
  subText: string;
}) => {
  return (
    <div className="w-[800px] ml-auto mr-auto mb-[8.33vw]">
      <div className="mr-auto ml-auto">
        <h1 className="mt-0 text-2xl mb-[.7em] font-semibold mr-auto ml-auto w-[800px] leading-normal">
          {mainText}
        </h1>
        <p className="mt-0 text-base mb-[.7em] font-normal mr-auto ml-auto w-[800px] leading-normal relative">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default MainTextAndSubText2;
