

import * as THREE from "./node_modules/three";
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, sun, earth, orbit;





scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
renderer =  new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xffffff))
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);

light.position.set(10, 10, 10); // Adjust the position of the light
light.castShadow = true;
light.visible = true;
light.intensity = 2;
light.shadow.radius  = 10;


light.shadow.mapSize.width = 1024; // Optional shadow map size
light.shadow.mapSize.height = 1024; // Optional shadow map size
light.shadow.camera.near = 0.5; // Optional near shadow camera distance
light.shadow.camera.far = 50;
scene.add(light);

const canvasContainer = document.getElementById('canvas-container');
renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
canvasContainer.appendChild(renderer.domElement); 





const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 

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
        
        boba.rotation.z = 0.7;
        // boba.rotation.set(1,0,0);
        boba.position.set(0,15,0);
     
        boba.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true; // Enable shadows for the model
                node.receiveShadow = true; // Enable shadows for the model

            }
        boba.castShadow = true;
        });
        scene.add(boba);
        
        // // Set the camera position to be above and to the side of the object
        // camera.position.set(objectPosition.x + 5, objectPosition.y + 5, objectPosition.z + 5);

        // // Make the camera look at the object
        // camera.lookAt(objectPosition);

        
    },
    undefined,
    function (error) {
        console.error(error);
    }
);





const planeGeometry = new THREE.PlaneGeometry(500, 500);
const planeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

plane.position.set(0,0,0)
plane.rotation.set(8,-10,10)



plane.receiveShadow = true;
plane.visible = true; // Enable shadows for the ground plane
scene.add(plane);

// let bubbletea;
// loader.load(
//     './bubble_tea_cup.glb', 
//     function (gltf) {
//         bubbletea = gltf.scene;
//         // bubbletea.rotation.x = -Math.PI / 6;
//         boba.rotation.y += 0.01;
       
  
//         scene.add(bubbletea);
        
        


        
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
camera.position.set(0,18,50);


// camera.rotation.z = -0.5













//   animate();
// }

function animate () {
    requestAnimationFrame(animate);
    boba.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();