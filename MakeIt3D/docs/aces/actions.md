---
sidebar_position: 4
---

# Actions

This section lists all available **Actions** in MakeIt3D. Use these in Construct 3 Event Sheets to create and control 3D elements.

import ActionCard from '@site/src/components/ui/ActionCard';

## Initialization

<div className="actionsGrid">
  <ActionCard 
  action={{
    name: "Create Scene",
    category: "scene",
    description: "Initialize a new 3D scene with optional helpers and controls.",
    parameters: [
      { name: "layerIndex?", description: "Index of the scene layer (default is 0)." },
      { name: "addRoomLighting?", description: "Add basic ambient lighting to the scene." },
      { name: "enablePostProcessing?", description: "Enable visual effects like bloom or depth of field." },
      { name: "addAxisHelper?", description: "Show XYZ axis helper for orientation." },
      { name: "addGridHelper?", description: "Add a ground grid to help with scale and positioning." },
      { name: "enableOrbitControls?", description: "Enable camera orbit controls with mouse/touch." }
    ],
    example: "MakeIt3D.CreateScene(0, true, false, true, true, true)"
  }}
/>

  
  <ActionCard 
    action={{
      name: "Clear Scene",
      category: "scene", 
      description: "Remove all objects from the current scene.",
      example: "MakeIt3D.ClearScene()"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Set Background Color",
      category: "scene",
      description: "Change the background color of the 3D scene.",
      parameters: ["color"],
      example: "MakeIt3D.SetBackgroundColor(\"#87CEEB\")"
    }}
  />
</div>

## 3D Objects

<div className="actionsGrid">
  <ActionCard 
    action={{
      name: "Create Cube",
      category: "objects",
      description: "Create a cube object at the specified position.",
      parameters: ["x", "y", "z", "width", "height", "depth"],
      example: "MakeIt3D.CreateCube(0, 0, 0, 1, 1, 1)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Create Sphere", 
      category: "objects",
      description: "Create a sphere object with specified radius.",
      parameters: ["x", "y", "z", "radius", "segments?"],
      example: "MakeIt3D.CreateSphere(0, 0, 0, 0.5, 32)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Create Plane",
      category: "objects", 
      description: "Create a flat plane for floors or walls.",
      parameters: ["x", "y", "z", "width", "height"],
      example: "MakeIt3D.CreatePlane(0, -1, 0, 10, 10)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Load 3D Model",
      category: "objects",
      description: "Load a 3D model from file (GLB, GLTF, OBJ).",
      parameters: ["filePath", "x", "y", "z", "scale?"],
      example: "MakeIt3D.LoadModel(\"models/character.glb\", 0, 0, 0, 1)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Destroy Object",
      category: "objects",
      description: "Remove an object from the scene.",
      parameters: ["objectId"],
      example: "MakeIt3D.DestroyObject(\"cube_1\")"
    }}
  />
</div>

## Transformations

<div className="actionsGrid">
  <ActionCard 
    action={{
      name: "Set Position",
      category: "transformations",
      description: "Move an object to a specific world position.",
      parameters: ["objectId", "x", "y", "z"],
      example: "MakeIt3D.SetPosition(\"cube_1\", 5, 0, 0)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Rotate Object",
      category: "transformations",
      description: "Rotate an object around X, Y, Z axes in degrees.",
      parameters: ["objectId", "rotX", "rotY", "rotZ"],
      example: "MakeIt3D.RotateObject(\"cube_1\", 0, 45, 0)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Scale Object", 
      category: "transformations",
      description: "Change the size of an object uniformly or per axis.",
      parameters: ["objectId", "scaleX", "scaleY", "scaleZ"],
      example: "MakeIt3D.ScaleObject(\"sphere_1\", 2, 2, 2)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Look At",
      category: "transformations",
      description: "Make an object face towards another object or position.",
      parameters: ["objectId", "targetX", "targetY", "targetZ"],
      example: "MakeIt3D.LookAt(\"camera\", 0, 0, 0)"
    }}
  />
</div>

## Camera Controls

<div className="actionsGrid">
  <ActionCard 
    action={{
      name: "Set Camera Position",
      category: "camera",
      description: "Position the camera at specific coordinates.",
      parameters: ["x", "y", "z"],
      example: "MakeIt3D.SetCameraPosition(0, 5, 10)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Set Camera Type",
      category: "camera",
      description: "Switch between perspective and orthographic projection.",
      parameters: ["type"],
      example: "MakeIt3D.SetCameraType(\"perspective\")"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Move Camera Smoothly",
      category: "camera",
      description: "Smoothly animate camera to a new position.",
      parameters: ["x", "y", "z", "duration"],
      example: "MakeIt3D.MoveCameraSmooth(10, 5, 0, 2.0)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Orbit Camera",
      category: "camera",
      description: "Make camera orbit around a target point.",
      parameters: ["targetX", "targetY", "targetZ", "radius", "speed"],
      example: "MakeIt3D.OrbitCamera(0, 0, 0, 10, 0.5)"
    }}
  />
</div>

## Continue with other sections...

You can organize the rest of your actions (Lights, Materials, Animation, Utils) in the same professional card format!