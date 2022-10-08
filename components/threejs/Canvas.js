import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Computer from "./Computer";

const CanvasWrapper = () => {
	return (
		<Canvas style={{ height: "100%", width: "100%" }}>
			<OrbitControls
				zoomSpeed={0.2}
				minDistance={1.5}
				maxDistance={2.5}
				enablePan={false}
				// enableZoom={false}
				target={[0, 0, 0]}
			/>
			<ambientLight intensity={0.6} />
			<pointLight intensity={5} position={[5, 5, 5]} color={"purple"} />
			<pointLight intensity={5} position={[-5, 5, -5]} color={"blue"} />
			<Computer />
		</Canvas>
	);
};

export default CanvasWrapper;
