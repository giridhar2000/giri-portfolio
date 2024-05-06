import React from "react";
import Link from "next/link";
import Image from "next/image";
import Design from "../public/Design.svg";

const Navbar = () => {
  return (
    <div className="mx-auto my-5 p-4 px-5 w-3/4 flex justify-between bg-white rounded-xl items-center z-20 relative">
      <span className="text-slate-900 font-bold text-xl w-3.4">
        <Link href={"/"}>Giridhar</Link>
      </span>
      <div className="flex justify-between items-center font-bold gap-5 max-sm:hidden">
        <div className="flex justify-between w-4/6 items-center">
          <span className="cursor-pointer relative p-2 rounded-lg hover:bg-yellow-300">
            <Link href={"#Projects"}>Projects</Link>
          </span>
          /
          <span className="cursor-pointer relative p-2 rounded-lg hover:bg-yellow-300">
            <Link href={"#About"}>About</Link>
          </span>
        </div>
        <Link
          href={"https://www.linkedin.com/in/giridhar-b-1792a6189"}
          target="_blank"
        >
          <button className="group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105 ml-3 z-50">
            <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
            <span className="z-50 flex items-center gap-1">
              Contact
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="inline-block"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
              </svg>
            </span>
          </button>
        </Link>
      </div>
      <div className="hidden max-sm:block">
        {/* <MenuOutlined onClick={() => showDrawer(!open)} /> */}
        <div>
          <Image src={Design} alt='img' width={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
