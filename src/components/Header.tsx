// import * as React from "react";

// export function Header() {
//   return (
//     <div className="flex justify-center items-center px-16 py-3.5 text-lg bg-white text-neutral-700 max-md:px-5">
//       <div className="flex gap-5 w-full max-w-[1075px] max-md:flex-wrap max-md:max-w-full">
//         <div className="flex-auto my-auto font-bold leading-7">
//           Andrew<span className=" text-neutral-700"> Kurochkin</span>
//         </div>
//         <div className="flex gap-5 justify-between py-2 pr-20 pl-2.5 whitespace-nowrap leading-[150%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
//           <a href="/blog" className="justify-center py-3">
//             blog
//           </a>
//           <a href="/portfolio" className="justify-center py-3">
//             portfolio
//           </a>
//           <a href="/photo" className="justify-center py-3">
//             photo
//           </a>
//           <a href="/about" className="justify-center py-3.5">
//             about
//           </a>
//           <a href="/contact" className="justify-center py-3.5">
//             contact
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-bold">
          <a href="/" className="hover:underline">
            <span className="font-extrabold">Andrew</span> Kurochkin
          </a>
        </div>
        <nav className="flex space-x-6">
          <a href="/blog" className="text-gray-600 hover:underline">blog</a>
          <a href="/portfolio" className="text-gray-600 hover:underline">portfolio</a>
          <a href="/photo" className="text-gray-600 hover:underline">photo</a>
          <a href="/about" className="text-gray-600 hover:line-through">about</a>
          <a href="/contact" className="text-gray-600 hover:underline">contact</a>
        </nav>
        <div className="text-gray-600">
          <button className="focus:outline-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

