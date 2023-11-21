/* eslint-disable */
/* @typescript-eslint/no-var-requires */
// @ts-ignore

import { faker } from "@faker-js/faker";
import * as THREE from "three";


const generateStars = (message: string) => {
  console.time("GENERATE STARS TIME")

  const starsCount = 10e4;


  const particleGeometry = new THREE.BufferGeometry();

  const particlePositions = new Float32Array(starsCount * 3);


  const randomScale = starsCount / 50;


  for (let i = 0; i < starsCount * 3; i += 3) {
    particlePositions[i] = faker.number.float({
      min: randomScale * -1,
      max: randomScale,
      precision: 0.0001
    }); // x-coordinate

    particlePositions[i + 1] = faker.number.float({
      min: randomScale * -1,
      max: randomScale,
      precision: 0.0001
    }); // y-coordinate

    particlePositions[i + 2] = faker.number.float({
      min: randomScale * -1,
      max: randomScale,
      precision: 0.0001
    }); // z-coordinate
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);

  self.postMessage({ message: "draw stars completed", stars: particleSystem.toJSON() });

  console.timeEnd("GENERATE STARS TIME")
};


self.onmessage = (event) => {
  generateStars(event.data);
};
