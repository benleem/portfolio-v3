import { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { lerp } from "three/src/math/MathUtils";

export default function Computer(props) {
	const blink = useRef();
	const { nodes, materials } = useGLTF("/computer.glb");
	const [clicked, setClicked] = useState(false);
	const [animateBlink, setAnimateBlink] = useState(false);

	useEffect(() => {
		blink.current.material.transparent = true;
	}, []);

	useFrame(({ camera, clock }) => {
		// Animate camera zoom
		camera.position.x = lerp(camera.position.x, clicked ? -0.095 : 0, 0.05);
		camera.position.y = lerp(camera.position.y, clicked ? 0.38 : 0.2, 0.05);
		camera.position.z = lerp(camera.position.z, clicked ? 0.3 : 1.5, 0.05);

		if (clock.elapsedTime > 0.5) {
			clock.stop();
			setAnimateBlink(!animateBlink);
			clock.start();
		}

		blink.current.material.opacity = animateBlink ? 0 : 1;
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
				</group>
			</group>
			<group position={[0, 0, -0.0039]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text.geometry}
					material={materials.Glow}
					position={[-0.58, 1.24, -0.26]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.03}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text006.geometry}
					material={materials.Glow}
					position={[-0.58, 1.18, -0.26]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.03}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text001.geometry}
					material={materials.Glow}
					position={[-0.29, 1.18, -0.26]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.03}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text002.geometry}
					material={materials.Glow}
					position={[-0.02, 1.18, -0.26]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.03}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text003.geometry}
					material={materials.Glow}
					position={[-0.58, 0.99, -0.26]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.03}
				/>
				<mesh
					ref={blink}
					castShadow
					receiveShadow
					geometry={nodes.Text004.geometry}
					material={materials.Glow2}
					position={[-0.56, 0.99, -0.26]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.03}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/computer.glb");
