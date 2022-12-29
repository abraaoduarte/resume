import { BaseTemplate } from 'templates/Base';

export const HomeTemplate = () => {
  return (
    <BaseTemplate>
      <div className="flex justify-center items-center flex-col h-full">
        <h1 className="text-5xl	text-white font-Poppins font-semibold mb-2">
          Abraão Duarte
        </h1>
        <h2 className="text-lg text-[#aaa]">Software Developer</h2>
      </div>
    </BaseTemplate>
  );
};
