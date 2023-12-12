"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import {
  BiSave,
  BiFolderOpen,
  BiRedo,
  BiUndo,
  BiTrash,
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
  return (
    <section className="bg-slate-100 h-screen basis-[6%] relative flex flex-col text-white shadow-lg items-center">
      <ToolbarComponent icon={<BiPointer size="32" />} />
      <ToolbarComponent icon={<BiSave size="32" />} />
      <ToolbarComponent icon={<BiFolderOpen size="32" />} />
      <ToolbarComponent icon={<BiDownload size="32" />} />
      <ToolbarComponent icon={<BiRedo size="32" />} />
      <ToolbarComponent icon={<BiUndo size="32" />} />
      <ToolbarComponent icon={<BiTrash size="32" />} />
      <ToolbarComponent icon={<BiPlus size="32" />} />
      <i className="bg-slate-900 h-1 w-11/12" />

      <ToolbarComponent icon={<BiCamera size="32" />} />
      <ToolbarComponent icon={<BiShare size="32" />} />
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
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleAddModel = (model, event) => {
    const { clientX, clientY } = event.nativeEvent;
    const ray = new THREE.Raycaster();
    ray.setFromCamera({ x: clientX, y: clientY }, camera);
    const intersects = ray.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const position = intersects[0].point;
      const gridX = Math.round(position.x / gridSize);
      const gridY = Math.round(position.y / gridSize);
      const gridZ = Math.round(position.z / gridSize);
      const closestGridPoint = new THREE.Vector3(
        gridX * gridSize,
        gridY * gridSize,
        gridZ * gridSize
      );

      const newModel = model({ position: closestGridPoint });
      setModels([...models, newModel]);
      scene.add(newModel.mesh);
    } else {
      console.warn("Model outside grid");
    }
  };
  return (
    <div className="w-full">
      <Canvas
        onClick={(event) => handleAddModel(selectedModel, event)}
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
          {models.map((model) => model)}
        </Stage>
        
      </Canvas>
    </div>
  );
}
function Catalog({ onAddModel }) {
  return (
    <section className="bg-slate-100 basis-1/6 overflow-y-scroll flex flex-col text-5xl items-center font-extrabold gap-4">
      <h1 className="sticky shadow-lg shadow-neutral-600 rounded-b-xl top-0 z-[1] bg-slate-400 p-5 w-full text-center">
        CATALOG
      </h1>
      <CatalogProduct
        img={<img src="icons/armchair-icon.jpg" className="rounded-2xl" />}
        name="Armchair"
        onAddModel={onAddModel}
        model={Armchair}
      />
    </section>
  );
}
function CatalogProduct({ img, name, onAddModel, model }) {
  return (
    <div className="relative flex flex-col items-center justify-center w-2/3 mx-auto p-2">
      {img}
      <h2 className="text-xl text-slate-700 font-bold font-serif">{name}</h2>
      <button onClick={() => onAddModel(model)}>Add Model</button>
    </div>
  );
}
const models = [Armchair];
export default function App() {
  return (
    <section className="relative flex flex-row h-screen">
      <Toolbar />
      <Planner />
      <Catalog />
    </section>
  );
}






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