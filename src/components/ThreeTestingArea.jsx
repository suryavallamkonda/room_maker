import {
  Backdrop,
  CameraControls,
  Cloud,
  Environment,
  Float,
  Gltf,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stage,
  Stars,
  TransformControls,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function TestingGround() {
  return (
    <TransformControls mode="translate" space="local">
      <mesh>
        {/* <CameraControls makeDefault maxDistance={5} minDistance={5} camera={PerspectiveCamera}/> */}
        <ambientLight />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Stars />
        {/* <Environment /> */}
        <Gltf src="/models/scene.glb" />
      </mesh>
    </TransformControls>
  );
}

export default TestingGround;
