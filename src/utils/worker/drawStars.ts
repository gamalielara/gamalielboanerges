import { faker } from "@faker-js/faker";

const generateStars = () => {
  console.time("GENERATE STARS TIME")

  const starsCount = 10e4;

  const particlePositions = new Float32Array(starsCount * 3);

  const randomScale = starsCount/5;

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

  (self as unknown as Worker).postMessage({ message: "draw stars completed", starPositions: particlePositions }, [particlePositions.buffer]);

  console.timeEnd("GENERATE STARS TIME")
};


self.onmessage = () => {
  generateStars();
};
