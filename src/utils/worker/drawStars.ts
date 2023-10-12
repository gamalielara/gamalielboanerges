/* eslint-disable */
/* @typescript-eslint/no-var-requires */
// @ts-ignore

import * as THREE from "three";

const drawStar = () => {
  const sphere = new THREE.SphereGeometry(0.24, 34, 24);
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

  return new THREE.Mesh(sphere, sphereMaterial);
};

const generateStars = (message: string) => {
  const starsCount = message === "intial render" ? 5000 : 100;

  console.time("generate stars");
  const stars = new THREE.Group();

  Array.from({ length: starsCount }).fill(null).forEach(() => {
    const star = drawStar();
    stars.add(star);
  });

  self.postMessage({ message, stars: stars.toJSON() });
  console.timeEnd("generate stars");
};


self.onmessage = (event) => {
  console.log(event.data);
  generateStars(event.data);
};
