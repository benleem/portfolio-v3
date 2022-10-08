import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Cone, useGLTF } from "@react-three/drei";

export default function Computer() {
	const computer = useRef();
	const { nodes, materials } = useGLTF("/computer/scene.gltf");

	const [rotation, setRotation] = useState(true);

	useFrame(() =>
		rotation
			? (computer.current.rotation.y -= 0.004)
			: (computer.current.rotation.y -= 0)
	);

	console.log(nodes);

	return (
		<group
			ref={computer}
			dispose={null}
			onClick={() => setRotation(!rotation)}
			position={[0, 0.3, 0]}
		>
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
