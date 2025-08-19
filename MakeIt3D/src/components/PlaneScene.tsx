import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Plane: React.FC = () => {
    const planeRef = useRef<THREE.Group>(null!);
    const time = useRef(0);

    useFrame((state, delta) => {
        if (planeRef.current) {
            time.current += delta;

            // Realistic flying motion with gentle oscillations
            const hoverAmplitude = 0.3;
            const hoverSpeed = 1.5;
            const rollAmplitude = 0.15;
            const rollSpeed = 1.2;
            const pitchAmplitude = 0.1;
            const pitchSpeed = 0.8;

            // Vertical hovering motion
            planeRef.current.position.y = Math.sin(time.current * hoverSpeed) * hoverAmplitude;

            // Banking/rolling motion (rotation around z-axis)
            planeRef.current.rotation.z = Math.sin(time.current * rollSpeed) * rollAmplitude;

            // Subtle pitch motion (rotation around x-axis)
            planeRef.current.rotation.x = Math.sin(time.current * pitchSpeed) * pitchAmplitude;

            // Gentle yaw motion (rotation around y-axis)
            planeRef.current.rotation.y = Math.sin(time.current * 0.6) * 0.05;
        }
    });

    return (
        <group ref={planeRef} position={[0, 0, 0]}>
            {/* Main fuselage */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.08, 0.12, 1.2, 8]} />
                <meshStandardMaterial color="#e74c3c" />
            </mesh>

            {/* Wings */}
            <mesh position={[0, -0.05, 0]} rotation={[0, 0, 0]}>
                <boxGeometry args={[1.8, 0.05, 0.3]} />
                <meshStandardMaterial color="#34495e" />
            </mesh>

            {/* Tail */}
            <mesh position={[0, 0.1, -0.5]} rotation={[0, 0, 0]}>
                <boxGeometry args={[0.4, 0.3, 0.05]} />
                <meshStandardMaterial color="#34495e" />
            </mesh>

            {/* Vertical stabilizer */}
            <mesh position={[0, 0.2, -0.5]} rotation={[0, 0, 0]}>
                <boxGeometry args={[0.05, 0.3, 0.2]} />
                <meshStandardMaterial color="#34495e" />
            </mesh>

            {/* Propeller */}
            <mesh position={[0, 0, 0.6]} rotation={[0, 0, time.current * 50]}>
                <boxGeometry args={[0.02, 0.8, 0.02]} />
                <meshStandardMaterial color="#2c3e50" />
            </mesh>

            {/* Cockpit */}
            <mesh position={[0, 0.1, 0.2]}>
                <sphereGeometry args={[0.15, 8, 6]} />
                <meshStandardMaterial color="#3498db" transparent opacity={0.7} />
            </mesh>
        </group>
    );
};

const Cloud: React.FC<{ position: [number, number, number]; speed: number; size?: number }> = ({
    position,
    speed,
    size = 0.5
}) => {
    const cloudRef = useRef<THREE.Group>(null!);

    useFrame(() => {
        if (cloudRef.current) {
            cloudRef.current.position.x -= speed;
            if (cloudRef.current.position.x < -8) {
                cloudRef.current.position.x = 8; // reset to right side
            }
        }
    });

    return (
        <group ref={cloudRef} position={position}>
            {/* Multiple spheres to create a more realistic cloud shape */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[size, 12, 8]} />
                <meshStandardMaterial color="white" transparent opacity={0.8} />
            </mesh>
            <mesh position={[size * 0.7, size * 0.2, 0]}>
                <sphereGeometry args={[size * 0.8, 12, 8]} />
                <meshStandardMaterial color="white" transparent opacity={0.7} />
            </mesh>
            <mesh position={[-size * 0.6, size * 0.1, 0]}>
                <sphereGeometry args={[size * 0.6, 12, 8]} />
                <meshStandardMaterial color="white" transparent opacity={0.75} />
            </mesh>
            <mesh position={[0, -size * 0.3, 0]}>
                <sphereGeometry args={[size * 0.7, 12, 8]} />
                <meshStandardMaterial color="white" transparent opacity={0.6} />
            </mesh>
        </group>
    );
};

const Sky: React.FC = () => {
    return (
        <mesh>
            <sphereGeometry args={[50, 32, 32]} />
            <meshBasicMaterial
                color="#87CEEB"
                side={THREE.BackSide}
            />
        </mesh>
    );
};

const PlaneScene: React.FC = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, #87CEEB 0%, #98D8E8 100%)'
        }}>
            <Canvas
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
                camera={{ position: [0, 2, 8], fov: 60 }}
            >
                {/* Sky dome */}
                <Sky />

                {/* Improved lighting setup */}
                <ambientLight intensity={0.6} color="#ffffff" />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.2}
                    color="#ffeeaa"
                    castShadow
                />
                <directionalLight
                    position={[-5, 5, 5]}
                    intensity={0.4}
                    color="#aaccff"
                />

                {/* Fog for atmospheric effect */}
                <fog attach="fog" args={['#87CEEB', 10, 50]} />

                {/* Flying plane */}
                <Plane />

                {/* Multiple clouds at different depths and sizes */}
                <Cloud position={[4, 2, -2]} speed={0.01} size={0.8} />
                <Cloud position={[6, -1, -3]} speed={0.015} size={0.6} />
                <Cloud position={[8, 1.5, -1]} speed={0.008} size={1.0} />
                <Cloud position={[10, -0.5, -4]} speed={0.012} size={0.7} />
                <Cloud position={[2, 3, -2.5]} speed={0.009} size={0.9} />
                <Cloud position={[12, 0.8, -1.5]} speed={0.014} size={0.5} />

                {/* Distant clouds */}
                <Cloud position={[15, 2.5, -6]} speed={0.005} size={1.2} />
                <Cloud position={[18, -1.8, -5]} speed={0.006} size={1.0} />
            </Canvas>
        </div>
    );
};

export default PlaneScene;