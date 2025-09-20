---
sidebar_position: 5
---

# 🎯Conditions

Conditions allow you to check the state of your 3D scene or respond to events. Use these in Construct 3 Event Sheets to create interactive 3D experiences.

import ConditionCard from '@site/src/components/ui/ConditionCard';

## World 
<div className="conditionsGrid">
  <ConditionCard
    condition={{
      name: "On Rapier Physics Initialized",
      category: "physics",
      eventType: "trigger",
      description: "Triggers when Rapier Physics engine is successfully initialized and ready to use.",
      trigger: "Physics engine completes initialization",
      parameters: [],
      example: "// On Rapier Physics Initialized -> Log \"Physics engine ready!\""
    }}
  />

  <ConditionCard
    condition={{
      name: "On Rapier Physics Load Fails",
      category: "physics",
      eventType: "trigger",
      description: "Triggers when there is an error during Rapier Physics initialization.",
      trigger: "Physics engine fails to load or initialize",
      parameters: [],
      example: "// On Rapier Physics Load Fails -> Log \"Failed to load physics engine\""
    }}
  />

  <ConditionCard
    condition={{
      name: "Is Rapier Ready",
      category: "physics",
      eventType: "condition",
      description: "Returns true when Rapier Physics is successfully initialized and operational.",
      trigger: "Check if physics engine is ready for use",
      parameters: [],
      example: "// Is Rapier Ready -> Enable physics controls"
    }}
  />
</div>

## Collisions & Triggers
<div className="conditionsGrid">
  <ConditionCard
    condition={{
      name: "On Collision Enter",
      category: "collision",
      eventType: "trigger",
      description: "Triggers when a physics object starts colliding with the specified object.",
      trigger: "Physical collision begins between objects",
      parameters: [
        { name: "objectId", description: "ID of the object to monitor for collisions" }
      ],
      example: "// On Collision Enter for Id \"player\" -> Log \"Player hit something!\""
    }}
  />

  <ConditionCard
    condition={{
      name: "On Collision Exit",
      category: "collision",
      eventType: "trigger",
      description: "Triggers when a physics object stops colliding with the specified object.",
      trigger: "Physical collision ends between objects",
      parameters: [
        { name: "objectId", description: "ID of the object to monitor for collision exits" }
      ],
      example: "// On Collision Exit for Id \"player\" -> Log \"Player separated from object\""
    }}
  />

  <ConditionCard
    condition={{
      name: "On Trigger Enter",
      category: "collision",
      eventType: "trigger",
      description: "Triggers when another object enters the specified object's trigger zone (non-physical collision).",
      trigger: "Object enters trigger zone",
      parameters: [
        { name: "objectId", description: "ID of the object acting as a trigger zone" }
      ],
      example: "// On Trigger Enter for Id \"checkpoint\" -> Log \"Checkpoint reached!\""
    }}
  />

  <ConditionCard
    condition={{
      name: "On Trigger Exit",
      category: "collision",
      eventType: "trigger",
      description: "Triggers when another object exits the specified object's trigger zone (non-physical collision).",
      trigger: "Object leaves trigger zone",
      parameters: [
        { name: "objectId", description: "ID of the object acting as a trigger zone" }
      ],
      example: "// On Trigger Exit for Id \"safe_zone\" -> Log \"Left safe area\""
    }}
  />
</div>

## Raycast
<div className="conditionsGrid">
  <ConditionCard
    condition={{
      name: "On Raycast Hit",
      category: "raycast",
      eventType: "trigger",
      description: "Triggers when a raycast operation successfully hits an object in the scene.",
      trigger: "Raycast intersects with an object",
      parameters: [],
      example: "// On Raycast Hit -> Log \"Raycast found target at: \" & HitPoint"
    }}
  />

  <ConditionCard
    condition={{
      name: "Foreach Raycast Hit",
      category: "raycast",
      eventType: "loop",
      description: "Loops through each object hit by a raycast operation, useful for handling multiple intersections.",
      trigger: "Iterate through all raycast intersection results",
      parameters: [],
      example: "// Foreach Raycast Hit -> Log \"Hit object: \" & CurrentHitObject.ID"
    }}
  />
</div>

## Objects (Rigidbody)
<div className="conditionsGrid">
  <ConditionCard
    condition={{
      name: "On Rapier Object Created",
      category: "object",
      eventType: "trigger",
      description: "Triggers when a specific physics object is successfully created and added to the scene.",
      trigger: "Specified physics object is spawned",
      parameters: [
        { name: "objectId", description: "ID of the specific object to monitor for creation" }
      ],
      example: "// On Rapier Object Created with ID \"enemy1\" -> Log \"Enemy spawned!\""
    }}
  />

  <ConditionCard
    condition={{
      name: "On Any Rapier Object Created",
      category: "object",
      eventType: "trigger",
      description: "Triggers when any physics object is created and added to the scene.",
      trigger: "Any physics object is spawned",
      parameters: [],
      example: "// On Any Rapier Object Created -> Log \"New physics object added: \" & LastCreatedObject.ID"
    }}
  />

  <ConditionCard
    condition={{
      name: "Is Rapier Object Loaded",
      category: "object",
      eventType: "state",
      description: "Returns true if the specified physics object is currently loaded and active in the scene.",
      trigger: "Check if object exists in scene",
      parameters: [
        { name: "objectId", description: "ID of the object to check for existence" }
      ],
      example: "// Is Rapier Object \"powerup1\" Loaded -> Show interaction prompt"
    }}
  />

  <ConditionCard
    condition={{
      name: "Foreach Rapier Object",
      category: "object",
      eventType: "loop",
      description: "Loops through each physics object in the scene that has the specified tag.",
      trigger: "Iterate through objects with matching tag",
      parameters: [
        { name: "tag", description: "Tag name to filter objects for iteration" }
      ],
      example: "// Foreach Rapier Object with tag \"enemy\" -> Apply damage to CurrentObject"
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