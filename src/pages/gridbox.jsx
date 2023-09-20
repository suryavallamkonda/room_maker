import { Grid, useTexture } from "@react-three/drei"


const GridBox = () => {
    const texture = useTexture('./textures/grid.png')
    texture.repeat.set(200, 200)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <mesh receiveShadow>
            <planeBufferGeometry args={[1000, 1000]} attach='geometry'/>
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} attach='material'/>
        </mesh>
    )
}

export default GridBox