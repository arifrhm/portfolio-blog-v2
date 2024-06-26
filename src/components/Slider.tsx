import React from "react";
import Image from "next/image";

export const Slider = () => (
  <div className="DivBlSliderIndex w-96 h-96 flex flex-col items-start gap-6">
    <div className="DivSlickList h-96 flex items-center">
      <div className="DivSlickTrack w-96 flex items-start">
        {Array.from({ length: 11 }, (_, index) => (
          <div key={index} className="slide">
            <Image
              src={`https://via.placeholder.com/1280x596?text=Slide+${
                index + 1
              }`}
              alt={`Slide ${index + 1}`}
              width={1280}
              height={596}
              className="Image w-96 h-96"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="ListSlickDots w-96 h-7 flex items-start">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className={`Div flex-grow flex justify-center items-center ${
            index === 0 ? "opacity-75" : "opacity-25"
          }`}
        >
          <div className="text-black text-2xl font-normal font-['Inter'] leading-tight">
            •
          </div>
        </div>
      ))}
    </div>
  </div>
);
