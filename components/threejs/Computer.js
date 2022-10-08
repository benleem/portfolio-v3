import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cone, useGLTF } from "@react-three/drei";

export default function Computer() {
	const computer = useRef();
	const { nodes, materials } = useGLTF("/computer/scene.gltf");

	useFrame(() => (computer.current.rotation.y -= 0.004));

	console.log(nodes, materials);

	return (
		<group ref={computer} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_4.geometry}
				material={nodes.Object_4.material}
			></mesh>
		</group>
	);
}

useGLTF.preload("/computer/scene.gltf");
