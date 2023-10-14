import React from "react";

export default function HeaderDock() {
  return (
    <header className="container border-green-500 border-4 bg-neutral-200 max-w-full h-[9vh] flex flex-row justify-between p-[1vw]">
      <a href="#">
        <h1 className="text-black font-montserrat text-3xl bg-purple-300">
          Room Maker
        </h1>
      </a>
      <nav className="bg-red-300 p-[1vw]">
        <ul className="flex flex-col md:flex-row rounded-md">
          <li>
            <a
              href="#"
              class="block px-[0.5vw] py-[0.75vh] bg-amber-600 text-black text-[1vw] font-montserrat hover:bg-green-200"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-[0.5vw] py-[0.75vh] bg-amber-600 text-black text-[1vw] font-montserrat hover:bg-green-200"
            >
              Design
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-[0.5vw] py-[0.75vh] bg-amber-600 text-black text-[1vw] font-montserrat hover:bg-green-200"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
