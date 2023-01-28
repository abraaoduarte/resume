import { Badge } from 'components/Badge';
import { ProgressBar } from 'components/ProgressBar';
import { Title } from 'components/Title';
import { BaseTemplate } from 'templates/Base';
import { EDUCATION_INFOS, EXPERIENCE_INFOS, SKILLS } from './const';

export const ResumeTemplate = () => {
  return (
    <BaseTemplate>
      <Title title="Resume" level="h1" size="text-3xl" />
      <div />

      <div className="flex mb-14 flex-col md:flex-row">
        <div className="flex-initial md:w-7/12 pr-6">
          <Title title="Education" level="h2" size="text-xl" />

          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {EDUCATION_INFOS.map((education, index) => (
              <li className="mb-10 ml-6" key={index}>
                <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                  <span className="h-2 w-2 bg-[#222] rounded-full"></span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {education.title}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {education.when}
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {education.description}
                </p>
              </li>
            ))}
          </ol>

          <Title title="Experience" level="h2" size="text-xl" />

          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {EXPERIENCE_INFOS.reverse().map((experience) => (
              <li className="mb-10 ml-6" key={experience.order}>
                <span className="flex absolute -left-2 justify-center items-center w-4 h-4 bg-[#0ba376] rounded-full ring-4 ring-[#0ba376] ring-opacity-25">
                  <span className="h-2 w-2 bg-[#222] rounded-full"></span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {experience.when}
                </time>
                <p className="mb-4 text-base font-normal text-gray-400">
                  {experience.company}
                </p>
                <p className="mb-2 font-semibold text-base font-Poppins text-gray-400">
                  I had the following assignments:
                </p>
                <ul className="text-base font-normal text-gray-400 mb-4">
                  {experience.responsabilities.map((responsability, index) => (
                    <li key={index}>✓ {responsability}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex-initial w-5/12">
          <Title
            title="Coding"
            secondaryText="Skills"
            level="h2"
            size="text-xl"
          />
          {SKILLS.map((skill) => (
            <div key={skill.name} className="mb-2">
              <ProgressBar
                name={skill.name}
                percentage={skill.knowledgePercentage}
              />
            </div>
          ))}

          <div className="mt-20">
            <Title title="Knowledges" level="h2" size="text-xl" />
          </div>
          <div className="flex flex-wrap">
            {SKILLS.map((skill) => (
              <Badge key={skill.name} title={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
};
