import { BaseTemplate } from 'templates/Base';

export const ResumeTemplate = () => {
  return (
    <BaseTemplate>
      <div className="relative pb-3.5	mb-7 pr-6 inline-block after:absolute after:z-0 after:opacity-40 after:top-2.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
        <h1 className="text-3xl	text-white relative font-Poppins font-semibold mb-2 z-50">
          Resume
        </h1>
      </div>
      <div />

      <div className="flex mb-14 flex-col md:flex-row">
        <div className="flex-initial md:w-7/12 pr-6">
          <div className="relative pb-2.5	mb-7 pr-4 inline-block after:absolute after:z-0 after:opacity-40 after:top-2.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
            <h2 className="text-xl text-white relative font-Poppins font-semibold mb-2 z-50">
              Education
            </h2>
          </div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Application UI v2.0.0{' '}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  Latest
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 13th, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{' '}
                Download ZIP
              </a>
            </li>
            <li className="mb-10 ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Figma v1.3.0
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 7th, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.2.2
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
          <div className="relative pb-2.5	mb-7 pr-4 inline-block after:absolute after:z-0 after:opacity-40 after:top-2.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
            <h2 className="text-xl text-white font-Poppins font-semibold mb-2 z-50">
              Experience
            </h2>
          </div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Application UI v2.0.0{' '}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  Latest
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 13th, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{' '}
                Download ZIP
              </a>
            </li>
            <li className="mb-10 ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Figma v1.3.0
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 7th, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.2.2
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
        <div className="flex-initial w-5/12">
          <div className="relative pb-2.5	mb-7 pr-4 inline-block after:absolute after:z-0 after:opacity-40 after:top-2.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
            <h2 className="text-xl text-white font-Poppins font-semibold mb-2 z-50">
              Coding <span className="text-[#0ba376]">Skills</span>
            </h2>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-blue-700 dark:text-white">
              HTML
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              45%
            </span>
          </div>
          <div className="w-full border border-[#0ba376] rounded-full h-2.5 flex items-center">
            <div className="bg-[#0ba376] h-1.5 rounded-full w-6/12 border border-[#222]"></div>
          </div>
          <div className="relative pb-2.5	mb-7 pr-4 inline-block after:absolute after:z-0 after:opacity-40 after:top-2.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
            <h2 className="text-xl relative	text-white font-Poppins font-semibold mb-2 z-50">
              Knowledges
            </h2>
          </div>
          <div className="flex flex-wrap">
            <span className="m-1 inline-flex items-center bg-[#0ba376] px-3 rounded-sm py-1 text-xs font-medium text-white">
              Badge asd asd asd
            </span>
            <span className="m-1 inline-flex items-center bg-[#0ba376] px-3 rounded-sm py-1 text-xs font-medium text-white">
              Badge
            </span>
            <span className="m-1 inline-flex items-center bg-[#0ba376] px-3 rounded-sm py-1 text-xs font-medium text-white">
              Badge
            </span>
            <span className="m-1 inline-flex items-center bg-[#0ba376] px-3 rounded-sm py-1 text-xs font-medium text-white">
              Badge
            </span>
            <span className="m-1 inline-flex items-center bg-[#0ba376] px-3 rounded-sm py-1 text-xs font-medium text-white">
              Badge
            </span>
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
};
