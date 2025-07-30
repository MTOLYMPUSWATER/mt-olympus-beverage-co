import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Zeus figure component
const Zeus = () => {
  const zeusRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (zeusRef.current) {
      // Gentle swaying motion
      zeusRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      zeusRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2 + 2;
    }
  });

  return (
    <group ref={zeusRef} position={[0, 2, 0]}>
      {/* Zeus body - simplified geometric representation */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 1.2, 3, 8]} />
        <meshStandardMaterial color="#E8DCC6" />
      </mesh>
      
      {/* Zeus head */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#F4E4BC" />
      </mesh>
      
      {/* Crown/Lightning */}
      <mesh position={[0, 2.8, 0]}>
        <coneGeometry args={[0.3, 0.8, 6]} />
        <meshStandardMaterial 
          color="#FFD700" 
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-1, 0.5, 0]} rotation={[0, 0, -0.5]}>
        <cylinderGeometry args={[0.2, 0.3, 1.5, 8]} />
        <meshStandardMaterial color="#E8DCC6" />
      </mesh>
      
      <mesh position={[1, 0.5, 0]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.2, 0.3, 1.5, 8]} />
        <meshStandardMaterial color="#E8DCC6" />
      </mesh>
      
      {/* Water jug in left hand */}
      <mesh position={[-1.5, 1.2, 0]}>
        <cylinderGeometry args={[0.4, 0.3, 0.8, 12]} />
        <meshStandardMaterial color="#4A90E2" metalness={0.3} roughness={0.1} />
      </mesh>
    </group>
  );
};

// Water stream effect
const WaterStream = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 1] = Math.random() * -5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.05; // Fall down
        
        if (positions[i + 1] < -5) {
          positions[i + 1] = 2; // Reset to top
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef} position={[-1.5, 2, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#87CEEB"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Ancient well
const Well = () => {
  return (
    <group position={[0, -2, 0]}>
      {/* Well structure */}
      <mesh>
        <cylinderGeometry args={[1.5, 1.8, 1, 16]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} />
      </mesh>
      
      {/* Well rim */}
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[1.8, 0.2, 8, 16]} />
        <meshStandardMaterial color="#A0522D" />
      </mesh>
      
      {/* Water surface */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.4, 32]} />
        <meshStandardMaterial 
          color="#1E90FF" 
          transparent 
          opacity={0.8}
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};

// Lightning bolts
const Lightning = () => {
  const lightningRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (lightningRef.current) {
      // Random flashing
      lightningRef.current.visible = Math.random() > 0.85;
    }
  });

  return (
    <group ref={lightningRef}>
      {/* Lightning bolt 1 */}
      <mesh position={[-3, 4, -2]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.05, 0.15, 3, 6]} />
        <meshStandardMaterial 
          color="#FFFF00" 
          emissive="#FFFF00"
          emissiveIntensity={1}
        />
      </mesh>
      
      {/* Lightning bolt 2 */}
      <mesh position={[3, 3, -1]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.05, 0.15, 2.5, 6]} />
        <meshStandardMaterial 
          color="#FFFF00" 
          emissive="#FFFF00"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
};

// Stormy waves in background
const StormyWaves = () => {
  const wavesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (wavesRef.current) {
      wavesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      wavesRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={wavesRef} position={[0, -1, -8]}>
      {Array.from({ length: 8 }, (_, i) => (
        <mesh key={i} position={[Math.cos(i) * 6, Math.sin(i * 2) * 2, Math.sin(i) * 6]}>
          <sphereGeometry args={[1 + Math.random(), 8, 6]} />
          <meshStandardMaterial 
            color="#1E3A8A" 
            transparent 
            opacity={0.6}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};

// Simple clouds using basic geometry
const StormClouds = () => {
  return (
    <group>
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={i} position={[Math.cos(i * 2) * 8, 6 + Math.sin(i) * 2, -5 + Math.sin(i * 3) * 3]}>
          <sphereGeometry args={[1.5 + Math.random(), 8, 6]} />
          <meshStandardMaterial 
            color="#374151" 
            transparent 
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
};

const ZeusScene = () => {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} color="#4A90E2" />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1} 
          color="#FFD700"
          castShadow
        />
        <pointLight 
          position={[0, 8, 0]} 
          intensity={0.8} 
          color="#FFFF00"
          distance={20}
        />
        
        {/* Environment and atmosphere */}
        <fog attach="fog" args={['#1e293b', 5, 25]} />
        
        {/* 3D Elements */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Zeus />
        </Float>
        
        <WaterStream />
        <Well />
        <Lightning />
        <StormyWaves />
        <StormClouds />
        
        {/* Sparkle effects */}
        <Sparkles
          count={100}
          scale={10}
          size={2}
          speed={0.4}
          color="#FFD700"
        />
        
        {/* Simple divine text overlay */}
        <group position={[0, 5, 0]}>
          <mesh>
            <boxGeometry args={[4, 0.5, 0.1]} />
            <meshStandardMaterial 
              color="#FFD700" 
              emissive="#FFD700"
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
        
        {/* Controls */}
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="text-primary text-center">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-sm font-olympus">Scroll to Enter Olympus</p>
        </div>
      </div>
    </div>
  );
};

export default ZeusScene;