import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Cube: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#f39c12" />
        </mesh>
    );
};

const RotatingCube: React.FC = () => {
    return (
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
            camera={{ position: [0, 0, 3] }}
        >
            <ambientLight />
            <directionalLight position={[2, 2, 5]} />
            <Cube />
        </Canvas>
    );
};

export default RotatingCube;
