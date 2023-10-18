"use client";

import React from "react";
import "./globals.css";

import { Canvas } from "@react-three/fiber";
import { BiArrowToRight } from "react-icons/bi";
import { Room } from "@/catalog/Room";
import { OrbitControls, Stage, Grid, Environment } from "@react-three/drei";

function Home() {
  return (
    <section className="bg-slate-800 h-screen">
      <div className="grid h-full grid-cols-12 grid-rows-1">
        <div className="col-start-2 col-span-4 h-full self-center ml-0 p-10 bg-inherit">
          <h1 className="mt-[40vh] w-fit mb-4 text-7xl font-extrabold tracking-tight leading-none p-5 text-white drop-shadow-lg">
          Design 3D Rooms Instantly
          </h1>
          <p className="text-neutral-300 w-fit drop-shadow-lg p-5">
            No hassle, just drag and drop.
          </p>
          <a
            href="/planner"
            className="p-5 inline-flex items-center justify-center mr-3 ml-4 text-2xl text-white
            rounded-lg bg-slate-950 pointer-events-auto shadow-lg gap-3"
          >
            Get started
            <BiArrowToRight size="32"/>
          </a>
        </div>
        <div className="col-start-7 col-span-5 h-full flex flex-col justify-center">
          <div className="h-2/3 border-slate-600 rounded-md border-[1rem] pointer-events-none">
          <Canvas
        gl={{ logarithmicDepthBuffer: true }}
        shadows
        camera={{ position: [0, 3, 0], fov: 40 }}
      >
        <fog attach="fog" args={["black", 15, 21.5]} />
        <Stage
          intensity={0.5}
          environment="city"
          shadows={{ type: "accumulative", bias: -0.001 }}
          adjustCamera={false}
        >
          <Room rotation={[0, Math.PI, 0]} position={[0, -1, 0]} />
        </Stage>
        <Grid
          renderOrder={-1}
          position={[0, -1.85, 0]}
          infiniteGrid
          cellSize={0.6}
          cellThickness={0.6}
          sectionSize={3.3}
          sectionThickness={1.5}
          sectionColor={[0.5, 0.5, 10]}
          fadeDistance={30}
        />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.05}
          enableZoom={false}
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Environment background preset="sunset" blur={0.8} />
      </Canvas>
            {/* <img src="demo_room.png" className="w-full h-full opacity-70"/> */}
          </div>
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
