import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { faker } from "@faker-js/faker";
import LETTERS from "<utils>/constants/letters";
import { decideCameraMagnifier } from "<utils>/decideCameraMagnifier";
import { useEffect, useRef } from "react";

const CAMERA_ZOOM_MAGNIFIER = decideCameraMagnifier();
const ZOOMING_OUT_SPEED = 0.5;

const CanvasBackground: React.FC = () => {

  const mainCanvasRef = useRef<HTMLCanvasElement>(null);

  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const controllerRef = useRef<typeof OrbitControls>();
  const rotatingBoxes = useRef<THREE.Group<THREE.Object3DEventMap>[]>();


  const constructMyNameBoxesGroup = (name: string) => {
    const group = new THREE.Group();

    name.split("").forEach((letter, i) => {

      const letterTexture = ( LETTERS as Record<string, string> )[letter];

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

  let shouldZoomOut = true;

  function renderAndAnimate() {
    window.requestAnimationFrame(renderAndAnimate);

    if ( !cameraRef.current || !controllerRef.current || !rendererRef.current || !sceneRef.current || !rotatingBoxes.current ) return;

    if ( cameraRef.current.position.z >= CAMERA_ZOOM_MAGNIFIER ) shouldZoomOut = false;

    if ( cameraRef.current.position.z <= CAMERA_ZOOM_MAGNIFIER && shouldZoomOut ) cameraRef.current.position.z += ZOOMING_OUT_SPEED;

    rotatingBoxes.current.forEach(boxesGroup => {
      boxesGroup.children.forEach(box => {
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
        box.rotation.z += 0.01;
      });
    });

    controllerRef.current.update();

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }

  useEffect(() => {
    if ( !mainCanvasRef.current ) return;

    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 1000);
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

    // const gridHelper = new THREE.GridHelper(30, 30);
    sceneRef.current.add(pointLight, ambientLight);

    controllerRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);

    const rotatingBoxesGroupTop = constructMyNameBoxesGroup("GAMALIEL");
    const rotatingBoxesGroupBottom = constructMyNameBoxesGroup("BOANERGES");

    rotatingBoxes.current = [ rotatingBoxesGroupTop, rotatingBoxesGroupBottom ];


    new THREE.Box3().setFromObject(rotatingBoxesGroupTop).getCenter(rotatingBoxesGroupTop.position).multiplyScalar(-1);
    new THREE.Box3().setFromObject(rotatingBoxesGroupBottom).getCenter(rotatingBoxesGroupBottom.position).multiplyScalar(-1);

    rotatingBoxesGroupTop.position.y = 7.5;
    rotatingBoxesGroupBottom.position.y = -7.5;

    sceneRef.current?.add(rotatingBoxesGroupTop, rotatingBoxesGroupBottom);

    let lastScrollTop = 0;

    const starsWorker = new Worker(new URL("../../utils/worker/drawStars", import.meta.url), { type: "module" });

    starsWorker.onmessage = (event) => {
      console.time("on message");

      const { data } = event;

      const loader = new THREE.ObjectLoader();

      const stars = loader.parse(data);


      for ( const star of stars.children ) {

        const [ x, y, z ] = Array.from({ length: 3 }).fill(null).map(() => faker.number.float({
          min: -1000,
          max: 1000,
          precision: 0.1
        }));

        star.position.set(x, y, z);
        sceneRef.current?.add(star);
      }

      // Hacky way to entirely remove loading container.
      // This way because the loading container has CSS `transform: preserve-3d`
      document.getElementById("loading-container")!.style.display = "none";

      renderAndAnimate();

      console.timeEnd("on message");
    };

    starsWorker.postMessage("generateAndDrawStars");

    document.body.onscroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if ( st > lastScrollTop ) {
        // downscroll code
        cameraRef.current!.position.z += ( st - lastScrollTop );
      } else if ( st < lastScrollTop ) {
        // upscroll code
        cameraRef.current!.position.z += ( st - lastScrollTop );
      } // else was horizontal scroll

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

  }, []);


  return <canvas ref={ mainCanvasRef } className="top-0 left-0 fixed w-screen h-screen"/>;
};

export default CanvasBackground;