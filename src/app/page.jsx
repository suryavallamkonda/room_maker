"use client";
import React, { useEffect, useState, useRef } from "react";
import "./globals.css";
// import {
//   BiSave,
//   BiFolderOpen,
//   BiRedo,
//   BiUndo,
//   BiTrash,
//   BiPlus,
//   BiDownload,
//   BiCamera,
//   BiShare,
//   BiPointer,
// } from "react-icons/bi";
import { Canvas, useFrame } from "@react-three/fiber";
// import { Armchair } from "@/catalog/Armchair";
// import Planner from "@/comps/Planner";
// import { OrbitControls, Stage, Grid, Environment } from "@react-three/drei";
import * as THREE from "three";

// save, import, undo, redo, select, delete, menu
// function Toolbar() {
//   // const [undoDisabled, setUndoDisabled] = useState(true);
//   // const [redoDisabled, setRedoDisabled] = useState(true);

//   const setModels = (newModels) => {
//     setState((prevState) => ({ ...prevState, models: newModels }));
//   };
//   const setHistory = (newHistory) => {
//     setState((prevState) => ({ ...prevState, history: newHistory }));
//   };
//   const setUndoDisabled = (disabled) => {
//     setState((prevState) => ({ ...prevState, undoDisabled: disabled }));
//   };
//   const setRedoDisabled = (disabled) => {
//     setState((prevState) => ({ ...prevState, redoDisabled: disabled }));
//   };
//   const handleUndo = () => {
//     if (!undoDisabled) {
//       const [prevSnapshot] = history.pop();
//       setModels(prevSnapshot.models);
//       setHistory(history);
//       setUndoDisabled(history.length === 0);
//       setRedoDisabled(true);
//     }
//   };
//   const handleRedo = () => {
//     if (!redoDisabled) {
//       const nextSnapshot = history.pop();
//       const redoSnapshot = history.pop();
//       setModels(redoSnapshot.models);
//       setHistory([redoSnapshot, nextSnapshot]);
//       setUndoDisabled(false);
//       setRedoDisabled(history.length === 1);
//     }
//   };
//   let size1 = "28";
//   return (
//     <section className="bg-slate-100 h-full basis-[6%] relative flex flex-col text-white shadow-lg items-center align-middle justify-between">
//       <ToolbarComponent
//         icon={<BiPointer size={size1} onClick={handleAddModel} />}
//       />
//       <ToolbarComponent icon={<BiSave size={size1} />} />
//       <ToolbarComponent icon={<BiFolderOpen size={size1} />} />
//       <ToolbarComponent icon={<BiDownload size={size1} />} />
//       <ToolbarComponent icon={<BiRedo size={size1} />} />
//       <ToolbarComponent icon={<BiUndo size={size1} />} />
//       <ToolbarComponent icon={<BiTrash size={size1} />} />
//       <i className="bg-inherit h-10 w-11/12" />

//       <ToolbarComponent
//         icon={
//           <BiPlus size={size1} onClick={handleRedo} disabled={redoDisabled} />
//         }
//       />
//       <ToolbarComponent
//         icon={
//           <BiCamera size={size1} onClick={handleUndo} disabled={undoDisabled} />
//         }
//       />
//       <ToolbarComponent
//         icon={
//           <BiShare
//             size={size1}
//             onClick={() => {
//               setModels([]);
//               setHistory([]);
//             }}
//           />
//         }
//       />

//       <i className="bg-black h-20 w-11/12 opacity-0" />
//     </section>
//   );
// }
// function ToolbarComponent({ icon }) {
//   return (
//     <div
//       className="relative flex items-center justify-center p-3 rounded-sm mx-auto my-3
//     shadow-lg text-accent opacity-90 hover:opacity-100"
//     >
//       {icon}
//     </div>
//   );
// }
function Model(props) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  const allModels = {
    box: new THREE.BoxGeometry(1, 1, 1),
    cylinder: new THREE.CylinderGeometry(1, 1, 1, 32),
    donut: new THREE.TorusGeometry(0.5, 0.2, 3, 20),
  };

  const allColors = {
    box: "red",
    cylinder: "pink",
    donut: "blue",
  };

  return (
    <mesh {...props} ref={mesh} scale={[1.5, 1.5, 1.5]}>
      <primitive object={allModels[props.model]} attach={"geometry"} />
      <meshStandardMaterial color={allColors[props.model]} />
    </mesh>
  );
}

function Planner() {
  const [modelsOnCanvas, setModelsOnCanvas] = useState([]);

  const addModel = (e) => {
    //# of modelOnCanvas
    const modelCount = modelsOnCanvas.length;
    // shape
    const model = e.target.getAttribute("data-shape");
    console.log(model);
    // push new  model
    setModelsOnCanvas([
      ...modelsOnCanvas,
      <Model
        model={model}
        key={modelCount}
        position={[-10 + modelCount * 3, 0, 0]}
      />,
    ]);
  };
  return (
    // unpack + buttons
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.95} />
        {[...modelsOnCanvas]}
      </Canvas>
      <div className="buttons">
        <button onClick={addModel} data-shape={"box"}>
          Box{" "}
        </button>
        <button onClick={addModel} data-shape={"cylinder"}>
          Cylinder{" "}
        </button>
        <button onClick={addModel} data-shape={"donut"}>
          Donut{" "}
        </button>
      </div>
    </div>
  );
}

// return (
//   <div className="w-full">
//     <button onClick={() => pushCanvas(document.getElementById("0"))}>
//       Save Canvas
//     </button>
//     <button
//       onClick={() => {
//         const canvas = popCanvas();
//         if (canvas) {
//           //something to update here
//         }
//       }}
//     ></button>
//     <Canvas
//       gl={{ logarithmicDepthBuffer: true }}
//       shadows
//       camera={{ position: [-15, 0, 10], fov: 25 }}
//     >
//       <fog attach="fog" args={["black", 15, 21.5]} />
//       <Stage
//         intensity={0.5}
//         shadows={{ type: "accumulative", bias: -0.001 }}
//         adjustCamera={false}
//       >
//         {[...modelsOnCanvas]}
//       </Stage>
//       <Grid
//         renderOrder={-1}
//         position={[0, -1.85, 0]}
//         infiniteGrid
//         cellSize={0.6}
//         cellThickness={0.6}
//         sectionSize={3.3}
//         sectionThickness={1.5}
//         sectionColor={[0.5, 0.5, 10]}
//         fadeDistance={30}
//       />
//       <OrbitControls
//         autoRotate
//         autoRotateSpeed={0.05}
//         enableZoom={false}
//         makeDefault
//         minPolarAngle={Math.PI / 2}
//         maxPolarAngle={Math.PI / 2}
//       />
//       <Environment background preset="sunset" blur={0.8} />
//     </Canvas>
//     <Canvas>
//       <div>
//         <button onClick={addModel} data-shape={"box"}>
//           Box
//         </button>
//         <button onClick={addModel} data-shape={"donut"}>
//           Box
//         </button>
//         <button onClick={addModel} data-shape={"rectangle"}>
//           Box
//         </button>
//       </div>
//     </Canvas>
//   </div>
// );
// function Catalog({ onAddModel }) {
//   return (
//     <section className="bg-slate-100 basis-1/6 overflow-y-scroll flex flex-col text-5xl items-center font-extrabold gap-4">
//       <h1 className="sticky shadow-lg shadow-neutral-600 rounded-b-xl top-0 z-[1] bg-slate-400 p-5 w-full text-center">
//         CATALOG
//       </h1>
//       <CatalogProduct
//         img={<img src="icons/armchair-icon.jpg" className="rounded-2xl" />}
//         name="Armchair"
//         onAddModel={onAddModel}
//         model={Armchair}
//       />
//     </section>
//   );
// }
// function CatalogProduct({ img, name, onAddModel, model }) {
//   return (
//     <div className="relative flex flex-col items-center justify-center w-2/3 mx-auto p-2">
//       {img}
//       <h2 className="text-xl text-slate-700 font-bold font-serif">{name}</h2>
//       <button onClick={() => onAddModel(model)}>Add Model</button>
//     </div>
//   );
// }
export default function App() {
  return (
    <section className="relative flex flex-row h-screen">
      {/* <Toolbar /> */}
      <span className="text-5xl bg-red">test</span>
      <Planner />
      {/* <Catalog /> */}
    </section>
  );
}
