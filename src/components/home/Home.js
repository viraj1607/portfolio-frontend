import React, { useEffect } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "../../three-extra/gltfLoader";
import LaptopModel from "../../model/laptop.glb";
// import LaptopImg from "../../model/laptop.webp";
import "./Home.scss";
function Home() {
  useEffect(() => {
    // loadModel();
    setTimeout(() => {
      stopAnim();
    }, 6000);
    setTimeout(() => {
      stopRotate();
    }, 7000);
  }, []);

  const stopAnim = () => {
    document.getElementById("model").pause();
    // console.log("model element", document.getElementById("model").autoRotate);
  };
  const stopRotate = () => {
    document.getElementById("model").autoRotate = false;
  };

  // const loadModel = () => {
  //   const scene = new THREE.Scene();
  //   // scene.background = new THREE.Color(0xdddddd);
  //   const camera = new THREE.PerspectiveCamera(
  //     40,
  //     window.innerWidth / window.innerHeight,
  //     1,
  //     10000
  //   );
  //   camera.rotation.y = (45 / 180) * Math.PI;
  //   camera.position.x = 800;
  //   camera.position.y = 100;
  //   camera.position.z = 1000;
  //   const light = new THREE.AmbientLight(0x404040, 100);
  //   scene.add(light);
  //   const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
  //   directionalLight.position.x = 0;
  //   directionalLight.position.y = 1;
  //   directionalLight.position.z = 0;
  //   directionalLight.castShadow = true;
  //   scene.add(directionalLight);
  //   const pointLight = new THREE.PointLight(0xc4c4c4, 10);
  //   pointLight.position.x = 0;
  //   pointLight.position.y = 300;
  //   pointLight.position.x = 500;
  //   scene.add(pointLight);
  //   const renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.getElementById("home").appendChild(renderer.domElement);
  //   const loader = new GLTFLoader();
  //   loader.load(LaptopModel, function (model) {
  //     console.log("model", model.scene && model.scene.children);
  //     model.scene.children[0].scale.x = 50;
  //     model.scene.children[0].scale.y = 50;
  //     model.scene.children[0].scale.z = 50;
  //     // laptop && laptop.scale(1, 1, 1);
  //     scene.add(model.scene);
  //     renderer.render(scene, camera);
  //   });
  // };
  return (
    <div className="home-container" id="home">
      <div className="text-container">
        <p>Viraj Merai</p>
        <h4>I'm a</h4>
        <h2>
          Full Stack <span>+</span> AR / VR
        </h2>
        <h3>Developer</h3>
      </div>
      <div className="model-container">
        <model-viewer
          // camera-controls
          id="model"
          exposure="1"
          shadow-intensity="1"
          autoplay
          auto-rotate
          src={LaptopModel}
        ></model-viewer>
      </div>
    </div>
  );
}

export default Home;
