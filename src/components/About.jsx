import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
// Avatar Component to Load the 3D Model
function Avatar(props) {
  const groupRef = useRef();
  const mixerRef = useRef();
  const { scene, animations } = useGLTF("/dhruba.glb");
  scene.position.setY(-5);
  scene.scale.set(3, 3, 3);
  let blinkVal = 0;
  let blinkDir = 1;
  let stareDuration = 0;

  // Setup model properties
  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
      }
      if (object.isSkinnedMesh) {
        object.skeleton.bones.forEach((bone) => {
          bone.scale.set(1, 1, 1);
        });
      }
    });
    // Setup animations
    if (animations?.length) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      mixerRef.current.clipAction(animations[2]).play();
    }

    // Cleanup
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current.uncacheRoot(scene);
      }
    };
  }, [scene, animations]);
  let eyeLidLeftID =
    scene.getObjectByName("Wolf3D_Avatar").morphTargetDictionary[
      "eyeBlinkLeft"
    ];
  let eyeLidRightID =
    scene.getObjectByName("Wolf3D_Avatar").morphTargetDictionary[
      "eyeBlinkRight"
    ];
  function blink(delta) {
    if (blinkVal >= 1) {
      blinkDir = -1;
    }
    if (blinkVal == 0 && blinkDir == -1) {
      stareDuration = 0;
      blinkDir = 1;
    }
    if (blinkVal >= 0 && blinkVal <= 1) {
      blinkVal += delta * blinkDir * 7;
      if (blinkVal < 0) blinkVal = 0;
      if (blinkVal > 1) blinkVal = 1;
      scene.getObjectByName("Wolf3D_Avatar").morphTargetInfluences[
        eyeLidLeftID
      ] = blinkVal;
      scene.getObjectByName("Wolf3D_Avatar").morphTargetInfluences[
        eyeLidRightID
      ] = blinkVal;
    }
  }

  // Animation loop
  useFrame((state, delta) => {
    // Blink
    if (stareDuration <= 3) {
      stareDuration += delta;
    } else {
      blink(delta);
    }

    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} position={[0, -6, 0]} scale={[5, 5, 5]} />
    </group>
  );
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
              <ambientLight intensity={1} />
              <pointLight position={[5, 5, 2]} intensity={30} color="red" />
              {/* <pointLight
                position={[-10, 5, 2]}
                intensity={1}
                color="#00ffcc"
              /> */}
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
