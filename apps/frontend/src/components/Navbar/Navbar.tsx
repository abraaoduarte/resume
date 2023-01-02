import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import { SlGraduation } from 'react-icons/sl';
import { MdOutlineWorkOutline, MdOutlineArticle } from 'react-icons/md';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <nav className="bg-[#444] rounded-full p-6 ml-4 flex flex-col justify-center items-center">
        <Link
          href="/"
          className="text-white hover:text-[#0ba376] relative mb-6"
        >
          <AiOutlineHome size={30} />
          {/* <span className="absolute z-10 w-auto">Home</span> */}
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-[#0ba376] relative mb-6"
        >
          <IoPersonOutline size={30} />
        </Link>
        <Link
          href="/resume"
          className="text-white hover:text-[#0ba376] relative mb-6"
        >
          <SlGraduation size={30} />
        </Link>
        {/* <Link
          href="#"
          className="text-white hover:text-[#0ba376] relative mb-6"
        >
          <MdOutlineWorkOutline size={30} />
        </Link>
        <Link
          href="#"
          className="text-white hover:text-[#0ba376] relative mb-6"
        >
          <MdOutlineArticle size={30} />
        </Link> */}
        <Link
          href="/contact"
          className="text-white hover:text-[#0ba376] relative"
        >
          <AiOutlineMail size={30} />
        </Link>
      </nav>
    </div>
  );
};
