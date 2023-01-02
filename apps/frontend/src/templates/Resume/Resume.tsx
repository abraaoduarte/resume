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
                Information systems (Bachelor´s degree)
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                UNIFRAN (2011-2014)
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                The Bachelor's Degree in Information Systems provides good
                mathematical training and solid training in computing, mainly
                programming techniques and methodologies to develop these
                systems. In addition, it provides strong business training, a
                vision of organizational dynamics, basic knowledge of
                legislation and entrepreneurship. The course offers academic
                majors in three areas: Decision Support Systems; Network
                Management; and Web Application Engineering. The objective of
                these majors is to study subjects in depth that are seen
                throughout the course, providing students with valuable specific
                knowledge for their professional life.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Administration Technician
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                ETEC dr. Júlio Cardoso (2009-2010)
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                The Administration Technician is the professional who controls
                the administrative routine of companies. Collaborates in
                strategic, tactical and operational planning. It carries out
                activities in human resources and mediates labor for job
                placement and outplacement. Operates in the purchasing area;
                assists in the accounting sector and advises the Sales area. It
                exchanges goods and services and performs activities in the
                fiscal and financial areas.
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
                Software Developer at Kellton Tech
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                08/2021 - Current
              </time>
              <p className="mb-4 text-base font-normal text-gray-400">
                Kellton is a “Born Digital” technology consulting and IT
                services company that delivers innovative solutions and
                exceptional business value.
              </p>
              <p className="mb-2 font-semibold text-base font-Poppins text-gray-400">
                Technologies:
              </p>
              <ul className="text-base font-normal text-gray-400 mb-4">
                <li>✓ Node</li>
                <li>✓ Typescript</li>
                <li>✓ React/React Native/VueJS</li>
                <li>✓ Firebase</li>
              </ul>
              <p className="mb-2 font-semibold text-base font-Poppins text-gray-400">
                I had the following assignments:
              </p>
              <ul className="text-base font-normal text-gray-400 mb-4">
                <li>✓ Maintenance in the various systems and microservices</li>
                <li>✓ Creation of new products</li>
                <li>✓ Implementation of new features</li>
              </ul>
            </li>
            <li className="mb-10 ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Software Developer at Editora Globo
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                01/2020 - 07/2021
              </time>
              <p className="mb-4 text-base font-normal text-gray-400">
                Editora Globo is a company that is part of the Globo group and
                has dozens of products with a large amount of access. I work as
                a software developer, and I am part of the team that takes care
                of more than 15 magazines in the company.
              </p>
              <p className="mb-2 font-semibold text-base font-Poppins text-gray-400">
                Technologies:
              </p>
              <ul className="text-base font-normal text-gray-400 mb-4">
                <li>✓ Node</li>
                <li>✓ Typescript</li>
                <li>✓ Python</li>
                <li>✓ MySql</li>
                <li>✓ React/Nextjs</li>
              </ul>
              <p className="mb-2 font-semibold text-base font-Poppins text-gray-400">
                I had the following assignments:
              </p>
              <ul className="text-base font-normal text-gray-400 mb-4">
                <li>✓ Maintenance in the various systems and microservices</li>
                <li>✓ Creation of new products</li>
                <li>✓ Implementation of new features</li>
                <li>✓ Creation of routines in python for data migration.</li>
              </ul>
            </li>
            <li className="mb-10 ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Software Developer at MazzaTech
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                02/2018 - 12/2020
              </time>
              <p className="mb-4 text-base font-normal text-gray-400">
                MazzaFC is a software factory, so I had the opportunity to
                create projects from scratch and have contact with various
                technologies.
              </p>
              <p className="mb-2 font-semibold text-base font-Poppins text-gray-400">
                Technologies:
              </p>
              <ul className="text-base font-normal text-gray-400 mb-4">
                <li>✓ Node/Express</li>
                <li>✓ PHP/Laravel</li>
                <li>✓ MySql/Postgres/MongoDB</li>
                <li>✓ React/React Native</li>
                <li>✓ AWS/SQS</li>
              </ul>
              <p className="mb-2 font-semibold text-base font-Poppins text-gray-400">
                I had the following assignments:
              </p>
              <ul className="text-base font-normal text-gray-400 mb-4">
                <li>✓ Creation of MySql procedures for data migration.</li>
                <li>✓ Participation in requirements gathering meetings</li>
                <li>✓ Customer support</li>
                <li>✓ Creation of new products</li>
                <li>✓ Maintenance on existing systems</li>
              </ul>
            </li>
            <li className="mb-10 ml-6">
              <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                <span className="h-2 w-2 bg-[#222] rounded-full"></span>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Software Developer at Flag Brasil
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                03/2014 - 01/2018
              </time>
              <p className="mb-4 text-base font-normal text-gray-400">
                I worked on internals and externals products where I got my
                first job as software developer.
              </p>
              <p className="mb-4 text-base font-normal text-gray-400">
                My responsibilities were to implement new systems, evolve
                existing systems, create websites, deployment and give support
                to clients.
              </p>
              <p className="mb-2 font-semibold text-base font-Poppins text-gray-400">
                Technologies:
              </p>
              <ul className="text-base font-normal text-gray-400 mb-4">
                <li>✓ PHP</li>
                <li>✓ MySql</li>
                <li>✓ CSS</li>
                <li>✓ HTML</li>
              </ul>
              <p className="mb-2 font-semibold text-base font-Poppins text-gray-400">
                I had the following assignments:
              </p>
              <ul className="text-base font-normal text-gray-400 mb-4">
                <li>✓ Development and maintenance of internal systems</li>
                <li>
                  ✓ Participation in the development and implementation of ERP
                  for Church Management
                </li>
                <li>✓ Database analysis and modeling.</li>
                <li>✓ Website development and maintenance</li>
              </ul>
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
