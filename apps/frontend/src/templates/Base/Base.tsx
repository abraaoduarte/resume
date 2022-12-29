import { FC, ReactNode } from 'react';
import { Sidebar } from 'components/Sidebar';
import { Navbar } from 'components/Navbar';
import { NavbarMobile } from 'components/NavbarMobile';

export interface BaseTemplateProps {
  children: ReactNode;
}

export const BaseTemplate: FC<BaseTemplateProps> = ({ children }) => {
  return (
    <div className="h-screen bg-page-background flex justify-center items-center">
      {/* TODO: remove color from this div after finish */}
      <div className="flex h-screen w-screen lg:w-11/12 xl:w-10/12 lg:h-5/6">
        <div className="w-full bg-[#222] lg:bg-[#444] flex lg:rounded-[35px]">
          <Sidebar />
          <div className="bg-[#222] w-full lg:rounded-[35px] p-8">
            {children}
          </div>
        </div>
        <Navbar />
      </div>
      <NavbarMobile />
    </div>
  );
};
