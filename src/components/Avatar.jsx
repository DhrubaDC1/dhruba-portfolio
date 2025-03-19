import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
function AvatarModel() {
  const mixerRef = useRef();
  const { scene, animations } = useGLTF("dhruba.glb"); // Replace with your model path
  let avatar = scene.getObjectByName("Wolf3D_Avatar");
  scene.quaternion.set(0.2, 0, 0, 1);

  scene.position.setY(-2.8);
  scene.scale.set(2.8, 2.8, 2.8);
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
  let eyeLidLeftID = avatar.morphTargetDictionary["eyeBlinkLeft"];
  let eyeLidRightID = avatar.morphTargetDictionary["eyeBlinkRight"];
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
      avatar.morphTargetInfluences[eyeLidLeftID] = blinkVal;
      avatar.morphTargetInfluences[eyeLidRightID] = blinkVal;
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
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}

export default Avatar;
