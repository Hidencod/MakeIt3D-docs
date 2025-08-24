## What is MakeIt3D?

**MakeIt3D** is a Construct 3 addon that integrates [Three.js](https://threejs.org) — an industry-standard JavaScript 3D library — directly into the Construct 3 runtime.  
It allows you to add 3D objects, lights, cameras, and animations while still working inside Construct’s visual event system.

### ✨ Features

- Add 3D objects (cubes, spheres, planes, custom models)  
- Control lights, cameras, and materials  
- Orbit controls for easy navigation  
- Built on Three.js WebGL renderer for performance  
- Works across all platforms supported by Construct 3  

---

## Installation

1. Download the `MakeIt3D.c3addon` file.  
2. In Construct 3:  
Menu → View → Addon Manager → Install new addon

yaml
Copy
Edit
3. Select the `.c3addon` file and install.  
4. Restart Construct 3.  
5. Insert a new object → look for **MakeIt3D** in the Plugins section.  

---

## Quick Example

Here’s how to create a simple 3D scene with a rotating cube:

```text
System → On start of layout
├─ MakeIt3D → Create Scene
├─ MakeIt3D → Add Cube (Id: "cube1", position: 0,0,0, rotation: 0,0,0, color: MakeIt3D.RGB(255,0,0), scale: 1)
├─ MakeIt3D → Set Camera Position (x: 0, y: 0, z: 5)
└─ MakeIt3D → Enable Orbit Controls
Run your project → you’ll see a red cube that you can orbit around with the mouse. 🚀

Credits
This addon includes Three.js licensed under the MIT License.

© 2010–2025 Three.js Authors.

MakeIt3D is developed to extend Construct 3 with 3D capabilities using Three.js.