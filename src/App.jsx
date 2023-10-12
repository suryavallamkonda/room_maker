import React from "react";
import "./App.css";
import MainInformation from "./components/MainInformation";

function Home() {
  return (
    <section className="bg-[#316B83] h-screen">
      <div className="grid h-full px-4 py-8 mx-auto grid-cols-12 grid-rows-1">
        <div className="mr-auto self-center ml-[25vw] z-[3] absolute border-blue-700 border-4">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            convincing text
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            yea uh you can like make a room and stuff
          </p>
          <a href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <img className="w-8 h-8" src="svgs/arrow-white.svg" />
          </a>
        </div>
        <div className="col-end-13 col-span-12 w-full row-start-1">
          <MainInformation />
        </div>
      </div>
    </section>
  );
}
export default function App() {
  return (
    <>
    <Home />
    </>
  );
}
