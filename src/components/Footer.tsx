import * as React from "react";

export function Footer() {
  return (
    <div className="flex justify-center items-center px-16 py-14 bg-gray-800 max-md:px-5">
      <div className="w-full max-w-[979px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="text-lg font-bold leading-7 text-gray-200 max-md:max-w-full">
                Gita <span className="text-gray-200">Suputra</span>
              </div>
              <div className="flex gap-5 justify-between self-start mt-14 text-base leading-6 text-gray-300 max-md:mt-10 max-md:ml-2.5">
                <div className="justify-center py-2 underline whitespace-nowrap">
                  linkedin
                </div>
                <div className="justify-center py-2 underline whitespace-nowrap">
                  github
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-2 text-base leading-6 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg font-bold text-gray-200 max-md:max-w-full">
                Stay tuned
              </div>
              <div className="mt-9 mr-11 text-gray-300 max-md:mr-2.5 max-md:max-w-full">
                Join 132 other followers and sign up to receive the latest news from me.
              </div>
              <div className="flex gap-0 px-px mt-6 text-sm leading-5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="justify-center items-start px-4 py-5 bg-gray-700 text-ellipsis text-gray-200 max-md:pr-5">
                  <input type="email" className="bg-gray-700 text-gray-200" placeholder="Enter your Email here" />
                </div>
                <div className="justify-center items-start px-4 py-5 bg-gray-800 text-ellipsis text-gray-100 max-md:pr-5">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
