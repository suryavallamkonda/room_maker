import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Chair from "../catalog/Chair";

export default function MainInformation() {
  return (
    <main className="border-red-600 border-4 h-screen">
      {/* <article className="bg-purple-100 w-full p-32 flex flex-col justify-evenly">
        <section className="bg-purple-200 text-8xl font-montserrat w-fit">
          room maker
        </section>
        <section className="bg-inherit text-[2rem] font-montserrat">
          design your room!
        </section>
      </article> */}
      <section className="w-full h-full p-16">
        <Canvas id="3d" className="bg-inherit bg-red-100">
          <OrbitControls />
          <ambientLight />
          <Chair />
          {/* <Experience /> */}
        </Canvas>
      </section>
    </main>
  );
}
