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
        { name: "object", description: "Object placeholder to check whether created" }
      ],
      example: "// On Object Created With placeholder \"hero\" -> Log \"New object: \" & object"
    }}
  />
  <ConditionCard 
  condition={{
    name: "Is Object Loaded In Scene",
    category: "object",
    eventType: "state",
    description: "Returns true if the object with the specified placeholder is currently loaded in the scene.",
    trigger: "Checks whether a specific object is present in the scene.",
    parameters: [
      { name: "object", description: "The placeholder of the object to check for presence in the scene." }
    ],
    example: "// If Object with placeholder \"enemyBoss\" is loaded -> Play animation"
  }}
/>

  <ConditionCard 
  condition={{
    name: "On Object Destroyed",
    category: "object",
    eventType: "trigger",
    description: "Triggered when an object is destroyed and removed from the scene.",
    trigger: "An object with the specified placeholder is destroyed or removed from the scene.",
    parameters: [
      { name: "Object", description: "The placeholder of the object to monitor for destruction (optional: leave empty to listen for all objects)." }
    ],
    example: "// On Object Destroyed with placeholder \"barrel01\" -> Spawn explosion effect"
  }}
/>
<ConditionCard 
  condition={{
    name: "On Any Object Destroyed",
    category: "object",
    eventType: "trigger",
    description: "Triggered when an any object is destroyed and removed from the scene.",
    trigger: "An any object destroyed or removed from the scene.",
    parameters: [
      ],
    example: "// On Any Object Destroyed with placeholder \"barrel01\" -> Spawn explosion effect"
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
      parameters: [
         { name: "Object", description: "The placeholder of the object is visible" },
        ],
      example: "// Check if object is visible\nIs Visible (\"enemy_1\") -> Enable AI Behavior"
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
      { name: "Object", description: "The placeholder of the object whose animation finished" },
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
      { name: "Object", description: "The placeholder of the object whose animation loop finished" },
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
      { name: "Object", description: "The placeholder of the object whose animations will be iterated" }
    ],
    example: "// For Each Animation on object 'enemy' -> Print animation name or index"
  }}
/>

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

## Utils
<ConditionCard 
  condition={{
    name: "Pick Object By Instace Id",
    category: "utils",
    eventType: "state",
    description: "Picks Object instance by id( currently it picks only one object per block)",
    
    parameters: [
      { name: "Object", description: "The placeholder object to pick" },
      { name: "Instance id", description: "Instance id to pick the placeholder object specific instance" }

    ],
    example: "// On pick object \"PlaceholderObject\" with instance id 2 -> Log \"Set Postion X to 5\""
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
- **Object** - Placeholder object(which can be any sprite or dedicated object which is developed alongside with this addon) identifier for specific objects
- **comparison** - Operators like `>`, `<`, `=`, `>=`, `<=`  
- **margin** - Float value for tolerance/buffer zones (0.0 to 1.0)