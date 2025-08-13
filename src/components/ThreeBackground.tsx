"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function Bubble({
  position,
  color,
  size = 0.9,
  speed = 1.4,
  distort = 0.3,
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
      rotationIntensity={0.5}
      floatIntensity={1.5}
      position={position}
    >
      <mesh>
        <sphereGeometry args={[size, 48, 48]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed}
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
        camera={{ position: [0, 0, 7], fov: 65 }}
      >
        <ambientLight intensity={0.7} />
        <Sparkles
          count={120}
          size={1.5}
          speed={0.4}
          color="#38bdf8"
          opacity={0.25}
          scale={[40, 22, 2]}
        />
        {/* Wide spread bubbles for the whole page */}
        <Bubble position={[-8, 6, -1.5]} color="#38bdf8" size={1.2} />
        <Bubble
          position={[9, -5, -2]}
          color="#0ea5e9"
          size={1.0}
          speed={1.8}
          distort={0.4}
        />
        <Bubble
          position={[0, 8, -2.5]}
          color="#7dd3fc"
          size={0.9}
          speed={1.2}
        />
        <Bubble
          position={[-10, -7, -2]}
          color="#60a5fa"
          size={1.1}
          speed={1.6}
          distort={0.35}
        />
        <Bubble position={[12, 4, -1.8]} color="#22d3ee" size={0.95} />
      </Canvas>
    </div>
  );
}
