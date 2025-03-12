"use client";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const BackgroundMesh = () => {
    const tex = useTexture("/images/image1.png");
    const cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta * 0.8;
    });

    return (
        <group rotation={[0, 1.4, 0.4]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[2, 2, 2, 100, 100, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};

const LandingScreen = () => {
    return (
        <Canvas camera={{ fov: 50 }}>
            <OrbitControls enableZoom={false} />
            <ambientLight />
            <BackgroundMesh />
        </Canvas>
    );
};

export default LandingScreen;
