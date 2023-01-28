import { FC } from 'react';

export interface TitleProps {
  title: string;
  secondaryText?: string;
  level?: string;
  size: string;
}

export const Title: FC<TitleProps> = ({
  title,
  secondaryText,
  level = 'h1',
  size,
}) => {
  const HtmlText = `${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className="relative pb-2.5 pr-4 inline-block after:absolute after:z-0 after:opacity-40 after:top-2.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
      <HtmlText className={`${size}	text-white font-Poppins font-semibold mb-2`}>
        {title}{' '}
        {secondaryText && (
          <span className="text-[#0ba376]">{secondaryText}</span>
        )}
      </HtmlText>
    </div>
  );
};
