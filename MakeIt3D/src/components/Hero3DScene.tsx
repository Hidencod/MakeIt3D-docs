// src/components/Hero3DScene.tsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import RotatingCube from './RotatingCube';
import * as THREE from 'three';

function AnimatedPoints() {
    const ref = useRef<THREE.Points>(null);

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(1000 * 3);
        const colors = new Float32Array(1000 * 3);

        for (let i = 0; i < 1000; i++) {
            const r = Math.random() * 10;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            colors[i * 3] = Math.random() * 0.5 + 0.5; // R
            colors[i * 3 + 1] = Math.random() * 0.3 + 0.4; // G
            colors[i * 3 + 2] = Math.random() * 0.3 + 0.7; // B
        }

        return [positions, colors];
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * 0.1;
            ref.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                transparent
                opacity={0.6}
                size={0.05}
                sizeAttenuation
                vertexColors
            />
        </points>

    );
}


function FloatingCubes() {
  const cubes = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.5,
      rotationSpeed: Math.random() * 0.02 + 0.01
    }))
  , []);
  
  return (
    <>
      {cubes.map((cube, index) => (
        <FloatingCube key={index} {...cube} />
      ))}
    </>
  );
}

function FloatingCube({ position, scale, rotationSpeed }: {
  position: [number, number, number];
  scale: number;
  rotationSpeed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.7;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.01;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#8b5cf6"
        transparent
        opacity={0.3}
        wireframe={true}
      />
    </mesh>
  );
}

export default function Hero3DScene() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.4 }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <AnimatedPoints />
        <FloatingCubes />
       
      </Canvas>
    </div>
  );
}