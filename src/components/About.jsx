import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Avatar Component to Load the 3D Model
function Avatar() {
  const gltf = useGLTF("dhruba_model_hqh.glb");
  const model = gltf.scene;
  model.position.y = -6; // Adjust position if needed
  // model.rotation.x = 1;
  return <primitive object={model} scale={[5, 5, 5]} />; // Adjust scale if needed
}

function About() {
  return (
    <section
      id="about"
      className="h-screen bg-gray-900 flex items-center justify-center"
    >
      <div className="flex w-full h-full">
        {/* 3D Avatar Section */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <pointLight
                position={[-5, 5, -5]}
                intensity={0.5}
                color="#00ffcc"
              />
              <Avatar />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
        {/* Text Description */}
        <div className="w-1/2 h-full flex items-center justify-center text-center">
          <p className="text-lg text-gray-300 leading-relaxed max-w-md">
            I’m a passionate programmer with a BSc in Computer Science and
            Engineering. I enjoy building web apps with React, exploring AI, and
            designing UIs. My goal is to create impactful solutions through
            technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
