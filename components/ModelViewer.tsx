// "use client";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// function Model({ path }: { path: string }) {
//   const gltf = useGLTF(`${path}`, true);
//   return <primitive object={gltf.scene} scale={1} />;
// }

// export default function ModelViewer({ path }: { path: string }) {
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <Model path={path.toString()} />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Model({ path }: { path: string }) {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} scale={1} />;
}

export default function ModelViewer({ path }: { path: string }) {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          {/* 🌇 Realistic sky / environment */}
          <Environment
            background
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr"
          />
          <Model path={path} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
