import { useRef, useState } from "react";





function Box(){
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    overhead
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });
    return (
        <mesh {...props} ref={mesh} scale={[1, 1, 1]} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry />
            <meshLambertMaterial color={hovered ? "purple" : "orange"} />
        </mesh>
    );
}