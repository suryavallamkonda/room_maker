import { MeshReflectorMaterial, PresentationControls, Stage, Gltf } from "@react-three/drei";
import React from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

   
function Working (){  
    return (
        <>
            <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]} rotation={[Math.PI / 8, Math.PI / 4, 0]}>
                <Stage environment={'city'} intensity={0.5} castShadow={false}>
                    <Gltf src="/models/white_modern_living_room.glb" receiveShadow castShadow/>
                </Stage>
            </PresentationControls>
        </>

    )  
}  
   
export default Working;  