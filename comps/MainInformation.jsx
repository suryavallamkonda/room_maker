import React from "react";
import {
  CameraControls,
  OrbitControls,
  Stars,
  Sky,
  Bounds,
  Stage,
  Backdrop,
  Plane
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Room } from "../Room";
import { Armchair } from "../Armchair";

export default function MainInformation() {
  return (
    <main className="h-full w-full">
      {/* <section className="bg-red-100 fixed w-1/3 h-1/2 rounded-3xl">
            hi
      </section> */}
      <section className="w-full h-full p-0">
        <Canvas className="rounded-3xl">
            {/* <Sky /> */}
            <Stage>
              <CameraControls minDistance={2}/>
              <Armchair />
            </Stage>
            
        </Canvas>
      </section>
      
    </main>
  );
}
