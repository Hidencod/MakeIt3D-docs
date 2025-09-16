---
id: faq
title: FAQ
---

## Frequently Asked Questions

### ❓ Does it have a 3D editor?
No – everything is built **at runtime with events**. This keeps projects lightweight.  
The official Three.js Editor can export JSON, but files can be very large (30MB+), so this addon focuses on procedural/runtime workflows instead.

---

### ❓ Why are some actions asynchronous?
To keep performance smooth and avoid blocking Construct’s main thread, many actions (like creating objects, setting materials, etc.) are **asynchronous**.  
That means changes apply in the next frame.  

👉 If you need instant results, add a tiny wait (`0.01s`) or you can add 'WaitForPreviousActions' before the next action.

---

### ❓ Can I import 3D models (GLTF, FBX, etc.)?
Yes – **GLTF and FBX loading is supported**.  


---

### ❓ What features are included?
- Primitives (cube, sphere, plane, etc.)  
- Materials & custom shaders  
- Post-processing  
- Rapier physics integration(seperate addon)  
- Animations  
- Full runtime transforms (position, rotation, scale)  
- 🔜 Upcoming: Three.js or playcanvas rendering with offscreen canvas( super fast)
                

---

### ❓ What are the limitations?
- No built-in Construct editor panel (runtime only).  
- Some async actions may need small waits. 

---

### ❓ Will it keep getting updates?
Yes – features like **Offscreen canvas compatability**, more post-processing effects, and helper actions  
(*look at, follow path, etc.*) are on the roadmap.
