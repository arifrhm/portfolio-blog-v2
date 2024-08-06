import * as React from "react";
import ImageSlider from "./ImageSlider";

export function AboutMeSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center pl-8 w-full max-md:pl-5 max-md:max-w-full">
        <div className="relative mt-36 w-full max-w-[979px] max-md:mt-10 max-md:max-w-full">
          {/* Ensure this div has `relative` positioning to avoid issues */}
          <ImageSlider />
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pr-3.5 text-3xl font-bold leading-8 text-neutral-700 max-md:mt-10">
                <div>A little </div>
                <div>about me</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pr-6 pb-10 mt-10 text-base leading-6 text-neutral-700 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  I am a data scientist and a researcher. My passion is working
                  with hidden pattern recognition,{" "}
                </div>
                <div className="max-md:max-w-full">
                  data mining and dataviz. My goal is to optimize world
                  processes by using data.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-0 w-full max-w-[901px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-7 text-base leading-6 text-neutral-700 max-md:mt-10">
                <div className="max-md:mr-2.5">
                  I&apos;m excited about new challenges as a data{" "}
                </div>
                <div className="max-md:mr-2.5">
                  scientist or a data-driven business consultant.
                </div>
                <div className="mt-11 underline text-neutral-700 max-md:mt-10">
                  Download my CV
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start py-14 pl-12 w-full text-base leading-6 bg-black text-zinc-100 max-md:mt-10">
                <div className="text-3xl font-bold leading-8">Contact me</div>
                <div className="mt-10">
                  If you are interested in cooperation{" "}
                </div>
                <div>or would like to discuss anything, </div>
                <div>please contact me.</div>
                <div className="mt-12 underline max-md:mt-10">
                  Send a message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
