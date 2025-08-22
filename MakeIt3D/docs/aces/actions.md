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
      { name: "layerIndex?", description: "Index or name of layer where scene is created." },
      { name: "addRoomLighting?", description: "Add basic ambient lighting to the scene." },
      { name: "enablePostProcessing?", description: "Enable visual effects like bloom or depth of field." },
      { name: "addAxisHelper?", description: "Show XYZ axis helper for orientation." },
      { name: "addGridHelper?", description: "Add a ground grid to help with scale and positioning." },
      { name: "enableOrbitControls?", description: "Enable camera orbit controls with mouse/touch." }
    ],
    example: "MakeIt3D.CreateScene(0 or Layer name, true, false, true, true, true)"
  }}
/>

  
  <ActionCard 
    action={{
      name: "Load Scene From JSON",
      category: "scene",
      description: "Loads json scene saved by three.js editor",
       parameters: [
      { name: "layerIndex?", description: "Index or name of layer where scene is created." },
      { name: "path?", description: "path for json (select from dropdown)" },
      { name: "useSceneCamera?", description: "check this to use camera from json scene" },
      { name: "enablePostProcessing?", description: "Enable visual effects like bloom or depth of field." },
      { name: "addAxisHelper?", description: "Show XYZ axis helper for orientation." },
      { name: "addGridHelper?", description: "Add a ground grid to help with scale and positioning." },
      { name: "enableOrbitControls?", description: "Enable camera orbit controls with mouse/touch." }
    ],
      example: "MakeIt3D.CreateScene(0 or Layer name, json path, false, false, true, true, true)"
    }}
  />
  
  <ActionCard 
    action={{
      name: "Update RenderLoop",
      category: "scene",
      description: "If the automatic render loop update is inconsistent, users can manually update the render loop by calling this function with the delta time on each tick.",
       parameters: [
      { name: "deltaTime?", description: "Delta time from construct3 event sheet" },
    ],
      example: "MakeIt3D.UpdateRenderLoop(dt)"
    }}
  />
</div>

## Camera

<div className="actionsGrid">
  <ActionCard 
  action={{
    name: "Adjust Camera Properties",
    category: "camera",
    description: "Use this to adjust camera properties such as field of view (FOV) for perspective cameras, or zoom level for orthographic cameras, as well as near and far clip planes.",
parameters:  [
    { 
      name: "Field Of View / Zoom", 
      description: "For perspective cameras: the field of view angle in degrees. For orthographic cameras: the zoom level (higher = closer view, lower = wider view)." 
    },
    { 
      name: "Near Clip", 
      description: "The closest distance at which the camera will render objects." 
    },
    { 
      name: "Far Clip", 
      description: "The farthest distance at which the camera will render objects." 
    }
  ],

    example: "MakeIt3D.AdjustCamera(75,0.1,2000)"
  }}
/>
</div>
<div className="actionsGrid">
  <ActionCard 
  action={{
    name: "Follow Object",
    category: "camera",
    description: "Follow the object with the given ID, maintaining a specified offset and smoothing the movement using a lerp factor.",
parameters: [
  { name: "Object Id", description: "The ID of the object to follow." },
  { name: "Offset X", description: "Camera offset along the X-axis." },
  { name: "Offset Y", description: "Camera offset along the Y-axis." },
  { name: "Offset Z", description: "Camera offset along the Z-axis." },
  { name: "Lerp Factor", description: "Smoothing factor for the camera movement. A value between 0 and 1." }
]
,

    example: "MakeIt3D.FollowObject('hero',5,5,5,0.5)"
  }}
/>

<ActionCard 
    action={{
      name: "Set Camera Type",
      category: "camera",
      description: "Switch between perspective and orthographic projection.",
      parameters: [
    { 
      name: "Camera Type", 
      description: "Select the camera projection type.", 
      type: "combo", 
      options: ["perspective", "orthographic"] 
    }
  ],
      example: "MakeIt3D.SetCameraType(\"perspective\")"
    }}
  />

  <ActionCard 
    action={{
      name: "Set Camera Position",
      category: "camera",
      description: "Position the camera at specific coordinates.",
      parameters: [
        { name: "Position X", description: "Camera postion x." },
        { name: "Position Y", description: "Camera position y." },
        { name: "Position Z", description: "Camera position z." }
      ],
      example: "MakeIt3D.SetCameraPosition(0, 5, 10)"
    }}
  />

  <ActionCard 
    action={{
      name: "Set Camera Rotation",
      category: "camera",
      description: "Rotate the camera to a specific orientation (Euler angles).",
      parameters: [
        { name: "Rotation X", description: "Camera rotation around the X axis (pitch), in degrees." },
    { name: "Rotation Y", description: "Camera rotation around the Y axis (yaw), in degrees." },
    { name: "Rotation Z", description: "Camera rotation around the Z axis (roll), in degrees." }
  ],
      example: "MakeIt3D.SetCameraRotation(0, 5, 10)"
    }}
  />

  <ActionCard 
  action={{
    name: "Look At Object",
    category: "camera",
    description: "Look at the object with the given ID and smoothing the lookat using a lerp factor.",
parameters: [
  { name: "Object Id", description: "The ID of the object to lookat." },
  { name: "Offset X", description: "Camera lookat offset along the X-axis." },
  { name: "Offset Y", description: "Camera lookat offset along the Y-axis." },
  { name: "Offset Z", description: "Camera lookat offset along the Z-axis." },
  { name: "Lerp Factor", description: "Smoothing factor for the camera lookat. A value between 0 and 1." }
]
,

    example: "MakeIt3D.LookAt('hero',5,5,5,0.5)"
  }}
/>
<ActionCard 
  action={{
    name: "Look At Point",
    category: "camera",
    description: "Look at the given x, y, z co-ordinates and smoothing the lookat using a lerp factor.",
parameters: [
  { name: "Offset X", description: "Camera lookat offset along the X-axis." },
  { name: "Offset Y", description: "Camera lookat offset along the Y-axis." },
  { name: "Offset Z", description: "Camera lookat offset along the Z-axis." },
  { name: "Lerp Factor", description: "Smoothing factor for the camera lookat. A value between 0 and 1." }
]
,

    example: "MakeIt3D.LookAt(5,5,5,0.5)"
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