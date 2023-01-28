import { Title } from 'components/Title';
import { BaseTemplate } from 'templates/Base';

const PERSONAL_INFORMATIONS = {
  age: (age: number) => age,
  residente: 'Brazil',
  email: 'abraao.n.duarte@gmail.com',
  phone: '+55 (16) 98824-5113',
};

export const AboutTemplate = () => {
  const calculateAge = () => {
    const diff = Date.now() - new Date(1992, 1, 6).getTime();
    const age = new Date(diff);

    return Math.abs(age.getUTCFullYear() - 1970);
  };

  return (
    <BaseTemplate>
      <Title title="About" secondaryText="Me" level="h1" size="text-3xl" />
      <div className="flex mb-14 flex-col md:flex-row">
        <div className="flex-initial md:w-7/12 pr-6">
          <p className="text-[#d5d5d5] text-base font-Poppins">
            My name is Abraão, I am graduated in Information System. I&apos;ve
            been working as a Software Developer since 2015. <br />
          </p>
        </div>
        <div className="flex-initial ">
          <ul>
            {Object.values(PERSONAL_INFORMATIONS).map((value, index) => (
              <li className="mb-4" key={index}>
                <span className="text-[#0ba376] mr-3 font-semibold font-Poppins capitalize">
                  {Object.keys(PERSONAL_INFORMATIONS)[index]}
                </span>
                <span className="text-[#d5d5d5] text-base font-Poppins">
                  {typeof value === 'function' ? value(calculateAge()) : value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Title title="What" secondaryText="I do" level="h2" size="text-3xl" />
      <div className="">
        <p className="text-[#d5d5d5] text-base font-Poppins">
          I love to code new projects to expand my knowledge and skills, I like
          to share knowledge with people and help them. Likewise, I like to
          study about clean code, design patterns and best practices. <br />
          <br />
          Something that I value is working with teams that help each other and
          is always searching evolving. <br />
          <br />
          In my current moment, I&apos;m working as fullstack developer, working
          with Node | Typescript | React | Nextjs and Python. <br />
          <br />
          In my free time I like to cycling, play soccer, watch series and
          building stuffs with code.
        </p>
      </div>
    </BaseTemplate>
  );
};
