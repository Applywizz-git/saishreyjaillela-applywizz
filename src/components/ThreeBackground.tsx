import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Low-poly particle system
const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate particle positions
  const [positions, colors] = useMemo(() => {
    const count = 1000; // Reduced for performance
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Create a sparse 3D field
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Subtle color variation (emerald to lime)
      const t = Math.random();
      colors[i * 3] = 0.13 + t * 0.4; // R
      colors[i * 3 + 1] = 0.77 + t * 0.1; // G
      colors[i * 3 + 2] = 0.37 + t * 0.08; // B
    }

    return [positions, colors];
  }, []);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useFrame((state) => {
    if (ref.current) {
      // Very gentle rotation (even slower)
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05;
      ref.current.rotation.y += 0.0005;

      // Subtle mouse parallax (limited to 2-3 degrees)
      ref.current.rotation.x += mousePosition.y * 0.05;
      ref.current.rotation.y += mousePosition.x * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={2}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};

// Floating geometric shapes
const FloatingGeometry = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {/* Minimal geometric shapes */}
      <mesh position={[-5, 2, -2]}>
        <octahedronGeometry args={[0.5]} />
        <meshBasicMaterial 
          color="#22c55e" 
          transparent 
          opacity={0.1}
          wireframe
        />
      </mesh>
      
      <mesh position={[5, -2, -3]}>
        <tetrahedronGeometry args={[0.7]} />
        <meshBasicMaterial 
          color="#84cc16" 
          transparent 
          opacity={0.1}
          wireframe
        />
      </mesh>

      <mesh position={[0, 3, -4]}>
        <icosahedronGeometry args={[0.4]} />
        <meshBasicMaterial 
          color="#f59e0b" 
          transparent 
          opacity={0.1}
          wireframe
        />
      </mesh>
    </group>
  );
};

export const ThreeBackground = () => {
  const [isTabActive, setIsTabActive] = useState(true);
  const [isLowPower, setIsLowPower] = useState(false);

  // Detect tab visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Detect low-power devices
  useEffect(() => {
    const checkLowPower = () => {
      // Simple heuristics for low-power detection
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isSlowDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
      
      setIsLowPower(isMobile || isSlowDevice);
    };

    checkLowPower();
  }, []);

  // Don't render on low-power devices or when tab is not active
  if (!isTabActive || isLowPower) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ 
          antialias: false, // Disable for performance
          alpha: true,
          powerPreference: "low-power"
        }}
        dpr={Math.min(window.devicePixelRatio, 1.5)} // Limit DPR for performance
      >
        <ambientLight intensity={0.3} />
        <ParticleField />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};