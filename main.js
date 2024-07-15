import './three.css'
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


let scene, camera, renderer, sun, earth, orbit;


  


scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer =  new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xffffff))
document.body.appendChild(renderer.domElement);


const canvasContainer = document.getElementById('canvas-container');
renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
canvasContainer.appendChild(renderer.domElement); 

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true; 

// const modelPaths = [
//   './boba_tea_cup.glb', 
//   './bubble_tea_and_cookies.glb', 
//   './cafe_latte_with_art.glb',
//   './coffee_shop_cup.glb',,
//   './iced_coffee.glb'

// ]; 
// const itemDescriptions = [
// "Description for Boba Tea",
// "Description for Bubble tea",
// "Description for cafe latte",
// "Description for coffee cup",
// "Description for iced coffee",
// ]; 

const loader = new GLTFLoader();
// let currentModelIndex = 0;
// const models = [];

// modelPaths.forEach((path, index) => {
//   loader.load(path, (gltf) => {
//     const model = gltf.scene;
//     model.position.set(0, 0, 0);
//     model.scale.set(2, 2, 2); // Adjust scale as needed
//     models.push(model);
//     model.userData.index = index;
//   })});
let boba;

loader.load(
    './boba_tea_cup.glb', // Replace with the path to your Shiba model
    function (gltf) {
        boba = gltf.scene;
        boba.rotation.x = -Math.PI / 6;
        boba.rotation.set(1,0,0);
        boba.position.set(0,0,0)
        scene.add(boba);
        
        


        
    },
    undefined,
    function (error) {
        console.error(error);
    }
);
// let bubbletea;
// loader.load(
//     './bubble_tea_cup.glb', 
//     async function (gltf) {
//         bubbletea = gltf.scene;
//         bubbletea.rotation.x = -Math.PI / 6;
       
  
//        await scene.add(bubbletea);
        
        


        
//     },
//     undefined,
//     function (error) {
//         console.error(error);
//     }

  
// );

// let currentModelIndex = 0;
// const models = [];

// // Load Models
// modelPaths.forEach((path, index) => {
//   loader.load(path, (gltf) => {
//     const model = gltf.scene;
//     model.position.set(0, 0, 0);
//     model.scale.set(2, 2, 2); // Adjust scale as needed
//     models.push(model);
//     model.userData.index = index;

//     // Click to show description
//     model.addEventListener('click', (event) => {
//       const modelIndex = event.target.userData.index;
//       itemDescription.textContent = itemDescriptions[modelIndex];
//       itemDescription.classList.remove('hidden');
//     });
//   });
// });


// // CSS3D Renderer
// const rendererCSS = new CSS3DRenderer();
// rendererCSS.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(rendererCSS.domElement);


// // Create 3D Buttons
// function createButton(label, xPosition, onClick) {
//   const buttonDiv = document.createElement('div');
//   buttonDiv.className = 'button';
//   buttonDiv.textContent = label;
//   buttonDiv.style.width = '80px';
//   buttonDiv.style.height = '40px';

//   const buttonObject = new CSS3DObject(buttonDiv);
//   buttonObject.position.set(xPosition, 0, 0); // Position relative to the carousel
//   buttonObject.element.addEventListener('click', onClick);

//   return buttonObject;
// }

// const sceneCSS = new THREE.Scene();
// const leftButton = createButton('<', -1.5, () => {
//     currentModelIndex = (currentModelIndex - 1 + modelPaths.length) % modelPaths.length;
//     updateCarousel();
//   });
// const rightButton = createButton('>', 1.5, () => {
//     currentModelIndex = (currentModelIndex + 1) % modelPaths.length;
//     updateCarousel();
//   });
// sceneCSS.add(leftButton);
// sceneCSS.add(rightButton);



// // Update Carousel Function
// function updateCarousel() {
//   scene.remove(scene.children[0]); // Remove the current model
//   scene.add(models[currentModelIndex]);
// }


// // Render Loop
// function animate() {
//   requestAnimationFrame(animate);
//   //   controls.update(); 
    
//   if (models[currentModelIndex]) {
//     models[currentModelIndex].rotation.y += 0.01;
//   }

//   renderer.render(scene, camera);
//   rendererCSS.render(scene, camera); // Use the same camera for both scenes
// }

// animate(); 
camera.position.set(0,0,20);











//   animate();
// }

function animate () {
  requestAnimationFrame(animate);
  boba.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();