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
  <ActionCard 
  action={{
    name: "Start Camera Follow Object",
    category: "camera",
    description: "Follow the object continuosly with the given ID, maintaining a specified offset and smoothing the movement using a lerp factor. You can stop following by using <i>Stop Camera Following Object</i> Action"
,
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

:::tip Camera Tip
*Start Camera Follow Object*  is continuos and set from three.js internally to ensure smooth positioning, so if you want to stop it following object use *Stop Camera Follow Object* action.
:::

  <ActionCard 
  action={{
    name: "Stop Camera Follow Object",
    category: "camera",
    description: "Stop the camera from following any object."
,

    example: "MakeIt3D.StopFollowObject"
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
    name: "Start Camera Look At Object",
    category: "camera",
    description: "Makes the camera to look at the object continously with the given ID and smoothing the lookat using a lerp factor.",
parameters: [
  { name: "Object Id", description: "The ID of the object to lookat." },
  { name: "Offset X", description: "Camera lookat offset along the X-axis." },
  { name: "Offset Y", description: "Camera lookat offset along the Y-axis." },
  { name: "Offset Z", description: "Camera lookat offset along the Z-axis." },
  { name: "Lerp Factor", description: "Smoothing factor for the camera lookat. A value between 0 and 1." }
]
,

    example: "MakeIt3D.StartCameraLookAtObject('hero',5,5,5,0.5)"
  }}
/>
:::tip Camera Tip
*Start Camera LookAt Object*  is continuos and set from three.js internally to ensure smooth rotation, so if you want to stop it looking at object use *Stop Camera LookAt Object* action.
:::
  <ActionCard 
  action={{
    name: "Stop Camera LookAt Object",
    category: "camera",
    description: "Stop the camera from looking at any object."
,

    example: "MakeIt3D.StopCameraLookAtObject"
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

<ActionCard 
  action={{
    name: "Set Orbit Control Properties",
    category: "camera",
    description: "Enable/disable orbit controls, set target position, distance limits, angle limits, and damping.",
parameters: [
  { name: "Toggle Orbit Controls", description: "Enable or disable camera orbit controls." },
  { name: "Target Position", description: "Position that orbit controls orbit around." },
  { name: "Min Distance", description: "Minimum zoom distance from target." },
  { name: "Max Distance", description: "Maximum zoom distance from target." },
  { name: "Min Polar Angle", description: "Minimum polar angle in degrees." },
  { name: "Max Polar Angle", description: "Maximum polar angle in degrees." },
  { name: "Min Azimuth Angle", description: "Minimum azimuth angle in degrees." },
  { name: "Max Azimuth Angle", description: "Maximum azimuth angle in degrees." },
  { name: "Enable Damping", description: "Enable camera orbit smoothing." },
  { name: "Damping Factor", description: "Smoothing factor for camera orbit (0-1)." }
]
,

    example: "MakeIt3D.SetOrbitControls(true,MakeIt3D.Vector3(0,0,0),10,50,45°,90°,-90°,90°,true,0.1)"
  }}
/>

<ActionCard 
  action={{
    name: "Translate Camera",
    category: "camera",
    description: "Moves the active camera relative to its current position by the specified amounts along each axis.",
parameters: [
  { name: "Offset X", description: "Camera lookat offset along the X-axis." },
  { name: "Offset Y", description: "Camera lookat offset along the Y-axis." },
  { name: "Offset Z", description: "Camera lookat offset along the Z-axis." }
]
,

    example: "MakeIt3D.TranslateCamera(0,0,1) //translates 1 unit on z axis" 
  }}
/>
</div>
## 3D Objects (MESH)

<div className="actionsGrid">
  <ActionCard 
    action={{
      name: "Create Cube",
      category: "objects",
      description: "Create a cube object with id at the specified position with optional parameters.",
      parameters: [
        { name: "Object Id", description: "The ID of the object to create." },
        { name: "Position", description: "Position To Place Object( Use MakeIt3D.Vector3(x,y,z) to input position)" },
        { name: "Rotation", description: "Rotation To Rotate Object( Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
        { name: "Color", description: "RGB color of the plane (e.g., MakeIt3D(255,0,0) for red)." },
        { name: "Scale", description: "Scale Of Object( Use MakeIt3D.Vector3(x,y,z) to input scale)" },
        { name: "Height Segments", description: "Number of segments along the height of the cube" },
        { name: "Width Segments", description: "Number of segments along the width of the cube" },
        { name: "Depth Segments", description: "Number of segments along the depth of the cube" },
        { name: "Show Controls", description: "Show controls to tweak properties( Appear on top-right corner)" }
      ],
      example: "MakeIt3D.CreateCube(Cube, MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(255,0,0), MakeIt3D.Vector3(0,0,0), 1,1,1,true)"
    }}
  />
  :::warning Important
When creating an object, always provide an **Object ID**.  
This ID is required to reference the object later in actions such as *Follow Object*, *Transform*, or *Delete Object*.
:::
<ActionCard 
  action={{
    name: "Create Cylinder",
    category: "objects",
    description: "Creates a cylinder geometry to the scene with customizable radius, height, segments, and angle settings.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the cylinder (e.g., MakeIt3D.RGB(255,0,0) for red)" },
      { name: "Scale", description: "Scale of the object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius Top", description: "Radius of the top circle of the cylinder" },
      { name: "Radius Bottom", description: "Radius of the bottom circle of the cylinder" },
      { name: "Height", description: "Height of the cylinder" },
      { name: "Radial Segments", description: "Number of segmented faces around the circumference of the cylinder" },
      { name: "Height Segments", description: "Number of rows of faces along the height of the cylinder" },
      { name: "Open Ended", description: "Whether the ends of the cylinder are open or capped" },
      { name: "Theta Start", description: "Start angle for the first segment (in radians)" },
      { name: "Theta Length", description: "The central angle of the circular sector (in radians)" },
      { name: "Show Controls", description: "Show controls to tweak properties" }
    ],
    example: "MakeIt3D.CreateCylinder('cylinder1', MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(0,255,0), MakeIt3D.Vector3(1,1,1), 5, 5, 10, 32, 1, false, 0, Math.PI * 2, true)"
  }}
/>
<ActionCard 
  action={{
    name: "Create Icosahedron",
    category: "objects",
    description: "Creates a 20-sided polyhedron (icosahedron) to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the icosahedron (e.g., MakeIt3D.RGB(255,0,0) for red)" },
      { name: "Scale", description: "Scale of the object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius", description: "Radius of the icosahedron" },
      { name: "Detail", description: "Level of detail (0 for basic icosahedron, higher values add more vertices)" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateIcosahedron('ico1', MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(0,0,255), MakeIt3D.Vector3(1,1,1), 5, 0, true)"
  }}
/>
<ActionCard 
  action={{
    name: "Create Torus",
    category: "objects",
    description: "Creates a torus (donut shape) to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the torus (e.g., MakeIt3D.RGB(255,0,0) for red)" },
      { name: "Scale", description: "Scale of the object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius", description: "Radius of the torus (distance from center to tube center)" },
      { name: "Tube Radius", description: "Radius of the tube (thickness of the donut)" },
      { name: "Radial Segments", description: "Number of segments around the tube" },
      { name: "Tubular Segments", description: "Number of segments around the torus" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateTorus('torus1', MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(255,255,0), MakeIt3D.Vector3(1,1,1), 5, 2, 16, 100, true)"
  }}
/>
<ActionCard 
  action={{
    name: "Create Torus Knot",
    category: "objects",
    description: "Creates a complex torus knot to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the torus knot (e.g., MakeIt3D.RGB(255,0,0) for red)" },
      { name: "Scale", description: "Scale of the object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius", description: "Radius of the torus knot" },
      { name: "Tube Radius", description: "Radius of the tube" },
      { name: "Tubular Segments", description: "Number of segments around the torus" },
      { name: "Radial Segments", description: "Number of segments around the tube" },
      { name: "P Parameter", description: "Number of times the geometry winds around its axis of rotational symmetry" },
      { name: "Q Parameter", description: "Number of times the geometry winds around a circle in the interior of the torus" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateTorusKnot('knot1', MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(255,0,255), MakeIt3D.Vector3(1,1,1), 5, 1, 100, 16, 2, 3, true)"
  }}
/>
<ActionCard 
  action={{
    name: "Create Cone",
    category: "objects",
    description: "Creates a cone geometry to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the cone (e.g., MakeIt3D(255,0,0) for red)" },
      { name: "Scale", description: "Scale of object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius", description: "Radius of the cone base" },
      { name: "Height", description: "Height of the cone" },
      { name: "Radial Segments", description: "Number of segments around the cone" },
      { name: "Height Segments", description: "Number of segments along the height of the cone" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateCone(Cone, MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(255,0,0), MakeIt3D.Vector3(1,1,1), 5, 10, 8, 1, true)"
  }}
/>

<ActionCard 
  action={{
    name: "Create Capsule",
    category: "objects",
    description: "Creates a capsule (pill shape) geometry to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the capsule (e.g., MakeIt3D(255,0,0) for red)" },
      { name: "Scale", description: "Scale of object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius", description: "Radius of the capsule" },
      { name: "Length", description: "Length of the capsule" },
      { name: "Cap Segments", description: "Number of segments in the caps" },
      { name: "Radial Segments", description: "Number of segments around the capsule" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateCapsule(Capsule, MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(0,255,0), MakeIt3D.Vector3(1,1,1), 2, 5, 8, 16, true)"
  }}
/>

<ActionCard 
  action={{
    name: "Create Ring",
    category: "objects",
    description: "Creates a flat ring geometry to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the ring (e.g., MakeIt3D(255,0,0) for red)" },
      { name: "Scale", description: "Scale of object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Inner Radius", description: "Inner radius of the ring" },
      { name: "Outer Radius", description: "Outer radius of the ring" },
      { name: "Theta Segments", description: "Number of segments around the ring" },
      { name: "Phi Segments", description: "Number of segments from inner to outer radius" },
      { name: "Theta Start", description: "Starting angle in radians" },
      { name: "Theta Length", description: "Length of the ring arc in radians" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateRing(Ring, MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(0,0,255), MakeIt3D.Vector3(1,1,1), 2, 5, 32, 8, 0, Math.PI, true)"
  }}
/>

<ActionCard 
  action={{
    name: "Create Circle",
    category: "objects",
    description: "Creates a flat circle geometry to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the circle (e.g., MakeIt3D(255,0,0) for red)" },
      { name: "Scale", description: "Scale of object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius", description: "Radius of the circle" },
      { name: "Segments", description: "Number of segments around the circle" },
      { name: "Theta Start", description: "Starting angle in radians" },
      { name: "Theta Length", description: "Length of the circle arc in radians" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateCircle(Circle, MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(255,255,0), MakeIt3D.Vector3(1,1,1), 5, 32, 0, 2*Math.PI, true)"
  }}
/>

<ActionCard 
  action={{
    name: "Create Dodecahedron",
    category: "objects",
    description: "Creates a 12-sided polyhedron (dodecahedron) to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the dodecahedron (e.g., MakeIt3D(255,0,0) for red)" },
      { name: "Scale", description: "Scale of object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius", description: "Radius of the dodecahedron" },
      { name: "Detail", description: "Level of detail (0 for basic, higher values add more vertices)" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateDodecahedron(Dodecahedron, MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(255,0,255), MakeIt3D.Vector3(1,1,1), 5, 0, true)"
  }}
/>

<ActionCard 
  action={{
    name: "Create Octahedron",
    category: "objects",
    description: "Creates an 8-sided polyhedron (octahedron) to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the octahedron (e.g., MakeIt3D(255,0,0) for red)" },
      { name: "Scale", description: "Scale of object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius", description: "Radius of the octahedron" },
      { name: "Detail", description: "Level of detail (0 for basic, higher values add more vertices)" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateOctahedron(Octahedron, MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(0,255,255), MakeIt3D.Vector3(1,1,1), 5, 0, true)"
  }}
/>

<ActionCard 
  action={{
    name: "Create Tetrahedron",
    category: "objects",
    description: "Creates a 4-sided polyhedron (tetrahedron) to the scene.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position to place the object (Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation to rotate the object (Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the tetrahedron (e.g., MakeIt3D(255,0,0) for red)" },
      { name: "Scale", description: "Scale of object (Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Radius", description: "Radius of the tetrahedron" },
      { name: "Detail", description: "Level of detail (0 for basic, higher values add more vertices)" },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.CreateTetrahedron(Tetrahedron, MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(128,0,128), MakeIt3D.Vector3(1,1,1), 5, 0, true)"
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