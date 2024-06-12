import * as React from "react";

export function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-3.5 text-lg bg-white text-neutral-700 max-md:px-5">
      <div className="flex gap-5 w-full max-w-[1075px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto font-bold leading-7">
          Andrew<span className=" text-neutral-700"> Kurochkin</span>
        </div>
        <div className="flex gap-5 justify-between py-2 pr-20 pl-2.5 whitespace-nowrap leading-[150%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="justify-center py-3">blog</div>
          <div className="justify-center py-3">portfolio</div>
          <div className="justify-center py-3">photo</div>
          <div className="justify-center py-3.5">about</div>
          <div className="justify-center py-3.5">contact</div>
        </div>
      </div>
    </div>
  );
}

