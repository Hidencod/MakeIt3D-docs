// src/components/Hero3DScene.tsx
import React, { useRef, useMemo,useState,useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Glowing Grid Floor
function GridFloor() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const gridTexture = useMemo(() => {
    // Create a canvas for the grid texture
    const canvas = document.createElement('canvas');
    const size = 512;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d')!;

    // Black background
    context.fillStyle = '#000000';
    context.fillRect(0, 0, size, size);

    // Grid lines
    context.strokeStyle = '#00ffff';
    context.lineWidth = 1;
    context.globalCompositeOperation = 'lighter';

    const gridSize = 32; // Number of grid cells
    const cellSize = size / gridSize;

    // Draw grid lines
    for (let i = 0; i <= gridSize; i++) {
      const pos = i * cellSize;
      const opacity = i === 0 || i === gridSize || i === gridSize / 2 ? 1.0 : 0.6;
      context.globalAlpha = opacity;

      // Vertical lines
      context.beginPath();
      context.moveTo(pos, 0);
      context.lineTo(pos, size);
      context.stroke();

      // Horizontal lines
      context.beginPath();
      context.moveTo(0, pos);
      context.lineTo(size, pos);
      context.stroke();
    }

    // Add some bright intersection points
    context.fillStyle = '#00ffff';
    context.globalAlpha = 0.8;
    for (let i = 0; i <= gridSize; i += 4) {
      for (let j = 0; j <= gridSize; j += 4) {
        context.beginPath();
        context.arc(i * cellSize, j * cellSize, 3, 0, Math.PI * 2);
        context.fill();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 5); // Tile the texture

    return texture;
  }, []);

  // Custom shader material for animated grid
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        gridTexture: { value: gridTexture },
        glowColor: { value: new THREE.Color(0x00ffff) },
        pulseColor: { value: new THREE.Color(0xff6600) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        
        void main() {
          vUv = uv;
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform sampler2D gridTexture;
        uniform vec3 glowColor;
        uniform vec3 pulseColor;
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        
        void main() {
          vec4 gridColor = texture2D(gridTexture, vUv);
          
          // Distance from center for radial effects
          float centerDistance = length(vWorldPosition.xz);
          
          // Animated wave effect
          float wave1 = sin(time * 3.0 - centerDistance * 0.1) * 0.5 + 0.5;
          float wave2 = sin(time * 2.0 + centerDistance * 0.05) * 0.3 + 0.3;
          
          // Pulse effect from center
          float pulse = sin(time * 4.0 - centerDistance * 0.2) * 0.4 + 0.6;
          
          // Mix colors based on waves
          vec3 finalColor = mix(glowColor, pulseColor, wave1 * 0.3);
          finalColor *= (wave2 + pulse);
          
          // Apply grid texture and enhance brightness
          float gridIntensity = gridColor.b * 2.0;
          finalColor *= gridIntensity;
          
          // Add some base glow
          finalColor += glowColor * 0.1 * gridIntensity;
          
          // Distance fade
          float distanceFade = 1.0 - smoothstep(30.0, 60.0, centerDistance);
          
          gl_FragColor = vec4(finalColor, gridIntensity * distanceFade * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
  }, [gridTexture]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[120, 120, 1, 1]} />
      <shaderMaterial ref={materialRef} attach="material" {...shaderMaterial} />
    </mesh>
  );
}

// Energy Particles System
function EnergyParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const [positions, colors, velocities] = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Create streams of particles
      if (i < count * 0.3) {
        // Central energy stream
        const angle = (i / (count * 0.3)) * Math.PI * 2;
        const radius = Math.random() * 2;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 2] = Math.sin(angle) * radius;

        colors[i * 3] = 0;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1.5;
      } else if (i < count * 0.6) {
        // Circuit-like patterns
        const x = Math.floor(Math.random() * 20) - 10;
        const z = Math.floor(Math.random() * 20) - 10;
        positions[i * 3] = x + (Math.random() - 0.5) * 0.8;
        positions[i * 3 + 1] = Math.random() * 20 - 5;
        positions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.8;

        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.5;
        colors[i * 3 + 2] = 0;
      } else {
        // Ambient particles
        positions[i * 3] = (Math.random() - 0.5) * 40;
        positions[i * 3 + 1] = Math.random() * 25 - 5;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

        const colorType = Math.random();
        if (colorType < 0.5) {
          colors[i * 3] = 0.8 + Math.random() * 0.5;;
          colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
          colors[i * 3 + 2] = 1;
        } else {
          colors[i * 3] = 1;
          colors[i * 3 + 1] = 0.3;
          colors[i * 3 + 2] = 0;
        }
      }

      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = Math.random() * 0.2 + 0.05;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }

    return [positions, colors, velocities];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.getAttribute('position');
      const colors = particlesRef.current.geometry.getAttribute('color');

      for (let i = 0; i < positions.count; i++) {
        // Update positions
        positions.setX(i, positions.getX(i) + velocities[i * 3]);
        positions.setY(i, positions.getY(i) + velocities[i * 3 + 1]);
        positions.setZ(i, positions.getZ(i) + velocities[i * 3 + 2]);

        // Reset particles that go too far
        if (positions.getY(i) > 15) {
          positions.setY(i, -10);
        }

        // Energy pulse effect
        const pulse = Math.sin(state.clock.elapsedTime * 5 + i * 0.01) * 0.3 + 0.7;
        colors.setY(i, colors.getY(i) * pulse);
        colors.setZ(i, colors.getZ(i) * pulse);
      }

      positions.needsUpdate = true;
      colors.needsUpdate = true;

      // Global rotation
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
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
        opacity={0.9}
        size={0.15}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Tron-style geometric structures
function DigitalStructures() {
  const structures = useMemo(() => [
    // Central towers
    ...Array.from({ length: 4 }, (_, i) => ({
      type: 'tower',
      position: [
        Math.cos(i * Math.PI * 0.5) * 8,
        0,
        Math.sin(i * Math.PI * 0.5) * 8
      ] as [number, number, number],
      height: 15 + Math.random() * 10,
      color: i % 2 === 0 ? '#00ffff' : '#ff6600',
      pulseOffset: i * 0.5
    })),
    // Floating rings
    ...Array.from({ length: 6 }, (_, i) => ({
      type: 'ring',
      position: [
        (Math.random() - 0.5) * 25,
        5 + Math.random() * 10,
        (Math.random() - 0.5) * 25
      ] as [number, number, number],
      radius: 2 + Math.random() * 3,
      color: ['#00ffff', '#ff6600', '#00ff00'][Math.floor(Math.random() * 3)],
      rotationSpeed: 0.02 + Math.random() * 0.03,
      pulseOffset: i * 0.3
    })),
    // Data cubes
    ...Array.from({ length: 8 }, (_, i) => ({
      type: 'datacube',
      position: [
        (Math.random() - 0.5) * 30,
        Math.random() * 15,
        (Math.random() - 0.5) * 30
      ] as [number, number, number],
      size: 1 + Math.random() * 2,
      color: Math.random() > 0.5 ? '#00ffff' : '#ff6600',
      rotationSpeed: [
        Math.random() * 0.04,
        Math.random() * 0.04,
        Math.random() * 0.04
      ],
      pulseOffset: i * 0.4
    }))
  ], []);

  return (
    <>
      {structures.map((structure, index) => (
        <DigitalStructure key={index} {...structure} index={index} />
      ))}
    </>
  );
}

function DigitalStructure({ type, position, color, index, ...props }: any) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;

      if (type === 'tower') {
        // Pulsing height effect
        const pulse = 1 + Math.sin(time * 3 + props.pulseOffset) * 0.2;
        meshRef.current.scale.y = pulse;

        // Gentle sway
        meshRef.current.rotation.z = Math.sin(time * 0.5 + index) * 0.1;
      } else if (type === 'ring') {
        // Rotation
        meshRef.current.rotation.x += props.rotationSpeed;
        meshRef.current.rotation.y += props.rotationSpeed * 0.7;

        // Floating motion
        meshRef.current.position.y = position[1] + Math.sin(time + props.pulseOffset) * 2;

        // Pulsing scale
        const pulse = 1 + Math.sin(time * 4 + props.pulseOffset) * 0.15;
        meshRef.current.scale.setScalar(pulse);
      } else if (type === 'datacube') {
        // Complex rotation
        meshRef.current.rotation.x += props.rotationSpeed[0];
        meshRef.current.rotation.y += props.rotationSpeed[1];
        meshRef.current.rotation.z += props.rotationSpeed[2];

        // Floating and morphing
        meshRef.current.position.y = position[1] + Math.sin(time * 1.5 + props.pulseOffset) * 3;
        const morph = 1 + Math.sin(time * 6 + props.pulseOffset) * 0.3;
        meshRef.current.scale.setScalar(morph);
      }
    }
  });

  const renderStructure = () => {
    switch (type) {
      case 'tower':
        return (
          <group>
            <mesh position={[0, props.height / 2, 0]}>
              <boxGeometry args={[0.5, props.height, 0.5]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                transparent
                opacity={0.8}
                wireframe={false}
              />
            </mesh>
            {/* Glowing top */}
            <mesh position={[0, props.height + 0.5, 0]}>
              <sphereGeometry args={[0.8, 8, 8]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={1}
                transparent
                opacity={0.6}
              />
            </mesh>
          </group>
        );
      case 'ring':
        return (
          <mesh>
            <torusGeometry args={[props.radius, 0.2, 8, 32]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.8}
              transparent
              opacity={0.7}
              wireframe={false}
            />
          </mesh>
        );
      case 'datacube':
        return (
          <group>
            <mesh>
              <boxGeometry args={[props.size, props.size, props.size]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.4}
                transparent
                opacity={0.6}
                wireframe={true}
              />
            </mesh>
            <mesh>
              <boxGeometry args={[props.size * 0.8, props.size * 0.8, props.size * 0.8]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.2}
                transparent
                opacity={0.3}
              />
            </mesh>
          </group>
        );
      default:
        return null;
    }
  };

  return (
    <group ref={meshRef} position={position}>
      {renderStructure()}
    </group>
  );
}

// Energy streams
function EnergyStreams() {
  const streamsRef = useRef<THREE.Group>(null);

  const streamData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 15 + Math.sin(i) * 5;
      return {
        start: [Math.cos(angle) * radius, -5, Math.sin(angle) * radius],
        end: [Math.cos(angle + 0.5) * (radius + 10), 20, Math.sin(angle + 0.5) * (radius + 10)],
        color: i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff6600' : '#00ff00',
        offset: i * 0.2
      };
    });
  }, []);

  useFrame((state) => {
    if (streamsRef.current) {
      streamsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={streamsRef}>
      {streamData.map((stream, index) => (
        <EnergyStream key={index} {...stream} index={index} />
      ))}
    </group>
  );
}

function EnergyStream({ start, end, color, offset, index }: any) {
  const streamRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points = [];
    const colors = [];
    const segments = 10;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = start[0] + (end[0] - start[0]) * t;
      const y = start[1] + (end[1] - start[1]) * t + Math.sin(t * Math.PI * 2) * 2;
      const z = start[2] + (end[2] - start[2]) * t;

      points.push(x, y, z);

      const intensity = Math.sin(t * Math.PI) * 0.8 + 0.2;
      if (color === '#00ffff') {
        colors.push(0, intensity, intensity);
      } else if (color === '#ff6600') {
        colors.push(intensity, intensity * 0.4, 0);
      } else {
        colors.push(0, intensity, 0);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    return geometry;
  }, [start, end, color]);

  useFrame((state) => {
    if (streamRef.current) {
      const colors = streamRef.current.geometry.getAttribute('color');
      const positions = streamRef.current.geometry.getAttribute('position');

      for (let i = 0; i < colors.count; i++) {
        const t = i / (colors.count - 1);
        const wave = Math.sin(state.clock.elapsedTime * 8 + offset + t * Math.PI * 4) * 0.5 + 0.5;
        const baseIntensity = Math.sin(t * Math.PI) * 0.8 + 0.2;
        const intensity = baseIntensity * (0.5 + wave * 0.5);

        if (color === '#00ffff') {
          colors.setY(i, intensity);
          colors.setZ(i, intensity);
        } else if (color === '#ff6600') {
          colors.setX(i, intensity);
          colors.setY(i, intensity * 0.4);
        } else {
          colors.setY(i, intensity);
        }
      }

      colors.needsUpdate = true;
    }
  });

  return (
    <lineSegments ref={streamRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial vertexColors transparent opacity={0.8} linewidth={3} />
    </lineSegments>
  );
}


export default function Hero3DScene() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const gradient =
    theme === "dark"
      ? "linear-gradient(180deg, #000511 0%, #001122 100%)"
      : "linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)";

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.9,
        background:
          "radial-gradient(ellipse at center, rgba(0, 255, 255, 0.05) 0%, rgba(255, 102, 0, 0.03) 50%, transparent 100%)",
        filter: "contrast(1.1) saturate(1.2)",
      }}
    >
      <Canvas
        camera={{ position: [0, 5, 20], fov: 75 }}
        style={{ background: gradient }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 20, 0]} intensity={2} color="#00ffff" />
        <pointLight position={[20, 10, 20]} intensity={1.5} color="#ff6600" />
        <pointLight position={[-20, 10, -20]} intensity={1.5} color="#00ff00" />
        <pointLight position={[0, -5, 0]} intensity={0.8} color="#0066ff" />

        <GridFloor />
        <EnergyParticles />
        {/* <DigitalStructures /> */}
        {/* <EnergyStreams /> */}
      </Canvas>
    </div>
  );
}
