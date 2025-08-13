"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function Bubble({
  position,
  color,
  size = 1,
  speed = 1.6,
  distort = 0.35,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
  distort?: number;
}) {
  return (
    <Float
      speed={speed}
      rotationIntensity={0.6}
      floatIntensity={2}
      position={position}
    >
      <mesh>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed}
          roughness={0.25}
          metalness={0.15}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeBG() {
  return (
    <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
        camera={{ position: [0, 0, 6], fov: 60 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        {/* subtle sparkles for depth */}
        <Sparkles
          count={80}
          size={2}
          speed={0.5}
          color="#38bdf8"
          opacity={0.4}
          scale={[14, 8, 2]}
        />
        {/* floating bubbles - tuned for light and dark modes */}
        <Bubble position={[-3.0, 0.8, -1]} color="#38bdf8" size={1.2} />
        <Bubble
          position={[3.0, -0.6, -1.2]}
          color="#0ea5e9"
          size={1.0}
          speed={2}
          distort={0.45}
        />
        <Bubble
          position={[0.2, 0.9, -1.4]}
          color="#7dd3fc"
          size={0.85}
          speed={1.2}
          distort={0.28}
        />
      </Canvas>
    </div>
  );
}
