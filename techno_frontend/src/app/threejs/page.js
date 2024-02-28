'use client'
import { Canvas } from "@react-three/fiber";
import  "./styles.css";

export default function Home() {
  return (
    <div className="scene">
      <Canvas
        shadows
        className="canvas"
        camera={{
          position: [-6, 7, 7],
        }}
      > 

<ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />
          <Box rotateX={3} rotateY={0.2} />
          <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}



function Floor(props) {
    return (
      <mesh {...props} recieveShadow>
        <boxBufferGeometry args={[20,1,10]} />
        <meshPhysicalMaterial color='white' />
      </mesh>
    );
  }
  
  function Box(props) {
    return (
      <mesh {...props} recieveShadow={true} castShadow>
        <boxBufferGeometry />
        <meshPhysicalMaterial  color={"white"} />
      </mesh>
    );
  }

  
function LightBulb(props) {
    return (
      <mesh {...props} >
        <pointLight castShadow />
        <sphereBufferGeometry args={[0.2, 30, 10]} />
        <meshPhongMaterial emissive={"yellow"}  />
      </mesh>
    );
  }
  