"use client";

import React from "react";
import "../globals.css";

import {
  BiSave,
  BiFolderOpen,
  BiMenu,
  BiRedo,
  BiUndo,
  BiTrash,
  BiArrowBack,
  BiPlus,
  BiDownload,
  BiCamera,
  BiShare,
  BiPointer,
} from "react-icons/bi";
import { Canvas } from "@react-three/fiber";
import { Armchair } from "@/catalog/Armchair";
import { OrbitControls, Stage, Grid, Environment } from "@react-three/drei";

// save, import, undo, redo, select, delete, menu
function Toolbar() {
  let size1 = "28";
  return (
    <section className="bg-slate-100 h-full basis-[6%] relative flex flex-col text-white shadow-lg items-center align-middle justify-between">
      <ToolbarComponent icon={<BiPointer size={size1} />} />
      <ToolbarComponent icon={<BiSave size={size1} />} />
      <ToolbarComponent icon={<BiFolderOpen size={size1} />} />
      <ToolbarComponent icon={<BiDownload size={size1} />} />
      <ToolbarComponent icon={<BiRedo size={size1} />} />
      <ToolbarComponent icon={<BiUndo size={size1} />} />
      <ToolbarComponent icon={<BiTrash size={size1} />} />
      <i className="bg-inherit h-10 w-11/12" />

      <ToolbarComponent icon={<BiPlus size={size1} />} />
      <ToolbarComponent icon={<BiCamera size={size1} />} />
      <ToolbarComponent icon={<BiShare size={size1} />} />

      <i className="bg-black h-20 w-11/12 opacity-0" />
    </section>
  );
}

function ToolbarComponent({ icon }) {
  return (
    <div
      className="relative flex items-center justify-center p-3 rounded-sm mx-auto my-3 
    shadow-lg bg-slate-200 text-slate-800 hover:bg-slate-300"
    >
      {icon}
    </div>
  );
}

function Planner() {
  return (
    <div className="w-full">
      <h1 className="m-[33%] text-3xl">def a canvas so fr</h1>
      {/* <Canvas
        gl={{ logarithmicDepthBuffer: true }}
        shadows
        camera={{ position: [-15, 0, 10], fov: 25 }}
      >
        <fog attach="fog" args={["black", 15, 21.5]} />
        <Stage
          intensity={0.5}
          environment="city"
          shadows={{ type: "accumulative", bias: -0.001 }}
          adjustCamera={false}
        >
          <Armchair rotation={[0, Math.PI, 0]} />
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
      </Canvas> */}
      {/* <Environment background preset="sunset" blur={0.8} /> */}
    </div>
  );
}

function Catalog() {
  return (
    <section className="bg-slate-100 basis-1/6 overflow-y-scroll flex flex-col text-5xl items-center font-bold gap-4">
      <h1 className="sticky shadow-lg shadow-neutral-600 rounded-b-xl top-0 z-[1] bg-slate-400 p-5 w-full text-center">
        CATALOG
      </h1>
      <CatalogProduct
        img={<img src="icons/armchair-icon.jpg" className="rounded-2xl" />}
        name={"Armchair"}
      />
      <CatalogProduct
        img={<img src="icons/armchair-icon.jpg" className="rounded-2xl" />}
        name={"Armchair"}
      />
      <CatalogProduct
        img={<img src="icons/armchair-icon.jpg" className="rounded-2xl" />}
        name={"Armchair"}
      />
      <CatalogProduct
        img={<img src="icons/armchair-icon.jpg" className="rounded-2xl" />}
        name={"Armchair"}
      />
      <CatalogProduct
        img={<img src="icons/armchair-icon.jpg" className="rounded-2xl" />}
        name={"Armchair"}
      />
      <CatalogProduct
        img={<img src="icons/blank.png" className="rounded-2xl opacity-0" />}
        name={""}
      />
    </section>
  );
}

function CatalogProduct({ img, name }) {
  return (
    <div className="relative flex flex-col items-center justify-center w-2/3 mx-auto p-2">
      {img}
      <h2 className="text-xl text-slate-700 font-serif">{name}</h2>
    </div>
  );
}

export default function App() {
  return (
    <section className="relative flex flex-row h-screen">
      <Toolbar />
      <Planner />
      <Catalog />
    </section>
  );
}
