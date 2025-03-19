import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel() {
  const { scene } = useGLTF("dhruba_model_hqh.glb"); // Replace with your model path
  scene.scale.set(3, 3, 3); // Adjust scale
  scene.position.set(0, -2, 0); // Adjust position
  return <primitive object={scene} />;
}

function Avatar() {
  return (
    <Canvas
      style={{ height: "100%" }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <AvatarModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Avatar;
