import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import Loader from './Loader';

const generateGalaxyPoints = (count, radius) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.pow(Math.random(), 1 / 3);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

const GalaxyShape = props => {
  const ref = useRef();
  const [galaxy] = useState(() => generateGalaxyPoints(1000, 1.2));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group>
      <Points ref={ref} positions={galaxy} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 ">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <Suspense fallback={<Loader />}>
          <GalaxyShape />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StyledStarsCanvas;
