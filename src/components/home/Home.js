import React, { useEffect } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "../../three-extra/gltfLoader";
import { BsFillSunFill } from "react-icons/bs";
import LaptopModel from "../../model/laptop.glb";
// import LaptopImg from "../../model/laptop.webp";

import "./Home.scss";
function Home() {
  useEffect(() => {
    // loadModel();
    setTimeout(() => {
      stopAnim();
    }, 7000);
    setTimeout(() => {
      stopRotate();
    }, 8000);
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
  const themeChange = () => {
    document.getElementById("home").style.backgroundImage =
      "linear-gradient(to right,#ffffff 0%,#ffffff 60%,#414141 100%)";
    document.getElementById("h4-light").classList.add("h4-light");
    document.getElementById("h2-light").classList.add("h2-light");
    document.getElementById("h3-light").classList.add("h3-light");
    document.body.style.backgroundColor = "white";
    document.getElementById("sidebar").classList.add("sidebar-container-light");
    document.getElementById("social").classList.add("social-icons-light");
  };
  return (
    <div className="home-container" id="home">
      {/* <BsFillSunFill onClick={themeChange} className="theme-icon" /> */}
      <div className="text-container">
        <p>Viraj Merai</p>
        <h4 id="h4-light">I'm a</h4>
        <h2 id="h2-light">
          <span className="text1">Full Stack</span> +{" "}
          <span className="text2">AR / VR</span>
        </h2>
        <h3 id="h3-light">Developer</h3>
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
