"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import "./globals.css";
import { Armchair } from "@/catalog/Armchair";
import { Backdrop, OrbitControls, Stage, Stars } from "@react-three/drei";

function Home() {
  return (
    <section className="bg-slate-800 h-screen">
      <div className="grid h-full grid-cols-12 grid-rows-1">
        <div className="col-start-2 col-span-4 h-full self-center ml-0 p-10 bg-blue-100">
          <h1 className="mt-[40vh] w-fit mb-4 text-7xl font-extrabold tracking-tight leading-none p-5 text-white drop-shadow-lg">
            design your rooms
          </h1>
          <p className="text-neutral-300 w-fit drop-shadow-lg p-5">
            build and test your rooms in 3d
          </p>
          <a
            href="/l"
            className="p-5 inline-flex items-center justify-center mr-3 text-2xl text-white 
            rounded-lg bg-black pointer-events-auto shadow-lg"
          >
            Get started
            <img className="w-8 h-8" src="svgs/arrow-white.svg" />
          </a>
        </div>
        <div className="col-start-7 col-span-4 h-1/2 self-center rounded-3xl">
          <Canvas>
            <Armchair />
            <OrbitControls />
            <ambientLight />
            <Stars />
          </Canvas>
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
