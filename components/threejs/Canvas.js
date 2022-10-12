import { useState } from "react";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const CanvasWrapper = () => {
	const [clicked, setClicked] = useState(false);

	return (
		<Canvas style={{ height: "100%", width: "100%" }}>
			<ambientLight intensity={0.6} />
			<pointLight intensity={5} position={[5, 5, 5]} color={"purple"} />
			<pointLight intensity={5} position={[-5, 5, -5]} color={"blue"} />
			<Computer clicked={clicked} setClicked={setClicked} />
		</Canvas>
	);
};

export default CanvasWrapper;
