---
sidebar_position: 5
---

# 🎯Conditions

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
      trigger: "A new object is spawned or created",
      parameters: [
        { name: "objectId", description: "Object Id to check whether created" }
      ],
      example: "// On Object Created With Id \"hero\" -> Log \"New object: \" & ObjectID"
    }}
  />
  <ConditionCard 
  condition={{
    name: "Is Object Loaded In Scene",
    category: "object",
    eventType: "state",
    description: "Returns true if the object with the specified ID is currently loaded in the scene.",
    trigger: "Checks whether a specific object is present in the scene.",
    parameters: [
      { name: "objectId", description: "The ID of the object to check for presence in the scene." }
    ],
    example: "// If Object with Id \"enemyBoss\" is loaded -> Play animation"
  }}
/>

  <ConditionCard 
  condition={{
    name: "On Object Destroyed",
    category: "object",
    eventType: "trigger",
    description: "Triggered when an object is destroyed and removed from the scene. If no object ID is provided, the condition triggers for any object.",
    trigger: "An object with the specified ID is destroyed or removed from the scene.",
    parameters: [
      { name: "objectId", description: "The ID of the object to monitor for destruction (optional: leave empty to listen for all objects)." }
    ],
    example: "// On Object Destroyed with ID \"barrel01\" -> Spawn explosion effect"
  }}
/>
<ConditionCard 
  condition={{
    name: "On Object Failed Create",
    category: "object",
    eventType: "trigger",
    description: "Triggered when a 3D object fails to be created in the scene.",
    trigger: "An object creation attempt fails due to invalid data, missing assets, or other errors.",
    parameters: [],
    example: "// On Object Failed To Create -> Log error or retry"
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

## Scene Conditions

<div className="conditionsGrid">
<ConditionCard 
  condition={{
    name: "On 3D Scene Created",
    category: "scene",
    eventType: "trigger",
    description: "Triggered when a new 3D scene is successfully created.",
    trigger: "A new scene is created and initialized in the engine.",
    example: "// On scene creation -> Log \"Scene created successfully\""
  }}
/>

<ConditionCard 
  condition={{
    name: "On 3D Scene Create Fail",
    category: "scene",
    eventType: "trigger",
    description: "Triggered when a 3D scene fails to create due to an error or invalid input.",
    trigger: "A scene creation attempt fails.",
    example: "// On scene creation failure -> Log \"Failed to create scene\""
  }}
/>

</div>

## Animations

<ConditionCard 
  condition={{
    name: "On Animation Clip Finished",
    category: "animation",
    eventType: "trigger",
    description: "Triggered when a specific animation clip finishes playing on an object.",
    trigger: "An animation clip finishes playing completely.",
    parameters: [
      { name: "objectId", description: "The ID of the object whose animation finished" },
      { name: "animationIndex", description: "The index of the animation clip that finished" }
    ],
    example: "// On Animation Clip Finished for object \"player\" index 2 -> Trigger next action"
  }}
/>
<ConditionCard 
  condition={{
    name: "On Animation Loop Finished",
    category: "animation",
    eventType: "trigger",
    description: "Triggered when an animation loop finishes playing on an object.",
    trigger: "An animation loop completes (e.g., a looping walk cycle ends its set loop count).",
    parameters: [
      { name: "objectId", description: "The ID of the object whose animation loop finished" },
      { name: "animationIndex", description: "The index of the animation loop that finished" }
    ],
    example: "// On Animation Loop Finished for object \"npc01\" index 0 -> Switch to idle animation"
  }}
/>
<ConditionCard 
  condition={{
    name: "For Each Animation",
    category: "animation",
    eventType: "loop",
    description: "Loops through each animation available on a specified object.",
    trigger: "Iterates through all animations for a given object.",
    parameters: [
      { name: "objectId", description: "The ID of the object whose animations will be iterated" }
    ],
    example: "// For Each Animation on object 'enemy' -> Print animation name or index"
  }}
/>

## Spine 2d
<div className="conditionsGrid">
  {/* On Spine Animation Started */}
  <ConditionCard 
    condition={{
      name: "On Spine Animation Started",
      category: "spine",
      eventType: "trigger",
      description: "Triggered when a Spine animation starts playing.",
      trigger: "A Spine animation begins for a skeleton object.",
      example: `// On Spine animation started -> Log "Animation {animationName} started for object {objectId}"`
    }}
  />

  {/* On Spine Animation Completed */}
  <ConditionCard 
    condition={{
      name: "On Spine Animation Completed",
      category: "spine",
      eventType: "trigger",
      description: "Triggered each time a Spine animation completes a loop or finishes playing.",
      trigger: "A Spine animation finishes its play cycle or loop.",
      example: `// On Spine animation completed -> Log "Animation {animationName} completed for object {objectId}"`
    }}
  />

  {/* On Spine Animation Ended */}
  <ConditionCard 
    condition={{
      name: "On Spine Animation Ended",
      category: "spine",
      eventType: "trigger",
      description: "Triggered when a Spine animation track ends or is replaced/cleared.",
      trigger: "A Spine animation track ends or is replaced by another animation.",
      example: `// On Spine animation ended -> Log "Animation {animationName} ended for object {objectId}"`
    }}
  />

  {/* On Spine Event Fired */}
  <ConditionCard 
    condition={{
      name: "On Spine Event Fired",
      category: "spine",
      eventType: "trigger",
      description: "Triggered when a Spine animation fires a custom event.",
      trigger: "A custom event is fired within a Spine animation.",
      example: `// On Spine event fired -> Log "Event {eventname} fired in animation {animationName} for object {objectId}"`
    }}
  />
</div>

## Raycast
<ConditionCard 
  condition={{
    name: "On Raycast Hit",
    category: "object",
    eventType: "trigger",
    description: "Triggered when a raycast hits any object in the scene.",
    trigger: "A raycast intersects with an object.",
    parameters: [],
    example: "// On raycast hit -> Log \"Ray hit object!\""
  }}
/>


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