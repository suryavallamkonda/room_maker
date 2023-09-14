import { MeshReflectorMaterial, PresentationControls, Stage, Gltf, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



function Experience() {
    return (
        <mesh>
            <OrbitControls autoRotate autoRotateSpeed={0.4} enableDamping dampingFactor={0.04} minDistance={10} maxAzimuthAngle={[-Math.PI, Math.PI]}/>
            {/* <meshNormalMaterial />
            <boxGeometry /> */}
            <ambientLight />
            <Gltf src="/models/white_room.glb" />
        </mesh>
    );
};

export default Experience;