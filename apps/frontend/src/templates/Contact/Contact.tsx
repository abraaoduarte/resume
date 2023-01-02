import { BaseTemplate } from 'templates/Base';
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const ContactTemplate = () => {
  return (
    <BaseTemplate>
      <div className="relative pb-3.5	mb-7 pr-6 inline-block after:absolute after:z-0 after:opacity-40 after:top-2.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
        <h1 className="text-3xl	text-white relative font-Poppins font-semibold mb-2 z-50">
          Contact
        </h1>
      </div>
      <div className="flex mb-14 flex-col md:flex-row">
        <div className="flex-initial md:w-4/12 pr-6 mb-6">
          <div className="py-5 px-2.5 bg-[#333] border border-[#444] flex items-center flex-col mb-3">
            <GoLocation size={30} className="text-[#0ba376]" />
            <h4 className="font-Poppins font-semibold text-white mt-6">
              Franca - SP
            </h4>
          </div>
          <div className="py-5 px-2.5 bg-[#333] border border-[#444] flex items-center flex-col mb-3">
            <BsTelephone size={30} className="text-[#0ba376]" />
            <h4 className="font-Poppins font-semibold text-white mt-6">
              +55 16 98824-5113
            </h4>
          </div>
          <div className="py-5 px-2.5 bg-[#333] border border-[#444] flex items-center flex-col mb-3">
            <CiMail size={30} className="text-[#0ba376]" />
            <h4 className="font-Poppins font-semibold text-white mt-6">
              abraao.n.duarte@gmail.com
            </h4>
          </div>
          <div className="py-5 px-2.5 bg-[#333] border border-[#444] flex items-center flex-col mb-3">
            <AiOutlineCheckCircle size={30} className="text-[#0ba376]" />
            <h4 className="font-Poppins font-semibold text-white mt-6">
              Freelance Available
            </h4>
          </div>
        </div>
        <div className="flex-initial w-8/12">
          <div className="mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7472.904295036103!2d-47.398683102833026!3d-20.528673044816156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a63ed8bfd9fb%3A0x3e20ef053256db21!2sCidade%20Nova%2C%20Franca%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1672663512621!5m2!1spt-BR!2sbr"
              width="600"
              height="150"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="relative pb-2.5	mb-7 pr-6 inline-block after:absolute after:z-0 after:opacity-40 after:top-1.5 after:right-0 after:h-8 after:w-12 after:bg-[length:6px_6px] after:bg-gradient-green-dotted">
            <h4 className="text-xl	text-white relative font-Poppins font-semibold mb-2 z-50">
              How Can <span className="text-[#0ba376]">I Help You?</span>
            </h4>
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
              <div className="flex-initial md:w-6/12 px-4">
                <div className="mb-4">
                  <label htmlFor="fullName" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="fullName"
                    name="fullName"
                    id="fullName"
                    className="w-full border-2 border-[#999] py-2.5 pr-6 pl-3 bg-transparent text-white font-Poppins rounded-md outline-none focus:border-[#0ba376] transition ease-in-out delay-150 duration-600"
                    placeholder="Full name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border-2 border-[#999] py-2.5 pr-6 pl-3 bg-transparent text-white font-Poppins rounded-md outline-none focus:border-[#0ba376] transition ease-in-out delay-150 duration-600"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="subject"
                    name="subject"
                    id="subject"
                    className="w-full border-2 border-[#999] py-2.5 pr-6 pl-3 bg-transparent text-white font-Poppins rounded-md outline-none focus:border-[#0ba376] transition ease-in-out delay-150 duration-600"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="flex-initial md:w-6/12">
                <textarea
                  placeholder="Message"
                  className="w-full h-full border-2 border-[#999] py-2.5 pr-6 pl-3 bg-transparent text-white font-Poppins rounded-md outline-none focus:border-[#0ba376] transition ease-in-out delay-150 duration-600 resize-none"
                ></textarea>
              </div>
            </div>
            <button className="border-2 border-[#0ba376] py-2 px-6 text-[#f5f5f5] bg-transparent rounded-full mt-4 ml-4 hover:bg-[#0ba376] hover:text-white transition ease-in-out delay-150 duration-600">
              Send message
            </button>
          </form>
        </div>
      </div>
    </BaseTemplate>
  );
};
