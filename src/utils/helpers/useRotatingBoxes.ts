import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import LETTERS from "<utils>/constants/letters.ts";
import { faker } from "@faker-js/faker";

export default (scene: THREE.Scene) => {
  const [ rotatingBoxes, setRotatingBoxes ] = useState<THREE.Group<THREE.Object3DEventMap>[]>();
  const lastScrollTop = useRef(0);


  useEffect(() => {
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

    const rotatingBoxesGroupTop = constructMyNameBoxesGroup("GAMALIEL");
    const rotatingBoxesGroupBottom = constructMyNameBoxesGroup("BOANERGES");

    setRotatingBoxes([ rotatingBoxesGroupTop, rotatingBoxesGroupBottom ]);

    // console.log("IN USEEFFECT", rotatingBoxes.current);

    new THREE.Box3().setFromObject(rotatingBoxesGroupTop).getCenter(rotatingBoxesGroupTop.position).multiplyScalar(-1);
    new THREE.Box3().setFromObject(rotatingBoxesGroupBottom).getCenter(rotatingBoxesGroupBottom.position).multiplyScalar(-1);

    rotatingBoxesGroupTop.position.y = 7.5;
    rotatingBoxesGroupBottom.position.y = -7.5;


    scene.add(rotatingBoxesGroupTop, rotatingBoxesGroupBottom);
  }, []);

  document.addEventListener("scroll", () => {
    if ( !rotatingBoxes ) return;
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if ( st > window.innerHeight ) {
      scene.remove(...rotatingBoxes);
    } else {
      scene.add(...rotatingBoxes);
    }

    lastScrollTop.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  });
  
  return rotatingBoxes;
}