---
sidebar_position: 4
---

# ⚡Actions

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
  :::note Note
This 3D scene uses Construct's HTML Layer feature to render Three.js. The plugin automatically enables it for the selected layer and disables it on others — no setup needed, just keep it in mind.
:::
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
    name: "Create Plane",
    category: "objects",
    description: "Creates a plane geometry to the scene with customizable segments.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to identify later" },
      { name: "Position", description: "Position To Place Object( Use MakeIt3D.Vector3(x,y,z) to input position)" },
      { name: "Rotation", description: "Rotation To Rotate Object( Use MakeIt3D.Vector3(x,y,z) to input rotation)" },
      { name: "Color", description: "RGB color of the plane (e.g., MakeIt3D(255,0,0) for red)" },
      { name: "Scale", description: "Scale Of Object( Use MakeIt3D.Vector3(x,y,z) to input scale)" },
      { name: "Height Segments", description: "Number of segments along the height of the plane" },
      { name: "Width Segments", description: "Number of segments along the width of the plane" },
      { name: "Show Controls", description: "SHow controls to tweak properties" }
    ],
    example: "MakeIt3D.CreatePlane(Plane, MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.RGB(255,0,0), MakeIt3D.Vector3(1,1,1), 1, 1, true)"
  }}
/>

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
    name: "Load Custom Model",
    category: "objects",
    description: "Load a custom 3D model from a given path with position, rotation, scale, and visibility options.",
    parameters: [
      { name: "Object Id", description: "The unique ID of the object to reference it." },
      { name: "Path", description: "Path where model is located" },
      { name: "Position", description: "Position to place model (leave 0 to place at origin (0,0,0))" },
      { name: "Rotation", description: "Rotation of model in radians (leave 0 to have default rotation)" },
      { name: "Scale", description: "Scale of model (leave 1 to have normal scale)" },
      { name: "Initially Visible", description: "Sets whether the 3D object is visible on load. Disable to hide it instantly." }
    ],
    example: "MakeIt3D.LoadModel(MyModel, 'assets/models/myModel.glb', MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(1,1,1), true)"
  }}
/>

  <ActionCard 
    action={{
      name: "Destroy Object",
      category: "objects",
      description: "Remove an object from the scene.",
      parameters: [
        { name: "Object Id", description: "The unique ID of the object to destroy" }
      ],
      example: "MakeIt3D.DestroyObject(\"cube_1\")"
    }}
  />
  <ActionCard 
  action={{
    name: "Set Object Visibility",
    category: "visibility",
    description: "Set whether a 3D object is visible or not.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set visibility" },
      { name: "Visible", description: "Whether the object should be visible or not" },
      { name: "Visible (Numeric)", description: "Whether the object should be visible (1) or not (0). Default is -1. Note: If set to -1, it will not override the visible checkbox above." }
    ],
    example: "MakeIt3D.SetObjectVisible('MyCube', true, -1)"
  }}
/>


</div>

## Transformations

<div className="actionsGrid">
  <ActionCard 
  action={{
    name: "Set Object Position",
    category: "transforms",
    description: "Set the position of a 3D object in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set position" },
      { name: "X Position", description: "X coordinate of the position" },
      { name: "Y Position", description: "Y coordinate of the position" },
      { name: "Z Position", description: "Z coordinate of the position" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.SetObjectPosition('MyObject', 10, 20, 30, 0.1)"
  }}
/>
<ActionCard 
  action={{
    name: "Set Object Rotation",
    category: "transforms",
    description: "Set the rotation of a 3D object in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set rotation" },
      { name: "X Rotation", description: "X rotation in radians" },
      { name: "Y Rotation", description: "Y rotation in radians" },
      { name: "Z Rotation", description: "Z rotation in radians" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.SetObjectRotation('MyObject', 0, Math.PI / 2, 0, 0.2)"
  }}
/>
<ActionCard 
  action={{
    name: "Set Rotation From Normal",
    category: "transforms",
    description: "Sets the rotation of a 3D object to align with the given surface normal vector.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set rotation" },
      { name: "Normal X", description: "X component of the surface normal" },
      { name: "Normal Y", description: "Y component of the surface normal" },
      { name: "Normal Z", description: "Z component of the surface normal" },
      { name: "Up Vector", description: "Axis used as 'up' when aligning to surface normals." },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate rotation; set to 1 for instant rotation" }
    ],
    example: "MakeIt3D.SetRotationFromNormal('MyObject', 0, 1, 0, 'y', 0.5)"
  }}
/>
<ActionCard 
  action={{
    name: "Set Object Scale",
    category: "transforms",
    description: "Set the scale of a 3D object in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set scale" },
      { name: "X Scale", description: "X scale factor" },
      { name: "Y Scale", description: "Y scale factor" },
      { name: "Z Scale", description: "Z scale factor" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.SetObjectScale('MyObject', 2, 2, 2, 0.3)"
  }}
/>
<ActionCard 
  action={{
    name: "Set Object Position X",
    category: "transforms",
    description: "Set the X position of a 3D object in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set position" },
      { name: "X Position", description: "X coordinate of the position" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.SetObjectPositionX('MyObject', 10, 0.1)"
  }}
/>
<ActionCard 
  action={{
    name: "Set Object Position Y",
    category: "transforms",
    description: "Set the Y position of a 3D object in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set position" },
      { name: "Y Position", description: "Y coordinate of the position" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.SetObjectPositionY('MyObject', 5, 0.2)"
  }}
/>
<ActionCard 
  action={{
    name: "Set Object Position Z",
    category: "transforms",
    description: "Set the Z position of a 3D object in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set position" },
      { name: "Z Position", description: "Z coordinate of the position" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.SetObjectPositionZ('MyObject', -10, 0.2)"
  }}
/>
<ActionCard 
  action={{
    name: "Set Object Rotation X",
    category: "transforms",
    description: "Set the X rotation of a 3D object in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set rotation" },
      { name: "X Rotation", description: "X rotation in radians" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.SetObjectRotationX('MyObject', Math.PI / 4, 0.2)"
  }}
/>
<ActionCard 
  action={{
    name: "Set Object Rotation Y",
    category: "transforms",
    description: "Set the Y rotation of a 3D object in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set rotation" },
      { name: "Y Rotation", description: "Y rotation in radians" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.SetObjectRotationY('MyObject', Math.PI / 2, 0.1)"
  }}
/>
<ActionCard 
  action={{
    name: "Set Object Rotation Z",
    category: "transforms",
    description: "Set the Z rotation of a 3D object in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to set rotation" },
      { name: "Z Rotation", description: "Z rotation in radians" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.SetObjectRotationZ('MyObject', Math.PI, 0.3)"
  }}
/>
<ActionCard 
  action={{
    name: "Translate Object",
    category: "transforms",
    description: "Translate (move) a 3D object relative to its current position in the scene.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to move" },
      { name: "X Offset", description: "Amount to move along the X axis" },
      { name: "Y Offset", description: "Amount to move along the Y axis" },
      { name: "Z Offset", description: "Amount to move along the Z axis" },
      { name: "Lerp Factor", description: "Lerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.TranslateObject('MyObject', 5, 0, -3, 0.5)"
  }}
/>
<ActionCard 
  action={{
    name: "Object Look At",
    category: "transforms",
    description: "Sets the orientation of a 3D object to look at a specific point in space.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to move" },
      { name: "X", description: "x target co-ordinate to look at" },
      { name: "Y", description: "y target co-ordinate to look at" },
      { name: "Z", description: "z target co-ordinate to look at" },
      { name: "Mask Axis", description: "Rotation Mask — (0,1,0): Y-axis only, (1,1,1): unrestricted, (0,0,1): Z-axis only" },
      { name: "Slerp Factor", description: "Slerp factor to smoothly interpolate" }
    ],
    example: "MakeIt3D.ObjectLookAt('MyObject', 0, 0, 10, MakeIt3D.Vector3(1, 1, 1), 0.4)"
  }}
/>

</div>

## Lights

<ActionCard 
  action={{
    name: "Create Point Light",
    category: "lights",
    description: "Creates a Point Light to the scene.",
    parameters: [
      { name: "Object Id", description: "Unique ID for the light." },
      { name: "Position", description: "Position to place the light." },
      { name: "Color", description: "Color of the light." },
      { name: "Intensity", description: "Light intensity." },
      { name: "Distance", description: "Distance for attenuation." },
      { name: "Decay", description: "Decay rate." },
      { name: "Show Helper", description: "Show a helper for the light." },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.AddPointLight('PointLight01', MakeIt3D.Vector3(1,2,3), MakeIt3D.Color(255,255,255), 1.0, 100, 2, true, true)"
  }}
/>
:::danger Do NOT Create Lights Every Tick  
Creating lights in an `Every Tick` event will constantly add new lights to the scene, causing severe performance drops and memory issues.  
Only create lights once — such as in **On Start of Layout** or when needed.
:::

<ActionCard 
  action={{
    name: "Create Directional Light",
    category: "lights",
    description: "Creates a Directional Light to the scene.",
    parameters: [
      { name: "Object Id", description: "Unique ID for the light." },
      { name: "Position", description: "Position to place the light." },
      { name: "Target Id", description: "Object ID to target." },
      { name: "Target Position", description: "Target position for the light to aim at." },
      { name: "Color", description: "Color of the light." },
      { name: "Intensity", description: "Light intensity." },
      { name: "Cast Shadow", description: "Whether the light casts shadows." },
      { name: "Show Helper", description: "Show a helper for the light." },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.AddDirectionalLight('DirLight01', MakeIt3D.Vector3(0,10,0), 'targetObject', null, MakeIt3D.Color(255,255,200), 1.0, true, true, true)"
  }}
/>
<ActionCard 
  action={{
    name: "Create Ambient Light",
    category: "lights",
    description: "Creates an Ambient Light to the scene.",
    parameters: [
      { name: "Object Id", description: "Unique ID for the light." },
      { name: "Color", description: "Color of the light." },
      { name: "Intensity", description: "Light intensity." },
      { name: "Show Helper", description: "Show a helper for the light." },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.AddAmbientLight('Ambient01', MakeIt3D.Color(255,255,255), 0.6, false, false)"
  }}
/>
<ActionCard 
  action={{
    name: "Create Spot Light",
    category: "lights",
    description: "Creates a Spot Light to the scene.",
    parameters: [
      { name: "Object Id", description: "Unique ID for the light." },
      { name: "Position", description: "Position to place the light." },
      { name: "Target Position", description: "Target position for the light to aim at." },
      { name: "Color", description: "Color of the light." },
      { name: "Intensity", description: "Light intensity." },
      { name: "Distance", description: "Distance for attenuation." },
      { name: "Angle", description: "Cone angle in radians." },
      { name: "Penumbra", description: "Penumbra value." },
      { name: "Decay", description: "Decay rate." },
      { name: "Cast Shadow", description: "Whether the light casts shadows." },
      { name: "SpotLight Map", description: "A Texture used to modulate the color of the light('castShadow' must be true)." },
      { name: "Show Helper", description: "Show a helper for the light." },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.AddSpotLight('Spot01', MakeIt3D.Vector3(2,5,3), MakeIt3D.Vector3(0,0,0), MakeIt3D.Color(255,200,100), 1, 50, Math.PI / 4, 0.3, 1, true, 'spotMap.jpg', true, true)"
  }}
/>
<ActionCard 
  action={{
    name: "Create Hemisphere Light",
    category: "lights",
    description: "Creates a Hemisphere Light to the scene.",
    parameters: [
      { name: "Object Id", description: "Unique ID for the light." },
      { name: "Position", description: "Position to place the light." },
      { name: "Sky Color", description: "Sky color of the light." },
      { name: "Ground Color", description: "Ground color of the light." },
      { name: "Intensity", description: "Light intensity." },
      { name: "Show Helper", description: "Show a helper for the light." },
      { name: "Show Controls", description: "GUI to control properties" }
    ],
    example: "MakeIt3D.AddHemisphereLight('Hemi01', MakeIt3D.Vector3(0,20,0), MakeIt3D.Color(150,150,255), MakeIt3D.Color(255,200,150), 0.7, false, true)"
  }}
/>

## Animations
<ActionCard
  action={{
    name: "Play Animation",
    category: "animation",
    description: "Play an animation for a 3D model",
    parameters: [
      { name: "Object ID", description: "The ID of the object to animate" },
      { name: "Animation Index Or Name", description: "Index or Name of the animation to play (leave empty to use name)", type: "any" },
      { name: "Fade Duration", description: "Time (in seconds) to crossfade between animations. Set 0 for instant switch.", type: "number" },
      { name: "Loop", description: "Whether to loop the animation", type: "boolean", default: true },
      { name: "Time Scale", description: "Speed multiplier for the animation (1.0 is normal speed)", type: "float", default: 1.0 },
      { name: "Clamp When Finished", description: "Whether to hold the last frame when animation finishes", type: "boolean", default: false },
    ],
    example: "MakeIt3D.PlayAnimation('model01', 'run', 0.5, true, 1.0, false)"
  }}
/>
<ActionCard
  action={{
    name: "Blend Animations",
    category: "animation",
    description: "Play and blend two animations simultaneously for a 3D model.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to animate" },
      { name: "Animation A Index Or Name", description: "Index or name of the first animation", type: "any" },
      { name: "Animation A Weight", description: "Influence weight for Animation A (0.0 to 1.0)", type: "float", default: 1.0 },
      { name: "Animation B Index Or Name", description: "Index or name of the second animation", type: "any" },
      { name: "Animation B Weight", description: "Influence weight for Animation B (0.0 to 1.0)", type: "float", default: 0.5 },
      { name: "Fade Duration", description: "Time (in seconds) to crossfade into blended state", type: "number", default: 0.25 },
      { name: "Loop Animation A", description: "Whether Animation A should loop", type: "boolean", default: true },
      { name: "Loop Animation B", description: "Whether Animation B should loop", type: "boolean", default: true },
      { name: "Time Scale", description: "Speed multiplier for both animations", type: "float", default: 1.0 },
      { name: "Clamp When Finished", description: "Whether to hold last frame when animations finish", type: "boolean", default: false },
    ],
    example: "MakeIt3D.BlendAnimations('model01', 'walk', 0.7, 'wave', 0.3, 0.5, true, false, 1.0, false)"
  }}
/>
<ActionCard
  action={{
    name: "Transition Animation",
    category: "animation",
    description: "Smoothly transition from one animation to another for a 3D model using crossfade.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to animate" },
      { name: "From Animation Index Or Name", description: "Index or name of the currently playing animation", type: "any" },
      { name: "To Animation Index Or Name", description: "Index or name of the new animation to transition to", type: "any" },
      { name: "Fade Duration", description: "Time (in seconds) to crossfade between animations", type: "number", default: 0.5 },
      { name: "Loop", description: "Whether the new animation should loop", type: "boolean", default: true },
      { name: "Time Scale", description: "Speed multiplier for the new animation", type: "float", default: 1.0 },
      { name: "Clamp When Finished", description: "Whether to hold the last frame when the animation finishes", type: "boolean", default: false },
    ],
    example: "MakeIt3D.TransitionAnimation('model01', 'idle', 'run', 0.3, true, 1.0, false)"
  }}
/>
<ActionCard
  action={{
    name: "Pause Animation",
    category: "animation",
    description: "Pause the currently playing animation for a 3D model",
    parameters: [
      { name: "Object ID", description: "The ID of the object to pause animation" },
    ],
    example: "MakeIt3D.PauseAnimation('model01')"
  }}
/>
<ActionCard
  action={{
    name: "Resume Animation",
    category: "animation",
    description: "Resume the paused animation for a 3D model",
    parameters: [
      { name: "Object ID", description: "The ID of the object to resume animation" },
    ],
    example: "MakeIt3D.ResumeAnimation('model01')"
  }}
/>
<ActionCard
  action={{
    name: "Stop Animation",
    category: "animation",
    description: "Stop the currently playing animation for a 3D model",
    parameters: [
      { name: "Object ID", description: "The ID of the object to stop animation" },
    ],
    example: "MakeIt3D.StopAnimation('model01')"
  }}
/>

## Raycast
<ActionCard
  action={{
    name: "Camera To Point Raycast",
    category: "raycast",
    description: "Casts the ray from camera to target position.",
    parameters: [
      { name: "X Coordinate", description: "X target coordinate", type: "number" },
      { name: "Y Coordinate", description: "Y target coordinate", type: "number" },
      { name: "Z Coordinate", description: "Z target coordinate", type: "number" },
    ],
    example: "MakeIt3D.CameraToPointRaycast(10, 5, 3)"
  }}
/>
<ActionCard
  action={{
    name: "Camera To Object Raycast",
    category: "raycast",
    description: "Casts the ray from camera to object.",
    parameters: [
      { name: "Target Object Id", description: "Target object id", type: "string" },
    ],
    example: "MakeIt3D.CameraToObjectRaycast('object123')"
  }}
/>
<ActionCard
  action={{
    name: "Camera To Screen Raycast",
    category: "raycast",
    description: "Casts the ray from camera to viewport screen coordinates.",
    parameters: [
      { name: "X Coordinate", description: "X screen coordinate", type: "number" },
      { name: "Y Coordinate", description: "Y screen coordinate", type: "number" },
      { name: "Ray Length", description: "Length of the raycast (default 1000)", type: "number", default: 1000 },
    ],
    example: "MakeIt3D.CameraToScreenRaycast(0.5, 0.5, 1000)"
  }}
/>
<ActionCard
  action={{
    name: "Object To Directional Raycast",
    category: "raycast",
    description: "Casts the ray using object's specified local axis. Updates with object's position and rotation.",
    parameters: [
      { name: "Object Id", description: "Object id from which raycast is fired", type: "string" },
      { name: "Direction", description: "Ray direction as MakeIt3D.Vector3(x, y, z). Common: forward (0,0,-1), back (0,0,1), up (0,1,0), down (0,-1,0), right (1,0,0), left (-1,0,0).", type: "vector3" },
      { name: "Ray Length", description: "Length of the raycast (default 1000)", type: "number", default: 1000 },
      { name: "Debug Ray", description: "Draw debug line between origin and direction", type: "boolean", default: false },
    ],
    example: "MakeIt3D.ObjectToDirectionalRaycast('obj01', MakeIt3D.Vector3(0, 0, -1), 1000, true)"
  }}
/>
<ActionCard
  action={{
    name: "Origin To Directional Raycast",
    category: "raycast",
    description: "Casts the ray from origin to target direction with specified ray length.",
    parameters: [
      { name: "Origin", description: "Origin of raycast (MakeIt3D.Vector3)", type: "vector3" },
      { name: "Direction", description: "Direction of raycast to fire (MakeIt3D.Vector3)", type: "vector3" },
      { name: "Ray Length", description: "Length of the raycast (default 1000)", type: "number", default: 1000 },
      { name: "Debug Ray", description: "Draw debug line between origin and direction", type: "boolean", default: false },
    ],
    example: "MakeIt3D.OriginToDirectionalRaycast(MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(1,0,0), 500, true)"
  }}
/>
<ActionCard
  action={{
    name: "Set Ignore Raycast",
    category: "raycast",
    description: "Raycast will ignore objects with these IDs and pass through them without registering intersections.(you can pass multiple object ids using <i>MakeIt3D.ToArray(id1,id2,id3)</i> to ignore raycast for them)",
    parameters: [
      { name: "Object Ids(single or multiple)", description: "Object Id. For multiple IDs use MakeIt3D.ToArray(...ids)", type: "string | array" },
      { name: "Ignore Raycast", description: "Check to ignore raycast intersections", type: "boolean" },
    ],
    example: "MakeIt3D.SetIgnoreRaycast('obj01', true) or MakeIt3D.SetIgnoreRaycast(MakeIt3D.ToArray(id1,id2,id3), true)"
  }}
/>

## Materials
<ActionCard
  action={{
    name: "Set Standard Material",
    category: "material",
    description: "Apply a MeshStandardMaterial to a 3D object. Standard material supports physically-based rendering (PBR) with metalness and roughness for realistic surfaces.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Color", description: "Material color (hex)", type: "string" },
      { name: "Metalness", description: "Metalness value (0-1)", type: "number" },
      { name: "Roughness", description: "Roughness value (0-1)", type: "number" },
      { name: "Wireframe", description: "Render as wireframe", type: "boolean" },
      { name: "Emissive", description: "Emissive color", type: "string" },
      { name: "Emissive Intensity", description: "Emissive intensity (default 1)", type: "number" },
      { name: "Opacity", description: "Material opacity (0-1)", type: "number" },
    ],
    example: "MakeIt3D.SetStandardMaterial('obj01', '#ff0000', 0.5, 0.3, false, '#000000', 1.0, 0.9)"
  }}
/>
:::danger Do NOT Create Materials Every Tick  
Creating new materials inside an `Every Tick` event will rapidly consume memory and degrade performance.  
Materials should be created **once** and reused — ideally during **On Start of Layout** or when the object is initialized.
:::

<ActionCard
  action={{
    name: "Set Phong Material",
    category: "material",
    description: "Apply a MeshPhongMaterial to a 3D object. Good for shiny, glossy surfaces and older-style 3D rendering.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Color", description: "Material color (hex)", type: "string" },
      { name: "Shininess", description: "Shininess value", type: "number" },
      { name: "Wireframe", description: "Render as wireframe", type: "boolean" },
      { name: "Opacity", description: "Material opacity (0-1)", type: "number" },
      { name: "Emissive", description: "Emissive color (hex)", type: "string" },
      { name: "Emissive Intensity", description: "Emissive intensity (default 1)", type: "number" },
      { name: "Specular", description: "Specular color (hex)", type: "string" },
    ],
    example: "MakeIt3D.SetPhongMaterial('obj01', '#ffffff', 30, false, 1, '#111111', 1.0, '#333333')"
  }}
/>
<ActionCard
  action={{
    name: "Set Lambert Material",
    category: "material",
    description: "Apply a MeshLambertMaterial to a 3D object. Good for matte surfaces without specular highlights.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Color", description: "Material color (hex)", type: "string" },
      { name: "Wireframe", description: "Render as wireframe", type: "boolean" },
      { name: "Opacity", description: "Material opacity (0-1)", type: "number" },
      { name: "Emissive", description: "Emissive color (hex)", type: "string" },
      { name: "Emissive Intensity", description: "Emissive intensity (default 1)", type: "number" },
    ],
    example: "MakeIt3D.SetLambertMaterial('obj01', '#999999', false, 1, '#000000', 1.0)"
  }}
/>
<ActionCard
  action={{
    name: "Set Basic Material",
    category: "material",
    description: "Apply a MeshBasicMaterial to a 3D object. Not affected by lights. Useful for unlit or UI elements.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Color", description: "Material color (hex)", type: "string" },
      { name: "Wireframe", description: "Render as wireframe", type: "boolean" },
      { name: "Opacity", description: "Material opacity (0-1)", type: "number" },
    ],
    example: "MakeIt3D.SetBasicMaterial('obj01', '#00ff00', false, 1.0)"
  }}
/>
<ActionCard
  action={{
    name: "Set Custom Shader Material",
    category: "material",
    description: "Apply a custom GLSL shader to a 3D object for advanced visual effects and control.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Vertex Shader", description: "GLSL code for the vertex shader", type: "string" },
      { name: "Fragment Shader", description: "GLSL code for the fragment shader", type: "string" },
      { name: "Uniforms", description: "Uniforms object (optional)", type: "object" },
      { name: "Transparent", description: "Enable transparency (optional)", type: "boolean" },
      { name: "Wireframe", description: "Render as wireframe (optional)", type: "boolean" },
    ],
    example: "MakeIt3D.SetCustomShaderMaterial('obj01', vertexCode, fragmentCode, { time: 1.0 }, true, false)"
  }}
/>
<ActionCard
  action={{
    name: "Set Shader Uniform",
    category: "material",
    description: "Set a single uniform value on a custom shader material at runtime.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Uniform Name", description: "The name of the uniform (e.g., 'time')", type: "string" },
      { name: "Value", description: "The value to set for the uniform", type: "any" },
    ],
    example: "MakeIt3D.SetShaderUniform('obj01', 'time', 2.5)"
  }}
/>
<ActionCard
  action={{
    name: "Set Texture",
    category: "material",
    description: "Set a texture on a 3D object.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Path", description: "Path to the texture image", type: "string" },
    ],
    example: "MakeIt3D.SetTexture('obj01', '/textures/wood.jpg')"
  }}
/>
<ActionCard
  action={{
    name: "Set Texture Wrap",
    category: "material",
    description: "Set the wrapping mode for an object's texture.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Wrap S", description: "Horizontal wrap mode", type: "enum", items: ["repeat", "clamp", "mirror"] },
      { name: "Wrap T", description: "Vertical wrap mode", type: "enum", items: ["repeat", "clamp", "mirror"] },
    ],
    example: "MakeIt3D.SetTextureWrap('obj01', 'repeat', 'clamp')"
  }}
/>
<ActionCard
  action={{
    name: "Set Texture Repeat",
    category: "material",
    description: "Set the repeat values for an object's texture.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Repeat X", description: "Repeat value in X direction", type: "number" },
      { name: "Repeat Y", description: "Repeat value in Y direction", type: "number" },
    ],
    example: "MakeIt3D.SetTextureRepeat('obj01', 2, 2)"
  }}
/>
<ActionCard
  action={{
    name: "Set Texture Opacity",
    category: "material",
    description: "Set the opacity of an object's material.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Opacity", description: "Opacity value (0.0 - 1.0)", type: "number" },
    ],
    example: "MakeIt3D.SetTextureOpacity('obj01', 0.75)"
  }}
/>
<ActionCard
  action={{
    name: "Set Emissive Map",
    category: "material",
    description: "Set the emissive map (glow) texture for the object's material. Note: only works with basic material.",
    parameters: [
      { name: "Object ID", description: "The ID of the object (Note: set basic material to use emissive map)", type: "string" },
      { name: "Texture URL", description: "URL or path to the emissive texture", type: "string" },
      { name: "Intensity", description: "Emissive intensity", type: "number" },
    ],
    example: "MakeIt3D.SetEmissiveMap('obj01', '/textures/glow.png', 1.2)"
  }}
/>
<ActionCard
  action={{
    name: "Set Normal Map",
    category: "material",
    description: "Set the normal map texture for the object's material.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Texture URL", description: "URL or path to the normal map texture", type: "string" },
      { name: "Invert Normal Map", description: "Invert the normal map", type: "boolean" },
      { name: "Normal Map Strength", description: "Strength (bumpiness) of the normal map", type: "number" },
    ],
    example: "MakeIt3D.SetNormalMap('obj01', '/textures/bump.jpg', true, 0.8)"
  }}
/>
<ActionCard
  action={{
    name: "Set Roughness Map",
    category: "material",
    description: "Set the roughness map texture for the object's material.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Texture URL", description: "URL or path to the roughness map texture", type: "string" },
    ],
    example: "MakeIt3D.SetRoughnessMap('obj01', '/textures/roughness.png')"
  }}
/>
<ActionCard
  action={{
    name: "Set Metalness Map",
    category: "material",
    description: "Set the metalness map texture for the object's material.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Texture URL", description: "URL or path to the metalness map texture", type: "string" },
    ],
    example: "MakeIt3D.SetMetalnessMap('obj01', '/textures/metal.png')"
  }}
/>
<ActionCard
  action={{
    name: "Set Material Color",
    category: "material",
    description: "Set the color of the object's material.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Color", description: "Color to set (e.g., '#ff0000')", type: "string" },
    ],
    example: "MakeIt3D.SetColor('obj01', '#00ffcc')"
  }}
/>
<ActionCard
  action={{
    name: "Unload Texture",
    category: "material",
    description: "Remove the texture from the object's material.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
    ],
    example: "MakeIt3D.UnloadTexture('obj01')"
  }}
/>
<ActionCard
  action={{
    name: "Set Video Texture",
    category: "material",
    description: "Set a video file as the texture on the object.",
    parameters: [
      { name: "Object ID", description: "The ID of the object", type: "string" },
      { name: "Video URL", description: "URL or path to the video file", type: "string" },
      { name: "Loop", description: "Whether the video should loop", type: "boolean" },
      { name: "Autoplay", description: "Whether the video should autoplay", type: "boolean" },
      { name: "Muted", description: "Whether the video should be muted", type: "boolean" },
    ],
    example: "MakeIt3D.SetVideoTexture('obj01', '/videos/demo.mp4', true, true, true)"
  }}
/>

## Lines

<ActionCard
  action={{
    name: "Draw Line",
    category: "lines",
    description: "Draws a straight line from start to end position or using a series of points.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to create the line", type: "string" },
      { name: "Start Position", description: "Line starting position (e.g., MakeIt3D.Vector3(x, y, z))", type: "vector3" },
      { name: "End Position", description: "Line ending position (e.g., MakeIt3D.Vector3(x, y, z))", type: "vector3" },
      { name: "Points(optional)", description: "An object or array of points (MakeIt3D.ToArray(...))", type: "array/vector3" },
      { name: "Line Color", description: "Color of the line (e.g., '#00ff00')", type: "string" },
    ],
    example: "MakeIt3D.DrawLine('line01', MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(1,1,1), null, '#ff0000')"
  }}
/>
<ActionCard
  action={{
    name: "Draw Dashed Line",
    category: "lines",
    description: "Draws a dashed line from start to end position or using points with dash, gap, and scale settings.",
    parameters: [
      { name: "Object ID", description: "The ID of the object to create the line", type: "string" },
      { name: "Start Position", description: "Line starting position (e.g., MakeIt3D.Vector3(x, y, z))", type: "vector3" },
      { name: "End Position", description: "Line ending position (e.g., MakeIt3D.Vector3(x, y, z))", type: "vector3" },
      { name: "Points(optional)", description: "An object or array of points", type: "array/vector3" },
      { name: "Line Color", description: "Color of the line", type: "string" },
      { name: "Dash Size", description: "Length of individual dashes", type: "number" },
      { name: "Gap Size", description: "Space between dashes", type: "number" },
      { name: "Scale", description: "Scale of the dashed line", type: "number" },
    ],
    example: "MakeIt3D.DrawLineDashed('dash01', MakeIt3D.Vector3(0,0,0), MakeIt3D.Vector3(3,3,3), null, '#00ffff', 0.2, 0.1, 1)"
  }}
/>

## Post Processing
<ActionCard
  action={{
    name: "Pixelate Edge Effect",
    category: "postprocessing",
    description: "Applies a pixelated edge post-processing effect.",
    parameters: [
      { name: "Pixelation value", description: "Pixelation intensity (higher = more pixelated)", type: "number" },
      { name: "Normal Edge Strength", description: "Edge strength from surface normals", type: "number" },
      { name: "Depth Edge Strength", description: "Edge strength from depth", type: "number" },
      { name: "Show Controls", description: "Display GUI controls", type: "boolean" }
    ],
    example: "MakeIt3D.PixelateEdgeEffect(4, 1, 1, true)"
  }}
/>
<ActionCard
  action={{
    name: "Unreal Bloom Effect",
    category: "postprocessing",
    description: "Applies bloom effect with adjustable strength, radius, and threshold.",
    parameters: [
      { name: "Strength", description: "Strength of the bloom", type: "number" },
      { name: "Radius", description: "Radius of the bloom", type: "number" },
      { name: "Threshold", description: "Brightness threshold for bloom", type: "number" },
      { name: "Show Controls", description: "Display GUI controls", type: "boolean" }
    ],
    example: "MakeIt3D.EnableBloomPass(0.8, 0.5, 0.9, true)"
  }}
/>
<ActionCard
  action={{
    name: "Outline Effect",
    category: "postprocessing",
    description: "Adds an outline around selected objects with optional pattern texture.",
    parameters: [
      { name: "Object id's", description: "Comma-separated IDs of objects to outline", type: "string" },
      { name: "Edge strength", description: "Strength of the outline", type: "number" },
      { name: "Color", description: "Outline color (e.g. '#ff00ff')", type: "string" },
      { name: "Pattern texture", description: "Optional texture overlay on outline", type: "string" },
      { name: "Show Controls", description: "Display GUI controls", type: "boolean" }
    ],
    example: "MakeIt3D.EnableOutlinePass('obj1,obj2', 2.0, '#ff00ff', '', true)"
  }}
/>
<ActionCard
  action={{
    name: "FXAA Effect",
    category: "postprocessing",
    description: "Applies fast approximate anti-aliasing (FXAA).",
    parameters: [],
    example: "MakeIt3D.EnableFXAAPass()"
  }}
/>
<ActionCard
  action={{
    name: "RGB Shift Effect",
    category: "postprocessing",
    description: "Applies RGB channel offset to create glitchy visuals.",
    parameters: [
      { name: "Angle", description: "Angle of the shift (0=horizontal, 90=vertical, 45=diagonal)", type: "number" },
      { name: "Intensity", description: "Strength of the shift (e.g. 0.001 to 0.01)", type: "number" },
      { name: "Show Controls", description: "Display GUI controls", type: "boolean" }
    ],
    example: "MakeIt3D.EnableRGBShiftPass(45, 0.005, true)"
  }}
/>
<ActionCard
  action={{
    name: "SSAO Effect",
    category: "postprocessing",
    description: "Applies screen space ambient occlusion.",
    parameters: [
      { name: "Kernal Radius", description: "Radius to sample occlusion", type: "number" },
      { name: "Min Distance", description: "Minimum distance to occlude", type: "number" },
      { name: "Max Distance", description: "Maximum occlusion depth range", type: "number" },
      { name: "Show Controls", description: "Display GUI controls", type: "boolean" }
    ],
    example: "MakeIt3D.EnableSSAOPass(5, 0.1, 1, true)"
  }}
/>
<ActionCard
  action={{
    name: "After Image Effect",
    category: "postprocessing",
    description: "Applies a motion trail or ghosting effect.",
    parameters: [
      { name: "Damp", description: "Dampness (0-1)", type: "number" },
      { name: "Show Controls", description: "Display GUI controls", type: "boolean" }
    ],
    example: "MakeIt3D.EnableAfterImagePass(0.95, true)"
  }}
/>
<ActionCard
  action={{
    name: "Film Effect",
    category: "postprocessing",
    description: "Applies film-style noise, scanlines, and optional grayscale.",
    parameters: [
      { name: "Noise Value", description: "Noise strength", type: "number" },
      { name: "Scanlines", description: "Scanline intensity", type: "number" },
      { name: "Count", description: "Scanline count", type: "number" },
      { name: "GrayScale", description: "Enable grayscale mode", type: "boolean" },
      { name: "Show Controls", description: "Display GUI controls", type: "boolean" }
    ],
    example: "MakeIt3D.EnableFilmPass(0.5, 0.2, 4096, false, true)"
  }}
/>
<ActionCard
  action={{
    name: "Glitch Effect",
    category: "postprocessing",
    description: "Applies a glitch-style distortion effect.",
    parameters: [
      { name: "Go wild", description: "Enable wild continuous glitching", type: "boolean" },
      { name: "Show Controls", description: "Display GUI controls", type: "boolean" }
    ],
    example: "MakeIt3D.EnableGlitchPass(true, true)"
  }}
/>
<ActionCard
  action={{
    name: "Bokeh (Depth of Field)",
    category: "postprocessing",
    description: "Simulates camera depth of field with bokeh blur.",
    parameters: [
      { name: "Focus", description: "Focus distance", type: "number" },
      { name: "Aperture", description: "Aperture size", type: "number" },
      { name: "Max Blur", description: "Max blur strength (0–0.01)", type: "number" },
      { name: "Show Controls", description: "Display GUI controls", type: "boolean" }
    ],
    example: "MakeIt3D.EnableBokehPass(0.5, 0.01, 0.005, true)"
  }}
/>
<ActionCard
  action={{
    name: "Scene Transition",
    category: "postprocessing",
    description: "Transitions to a new scene using a visual texture mask with easing and duration options.",
    parameters: [
      { name: "Scene Json", description: "Path to the target scene JSON file", type: "string" },
      {
        name: "Texture",
        description: "Transition texture effect",
        type: "combo",
        items: {
          perlin: "Perlin",
          distort: "Distort",
          squares: "Squares",
          cells: "Cells",
          gradient: "Gradient",
          radial: "Radial",
          none: "None"
        }
      },
      { name: "Threshold", description: "Threshold for transition visibility", type: "number" },
      { name: "Use Custom Texture", description: "Enable custom black/white transition texture", type: "boolean" },
      { name: "Custom Texture", description: "Path to your custom texture file (e.g., 'texture.png')", type: "string" },
      { name: "Duration", description: "Transition duration in seconds", type: "number" },
      {
        name: "Easing",
        description: "Easing function for animation",
        type: "combo",
        items: {
          linear: "Linear",
          easeInQuad: "Ease In Quad",
          easeOutQuad: "Ease Out Quad",
          easeInOutQuad: "Ease In Out Quad",
          easeInCubic: "Ease In Cubic",
          easeOutCubic: "Ease Out Cubic",
          easeInOutCubic: "Ease In Out Cubic",
          easeInQuart: "Ease In Quart",
          easeOutQuart: "Ease Out Quart",
          easeInOutQuart: "Ease In Out Quart",
          easeInQuint: "Ease In Quint",
          easeOutQuint: "Ease Out Quint",
          easeInOutQuint: "Ease In Out Quint",
          easeInSine: "Ease In Sine",
          easeOutSine: "Ease Out Sine",
          easeInOutSine: "Ease In Out Sine",
          easeInExpo: "Ease In Expo",
          easeOutExpo: "Ease Out Expo",
          easeInOutExpo: "Ease In Out Expo",
          easeInCirc: "Ease In Circ",
          easeOutCirc: "Ease Out Circ",
          easeInOutCirc: "Ease In Out Circ",
          easeInBack: "Ease In Back",
          easeOutBack: "Ease Out Back",
          easeInOutBack: "Ease In Out Back",
          easeInElastic: "Ease In Elastic",
          easeOutElastic: "Ease Out Elastic",
          easeInOutElastic: "Ease In Out Elastic",
          easeInBounce: "Ease In Bounce",
          easeOutBounce: "Ease Out Bounce",
          easeInOutBounce: "Ease In Out Bounce"
        }
      },
      { name: "Orbit controls", description: "Enable orbit controls in new scene", type: "boolean" }
    ],
    example: `MakeIt3D.EnableSceneTransitionPass(
      "assets/scenes/scene2.json",
      "perlin",
      0.5,
      false,
      "",
      2,
      "easeInOutQuart",
      true
    )`
  }}
/>


## Continue with other sections...

You can organize the rest of your actions (Lights, Materials, Animation, Utils) in the same professional card format!