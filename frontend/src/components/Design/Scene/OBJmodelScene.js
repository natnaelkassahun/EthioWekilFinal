import "./styles.css";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "./Light";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {

    const obj = useLoader(OBJLoader, "./FinalBaseMesh.obj", (loader) => {

  });

  console.log(obj);
  return <primitive object={obj} scale={0.2} />;
};

export default function App() {
  return (
    <div className="bg_model_container">
      <Canvas camera={{ position: [4, 4, 0] }}>
        <Suspense fallback={null}>
           <directionalLight position={[4.224, 1.912, 3.046]} />
           <ambientLight />
          
           <Scene />
          
          <OrbitControls />
          
       
        </Suspense>
      </Canvas>
    </div>
  );
}
