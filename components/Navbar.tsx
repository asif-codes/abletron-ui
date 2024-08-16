import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <header className="z-[35] relative pt-5 pb-0 overflow-visible min-w-[48em]:pb-[3.75rem]">
      <nav aria-label="primary" className="flex">
        <Link href="/">
          <Image
            src="/ableton.svg"
            alt="logo"
            width={60}
            height={28}
            className="z-30 ml-[40px] mr-[32px] mb-[20px]"
          />
        </Link>
        <ul className="flex justify-between w-[34rem] font-semibold text-lg">
          <Link href="/">
            <li>Live</li>
          </Link>
          <Link href="/">
            <li>Push</li>
          </Link>
          <Link href="/">
            <li>Note</li>
          </Link>
          <Link href="/">
            <li>Link</li>
          </Link>
          <Link href="/">
            <li>Shop</li>
          </Link>
          <Link href="/">
            <li>Packs</li>
          </Link>
          <Link href="/">
            <li>Help</li>
          </Link>
          <Link href="/" className="text-[#ff764d]">
            <li>More +</li>
          </Link>
        </ul>
        <div className="flex justify-between ml-auto mr-[3rem] items-center mb-[15px]">
          <Link href="/" className="text-[#0000ff] text-lg font-semibold mr-7">
            Try Live 12 for free
          </Link>
          <Link href="/" className="text-sm font-semibold">
            Log in or register
          </Link>
        </div>
      </nav>
      <Separator />
      <nav aria-label="secondary">
        <ul className="flex pl-10 py-5 gap-6 text-sm font-semibold">
          <Link href="/" className="text-[#ff764d] ">
            <li>About</li>
          </Link>
          <Link href="/">
            <li>Jobs</li>
          </Link>
          <Link href="/">
            <li>Apprenticeships</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
