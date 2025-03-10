import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("dhruba_model.glb");
  return <primitive object={scene} scale={[10, 10, 10]} />;
}

function About() {
  return (
    <section id="about" className="py-12 h-[80vh] bg-gray-900">
      {/* <h2 className="text-3xl font-semibold text-teal-400 mb-6 text-center">
        About Me
      </h2> */}
      <div className="flex flex-col items-center">
        <div className=" h-[80vh] shadow-lg">
          <Canvas className="w-full">
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <pointLight
              position={[-5, 5, -5]}
              intensity={0.5}
              color="#00ffcc"
            />
            <Model />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        {/* <div className="text-center md:text-left">
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi, I’m [Your Name], a passionate developer and designer. This 3D
            avatar is a fun representation of me, built with Three.js to add
            some interactivity to my portfolio. Feel free to rotate it with your
            mouse!
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default About;
