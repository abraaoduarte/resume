import { BaseTemplate } from 'templates/Base';

export const AboutTemplate = () => {
  return (
    <BaseTemplate>
      <div className="relative pb-3.5	mb-7 pr-6 inline-block after:absolute after:opacity-40 after:top-2.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
        <h1 className="text-3xl	text-white font-Poppins font-semibold mb-2">
          About <span className="text-[#0ba376]">Me</span>
        </h1>
      </div>
      <div className="flex mb-14 flex-col md:flex-row">
        <div className="flex-initial md:w-7/12 pr-6">
          <p className="text-[#d5d5d5] text-base font-Poppins">
            Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
            elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
            justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
            hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
            condimentum dictum et vel massa. Ut in imperdiet dolor, vel
            consectetur dui.
          </p>
        </div>
        <div className="flex-initial ">
          <ul>
            <li className="mb-4">
              <span className="text-[#0ba376] mr-3 font-semibold font-Poppins">
                Age
              </span>
              <span className="text-[#d5d5d5] text-base font-Poppins">31</span>
            </li>
            <li className="mb-4">
              <span className="text-[#0ba376] mr-3 font-semibold font-Poppins">
                Residence
              </span>
              <span className="text-[#d5d5d5] text-base font-Poppins">
                Brazil
              </span>
            </li>
            <li className="mb-4">
              <span className="text-[#0ba376] mr-3 font-semibold font-Poppins">
                Email
              </span>
              <span className="text-[#d5d5d5] text-base font-Poppins">
                abraao.n.duarte@gmail.com
              </span>
            </li>
            <li className="mb-4">
              <span className="text-[#0ba376] mr-3 font-semibold font-Poppins">
                Phone
              </span>
              <span className="text-[#d5d5d5] text-base font-Poppins">
                +55 (16) 98824-5113
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative pb-3.5	mb-4 pr-6 inline-block after:absolute after:opacity-40 after:top-2.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
        <h1 className="text-3xl	text-white font-Poppins font-semibold mb-2">
          What <span className="text-[#0ba376]">I do</span>
        </h1>
      </div>
      <div className="">
        <p className="text-[#d5d5d5] text-base font-Poppins">
          Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
          elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
          justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
          hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
          condimentum dictum et vel massa. Ut in imperdiet dolor, vel
          consectetur dui.
        </p>
      </div>
    </BaseTemplate>
  );
};
