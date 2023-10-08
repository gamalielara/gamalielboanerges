import "./index.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { faker } from "@faker-js/faker";
import LETTERS from "<utils>/constants/letters";

const mainCanvas = document.getElementById("main-canvas") as HTMLCanvasElement;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: mainCanvas,
});

renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(100);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(3, 5, 3);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.01);

// const gridHelper = new THREE.GridHelper(30, 30);
scene.add(pointLight, ambientLight);

const controller = new OrbitControls(camera, renderer.domElement);

const drawStars = () => {
  const sphere = new THREE.SphereGeometry(0.24, 34, 24);
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const star = new THREE.Mesh(sphere, sphereMaterial);

  const [ x, y, z ] = Array.from({ length: 3 }).fill(null).map(() => faker.number.float({
    min: -100,
    max: 100,
    precision: 0.001
  }));

  star.position.set(x, y, z);
  scene.add(star);
};


const constructMyNameBoxesGroup = (name: string) => {
  const group = new THREE.Group();

  name.split("").forEach((letter, i) => {

    const letterTexture = LETTERS[letter];

    const box = new THREE.BoxGeometry(5, 5, 5);
    const boxTexture = new THREE.TextureLoader().load(letterTexture);

    const letterBox = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ map: boxTexture }));

    letterBox.position.setX(10 * i);

    letterBox.rotateX(faker.number.int({ max: 6.2, min: 0.017 }));
    letterBox.rotateY(faker.number.int({ max: 6.2, min: 0.017 }));
    letterBox.rotateZ(faker.number.int({ max: 6.2, min: 0.017 }));

    group.add(letterBox);
  });

  return group;
};

const rotatingBoxesGroupTop = constructMyNameBoxesGroup("GAMALIEL");
const rotatingBoxesGroupBottom = constructMyNameBoxesGroup("BOANERGES");


new THREE.Box3().setFromObject(rotatingBoxesGroupTop).getCenter(rotatingBoxesGroupTop.position).multiplyScalar(-1);
new THREE.Box3().setFromObject(rotatingBoxesGroupBottom).getCenter(rotatingBoxesGroupBottom.position).multiplyScalar(-1);

rotatingBoxesGroupBottom.position.y = -15;


scene.add(rotatingBoxesGroupTop, rotatingBoxesGroupBottom);

Array.from({ length: 1000 }).fill(null).forEach(drawStars);

( function render() {
  window.requestAnimationFrame(render);

  rotatingBoxesGroupTop.children.forEach(box => {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    box.rotation.z += 0.01;
  });
  rotatingBoxesGroupBottom.children.forEach(box => {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    box.rotation.z += 0.01;
  });

  controller.update();

  renderer.render(scene, camera);
} )();
