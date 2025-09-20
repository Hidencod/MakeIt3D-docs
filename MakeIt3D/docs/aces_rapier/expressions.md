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
      name: "RGB",
      category: "utils",
      returnType: "color",
      description: "Create a color from RGB values (0-255).",
      parameters: [
        { name: "r", description: "Red component (0-255)" },
        { name: "g", description: "Green component (0-255)" },
        { name: "b", description: "Blue component (0-255)" }
      ],
      usage: "MakeIt3D.RGB(255, 128, 0)",
      example: "Set object color to MakeIt3D.RGB(255, 0, 0) // Bright red"
    }}
  />

  <ExpressionCard
    expression={{
      name: "Vector3",
      category: "utils",
      returnType: "vector3",
      description: "Returns a vector3 object with x, y, z values for 3D position, rotation, or scale.",
      parameters: [
        { name: "x", description: "X value of the vector3" },
        { name: "y", description: "Y value of the vector3" },
        { name: "z", description: "Z value of the vector3" }
      ],
      usage: "MakeIt3D.Vector3(10, 5, -3)",
      example: "Set position to MakeIt3D.Vector3(0, 10, 0) // 10 units above origin"
    }}
  />
</div>

## Collisions & Triggers
<div className="expressionsGrid">
  <ExpressionCard
    expression={{
      name: "SelfObjectId",
      category: "collision",
      returnType: "string",
      description: "Returns the unique object ID of the object that is checking for the collision.",
      parameters: [],
      usage: "MakeIt3D.SelfObjectId",
      example: "Log \"Collision detected on: \" & MakeIt3D.SelfObjectId"
    }}
  />

  <ExpressionCard
    expression={{
      name: "OtherObjectId", 
      category: "collision",
      returnType: "string",
      description: "Returns the unique object ID of the other object that was involved in the collision.",
      parameters: [],
      usage: "MakeIt3D.OtherObjectId",
      example: "Log \"Collided with: \" & MakeIt3D.OtherObjectId"
    }}
  />

  <ExpressionCard
    expression={{
      name: "TotalImpulse",
      category: "collision",
      returnType: "number",
      description: "Returns the total impulse applied during the collision. Higher values indicate stronger impacts.",
      parameters: [],
      usage: "MakeIt3D.TotalImpulse",
      example: "If MakeIt3D.TotalImpulse > 100 Then PlaySound(\"crash\")"
    }}
  />

  <ExpressionCard
    expression={{
      name: "ContactNormalsJson",
      category: "collision",
      returnType: "string",
      description: "Returns a compact JSON string containing all contact normal vectors for the collision.",
      parameters: [],
      usage: "MakeIt3D.ContactNormalsJson",
      example: "Set debug_text to MakeIt3D.ContactNormalsJson"
    }}
  />

  <ExpressionCard
    expression={{
      name: "ContactPointsJson",
      category: "collision",
      returnType: "string",
      description: "Returns a compact JSON string with all contact point data from the collision (positions, impulses, distances).",
      parameters: [],
      usage: "MakeIt3D.ContactPointsJson",
      example: "Log \"Contact data: \" & MakeIt3D.ContactPointsJson"
    }}
  />

  <ExpressionCard
    expression={{
      name: "CollisionDataJson",
      category: "collision",
      returnType: "string",
      description: "Returns a compact JSON string representing the full collision data (normals, contact points, impulses).",
      parameters: [],
      usage: "MakeIt3D.CollisionDataJson",
      example: "Save MakeIt3D.CollisionDataJson to collision_log"
    }}
  />

  <ExpressionCard
    expression={{
      name: "HasActiveContact",
      category: "collision",
      returnType: "boolean",
      description: "Returns true if there is at least one active contact point between the colliders in the last collision.",
      parameters: [],
      usage: "MakeIt3D.HasActiveContact",
      example: "If MakeIt3D.HasActiveContact Then ApplyFriction()"
    }}
  />

  <ExpressionCard
    expression={{
      name: "ContactPointsCount",
      category: "collision",
      returnType: "number", 
      description: "Returns the number of contact points generated in the most recent collision.",
      parameters: [],
      usage: "MakeIt3D.ContactPointsCount",
      example: "Log \"Contact points: \" & MakeIt3D.ContactPointsCount"
    }}
  />

  <ExpressionCard
    expression={{
      name: "CollisionDataBeautified",
      category: "collision",
      returnType: "string",
      description: "Returns a human-readable JSON string of the full collision data. Useful for debugging.",
      parameters: [],
      usage: "MakeIt3D.CollisionDataBeautified",
      example: "Display MakeIt3D.CollisionDataBeautified in debug panel"
    }}
  />
</div>

## Raycast
<div className="expressionsGrid">
  <ExpressionCard
    expression={{
      name: "RaycastHitX",
      category: "raycast",
      returnType: "number",
      description: "Returns the X coordinate of the 3D point where the last raycast hit occurred.",
      parameters: [],
      usage: "MakeIt3D.RaycastHitX",
      example: "Set marker_x to MakeIt3D.RaycastHitX"
    }}
  />

  <ExpressionCard
    expression={{
      name: "RaycastHitY",
      category: "raycast",
      returnType: "number",
      description: "Returns the Y coordinate of the 3D point where the last raycast hit occurred.",
      parameters: [],
      usage: "MakeIt3D.RaycastHitY",
      example: "Set marker_y to MakeIt3D.RaycastHitY"
    }}
  />

  <ExpressionCard
    expression={{
      name: "RaycastHitZ",
      category: "raycast",
      returnType: "number",
      description: "Returns the Z coordinate of the 3D point where the last raycast hit occurred.",
      parameters: [],
      usage: "MakeIt3D.RaycastHitZ",
      example: "Set marker_z to MakeIt3D.RaycastHitZ"
    }}
  />

  <ExpressionCard
    expression={{
      name: "RaycastHitNormalX",
      category: "raycast",
      returnType: "number",
      description: "Returns the X component of the surface normal at the 3D point where the last raycast hit occurred.",
      parameters: [],
      usage: "MakeIt3D.RaycastHitNormalX",
      example: "Set surface_normal_x to MakeIt3D.RaycastHitNormalX"
    }}
  />

  <ExpressionCard
    expression={{
      name: "RaycastHitNormalY",
      category: "raycast",
      returnType: "number",
      description: "Returns the Y component of the surface normal at the 3D point where the last raycast hit occurred.",
      parameters: [],
      usage: "MakeIt3D.RaycastHitNormalY",
      example: "Set surface_normal_y to MakeIt3D.RaycastHitNormalY"
    }}
  />

  <ExpressionCard
    expression={{
      name: "RaycastHitNormalZ",
      category: "raycast",
      returnType: "number",
      description: "Returns the Z component of the surface normal at the 3D point where the last raycast hit occurred.",
      parameters: [],
      usage: "MakeIt3D.RaycastHitNormalZ",
      example: "Set surface_normal_z to MakeIt3D.RaycastHitNormalZ"
    }}
  />

  <ExpressionCard
    expression={{
      name: "RaycastObjectId",
      category: "raycast",
      returnType: "string",
      description: "Returns the app-specific ID of the object that was hit by the last raycast.",
      parameters: [],
      usage: "MakeIt3D.RaycastObjectId",
      example: "Log \"Hit object: \" & MakeIt3D.RaycastObjectId"
    }}
  />

  <ExpressionCard
    expression={{
      name: "RaycastDistance",
      category: "raycast",
      returnType: "number",
      description: "Returns the distance from the camera to the point where the last raycast hit occurred.",
      parameters: [],
      usage: "MakeIt3D.RaycastDistance",
      example: "If MakeIt3D.RaycastDistance < 10 Then ShowInteractPrompt()"
    }}
  />

  <ExpressionCard
    expression={{
      name: "RaycastJointId",
      category: "raycast",
      returnType: "string",
      description: "Returns joint ID if the hit object has any active joints attached to it.",
      parameters: [],
      usage: "MakeIt3D.RaycastJointId",
      example: "If MakeIt3D.RaycastJointId != \"\" Then HighlightJoint()"
    }}
  />
</div>

## Objects (Rigidbody)
<div className="expressionsGrid">
  <ExpressionCard
    expression={{
      name: "GetCurrentForeachObjectId",
      category: "object",
      returnType: "string",
      description: "Get the object ID of the current object being iterated in a foreach loop.",
      parameters: [],
      usage: "MakeIt3D.GetCurrentForeachObjectId",
      example: "Log \"Processing object: \" & MakeIt3D.GetCurrentForeachObjectId"
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