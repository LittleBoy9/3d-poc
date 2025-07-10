import ModelViewer from "@/components/ModelViewer";
export default function Home() {
  return (
    <main>
      {/* <ModelViewer path={"model/AnimatedCube/AnimatedCube.gltf"}/> */}
      {/* <ModelViewer path={"dionosour/scene.gltf"}/> */}
      <ModelViewer
        path={
          "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMilkTruck/glTF-Binary/CesiumMilkTruck.glb"
        }
      />
    </main>
  );
}
