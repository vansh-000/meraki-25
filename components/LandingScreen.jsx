"use client";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const BackgroundMesh = () => {
    const tex = useTexture("/images/image.png");
    const cyl = useRef(null);
    const [size, setSize] = useState([2, 2, 2]);

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 768) {
                setSize([1.2, 1.2, 1.2]);
            } else {
                setSize([2, 2, 2]);
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useFrame((state, delta) => {
        if (cyl.current) {
            cyl.current.rotation.y += delta * 0.8;
        }
    });

    return (
        <group rotation={[0, 1.4, 0.4]}>
            <mesh ref={cyl} scale={size}>
                <cylinderGeometry args={[1, 1, 1, 100, 100, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};

const LandingScreen = () => {
    return (
        <Canvas camera={{ fov: 50 }} style={{ pointerEvents: "none" }}>
            <OrbitControls enableZoom={false} />
            <ambientLight />
            <BackgroundMesh />
        </Canvas>
    );
};

export default LandingScreen;
