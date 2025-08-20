---
sidebar_position: 6
---

# Expressions

Expressions retrieve data from your 3D scene and return values that can be used in Construct 3 events. They're perfect for getting positions, rotations, scene information, and more.

import ExpressionCard from '@site/src/components/ui/ExpressionCard';

## Scene Expressions

<div className="expressionsGrid">
  <ExpressionCard 
    expression={{
      name: "GetObjectCount",
      category: "scene",
      returnType: "number",
      description: "Returns the total number of 3D objects currently in the scene.",
      usage: "MakeIt3D.GetObjectCount()",
      example: "Set Text to \"Objects: \" & MakeIt3D.GetObjectCount()"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetFPS",
      category: "scene",
      returnType: "number",
      description: "Returns the current frames per second of the 3D renderer.",
      usage: "MakeIt3D.GetFPS()",
      example: "Set Text to \"FPS: \" & round(MakeIt3D.GetFPS())"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetSceneWidth",
      category: "scene",
      returnType: "number",
      description: "Returns the width of the 3D scene canvas in pixels.",
      usage: "MakeIt3D.GetSceneWidth()",
      example: "System Compare: MakeIt3D.GetSceneWidth() > 1920"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetSceneHeight",
      category: "scene",
      returnType: "number",
      description: "Returns the height of the 3D scene canvas in pixels.",
      usage: "MakeIt3D.GetSceneHeight()",
      example: "Set Sprite Height to MakeIt3D.GetSceneHeight()"
    }}
  />
</div>

## Camera Expressions

<div className="expressionsGrid">
  <ExpressionCard 
    expression={{
      name: "GetCameraPositionX",
      category: "camera",
      returnType: "number",
      description: "Returns the current X coordinate of the camera position.",
      usage: "MakeIt3D.GetCameraPositionX()",
      example: "Set Text to \"Cam X: \" & MakeIt3D.GetCameraPositionX()"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetCameraPositionY",
      category: "camera",
      returnType: "number",
      description: "Returns the current Y coordinate of the camera position.",
      usage: "MakeIt3D.GetCameraPositionY()",
      example: "Set Variable CamY to MakeIt3D.GetCameraPositionY()"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetCameraPositionZ",
      category: "camera",
      returnType: "number",
      description: "Returns the current Z coordinate of the camera position.",
      usage: "MakeIt3D.GetCameraPositionZ()",
      example: "System Compare: MakeIt3D.GetCameraPositionZ() > 10"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetCameraDistance",
      category: "camera",
      returnType: "number",
      description: "Returns the distance from camera to a specific point.",
      parameters: ["targetX", "targetY", "targetZ"],
      usage: "MakeIt3D.GetCameraDistance(x, y, z)",
      example: "MakeIt3D.GetCameraDistance(Player.X, Player.Y, Player.Z)"
    }}
  />
</div>

## Object Expressions

<div className="expressionsGrid">
  <ExpressionCard 
    expression={{
      name: "GetObjectPositionX",
      category: "object",
      returnType: "number",
      description: "Returns the X coordinate of a specific 3D object.",
      parameters: ["objectId"],
      usage: "MakeIt3D.GetObjectPositionX(\"objectId\")",
      example: "Set Text to MakeIt3D.GetObjectPositionX(\"player_cube\")"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetObjectPositionY",
      category: "object",
      returnType: "number",
      description: "Returns the Y coordinate of a specific 3D object.",
      parameters: ["objectId"],
      usage: "MakeIt3D.GetObjectPositionY(\"objectId\")",
      example: "Set Variable PlayerY to MakeIt3D.GetObjectPositionY(\"player\")"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetObjectPositionZ",
      category: "object",
      returnType: "number",
      description: "Returns the Z coordinate of a specific 3D object.",
      parameters: ["objectId"],
      usage: "MakeIt3D.GetObjectPositionZ(\"objectId\")",
      example: "System Compare: MakeIt3D.GetObjectPositionZ(\"enemy\") < 0"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetObjectRotationX",
      category: "object",
      returnType: "number",
      description: "Returns the X rotation of an object in degrees.",
      parameters: ["objectId"],
      usage: "MakeIt3D.GetObjectRotationX(\"objectId\")",
      example: "Set Text to round(MakeIt3D.GetObjectRotationX(\"turret\"))"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetObjectRotationY",
      category: "object",
      returnType: "number",
      description: "Returns the Y rotation of an object in degrees.",
      parameters: ["objectId"],
      usage: "MakeIt3D.GetObjectRotationY(\"objectId\")",
      example: "Rotate 2D Sprite to MakeIt3D.GetObjectRotationY(\"compass\")"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetObjectRotationZ",
      category: "object",
      returnType: "number",
      description: "Returns the Z rotation of an object in degrees.",
      parameters: ["objectId"],
      usage: "MakeIt3D.GetObjectRotationZ(\"objectId\")",
      example: "Set Variable Angle to MakeIt3D.GetObjectRotationZ(\"wheel\")"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetObjectScaleX",
      category: "object",
      returnType: "number",
      description: "Returns the X scale factor of an object.",
      parameters: ["objectId"],
      usage: "MakeIt3D.GetObjectScaleX(\"objectId\")",
      example: "Set Sprite Width to 100 * MakeIt3D.GetObjectScaleX(\"box\")"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetObjectScaleY",
      category: "object",
      returnType: "number",
      description: "Returns the Y scale factor of an object.",
      parameters: ["objectId"],
      usage: "MakeIt3D.GetObjectScaleY(\"objectId\")",
      example: "System Compare: MakeIt3D.GetObjectScaleY(\"balloon\") > 2"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetObjectScaleZ",
      category: "object",
      returnType: "number",
      description: "Returns the Z scale factor of an object.",
      parameters: ["objectId"],
      usage: "MakeIt3D.GetObjectScaleZ(\"objectId\")",
      example: "Set Variable Depth to MakeIt3D.GetObjectScaleZ(\"platform\")"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "GetDistanceBetween",
      category: "object",
      returnType: "number",
      description: "Returns the 3D distance between two objects.",
      parameters: ["objectId1", "objectId2"],
      usage: "MakeIt3D.GetDistanceBetween(\"obj1\", \"obj2\")",
      example: "MakeIt3D.GetDistanceBetween(\"player\", \"enemy\") < 5"
    }}
  />
</div>

## Model Expressions

<div className="expressionsGrid">
  <ExpressionCard 
    expression={{
      name: "GetModelLoadProgress",
      category: "model",
      returnType: "number",
      description: "Returns loading progress of a model as percentage (0-100).",
      parameters: ["modelPath"],
      usage: "MakeIt3D.GetModelLoadProgress(\"path\")",
      example: "Set Progress Bar to MakeIt3D.GetModelLoadProgress(\"model.glb\")"
    }}
  />
  
  <ExpressionCard 
    expression={{
      name: "IsModelLoaded",
      category: "model",
      returnType: "boolean",
      description: "Returns true if the specified model has finished loading.",
      parameters: ["objectId"],
      usage: "MakeIt3D.IsModelLoaded(\"objectId\")",
      example: "System Compare: MakeIt3D.IsModelLoaded(\"character\") = true"
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