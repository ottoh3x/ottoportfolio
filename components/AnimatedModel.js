import React from "react";

function AnimatedModel() {
  return (
    <mesh rotation={[90, 0, 20]} scale={3.3}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="rgb(9,16,9)" />
        <pointLight position={[50,50,50]} color="red" decay={2} distance={1} intensity={2}/>
    </mesh>
  );
}

export default AnimatedModel;
