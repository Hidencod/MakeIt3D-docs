---
sidebar_position: 6
---

# 🧮Expressions

Expressions retrieve data from your 3D scene and return values that can be used in Construct 3 events. They're perfect for getting positions, rotations, scene information, and more.

import ExpressionCard from '@site/src/components/ui/ExpressionCard';


## Object

<div className="expressionsGrid">

<ExpressionCard 
  expression={{
    name: "Is Object Loaded",
    category: "object",
    returnType: "boolean",
    description: "Check whether object is loaded.",
    parameters: [
      { name: "objectId", description: "The ID of the object to check if it is loaded" }
    ],
    usage: "MakeIt3D.IsObjectLoaded(\"hero\")",
    example: "If MakeIt3D.IsObjectLoaded(\"hero\") Then Log \"Hero is ready!\""
  }}
/>

  <ExpressionCard 
  expression={{
    name: "Get Position X",
    category: "object",
    returnType: "number",
    description: "Get X position of object of Id.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get position x from" }
    ],
    usage: "MakeIt3D.PositionX(\"objectId\")",
    example: "Log MakeIt3D.PositionX(\"hero\")"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Get Position Y",
    category: "object",
    returnType: "number",
    description: "Get Y position of object of Id.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get position y from" }
    ],
    usage: "MakeIt3D.PositionY(\"objectId\")",
    example: "Log MakeIt3D.PositionY(\"hero\")"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Get Position Z",
    category: "object",
    returnType: "number",
    description: "Get Z position of object of Id.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get position z from" }
    ],
    usage: "MakeIt3D.PositionZ(\"objectId\")",
    example: "Log MakeIt3D.PositionZ(\"hero\")"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Get Rotation X",
    category: "object",
    returnType: "number",
    description: "Get X rotation of object of Id in degrees.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get rotation x from" }
    ],
    usage: "MakeIt3D.RotationX(\"objectId\")",
    example: "Log MakeIt3D.RotationX(\"hero\")"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Get Rotation Y",
    category: "object",
    returnType: "number",
    description: "Get Y rotation of object of Id in degrees.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get rotation y from" }
    ],
    usage: "MakeIt3D.RotationY(\"objectId\")",
    example: "Log MakeIt3D.RotationY(\"hero\")"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Get Rotation Z",
    category: "object",
    returnType: "number",
    description: "Get Z rotation of object of Id in degrees.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get rotation z from" }
    ],
    usage: "MakeIt3D.RotationZ(\"objectId\")",
    example: "Log MakeIt3D.RotationZ(\"hero\")"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Get Scale X",
    category: "object",
    returnType: "number",
    description: "Get X scale of object of Id.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get scale x from" }
    ],
    usage: "MakeIt3D.ScaleX(\"objectId\")",
    example: "Log MakeIt3D.ScaleX(\"hero\")"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Get Scale Y",
    category: "object",
    returnType: "number",
    description: "Get Y scale of object of Id.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get scale y from" }
    ],
    usage: "MakeIt3D.ScaleY(\"objectId\")",
    example: "Log MakeIt3D.ScaleY(\"hero\")"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Get Scale Z",
    category: "object",
    returnType: "number",
    description: "Get Z scale of object of Id.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get scale z from" }
    ],
    usage: "MakeIt3D.ScaleZ(\"objectId\")",
    example: "Log MakeIt3D.ScaleZ(\"hero\")"
  }}
/>

</div>

## Animation
<div className="expressionsGrid">
  <ExpressionCard 
    expression={{
      name: "Get Object Animations",
      category: "animation",
      returnType: "string",
      description: "Returns all animations of object if it has any",
      parameters: [
        { name: "objectId", description: "Unique identifier of the object to get animations" }
      ],
      usage: "MakeIt3D.GetObjectAnimationsArray(\"Id\")",
      example: "Log MakeIt3D.GetObjectAnimationsArray(\"hero\")"
    }}
  />
  <ExpressionCard 
  expression={{
    name: "Get Object Animation Count",
    category: "animation",
    returnType: "number",
    description: "Returns the number of animations associated with a given object.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get animation count from" }
    ],
    usage: "MakeIt3D.GetObjectAnimationCount(\"Id\")",
    example: "Log MakeIt3D.GetObjectAnimationCount(\"hero\")"
  }}
/>
<ExpressionCard 
  expression={{
    name: "Get Object Animation Duration",
    category: "animation",
    returnType: "number",
    description: "Returns the duration of the specified animation from an object.",
    parameters: [
      { name: "objectId", description: "The ID of the object to get animation from" },
      { name: "animationName_Index", description: "Animation name or index to retrieve duration" }
    ],
    usage: "MakeIt3D.GetObjectAnimationDuration(\"Id\", 0)",
    example: "Log MakeIt3D.GetObjectAnimationDuration(\"hero\", \"Idle\")"
  }}
/>
<ExpressionCard 
  expression={{
    name: "Get Current Animation Name",
    category: "animation",
    returnType: "string",
    description: "Returns the name of the current animation in a foreach loop context.",
    parameters: [],
    usage: "MakeIt3D.GetCurrentAnimationName()",
    example: "Log MakeIt3D.GetCurrentAnimationName()"
  }}
/>
<ExpressionCard 
  expression={{
    name: "Get Current Animation Duration",
    category: "animation",
    returnType: "number",
    description: "Returns the duration of the current animation in a foreach loop context.",
    parameters: [],
    usage: "MakeIt3D.GetCurrentAnimationDuration()",
    example: "Log MakeIt3D.GetCurrentAnimationDuration()"
  }}
/>

  </div>

## Raycast

<ExpressionCard 
  expression={{
    name: "Raycast Hit X",
    category: "raycast",
    returnType: "number",
    description: "Returns the X coordinate of the 3D point where the last raycast hit occurred.",
    parameters: [],
    usage: "MakeIt3D.RaycastHitX()",
    example: "Log MakeIt3D.RaycastHitX()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Hit Y",
    category: "raycast",
    returnType: "number",
    description: "Returns the Y coordinate of the 3D point where the last raycast hit occurred.",
    parameters: [],
    usage: "MakeIt3D.RaycastHitY()",
    example: "Log MakeIt3D.RaycastHitY()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Hit Z",
    category: "raycast",
    returnType: "number",
    description: "Returns the Z coordinate of the 3D point where the last raycast hit occurred.",
    parameters: [],
    usage: "MakeIt3D.RaycastHitZ()",
    example: "Log MakeIt3D.RaycastHitZ()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Hit Normal X",
    category: "raycast",
    returnType: "number",
    description: "Returns the X component of the surface normal at the 3D point where the last raycast hit occurred.",
    parameters: [],
    usage: "MakeIt3D.RaycastHitNormalX()",
    example: "Log MakeIt3D.RaycastHitNormalX()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Hit Normal Y",
    category: "raycast",
    returnType: "number",
    description: "Returns the Y component of the surface normal at the 3D point where the last raycast hit occurred.",
    parameters: [],
    usage: "MakeIt3D.RaycastHitNormalY()",
    example: "Log MakeIt3D.RaycastHitNormalY()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Hit Normal Z",
    category: "raycast",
    returnType: "number",
    description: "Returns the Z component of the surface normal at the 3D point where the last raycast hit occurred.",
    parameters: [],
    usage: "MakeIt3D.RaycastHitNormalZ()",
    example: "Log MakeIt3D.RaycastHitNormalZ()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Hit Object ID",
    category: "raycast",
    returnType: "string",
    description: "Returns the app-specific ID of the object that was hit by the last raycast.",
    parameters: [],
    usage: "MakeIt3D.RaycastObjectId()",
    example: "Log MakeIt3D.RaycastObjectId()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Hit Object Name",
    category: "raycast",
    returnType: "string",
    description: "Returns the name of the object that was hit by the last raycast.",
    parameters: [],
    usage: "MakeIt3D.RaycastObjectName()",
    example: "Log MakeIt3D.RaycastObjectName()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Hit Distance",
    category: "raycast",
    returnType: "number",
    description: "Returns the distance from the camera to the point where the last raycast hit occurred.",
    parameters: [],
    usage: "MakeIt3D.RaycastDistance()",
    example: "Log MakeIt3D.RaycastDistance()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast UV U",
    category: "raycast",
    returnType: "number",
    description: "Returns the U (horizontal) texture coordinate at the raycast hit point, if available.",
    parameters: [],
    usage: "MakeIt3D.Raycast_UV_U()",
    example: "Log MakeIt3D.Raycast_UV_U()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast UV V",
    category: "raycast",
    returnType: "number",
    description: "Returns the V (vertical) texture coordinate at the raycast hit point, if available.",
    parameters: [],
    usage: "MakeIt3D.Raycast_UV_V()",
    example: "Log MakeIt3D.Raycast_UV_V()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Face Index",
    category: "raycast",
    returnType: "number",
    description: "Returns the index of the triangle face that was hit, if available.",
    parameters: [],
    usage: "MakeIt3D.RaycastFaceIndex()",
    example: "Log MakeIt3D.RaycastFaceIndex()"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Raycast Hit JSON",
    category: "raycast",
    returnType: "string",
    description: "Returns the full raycast hit data as a JSON string, including position, distance, object ID, and more.",
    parameters: [],
    usage: "MakeIt3D.RaycastHitJSON()",
    example: "Log MakeIt3D.RaycastHitJSON()"
  }}
/>



## Utility
<div className="expressionsGrid">
<ExpressionCard 
  expression={{
    name: "RGB",
    category: "utility",
    returnType: "color",
    description: "Create a color from RGB values (0-255).",
    parameters: [
      { name: "r", description: "Red component (0-255)" },
      { name: "g", description: "Green component (0-255)" },
      { name: "b", description: "Blue component (0-255)" }
    ],
    usage: "MakeIt3D.RGB(255, 0, 0)",
    example: "SetColor MakeIt3D.RGB(255, 100, 50)"
  }}
/>

<ExpressionCard 
  expression={{
    name: "RGBA",
    category: "utility",
    returnType: "color",
    description: "Create a color from RGB values (0-255) with Alpha (0-255).",
    parameters: [
      { name: "r", description: "Red component (0-255)" },
      { name: "g", description: "Green component (0-255)" },
      { name: "b", description: "Blue component (0-255)" },
      { name: "a", description: "Alpha component (0-255)" }
    ],
    usage: "MakeIt3D.RGBA(0, 255, 0, 128)",
    example: "SetColor MakeIt3D.RGBA(0, 255, 0, 128)"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Vector3",
    category: "utility",
    returnType: "vector3",
    description: "Returns a vector3 object with x, y, z values.",
    parameters: [
      { name: "x", description: "X value of the vector3" },
      { name: "y", description: "Y value of the vector3" },
      { name: "z", description: "Z value of the vector3" }
    ],
    usage: "MakeIt3D.Vector3(1, 2, 3)",
    example: "MoveObject \"hero\" to MakeIt3D.Vector3(0, 5, 0)"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Array",
    category: "utility",
    returnType: "array",
    description: "Collects all passed arguments into a single array. Useful for variadic inputs.",
    parameters: [],
    usage: "MakeIt3D.ToArray(\"a\", \"b\", \"c\")",
    example: "Log MakeIt3D.ToArray(1, 2, 3)"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Build Uniforms",
    category: "utility",
    returnType: "uniform",
    description: "Returns a uniform from given string of uniforms.",
    parameters: [
      { name: "uniforms", description: "String of uniforms to build" }
    ],
    usage: "MakeIt3D.ShaderUniforms(\"time: 1.0; color: [1, 0, 0]\")",
    example: "ApplyShader Uniforms: MakeIt3D.ShaderUniforms(\"uColor: [1, 1, 1]\")"
  }}
/>

<ExpressionCard 
  expression={{
    name: "Get Last Error Message",
    category: "utility",
    returnType: "string",
    description: "Get the last error message.",
    parameters: [],
    usage: "MakeIt3D.GetLastErrorMsg()",
    example: "Log MakeIt3D.GetLastErrorMsg()"
  }}
/>


</div>


## Usage Guidelines

### **Return Types Guide**
- **🔢 Number** - Numeric values (positions, rotations, counts, distances)
- **📝 String** - Text values (object IDs, file paths, error messages)  
- **✓ Boolean** - True/false values (loaded states, visibility checks)
- **📋 Object** - Complex data structures (rarely used)

### **Best Practices**
- **Cache Values** - Store frequently accessed expressions in variables
- **Use in Comparisons** - Perfect for System Compare conditions
- **Update Displays** - Great for updating UI text with real-time data
- **Performance** - Expressions are fast but avoid calling them every tick unnecessarily

### **Common Patterns**
```
// Update UI with object position
Every Tick -> Set Text to "X: " & MakeIt3D.GetObjectPositionX("player")

// Check distance for gameplay
System Compare: MakeIt3D.GetDistanceBetween("player", "goal") < 2
-> Go to next layout

// Monitor performance
MakeIt3D.GetFPS() < 30 -> Enable performance mode
```