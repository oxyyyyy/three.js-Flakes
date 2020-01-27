import * as THREE from "three";

export default class Sphere {
  constructor(
    radius = getRandomArbitrary(5, 15),
    widthSegments = 50,
    heightSegments = 50
  ) {
    this.geometry = new THREE.SphereBufferGeometry(
      radius,
      widthSegments,
      heightSegments
    );
    this.material = new THREE.MeshToonMaterial({ color: "#F2E205" });
    this.figure = new THREE.Mesh(this.geometry, this.material);
  }

  position() {
    this.figure.position.x = getRandomArbitrary(-500, 500);
    this.figure.position.y = getRandomArbitrary(-500, 500);
    this.figure.position.z = getRandomArbitrary(-500, 500);
    this.figure.rotation.x = getRandomArbitrary(-1, 1);
    this.figure.rotation.y = getRandomArbitrary(-1, 1);
  }

  move(rotationSpeedX = 0.008, rotationSpeedY = 0.004) {
    this.figure.rotation.x += getRandomArbitrary(0, 0.02);
    this.figure.rotation.y += getRandomArbitrary(0, 0.02);
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
