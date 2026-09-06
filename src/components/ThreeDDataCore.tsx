import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

export const ThreeDDataCore: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.2;
      ringRef.current.rotation.y = t * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = -t * 0.15;
      ringRef2.current.rotation.y = -t * 0.25;
    }
  });

  // Calculate some lines for the "data nodes" look
  const points = [];
  for (let i = 0; i < 20; i++) {
    points.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      )
    );
  }

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <Sphere args={[1, 64, 64]} scale={0.8}>
        <MeshDistortMaterial
          color="#0a0a0a"
          envMapIntensity={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.2}
          distort={0.3}
          speed={2}
        />
      </Sphere>

      {/* Orbiting Rings */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.8, 0.01, 16, 100]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.3} />
      </mesh>
      
      <mesh ref={ringRef2}>
        <torusGeometry args={[2.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>

      {/* Data Nodes/Lines */}
      <Line
        points={points}
        color="#0ea5e9"
        lineWidth={1}
        transparent
        opacity={0.15}
      />
      
      <Stars radius={10} depth={50} count={300} factor={4} saturation={0} fade speed={1} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#0ea5e9" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
    </group>
  );
};
