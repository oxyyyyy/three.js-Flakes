import * as THREE from "three";

export default class Torus {
  constructor(
    radius = getRandomArbitrary(5, 15),
    tube = getRandomArbitrary(3, 5),
    radialSegments = 16,
    tubularSegments = 100
  ) {
    this.geometry = new THREE.TorusBufferGeometry(
      radius,
      tube,
      radialSegments,
      tubularSegments
    );
    this.material = new THREE.MeshToonMaterial({ color: "#04BF7B" });
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
