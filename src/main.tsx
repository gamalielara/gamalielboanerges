import './index.css';
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import planeModel from "./assets/model/plane.glb"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { faker } from "@faker-js/faker";

const mainCanvas = document.getElementById("main-canvas") as HTMLCanvasElement;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: mainCanvas,
});


const loader = new GLTFLoader();

let plane: any;
loader.load(planeModel, (gltf: any) => {

  plane = gltf.scene;

  plane.rotateX(0.3);

  scene.add(gltf.scene);

}, undefined, function (error: any) {

  console.error(error);

})

renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(3, 5, 3);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);

const pointLightHelper = new THREE.PointLightHelper(pointLight);

const gridHelper = new THREE.GridHelper(30, 30);
scene.add(pointLight, ambientLight, pointLightHelper, gridHelper);

const controller = new OrbitControls(camera, renderer.domElement);

const drawStars = () => {
  const sphere = new THREE.SphereGeometry(0.24, 34, 24);
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const star = new THREE.Mesh(sphere, sphereMaterial)

  const [ x, y, z ] = Array.from({ length: 3 }).fill(null).map(() => faker.number.float({
    min: -100,
    max: 100,
    precision: 0.001
  }));

  star.position.set(x, y, z);
  scene.add(star);
}

Array.from({ length: 1000 }).fill(null).forEach(drawStars);

( function render() {
  window.requestAnimationFrame(render);

  plane.rotation.y += 0.01;

  controller.update();

  renderer.render(scene, camera);
} )();
