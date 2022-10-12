import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Computer({ clicked, setClicked }) {
	const { nodes, materials } = useGLTF("/computer/scene.gltf");

	useFrame((state) => {
		if (clicked) {
			state.camera.position.lerp(new THREE.Vector3(-0.1, 0.38, 0.3), 0.05);
			state.camera.updateProjectionMatrix();
		} else {
			state.camera.position.lerp(new THREE.Vector3(0, 0.2, 1.5), 0.05);
			state.camera.updateProjectionMatrix();
		}
		return null;
	});

	return (
		<group dispose={null} position={[0, -0.5, 0]}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<group
						position={[-0.13, 1, -0.78]}
						onClick={() => setClicked(!clicked)}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_4.geometry}
							material={materials.base}
						/>
					</group>
					<group position={[-0.24, 0.1, 0.66]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_6.geometry}
							material={materials.base}
						/>
					</group>
					<group position={[0.82, 0.1, 0.29]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_8.geometry}
							material={materials.base}
						/>
					</group>
					<group position={[-1.1, 0, 0.31]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_10.geometry}
							material={materials.base}
						/>
					</group>
					<group position={[0.86, 0, -1.49]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_12.geometry}
							material={materials.base}
						/>
					</group>
					<group position={[-0.24, 0.1, 0.66]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_14.geometry}
							material={materials.base}
						/>
					</group>
					<group position={[0.82, 0.1, 0.29]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_16.geometry}
							material={materials.base}
						/>
					</group>
					<group position={[-0.05, 0.09, -0.57]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_18.geometry}
							material={materials.base}
						/>
					</group>
					<group position={[-0.1, 0.88, -0.26]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_20.geometry}
							material={materials.base}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/computer/scene.gltf");
