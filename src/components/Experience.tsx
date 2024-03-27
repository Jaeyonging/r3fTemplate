import { OrbitControls } from "@react-three/drei"

export const Experience = () =>{
    return (
        <>
        <mesh>
            <OrbitControls/>
            <meshNormalMaterial/>
            <boxGeometry/>
        </mesh>
        </>
    )
}