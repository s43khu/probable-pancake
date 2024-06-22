import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import * as THREE from "three"; // Import necessary Three.js components

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, position }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      position={position} // Ensure position is passed and applied correctly
      scale={2.75}
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  const [position, setPosition] = useState([0, 0, 0]);
  const [isDragging, setIsDragging] = useState(false);

  const handleControlsChange = (event) => {
    if (!event.isDragging && isDragging) {
      setIsDragging(false);
      setPosition([0, 0, 0]);
    } else if (event.isDragging && !isDragging) {
      setIsDragging(true);
    }
  };

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          onChange={handleControlsChange}
        />
        <Ball imgUrl={icon} position={position} />
      </Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
