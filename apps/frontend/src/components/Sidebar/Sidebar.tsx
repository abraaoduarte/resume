import { Avatar } from 'components/Avatar';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className="h-full overflow-y-auto max-w-sm w-full rounded-l-3xl flex-col justify-between items-center hidden lg:flex">
      <div className="flex items-center flex-col">
        <div className="mt-20 h-44 w-44">
          <Avatar />
        </div>
        <h1 className="text-4xl font-semibold	text-[#f5f5f5] mt-5 font-Poppins">
          Abraão Duarte
        </h1>
        <h2 className="text-lg font-light font-Poppins text-[#bbb]">
          Software Developer
        </h2>
        {/* TODO: Create a custom button with options */}
        <div className="flex items-center justify-center w-full mt-6">
          <a
            href="https://www.linkedin.com/in/abra%C3%A3o-duarte/"
            target="_blank"
            className="text-white mr-3 p-2 hover:bg-white/[.2] hover:p-2 hover:rounded-full"
            rel="noreferrer"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://github.com/abraaoduarte"
            target="_blank"
            className="text-white mr-3 p-2 hover:bg-white/[.2] hover:p-2 hover:rounded-full"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://twitter.com/AbraaoNDuarte"
            target="_blank"
            className="text-white p-2 hover:bg-white/[.2] hover:p-2 hover:rounded-full"
            rel="noreferrer"
          >
            <FaTwitter size={22} />
          </a>
        </div>
      </div>
      <div className="text-center pb-4 flex items-center flex-col">
        <button className="text-[#f5f5f5] mb-10 px-10 py-2 border-white border-2 rounded-full hover:text-[#0ba376] hover:bg-white transition ease-in-out delay-150 duration-600">
          Download CV
        </button>
        <span className="text-[#bbb] text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </div>
  );
};
