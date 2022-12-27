import { Navbar } from 'components/Navbar';
import { PageContent } from 'components/PageContent';
import { Sidebar } from 'components/Sidebar';

export const BaseTemplate = () => {
  return (
    <div className="h-screen bg-page-background flex justify-center items-center">
      {/* TODO: remove color from this div after finish */}
      <div className="flex 2xl:w-9/12 h-5/6 sm:w-11/12	bg-[#57534e] rounded-3xl justify-between">
        <Sidebar />
        <PageContent />
        <Navbar />
      </div>
    </div>
  );
};
