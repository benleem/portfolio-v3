import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Computer from "./Computer";

const CanvasWrapper = () => {
	return (
		<Canvas style={{ height: "100%", width: "100%" }}>
			<OrbitControls
				zoomSpeed={0.3}
				minDistance={1}
				maxDistance={2}
				enablePan={false}
				// enableZoom={false}
				target={[0, 0, 0]}
				maxAzimuthAngle={Math.PI / 2}
				minAzimuthAngle={Math.PI / -2}
			/>
			<ambientLight intensity={0.6} />
			<pointLight intensity={5} position={[5, 5, 5]} color={"purple"} />
			<pointLight intensity={5} position={[-5, 5, -5]} color={"blue"} />
			<Computer />
		</Canvas>
	);
};

export default CanvasWrapper;
