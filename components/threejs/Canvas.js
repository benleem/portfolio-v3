import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Computer from "./Computer";

const CanvasWrapper = () => {
	return (
		<Canvas style={{ height: "100%", width: "100%" }}>
			<OrbitControls
				minDistance={2.2}
				maxDistance={2.2}
				enablePan={false}
				enableZoom={false}
			/>
			<ambientLight intensity={0.6} />
			<pointLight intensity={5} position={[5, 5, 5]} color={"purple"} />
			<pointLight intensity={5} position={[-5, 5, -5]} color={"blue"} />
			<Computer position={[0, 0, 0]} />
		</Canvas>
	);
};

export default CanvasWrapper;
