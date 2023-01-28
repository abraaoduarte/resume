import React, { FC } from 'react';

interface BadgeProps {
  title: string;
}

export const Badge: FC<BadgeProps> = ({ title }) => {
  return (
    <span className="m-1 inline-flex items-center bg-[#0ba376] px-3 rounded-sm py-1 text-xs font-medium text-white">
      {title}
    </span>
  );
};
