import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ThreeDhelmet() {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.15;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false; // Disable zoom in/out
    controls.enableKeys = false; // Disable keyboard controls for movement

    // Light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add red light from top right
    const redLight = new THREE.DirectionalLight(0xff0000, 1); // Red light with high intensity
    redLight.position.set(1, 1, 1); // Position at top right
    scene.add(redLight);

    // Add blue light from top left
    const blueLight = new THREE.DirectionalLight(0x0000ff, 1); // Blue light with high intensity
    blueLight.position.set(-1, 1, 1); // Position at top left
    scene.add(blueLight);

    // Add red light on the left for background
    const redLightBackground = new THREE.DirectionalLight(0xff0000, 0.5); // Red light with lower intensity for background
    redLightBackground.position.set(-1, 0, 0); // Position on the left
    scene.add(redLightBackground);

    // Add blue light on the right for background
    const blueLightBackground = new THREE.DirectionalLight(0x0000ff, 0.5); // Blue light with lower intensity for background
    blueLightBackground.position.set(1, 0, 0); // Position on the right
    scene.add(blueLightBackground);

    // Load the model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./assets/topa/untitled4.gltf', (gltfScene) => {
      console.log("object");
      const loadedModel = gltfScene.scene;

      // Set scale factor to make the model smaller
      const scaleFactor = 4.5;
      loadedModel.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Position the model at the bottom
      const bbox = new THREE.Box3().setFromObject(loadedModel);
      const modelHeight = bbox.max.y - bbox.min.y;
      loadedModel.position.y = -modelHeight/2 +8 ; // Align model's bottom with the ground

      scene.add(loadedModel);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Camera setup
    camera.position.set(0, 0, 33); // Adjust camera position as needed

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up function
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
}

export default ThreeDhelmet;
