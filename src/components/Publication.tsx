import * as React from "react";

export function Publication() {
  return (
    <div className="flex flex-col px-5">
      <div className="w-full text-lg font-bold leading-7 text-neutral-700 max-md:max-w-full">
        Some current publications
      </div>
      <div className="mt-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 text-base leading-6 text-neutral-700 max-md:mt-8">
              <img
                loading="lazy"
                srcSet="..."
                className="w-full aspect-[1.85]"
              />
              <div className="mt-5 text-lg font-bold text-neutral-700">
                Data Engineering in Ad Tech{" "}
              </div>
              <div className="text-lg font-bold text-neutral-700">
                enterprise
              </div>
              <div className="flex gap-5 justify-between py-1.5 mt-5">
                <div className="font-medium">2017-2022</div>
                <div>11 min read</div>
              </div>
              <div className="mt-4 max-md:mr-1.5">
                I’ve been working for a big Ad Tech{" "}
              </div>
              <div className="mt-2 mr-7 max-md:mr-2.5">
                enterprise (manages ~$2B in media spend{" "}
              </div>
              <div className="mt-2.5 max-md:mr-1.5">
                and deploys campaigns in 70 markets,{" "}
              </div>
              <div className="mt-2.5 max-md:mr-1.5">
                clients portfolio including: Google, Viber, etc).{" "}
              </div>
              <div className="mt-2.5 max-md:mr-1.5">
                The company had a huge amount of data,{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col py-0.5 text-base leading-6 text-neutral-700 max-md:mt-8">
              <img
                loading="lazy"
                srcSet="..."
                className="w-full aspect-[1.85]"
              />
              <div className="mt-5 text-lg font-bold text-neutral-700">
                Computational Social Science course
              </div>
              <div className="flex gap-5 py-1.5 mt-5">
                <div className="flex-auto font-medium">February 14, 2023</div>
                <div>2 min read</div>
              </div>
              <div className="mt-4 max-md:mr-2.5">
                I have taught Computational Social Science{" "}
              </div>
              <div className="mt-2.5 max-md:mr-2.5">
                at the National University of Kyiv-Mohyla{" "}
              </div>
              <div className="mt-2.5 max-md:mr-2.5">
                Academy (est. in 1615) since 2022. Course{" "}
              </div>
              <div className="mt-2.5 max-md:mr-2.5">
                descriptionComputational social science{" "}
              </div>
              <div className="mt-2.5 max-md:mr-2.5">
                refers to the academic sub-disciplines{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 text-base leading-6 text-neutral-700 max-md:mt-8">
              <img
                loading="lazy"
                srcSet="..."
                className="w-full aspect-[1.85]"
              />
              <div className="mt-5 text-lg font-bold text-neutral-700">
                AI for hiring — recommendation{" "}
              </div>
              <div className="text-lg font-bold text-neutral-700">
                system for recruiters
              </div>
              <div className="flex gap-5 justify-between py-1.5 mt-5">
                <div className="font-medium">2017</div>
                <div>5 min read</div>
              </div>
              <div className="mt-4 mr-8 max-md:mr-2.5">
                This is a recommendation system for{" "}
              </div>
              <div className="mt-2.5 mr-8 max-md:mr-2.5">
                recruiters that estimates how new{" "}
              </div>
              <div className="mt-3 mr-8 max-md:mr-2.5">
                candidates suit available vacancies. It was{" "}
              </div>
              <div className="mt-3 mr-8 max-md:mr-2.5">
                developed for a real IT company based on{" "}
              </div>
              <div className="mt-2.5 mr-8 max-md:mr-2.5">
                their data after consulting experts. The{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

