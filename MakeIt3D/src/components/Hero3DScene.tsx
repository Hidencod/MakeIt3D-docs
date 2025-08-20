// src/components/Hero3DScene.tsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import RotatingCube from './RotatingCube';
import * as THREE from 'three';

function AnimatedPoints() {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3); // Increased particle count
    const colors = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
      // Create multiple layers of particles with different distributions
      if (i < 2000) {
        // Spiral galaxy pattern
        const t = (i / 2000) * Math.PI * 8;
        const r = (i / 2000) * 15 + Math.sin(t * 3) * 2;
        positions[i * 3] = r * Math.cos(t) + (Math.random() - 0.5) * 2;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
        positions[i * 3 + 2] = r * Math.sin(t) + (Math.random() - 0.5) * 2;
      } else if (i < 3500) {
        // Sphere distribution
        const phi = Math.random() * Math.PI * 2;
        const costheta = Math.random() * 2 - 1;
        const u = Math.random();
        const theta = Math.acos(costheta);
        const r = 12 * Math.cbrt(u);

        positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
        positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
        positions[i * 3 + 2] = r * Math.cos(theta);
      } else {
        // Random cloud
        positions[i * 3] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      }

      // Enhanced color palette with more vibrant colors
      const colorType = Math.floor(Math.random() * 4);
      switch (colorType) {
        case 0: // Electric blue
          colors[i * 3] = 0.1 + Math.random() * 0.3;
          colors[i * 3 + 1] = 0.6 + Math.random() * 0.4;
          colors[i * 3 + 2] = 1.0;
          break;
        case 1: // Purple
          colors[i * 3] = 0.8 + Math.random() * 0.2;
          colors[i * 3 + 1] = 0.2 + Math.random() * 0.3;
          colors[i * 3 + 2] = 1.0;
          break;
        case 2: // Cyan
          colors[i * 3] = 0.0;
          colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
          colors[i * 3 + 2] = 0.9 + Math.random() * 0.1;
          break;
        default: // Pink
          colors[i * 3] = 1.0;
          colors[i * 3 + 1] = 0.2 + Math.random() * 0.3;
          colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      }
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.02;

      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      ref.current.scale.setScalar(scale);
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
        opacity={0.8}
        size={0.08}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GeometricShapes() {
  const shapes = useMemo(() => [
    // Torus shapes
    ...Array.from({ length: 3 }, (_, i) => ({
      type: 'torus',
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 25
      ] as [number, number, number],
      scale: Math.random() * 1.5 + 0.5,
      rotationSpeed: [
        Math.random() * 0.02 + 0.01,
        Math.random() * 0.02 + 0.01,
        Math.random() * 0.02 + 0.01
      ],
      color: `hsl(${Math.random() * 360}, 80%, 60%)`
    })),
    // Octahedron shapes
    ...Array.from({ length: 4 }, (_, i) => ({
      type: 'octahedron',
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 30
      ] as [number, number, number],
      scale: Math.random() * 2 + 0.8,
      rotationSpeed: [
        Math.random() * 0.03 + 0.01,
        Math.random() * 0.03 + 0.01,
        Math.random() * 0.03 + 0.01
      ],
      color: `hsl(${280 + Math.random() * 60}, 90%, 70%)`
    })),
    // Icosahedron shapes (replacing tetrahedron)
    ...Array.from({ length: 6 }, (_, i) => ({
      type: 'icosahedron',
      position: [
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 35
      ] as [number, number, number],
      scale: Math.random() * 1.2 + 0.4,
      rotationSpeed: [
        Math.random() * 0.04 + 0.02,
        Math.random() * 0.04 + 0.02,
        Math.random() * 0.04 + 0.02
      ],
      color: `hsl(${180 + Math.random() * 80}, 85%, 65%)`
    }))
  ], []);

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} index={index} />
      ))}
    </>
  );
}

function FloatingShape({ type, position, scale, rotationSpeed, color, index }: {
  type: string;
  position: [number, number, number];
  scale: number;
  rotationSpeed: [number, number, number];
  color: string;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];

      // Complex floating motion
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = initialY +
        Math.sin(time * 1.5 + position[0] * 0.1) * 2 +
        Math.cos(time * 0.8 + position[2] * 0.1) * 1;

      // Slight orbital motion
      const orbitRadius = 0.5;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.3 + index) * orbitRadius;
      meshRef.current.position.z = position[2] + Math.sin(time * 0.3 + index) * orbitRadius;

      // Pulsing scale
      const pulseScale = scale * (1 + Math.sin(time * 3 + index) * 0.1);
      meshRef.current.scale.setScalar(pulseScale);
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'torus':
        return <torusGeometry args={[1, 0.3, 8, 16]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 2]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.4}
        wireframe={true}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function EnergyRings() {
  const rings = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      radius: 8 + i * 3,
      rotationSpeed: 0.01 + i * 0.005,
      color: `hsl(${240 + i * 30}, 80%, 60%)`,
      opacity: 0.6 - i * 0.1
    }))
    , []);

  return (
    <>
      {rings.map((ring, index) => (
        <EnergyRing key={index} {...ring} index={index} />
      ))}
    </>
  );
}

function EnergyRing({ radius, rotationSpeed, color, opacity, index }: {
  radius: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
  index: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed;
      ringRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.7;
      ringRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 1.3;

      // Breathing effect
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
      ringRef.current.scale.setScalar(breathe);
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.1, 3, 50]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        wireframe={false}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function FloatingCubes() {
  const cubes = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 40
      ] as [number, number, number],
      scale: Math.random() * 0.8 + 0.3,
      rotationSpeed: Math.random() * 0.03 + 0.01,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`
    }))
    , []);

  return (
    <>
      {cubes.map((cube, index) => (
        <FloatingCube key={index} {...cube} index={index} />
      ))}
    </>
  );
}

function FloatingCube({ position, scale, rotationSpeed, color, index }: {
  position: [number, number, number];
  scale: number;
  rotationSpeed: number;
  color: string;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.7;
      meshRef.current.rotation.z += rotationSpeed * 1.2;

      // Complex floating motion
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = position[1] +
        Math.sin(time * 1.2 + index * 0.5) * 3 +
        Math.cos(time * 0.6 + index * 0.8) * 1.5;

      // Morphing scale
      const morphScale = scale * (1 + Math.sin(time * 4 + index) * 0.2);
      meshRef.current.scale.setScalar(morphScale);
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.5}
        wireframe={true}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

export default function Hero3DScene() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.6,
      background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 25], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[20, 20, 20]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-20, -20, -20]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[0, 20, -20]} intensity={0.6} color="#10b981" />

        <AnimatedPoints />
        <GeometricShapes />
        <EnergyRings />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}