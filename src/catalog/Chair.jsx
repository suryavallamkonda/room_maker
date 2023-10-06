/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 C:\Users\1565199\Documents\MobileWeb research\room_maker\public\chair.glb 
Author: plaggy (https://sketchfab.com/plaggy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cc0-chair-9-cdaaa169fabe49bca58fcda2e5067c0a
Title: CC0 - Chair 9
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/chair.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh
          geometry={nodes.Chair9_Chair9_0.geometry}
          material={materials.Chair9}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/chair.glb");