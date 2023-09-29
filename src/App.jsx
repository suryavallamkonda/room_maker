import React, { Suspense } from "react";
import "./App.css";
import { Clone, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Chair from "./catalog/Chair";

function addChair() {
  return <Chair />;
}

export default function App() {
  return (
    <body>
      {/* <header className="container border-green-500 border-4 bg-neutral-200 max-w-full h-[9vh] flex flex-row justify-between p-[1vw]">
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
      </header> */}
      <main className="container border-red-600 border-4">
        {/* <article className="bg-purple-100 w-full p-32 flex flex-col justify-evenly">
          <section className="bg-purple-200 text-8xl font-montserrat w-fit">
            room maker
          </section>
          <section className="bg-inherit text-[2rem] font-montserrat">
            design your room!
          </section>
        </article> */}
        test
        <section className="w-full h-full p-16">
          <Canvas id="3d" className="bg-inherit">
            <OrbitControls />
            <ambientLight />
            {/* <Experience /> */}
          </Canvas>
        </section>
      </main>
    </body>
  );
}
