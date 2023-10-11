/* eslint-disable */
/* @typescript-eslint/no-var-requires */
// @ts-ignore

import * as THREE from "three";

const drawStar = () => {
		const sphere = new THREE.SphereGeometry(0.24, 34, 24);
		const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

		return new THREE.Mesh(sphere, sphereMaterial);
};

const generateStars = () => {
		console.time("generate stars")
		const stars = new THREE.Group();

		Array.from({ length: 10000 }).fill(null).forEach(() => {
				const star = drawStar();
				stars.add(star);
		});

		self.postMessage(stars.toJSON());
		console.timeEnd("generate stars")
}


self.onmessage = () => {
		generateStars();
};
