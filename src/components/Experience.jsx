import { MeshReflectorMaterial, PresentationControls, Stage, Gltf } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



function Experience() {
    return (
        <>
            <PresentationControls
                speed={1.5}
                global={true}
                polar={[-0.1, Math.PI / 4]}
                rotation={[Math.PI / 8, Math.PI / 4, 0]}
            >
                <Stage
                    environment={"city"}
                    intensity={0.5}
                    castShadow={false}
                >
                    <Gltf src = "/models/scene.glb" receiveShadow castShadow />
                </Stage>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
                    <planeGeometry args={[170, 170]} />
                    <MeshReflectorMaterial 
                        blur={[300, 300]}
                        resolution={2048}
                        mixBlur={1}
                        roughness={1}
                        mixStrength={40}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color={"#FEFEFE"}
                        metalness={0.5}
                    />
                </mesh>
            </PresentationControls>
        </>
    );
};

export default Experience;