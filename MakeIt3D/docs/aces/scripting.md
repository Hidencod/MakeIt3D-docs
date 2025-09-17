# 📜MakeIt3D Scripting API

Access the full power of Three.js through MakeIt3D's scripting interface.

## Getting Started

The MakeIt3D context becomes available globally after scene creation through:

```javascript
const context = window.MakeIt3DContext;
const { scene, camera, renderer, objects, raycaster } = context.threeJsContext;
```

## Context API Reference

| Property | Type | Description |
|----------|------|-------------|
| `scene` | `THREE.Scene` | The main Three.js scene object |
| `camera` | `THREE.Camera` | The active camera (Perspective/Orthographic) |
| `renderer` | `THREE.WebGLRenderer` | The WebGL renderer instance |
| `objects` | `Map<string, THREE.Object3D>` | Registry of all MakeIt3D objects |
| `raycaster` | `THREE.Raycaster` | For mouse/touch interaction and collision |
| `domElement` | `HTMLCanvasElement` | The canvas element |
| `canvasSize` | `THREE.Vector2` | Canvas dimensions |
| `viewportSize` | `THREE.Vector2` | Viewport dimensions |
| `nextObjectId` | `number` | Auto-incrementing ID for new objects |

## Basic Object Creation

### Creating and Registering Objects

```javascript
// Create a basic cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Add to scene and register in MakeIt3D
scene.add(cube);
objects.set("myCube", cube);

// Access the cube later
const myCube = objects.get("myCube");
myCube.rotation.x += 0.01;
```

### Loading 3D Models

```javascript
// Load GLTF model
const loader = new THREE.GLTFLoader();
loader.load('models/character.glb', (gltf) => {
  const model = gltf.scene;
  
  // Scale and position
  model.scale.setScalar(0.5);
  model.position.set(0, 0, 0);
  
  // Add to scene and register
  scene.add(model);
  objects.set("character", model);
  
  // Handle animations if available
  if (gltf.animations.length > 0) {
    const mixer = new THREE.AnimationMixer(model);
    const action = mixer.clipAction(gltf.animations[0]);
    action.play();
    objects.set("characterMixer", mixer);
  }
});
```

## Working with Materials and Textures

### Basic Material Setup

```javascript
// Create textured sphere
const geometry = new THREE.SphereGeometry(1, 32, 32);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('textures/metal.jpg');

const material = new THREE.MeshStandardMaterial({ 
  map: texture,
  metalness: 0.5,
  roughness: 0.3
});

const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(2, 0, 0);
scene.add(sphere);
objects.set("texturedSphere", sphere);
```

### Custom Lighting

```javascript
// Add custom point light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);
objects.set("customLight", light);
```

## Animation and Interaction

### Object Animation Loop

```javascript
function animateObject() {
  const cube = objects.get("myCube");
  if (cube) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
  requestAnimationFrame(animateObject);
}
animateObject();
```

### Raycasting for Interaction

```javascript
function onMouseClick(event) {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  
  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    clickedObject.material.color.setHex(Math.random() * 0xffffff);
  }
}

document.addEventListener('click', onMouseClick);
```

### Working with Model Animations

#### For Already Loaded Models

```javascript
// Access animations from an already registered model
const { threeJsContext } = window.MakeIt3DContext;
const object = threeJsContext.objects.get("myCharacter");

if (object) {
  const model = object;
  const animations = object.animations || [];
  
  if (animations.length > 0) {
    // Create mixer if it doesn't exist
    let mixer = threeJsContext.objects.get("myCharacterMixer");
    if (!mixer) {
      mixer = new THREE.AnimationMixer(model);
    }
    
    // Create animation actions
    const animationActions = {};
    animations.forEach((clip, index) => {
      const actionName = clip.name || `animation_${index}`;
      animationActions[actionName] = mixer.clipAction(clip);
    });
    
    
    // Play animation by name or index
    const playAnimation = (nameOrIndex) => {
      const actionKey = typeof nameOrIndex === 'string' ? nameOrIndex : `animation_${nameOrIndex}`;
      if (animationActions[actionKey]) {
        // Stop all current animations
        Object.values(animationActions).forEach(action => action.stop());
        // Play new animation
        animationActions[actionKey].play();
      }
    };
    
    // Example: Play first animation
    playAnimation(0);
    // Example: Play by name
    playAnimation("idle");
  }
}
```

#### For New Models Being Loaded

```javascript
// Load model and access animations
const loader = new THREE.GLTFLoader();
loader.load('models/character.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
  objects.set("character", model);
  
  // Create animation mixer and store it
  if (gltf.animations.length > 0) {
    const mixer = new THREE.AnimationMixer(model);
   
    
    // Store individual animations for easy access
    const animations = {};
    gltf.animations.forEach((clip, index) => {
      animations[clip.name || `animation_${index}`] = mixer.clipAction(clip);
    });
    objects.animations = animations;
    
    // Play default animation
    const idleAnimation = animations.idle || animations.animation_0;
    if (idleAnimation) {
      idleAnimation.play();
    }
  }
});
```

#### Animation Control Functions

```javascript
// Play specific animation for any model
function playModelAnimation(objectId, animationName) {
  const actions = objects.get(`${objectId}Actions`);
  if (actions && actions[animationName]) {
    // Stop current animations
    Object.values(actions).forEach(action => action.stop());
    // Play new animation
    actions[animationName].play();
  }
}

// Blend between animations
function blendModelAnimations(objectId, fromAnim, toAnim, duration = 0.5) {
  const actions = objects.get(`${objectId}Actions`);
  if (actions && actions[fromAnim] && actions[toAnim]) {
    actions[fromAnim].crossFadeTo(actions[toAnim], duration, true);
    actions[toAnim].play();
  }
}

// Usage examples
playModelAnimation("myCharacter", "run");
blendModelAnimations("myCharacter", "idle", "walk", 0.3);
```

Note: Animation mixer updates are handled automatically by the plugin's render loop.


## Best Practices

### ✅ Object Registration
Always register objects with `objects.set()` after adding to scene:
```javascript
scene.add(myObject);
objects.set("myObjectId", myObject);
```

### ✅ Use Descriptive IDs
Use unique, descriptive IDs for easy management:
```javascript
objects.set("player_character", playerModel);
objects.set("level_1_enemies", enemyGroup);
```

### ✅ Memory Management
Clean up objects when removing them:
```javascript
scene.remove(object);
objects.delete("objectId");
object.geometry.dispose();
object.material.dispose();
```

## Important Notes

### ⚠️ Context Availability
The MakeIt3D context is only available after scene creation. Always check:
```javascript
if (window.MakeIt3DContext) {
  const { scene, objects } = window.MakeIt3DContext.threeJsContext;
  // Your code here
}
```

### ⚠️ Object Registration Required
Objects must be registered with the objects Map to be accessible by MakeIt3D event system:
```javascript
// Required for event system integration
objects.set("myObject", mesh);
```

### ⚠️ Render Loop Management
MakeIt3D handles the main render loop. Avoid creating additional render loops unless necessary for specific animations.

## Advanced Examples

### Custom Shader Material

```javascript
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  varying vec2 vUv;
  void main() {
    vec3 color = vec3(sin(vUv.x * 10.0 + time), cos(vUv.y * 10.0 + time), 0.5);
    gl_FragColor = vec4(color, 1.0);
  }
`;

const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    time: { value: 1.0 }
  }
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shaderMaterial);
scene.add(plane);
objects.set("shaderPlane", plane);
```

### Dynamic Environment Mapping

```javascript
// Create cube camera for reflections
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128);
const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
scene.add(cubeCamera);

// Apply to material
const reflectiveMaterial = new THREE.MeshStandardMaterial({
  envMap: cubeRenderTarget.texture,
  metalness: 1.0,
  roughness: 0.1
});

// Update environment map
function updateEnvironment() {
  cubeCamera.update(renderer, scene);
}
```

This simplified format makes it much easier to add new sections, examples, and maintain the documentation. You can easily extend it by adding new sections with the same markdown structure.