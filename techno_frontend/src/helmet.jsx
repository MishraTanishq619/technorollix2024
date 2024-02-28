"use client"
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ThreeDhelmet() {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
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
    const redLight = new THREE.DirectionalLight(0xff0000, 1);
    redLight.position.set(1, 1, 1);
    scene.add(redLight);

    // Add blue light from top left
    const blueLight = new THREE.DirectionalLight(0xffffff, 1);
    blueLight.position.set(-1, 1, 1);
    scene.add(blueLight);

    // Load the model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./assets/topa/untitled4.gltf', (gltfScene) => {
      console.log("object");
      const loadedModel = gltfScene.scene;

      // Set scale factor to make the model smaller
      const scaleFactor = 3;
      loadedModel.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Position the model at the bottom
      const bbox = new THREE.Box3().setFromObject(loadedModel);
      const modelHeight = bbox.max.y - bbox.min.y;
      loadedModel.position.y = -modelHeight / 2 + 8; // Align model's bottom with the ground

      scene.add(loadedModel);

      // Auto-rotate model
      const rotateSpeed = 0.01;
      const axis = new THREE.Vector3(0, 1, 0);
      const rotateModel = () => {
        loadedModel.rotateOnAxis(axis, rotateSpeed);
      };
      setInterval(rotateModel, 1000 / 60); // 60 frames per second
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Camera setup
    camera.position.set(0, 0, 33);

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
