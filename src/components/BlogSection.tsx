import * as React from "react";
import Image from "next/image";

export function BlogSection() {
  return (
    <div className="flex flex-col px-5 py-12">
      <div className="flex gap-5 items-center self-start font-bold leading-[150%] text-neutral-700 max-md:flex-wrap">
        <div className="self-stretch my-auto text-4xl underline">Blog</div>
        <div className="shrink-0 self-stretch w-0.5 bg-zinc-600 h-[76px]" />
        <div className="flex-auto self-stretch my-auto text-lg">
          Posts about data science, AI, ML and other.
        </div>
      </div>
      <div className="mt-8 w-full text-base font-semibold leading-6 text-neutral-700 max-md:max-w-full">
        Tag filter:
      </div>
      <div className="flex gap-2.5 justify-between self-start mt-7 text-base leading-6 max-md:flex-wrap">
        <div className="underline text-neutral-700">all</div>
        <div className="flex gap-0">
          <div className="text-neutral-700">#</div>
          <div className="flex-auto text-neutral-700">own product</div>
        </div>
        <div className="flex gap-0">
          <div className="text-neutral-700">#</div>
          <div className="flex-auto text-neutral-700">tips and tricks</div>
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">blogging</div>
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">photo</div>
        </div>
        <div className="flex gap-0">
          <div className="text-neutral-700">#</div>
          <div className="flex-auto text-neutral-700">
            Computational Social Science
          </div>
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">logistics</div>
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">blog</div>
        </div>
        <div className="text-neutral-700">motivation</div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">traveling</div>
        </div>
        <div className="flex gap-0 self-start whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">Berlin</div>
        </div>
      </div>
      <div className="flex gap-3 items-start mt-3.5 text-base leading-6 max-md:flex-wrap">
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">CSS</div>
        </div>
        <div className="flex gap-0 self-stretch whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">snippet</div>
        </div>
        <div className="self-stretch text-neutral-700">how to</div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">aesthetics</div>
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">Bordeaux</div>
        </div>
        <div className="self-stretch text-neutral-700">teaching</div>
        <div className="flex gap-0 self-stretch whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">regex</div>
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">urban</div>
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">France</div>
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">KMA</div>
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <div className="text-neutral-700">#</div>
          <div className="text-neutral-700">architecture</div>
        </div>
        <div className="flex-auto self-stretch text-neutral-700">
          trip report
        </div>
      </div>
      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col py-0.5 text-base leading-6 text-neutral-700 max-md:mt-10">
              <div className="w-full aspect-[1.85]">
                <Image alt="" loading="lazy" src="/" width={0} height={0} />
              </div>
              <div className="mt-5 text-lg font-bold text-neutral-700">
                Computational Social Science course
              </div>
              <div className="flex gap-5 py-1.5 mt-5">
                <div className="flex-auto font-medium">February 14, 2023</div>
                <div>2 min read</div>
              </div>
              <div className="mt-4 max-md:mr-1.5">
                I have taught Computational Social Science{" "}
              </div>
              <div className="mt-2.5 max-md:mr-1.5">
                at the National University of Kyiv-Mohyla{" "}
              </div>
              <div className="mt-2.5 max-md:mr-1.5">
                Academy (est. in 1615) since 2022. Course{" "}
              </div>
              <div className="mt-2.5 mr-7 max-md:mr-2.5">
                descriptionComputational social science{" "}
              </div>
              <div className="mt-2.5 max-md:mr-1.5">
                refers to the academic sub-disciplines{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 text-base leading-6 text-neutral-700 max-md:mt-10">
              <div className="w-full aspect-[1.85]">
                <Image
                  loading="lazy"
                  src="/path/to/your/image.jpg"
                  alt="Description of the image"
                  height={0}
                  width={0}
                  // Adjust the height according to your image aspect ratio
                />
              </div>
              <div className="mt-5 text-lg font-bold text-neutral-700">
                Bordeaux - the gorgeous cliche{" "}
              </div>
              <div className="text-lg font-bold text-neutral-700">
                about France
              </div>
              <div className="flex gap-5 py-1.5 mt-5">
                <div className="flex-auto font-medium">September 20, 2020</div>
                <div>9 min read</div>
              </div>
              <div className="mt-4 max-md:mr-1.5">
                Hi dear readers, I&apos;m happy to finally finish{" "}
              </div>
              <div className="mt-2.5 max-md:mr-1.5">
                the post about my trip to France in 2019.{" "}
              </div>
              <div className="mt-2.5 mr-7 max-md:mr-2.5">
                First of all I thank Kate, Philipe, and Loïc -{" "}
              </div>
              <div className="mt-2.5 max-md:mr-1.5">
                people who created bright explosion of{" "}
              </div>
              <div className="mt-2.5 max-md:mr-1.5">
                happiness in the year where only hard work{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base leading-6 text-neutral-700 max-md:mt-10">
              <Image
                loading="lazy"
                src="/path/to/your/image.jpg"
                alt="Description of the image"
                height={0}
                width={0}
                // Adjust the height according to your image aspect ratio
              />
              <div className="mt-5 text-lg font-bold text-neutral-700">
                The beauty of German aesthetic - Die{" "}
              </div>
              <div className="text-lg font-bold text-neutral-700">
                Hauptstadt
              </div>
              <div className="flex gap-5 py-1.5 mt-5">
                <div className="flex-auto font-medium">January 10, 2019</div>
                <div>5 min read</div>
              </div>
              <div className="mt-4">
                I have visited Berlin during the new year{" "}
              </div>
              <div className="mt-2.5 mr-6 max-md:mr-2.5">
                holidays at 2018-2019.Here I share photos,{" "}
              </div>
              <div className="mt-2.5">
                these pictures show different aspects of the{" "}
              </div>
              <div className="mt-2.5">
                city and give you piece of the Berlin{" "}
              </div>
              <div className="flex gap-5 mt-2">
                <div className="flex-auto">atmosphere. </div>
                <div className="shrink-0 h-[19px] w-[140px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
