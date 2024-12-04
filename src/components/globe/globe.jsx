import * as THREE from 'three';
import './style.css';
import Globe from 'globe.gl';
import React, { useEffect } from 'react';

const RotatingGlobe = () => {
  useEffect(() => {
    const globeElement = document.getElementById('globeViz');

    // Initialize the globe
    const world = Globe({ animateIn: true })
      (globeElement)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');

    // Auto-rotate
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.35;

    // Add clouds
    const CLOUDS_IMG_URL = './clouds.png';
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(world.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      world.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });

    // Resize function to handle initial sizing and window resizing
    const resizeGlobe = () => {
      const { width, height } = globeElement.getBoundingClientRect();
      world.width([width]);
      world.height([height]);
    };

    // Call resize function initially and on window resize
    resizeGlobe();
    window.addEventListener('resize', resizeGlobe);

    return () => {
      window.removeEventListener('resize', resizeGlobe);
    };
  }, []);

  return (
    <div className='main-globe-container'>
      <div id="globeViz"></div>
      </div>
  );
};

export default RotatingGlobe;
