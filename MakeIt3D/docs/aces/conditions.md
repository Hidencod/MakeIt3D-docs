---
sidebar_position: 5
---

# Conditions

Conditions allow you to check the state of your 3D scene or respond to events. Use these in Construct 3 Event Sheets to create interactive 3D experiences.

import ConditionCard from '@site/src/components/ui/ConditionCard';

## Object Conditions

<div className="conditionsGrid">
  <ConditionCard 
    condition={{
      name: "On Object Created",
      category: "object",
      eventType: "trigger",
      description: "Triggered when a new 3D object is successfully created in the scene.",
      trigger: "A new object is spawned or loaded",
      parameters: ["objectId", "objectType"],
      example: "// When any object is created\nOn Object Created -> Log \"New object: \" & ObjectID"
    }}
  />
  
  <ConditionCard 
    condition={{
      name: "On Object Destroyed",
      category: "object",
      eventType: "trigger", 
      description: "Triggered when a 3D object is removed from the scene.",
      trigger: "An object is deleted or destroyed",
      parameters: ["objectId"],
      example: "// When specific object is destroyed\nOn Object Destroyed (\"player_cube\") -> Restart Level"
    }}
  />
  
  <ConditionCard 
    condition={{
      name: "Is Visible",
      category: "object",
      eventType: "state",
      description: "Check if an object is currently visible to the camera.",
      parameters: ["objectId"],
      example: "// Check if object is visible\nIs Visible (\"enemy_1\") -> Enable AI Behavior"
    }}
  />
  
  <ConditionCard 
    condition={{
      name: "Is In Camera View",
      category: "object",
      eventType: "state",
      description: "Test whether an object is within the camera's field of view.",
      parameters: ["objectId", "margin?"],
      example: "// Check with 10% margin\nIs In Camera View (\"pickup_item\", 0.1) -> Show UI Indicator"
    }}
  />
</div>

## Model Conditions

<div className="conditionsGrid">
  <ConditionCard 
    condition={{
      name: "On Model Loaded",
      category: "model",
      eventType: "trigger",
      description: "Triggered when a 3D model file finishes loading successfully.",
      trigger: "A 3D model (GLB, GLTF, OBJ) completes loading",
      parameters: ["modelPath", "objectId"],
      example: "// When character model loads\nOn Model Loaded (\"models/character.glb\") -> Start Animation"
    }}
  />
  
  <ConditionCard 
    condition={{
      name: "On Model Load Error",
      category: "model",
      eventType: "trigger",
      description: "Triggered when a 3D model fails to load due to an error.",
      trigger: "A model loading operation encounters an error",
      parameters: ["modelPath", "errorMessage"],
      example: "// Handle loading errors\nOn Model Load Error -> Display \"Failed to load model\""
    }}
  />
</div>

## Scene Conditions

<div className="conditionsGrid">
  <ConditionCard 
    condition={{
      name: "On Scene Ready",
      category: "scene",
      eventType: "trigger",
      description: "Triggered when the 3D scene has finished initializing and is ready for use.",
      trigger: "The 3D context is created and scene is initialized",
      example: "// Scene is ready to use\nOn Scene Ready -> Create Initial Objects"
    }}
  />
  
  <ConditionCard 
    condition={{
      name: "Is Scene Loading",
      category: "scene",
      eventType: "state",
      description: "Check if the scene is currently in a loading state.",
      example: "// Show loading screen while scene loads\nIs Scene Loading -> Set Loading Text Visible"
    }}
  />
  
  <ConditionCard 
    condition={{
      name: "Object Count",
      category: "scene",
      eventType: "state",
      description: "Compare the current number of objects in the scene.",
      parameters: ["comparison", "value"],
      example: "// Check if scene has more than 50 objects\nObject Count > 50 -> Optimize Scene"
    }}
  />
</div>

## Camera Conditions

<div className="conditionsGrid">
  <ConditionCard 
    condition={{
      name: "Camera Is Moving",
      category: "camera",
      eventType: "state",
      description: "Check if the camera is currently in motion.",
      example: "// Disable UI while camera moves\nCamera Is Moving -> Set UI Opacity to 50%"
    }}
  />
  
  <ConditionCard 
    condition={{
      name: "On Camera Move Complete",
      category: "camera",
      eventType: "trigger",
      description: "Triggered when a smooth camera movement finishes.",
      trigger: "A camera animation or smooth movement completes",
      example: "// Re-enable controls after camera move\nOn Camera Move Complete -> Enable Player Input"
    }}
  />
</div>

## Usage Tips

### **Event Triggers vs State Checks**
- **⚡ Event Triggers** - Run once when something happens (On Object Created, On Model Loaded)
- **🔍 State Checks** - Continuously check conditions (Is Visible, Camera Is Moving)

### **Performance Considerations**
- Use state-checking conditions sparingly in Every Tick events
- Prefer event triggers for better performance when possible
- Cache condition results when checking the same thing multiple times

### **Parameter Types**
- **objectId** - String identifier for specific objects
- **comparison** - Operators like `>`, `<`, `=`, `>=`, `<=`  
- **margin** - Float value for tolerance/buffer zones (0.0 to 1.0)