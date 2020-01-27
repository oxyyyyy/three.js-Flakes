import "normalize.css";
import "./styles.css";

import * as THREE from "three";

import Torus from "./classes/Torus";
import Sphere from "./classes/Sphere";

import { OrbitControls } from "./classes/OrbitControls";

const canvas = document.querySelector("#canvas");

const numberOfTorus = 499;

const figuresArray = [];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0, 0);
controls.update();

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
scene.background = new THREE.Color("#05DBF2");

const light = new THREE.PointLight();
light.position.set(0, 0, 0);
scene.add(light);
document.body.appendChild(renderer.domElement);

for (let i = 0; i < numberOfTorus; i++) {
  figuresArray.push(new Torus());
  figuresArray.push(new Sphere());
}

figuresArray.forEach(item => {
  item.position();
  scene.add(item.figure);
});

camera.position.z = 10;

var animate = function() {
  requestAnimationFrame(animate);

  figuresArray.forEach(item => {
    item.move();
  });

  renderer.render(scene, camera);
};

animate();
