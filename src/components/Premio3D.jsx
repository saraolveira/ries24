import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, useGLTF } from "@react-three/drei"
const Premio3D = () => {
    const premio = useGLTF("../premio.glb")

    return (
        <Canvas>
            <OrbitControls makeDefault />
            <directionalLight
                castShadow
                position={[1, 2, 3]}
                intensity={1.5}
                shadow-normalBias={0.04}
            />
            <ambientLight intensity={0.5} />

            <Float rotationIntensity={2}>
                <primitive
                    object={premio.scene}
                    scale={1.2}
                    position={[0, -2.5, -1]}
                    rotation-y={0.3}
                />
            </Float>
        </Canvas>
    )
}
export default Premio3D
