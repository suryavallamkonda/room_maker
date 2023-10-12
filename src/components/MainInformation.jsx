import React from "react";
import { CameraControls, OrbitControls, Stars, Sky, Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Room } from "../Room";
import { Armchair } from "../Armchair";

export default function MainInformation() {
  return (
    <main className="border-red-600 border-4 h-full w-full">
      <section className="w-full h-full p-0">
        <Canvas>
          <Bounds>
            <CameraControls
              maxPolarAngle={Math.PI / 2.2}
              minPolarAngle={-90}
              minDistance={1}
              maxDistance={10}
              makeDefault
            />
            <ambientLight />
            <Sky
              distance={450000}
              sunPosition={[0, 1, 0]}
              inclination={0}
              azimuth={0.25}
            />
            {/* <Armchair position={[0, 1, 0]}/> */}

            <Room />

            <axesHelper args={[5]} />
          </Bounds>
        </Canvas>
      </section>
    </main>
  );
}
