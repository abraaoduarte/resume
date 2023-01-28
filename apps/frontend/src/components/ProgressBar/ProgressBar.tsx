import { FC } from 'react';

interface ProgressBarProps {
  name: string;
  percentage: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ name, percentage }) => {
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          {name}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {`${percentage}%`}
        </span>
      </div>
      <div className="w-full border border-[#0ba376] rounded-full h-2.5 flex items-center">
        <div
          className={`bg-[#0ba376] h-1.5 rounded-full w-[${percentage}%] border border-[#222]`}
        ></div>
      </div>
    </>
  );
};
