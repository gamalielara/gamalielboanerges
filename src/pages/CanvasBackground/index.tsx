import { decideCameraMagnifier } from "<utils>/decideCameraMagnifier";
import useCameraZoomingOnScroll from "<utils>/helpers/useCameraZoomingOnScroll.ts";
import useRotatingBoxes from "<utils>/helpers/useRotatingBoxes.ts";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CAMERA_ZOOM_MAGNIFIER = decideCameraMagnifier();
const ZOOMING_OUT_SPEED = 0.2;


const CanvasBackground = React.memo(() => {
  console.log({CAMERA_ZOOM_MAGNIFIER});

  console.log("canvas rendered");

  const mainCanvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const controllerRef = useRef<typeof OrbitControls>();
  const requestAnimId = useRef<number>();

  const rotatingBoxes = useRotatingBoxes(sceneRef.current);

  useCameraZoomingOnScroll(cameraRef.current);

  let shouldZoomOut = true;

  function renderBoxesAndAnimate() {
    requestAnimId.current = window.requestAnimationFrame(renderBoxesAndAnimate);

    if (!cameraRef.current || !controllerRef.current || !rendererRef.current || !sceneRef.current) return;

    if (cameraRef.current.position.z >= CAMERA_ZOOM_MAGNIFIER) shouldZoomOut = false;

    if (cameraRef.current.position.z <= CAMERA_ZOOM_MAGNIFIER && shouldZoomOut) cameraRef.current.position.z += ZOOMING_OUT_SPEED;

    if (window.scrollY < window.innerHeight) {
      rotatingBoxes?.forEach(boxesGroup => {
        boxesGroup.children.forEach(box => {
          box.rotation.x += 0.01;
          box.rotation.y += 0.01;
          box.rotation.z += 0.01;
        });
      });
    }

    controllerRef.current.update();

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }

  const resizeCanvas = () => {
    if (!mainCanvasRef.current) return;

    // Update canvas size
    mainCanvasRef.current.width = window.innerWidth;
    mainCanvasRef.current.height = window.innerHeight;

    // Update camera aspect ratio
    if (cameraRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
    }

    // Update renderer size
    if (rendererRef.current) {
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  };

  // First set up
  useEffect(() => {
    if (!mainCanvasRef.current) return;

    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 10000);
    rendererRef.current = new THREE.WebGLRenderer({
      canvas: mainCanvasRef.current!,
    });

    rendererRef.current.setClearColor(0x000000);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    cameraRef.current.position.z = 0;

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(3, 5, 3);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.01);

    sceneRef.current.add(pointLight, ambientLight);

    controllerRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controllerRef.current.enableRotate = false;
  }, []);

  useEffect(() => {
    if(!mainCanvasRef.current) return;

    window.addEventListener("resize", resizeCanvas, false);
  }, [mainCanvasRef.current]);

  const drawStars = () => {
    const starsWorker = new Worker(new URL("../../utils/worker/drawStars", import.meta.url), { type: "module" });

    starsWorker.onmessage = (event) => {

      const { message, starPositions } = event.data;

      const starsGeometry = new THREE.BufferGeometry();

      starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

      const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });

      const stars = new THREE.Points(starsGeometry, particleMaterial);

      sceneRef.current.add(stars);

      if (message === "draw stars completed") {
        // Hacky way to entirely remove loading container.
        // This way because the loading container has CSS `transform: preserve-3d`
        document.getElementById("loading-container")!.style.display = "none";
        renderBoxesAndAnimate();
      }
    };

    starsWorker.postMessage("draw stars");
  }

  useEffect(() => {
    drawStars();
  }, [rotatingBoxes]);

  useEffect(() => {
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);


  return <canvas ref={mainCanvasRef} className="top-0 left-0 fixed w-screen h-screen -z-10" />;
});

export default CanvasBackground;
