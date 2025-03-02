import { useEffect, useRef } from "react";
import THREE from "three";

export default (camera: THREE.Camera | undefined) => {
  const lastScrollTop = useRef(0);

  useEffect(() => {
    if ( !camera ) return;

    document.addEventListener("scroll", () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      console.log({st});

      if (st > lastScrollTop.current) {
        // downscroll code
        camera.position.z += ( st - lastScrollTop.current );
      } else if ( st < lastScrollTop.current ) {
        // upscroll code
        camera.position.z += ( st - lastScrollTop.current );
      } // else was horizontal scroll
      lastScrollTop.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });
  }, [ camera ]);

}
