import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { Avatar } from 'components/Avatar';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import useComponentVisible from 'hooks/useComponentVisible';
import Link from 'next/link';

export const NavbarMobile = () => {
  const { ref, visible, handleClick, refButton } = useComponentVisible(false);

  return (
    <>
      <button
        ref={refButton}
        onClick={(event) => handleClick(event)}
        className="absolute top-2 right-2 z-[99] lg:hidden"
      >
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-[#0ba376] ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                visible && 'rotate-[42deg]'
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                visible && '-translate-x-10'
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                visible && '-rotate-[42deg]'
              }`}
            ></div>
          </div>
        </div>
      </button>
      <Transition.Root show={visible} as={Fragment}>
        <div className="relative z-10 lg:hidden">
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div
                    ref={ref}
                    className="max-w-xs w-80  overflow-y-scroll bg-[#444] py-6 shadow-xl items-center pointer-events-auto"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-44 h-44 relative">
                        <Avatar />
                      </div>
                      <h1 className="text-3xl	text-white font-Poppins font-semibold mt-4 mb-2">
                        Abraão Duarte
                      </h1>
                      <h2 className="text-lg text-[#aaa]">
                        Software Developer
                      </h2>
                    </div>
                    <nav className="mt-6 flex flex-col w-full items-center">
                      <Link href="/" className="py-3 text-white text-base">
                        Home
                      </Link>
                      <Link href="/about" className="py-3 text-white text-base">
                        About me
                      </Link>
                      <Link
                        href="/resume"
                        className="py-3 text-white text-base"
                      >
                        Resume
                      </Link>
                      <Link href="#" className="py-3 text-white text-base">
                        Portfolio
                      </Link>
                      <Link href="#" className="py-3 text-white text-base">
                        Blog
                      </Link>
                      <Link href="#" className="py-3 text-white text-base">
                        Contact
                      </Link>
                    </nav>
                    <div className="flex items-center justify-center w-full my-6">
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
                    <div className="text-center pb-4 flex items-center flex-col">
                      <button className="text-[#f5f5f5] mb-10 px-10 py-2 border-white border-2 rounded-full hover:text-[#0ba376] hover:bg-white transition ease-in-out delay-150 duration-600">
                        Download CV
                      </button>
                      <span className="text-[#bbb] text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                      </span>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </div>
        </div>
      </Transition.Root>
    </>
  );
};
