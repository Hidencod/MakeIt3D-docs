# 📜 Rapier Physics Scripting API

Access the full power of Rapier Physics through the Rapier Physics plugin's scripting interface.

## Getting Started

### 🚀 Listening to Rapier Physics Plugin Events in JavaScript

To integrate and respond to events from the Rapier Physics Construct plugin in your external JavaScript code, follow the pattern below. This allows you to hook into powerful physics events like world initialization, object creation/destruction, collision detection, and more.

:::note Event Requirements
These physics events require:

Rapier Physics initialization via event sheets
Object creation/destruction via event sheet actions

Objects created/destroyed directly in JavaScript code will not trigger onobjectadded/onobjectdestroy events - only event sheet actions will dispatch these notifications.
:::

✅ Step 1: Add Your Script as the Main Script

Ensure your external JavaScript file is set as the Main Script in your Construct project settings.

✅ Step 2: Register Event Listeners in runOnStartup

```javascript
runOnStartup(async runtime => {
	// This runs during the loading screen (before any layout starts).
	// It's a good place to prepare event hooks or pre-initialization code.
	// Note layouts, objects etc. are not yet available.
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});
```

✅ Step 3: Listen to Rapier Physics Events

```javascript
async function OnBeforeProjectStart(runtime) {
	// At this point, the first layout and its instances are loaded.

	const rapierPhysics = runtime.objects.Rapier.getFirstInstance();// change this if you rename the plugin

	if (!rapierPhysics) {
		console.warn("Rapier Physics instance not found.");
		return;
	}

	// 🌍 Physics world is initialized and ready
	rapierPhysics.addEventListener("onrapierinit", (e) => {
		console.log("✅ Rapier Physics Initialized:", e);

		// You can access the Rapier context in two ways:

		// Option 1: From global (if available and not in worker)
		if (typeof window !== "undefined" && window.MakeIt3DContext) {
			const rapierContext = window.MakeIt3DContext.rapierContext;
			console.log("Global Rapier context:", rapierContext);
		}

		// Option 2: Directly from the event
		const rapierContext = e.data;
		const { rapier, world, objects, characterControllers, joints } = rapierContext;

		console.log("Rapier Library:", rapier);
		console.log("Physics World:", world);
		console.log("Objects Registry:", objects);
	});

	// 📦 Fired when a physics object (body/collider) is added
	rapierPhysics.addEventListener("onobjectadded", (e) => {
		console.log("📦 Physics Object Added:", e);
		console.log("Object ID:", e.data.objectId);
		console.log("Object Tag:", e.data.tag);
	});

	// ❌ Fired when a physics object is removed from the world
	rapierPhysics.addEventListener("onobjectdestroy", (e) => {
		console.log("❌ Physics Object Destroyed:", e);
		console.log("Object ID:", e.data.objectId);
	});

	// 🎯 Fired when a raycast hits objects
	rapierPhysics.addEventListener("onraycasthit", (e) => {
		console.log("🎯 Raycast Hit:", e);
		console.log("First Hit:", e.data.firstHit);
		console.log("All Hits:", e.data.allHits);
	});

	// 🎮 Per-frame update hook
	runtime.addEventListener("tick", () => Tick(runtime));
}
```

📝 Per-Frame Update (Tick Function)

```javascript
function Tick(runtime) {
	// Code to run every frame (tick)
	// You can update UI, sync physics data, or perform runtime checks here
	
	// Example: Access physics world for custom updates
	if (typeof window !== "undefined" && window.MakeIt3DContext) {
		const { world, bodies } = window.MakeIt3DContext.rapierContext;
		
		// Custom physics logic here
		// world.step() is handled automatically by the plugin
	}
}
```

The Rapier Physics context becomes available globally after initialization through:

```javascript
const rapierContext = window.MakeIt3DContext.rapierContext;
const { rapier, world, objects, characterControllers, joints, eventQueue } = rapierContext;
```

## Context API Reference

| Property | Type | Description |
|----------|------|-------------|
| `rapier` | `RAPIER` | The main Rapier physics library instance |
| `world` | `RAPIER.World` | The main physics world instance |
| `eventQueue` | `RAPIER.EventQueue` | Physics event queue for collisions |
| `objects` | `Map<string, Object>` | Registry of mesh + rigidBody pairs |
| `colliderTypes` | `RAPIER.ColliderDesc` | Collider descriptor types for easy access |
| `characterControllers` | `Map<string, RAPIER.KinematicCharacterController>` | Character controllers registry |
| `joints` | `Map<string, RAPIER.Joint>` | Registry of all joints/constraints |
| `jointSet` | `RAPIER.ImpulseJointSet` | The joint set for physics simulation |
| `pluginUtils` | `Object` | Utility functions (UpdateWorldStep, MoveCharacter) |

## Basic Physics Object Creation

### Creating Dynamic Bodies

```javascript
// Access the Rapier context
const { rapier, world, objects } = window.MakeIt3DContext.rapierContext;

// Create a dynamic rigid body
const bodyDesc = rapier.RigidBodyDesc.dynamic()
    .setTranslation(0.0, 5.0, 0.0)
    .setLinvel(0.0, 0.0, 0.0);

const body = world.createRigidBody(bodyDesc);

// Create a box collider
const colliderDesc = rapier.ColliderDesc.cuboid(0.5, 0.5, 0.5)
    .setDensity(1.0)
    .setFriction(0.5)
    .setRestitution(0.3);

const collider = world.createCollider(colliderDesc, body);

// Store the object pair in the objects map
const objectId = "dynamicBox_" + Date.now();
objects.set(objectId, {
    rigidBody: body,
    collider: collider,
    mesh: null, // Will be populated if you have a corresponding 3D mesh
    type: "dynamic",
    tag: "box"
});

console.log("Created dynamic box with ID:", objectId);
```

### Creating Static Bodies (Ground, Walls)

```javascript
const { rapier, world, objects } = window.MakeIt3DContext.rapierContext;

// Create static ground
const groundBodyDesc = rapier.RigidBodyDesc.fixed()
    .setTranslation(0.0, -1.0, 0.0);

const groundBody = world.createRigidBody(groundBodyDesc);

const groundColliderDesc = rapier.ColliderDesc.cuboid(10.0, 0.1, 10.0)
    .setFriction(0.7);

const groundCollider = world.createCollider(groundColliderDesc, groundBody);

// Store in objects map
objects.set("ground", {
    rigidBody: groundBody,
    collider: groundCollider,
    mesh: null,
    type: "static",
    tag: "ground"
});
```

### Creating Kinematic Bodies

```javascript
const { rapier, world, objects } = window.MakeIt3DContext.rapierContext;

// Create kinematic body (can be moved but not affected by forces)
const kinematicBodyDesc = rapier.RigidBodyDesc.kinematicVelocityBased()
    .setTranslation(2.0, 0.0, 0.0);

const kinematicBody = world.createRigidBody(kinematicBodyDesc);

const kinematicColliderDesc = rapier.ColliderDesc.ball(0.5);
const kinematicCollider = world.createCollider(kinematicColliderDesc, kinematicBody);

// Store in objects map
objects.set("movingPlatform", {
    rigidBody: kinematicBody,
    collider: kinematicCollider,
    mesh: null,
    type: "kinematic",
    tag: "platform"
});

// Move kinematic body
kinematicBody.setLinvel({ x: 1.0, y: 0.0, z: 0.0 });
```

## Working with Forces and Impulses

### Applying Forces

```javascript
// Get an object from registry
const objectData = objects.get("dynamicBox_123");

if (objectData && objectData.rigidBody) {
    const body = objectData.rigidBody;
    
    // Apply force at center of mass
    body.addForce({ x: 0.0, y: 100.0, z: 0.0 }, true);
    
    // Apply force at specific point
    const forcePoint = { x: 0.0, y: 0.0, z: 0.0 };
    const force = { x: 50.0, y: 0.0, z: 0.0 };
    body.addForceAtPoint(force, forcePoint, true);
    
    // Apply impulse (instant velocity change)
    body.applyImpulse({ x: 0.0, y: 10.0, z: 0.0 }, true);
    
    // Apply torque impulse (rotation)
    body.applyTorqueImpulse({ x: 0.0, y: 5.0, z: 0.0 }, true);
}
```

### Setting Velocities

```javascript
const objectData = objects.get("player");

if (objectData && objectData.rigidBody) {
    const body = objectData.rigidBody;
    
    // Set linear velocity
    body.setLinvel({ x: 5.0, y: 0.0, z: 0.0 });
    
    // Set angular velocity
    body.setAngvel({ x: 0.0, y: 2.0, z: 0.0 });
    
    // Get current velocities
    const linvel = body.linvel();
    const angvel = body.angvel();
    
    console.log("Linear velocity:", linvel);
    console.log("Angular velocity:", angvel);
}
```

## Raycasting and Spatial Queries

### Basic Raycasting

```javascript
const { world } = window.MakeIt3DContext.rapierContext;

// Define ray
const rayOrigin = { x: 0.0, y: 5.0, z: 0.0 };
const rayDirection = { x: 0.0, y: -1.0, z: 0.0 };
const maxDistance = 10.0;
const solid = true;

// Cast ray and get first hit
const hit = world.castRay(
    rayOrigin,
    rayDirection,
    maxDistance,
    solid
);

if (hit) {
    console.log("Ray hit at distance:", hit.toi);
    console.log("Hit point:", {
        x: rayOrigin.x + rayDirection.x * hit.toi,
        y: rayOrigin.y + rayDirection.y * hit.toi,
        z: rayOrigin.z + rayDirection.z * hit.toi
    });
    console.log("Hit normal:", hit.normal);
}
```

### Advanced Raycasting with Filters

```javascript
const { world } = window.MakeIt3DContext.rapierContext;

// Cast ray and get all intersections
const hits = [];
world.intersectionsWithRay(
    rayOrigin,
    rayDirection,
    maxDistance,
    solid,
    (hit) => {
        hits.push(hit);
        return true; // Continue searching for more hits
    }
);

console.log("Found", hits.length, "intersections");
hits.forEach((hit, index) => {
    console.log(`Hit ${index}:`, hit);
});
```

### Shape Casting

```javascript
const { rapier, world } = window.MakeIt3DContext.rapierContext;

// Create a shape to cast (sphere in this case)
const shape = new rapier.Ball(0.5);
const shapePos = { x: 0.0, y: 5.0, z: 0.0 };
const shapeRot = { w: 1.0, x: 0.0, y: 0.0, z: 0.0 };
const shapeVel = { x: 0.0, y: -1.0, z: 0.0 };

// Cast shape
const hit = world.castShape(
    shapePos,
    shapeRot,
    shapeVel,
    shape,
    maxDistance,
    solid
);

if (hit) {
    console.log("Shape hit at time:", hit.toi);
}
```

## Collision Detection and Events

### Setting Up Collision Events

```javascript
const { world, eventQueue, objects } = window.MakeIt3DContext.rapierContext;

// Process collision events each frame
function processCollisionEvents() {
    eventQueue.drainCollisionEvents((handle1, handle2, started) => {
        // Get colliders involved in collision
        const collider1 = world.getCollider(handle1);
        const collider2 = world.getCollider(handle2);
        
        if (started) {
            console.log("Collision started between:", handle1, "and", handle2);
            
            // Find object IDs from our registry
            let objectId1 = null, objectId2 = null;
            
            for (const [id, objectData] of objects.entries()) {
                if (objectData.collider && objectData.collider.handle === handle1) objectId1 = id;
                if (objectData.collider && objectData.collider.handle === handle2) objectId2 = id;
            }
            
            console.log("Objects involved:", objectId1, objectId2);
        } else {
            console.log("Collision ended between:", handle1, "and", handle2);
        }
    });
}

// Call this in your tick function
function onTick(runtime) {
    processCollisionEvents();
}
```

### Custom Collision Response

```javascript
function handleCollision(objectId1, objectId2) {
    const objectData1 = objects.get(objectId1);
    const objectData2 = objects.get(objectId2);
    
    if (objectData1 && objectData2) {
        const body1 = objectData1.rigidBody;
        const body2 = objectData2.rigidBody;
        
        // Example: Explosion effect on collision
        if (objectData1.tag === "explosive" || objectData2.tag === "explosive") {
            const explosionForce = 1000.0;
            const pos1 = body1.translation();
            const pos2 = body2.translation();
            
            // Calculate direction from explosion center
            const direction = {
                x: pos2.x - pos1.x,
                y: pos2.y - pos1.y,
                z: pos2.z - pos1.z
            };
            
            // Normalize and apply force
            const distance = Math.sqrt(direction.x * direction.x + direction.y * direction.y + direction.z * direction.z);
            if (distance > 0) {
                const force = {
                    x: (direction.x / distance) * explosionForce,
                    y: (direction.y / distance) * explosionForce,
                    z: (direction.z / distance) * explosionForce
                };
                
                body2.applyImpulse(force, true);
            }
        }
    }
}

// Usage
const playerController = new AdvancedCharacterController("player");

// In your tick function
function onTick(runtime) {
    const deltaTime = runtime.dt;
    playerController.update(deltaTime);
    
    // Handle input
    if (runtime.keyboard.isKeyDown("ArrowRight")) {
        playerController.move({ x: 1, y: 0, z: 0 });
    }
    if (runtime.keyboard.isKeyDown("Space")) {
        playerController.jump();
    }
}
```

## Character Controller

### Basic Character Movement

```javascript
const { world, characterControllers, pluginUtils } = window.MakeIt3DContext.rapierContext;

// Use the plugin's built-in character movement function
function moveCharacter(controllerId, inputX, inputZ, speed) {
    // This uses the plugin's utility function
    pluginUtils.MoveCharacter(controllerId, inputX, inputZ, speed);
}

// Alternative: Manual character controller usage
function manualMoveCharacter(controllerId, movement) {
    const controller = characterControllers.get(controllerId);
    const objectData = objects.get(controllerId);
    
    if (controller && objectData && objectData.collider) {
        controller.computeColliderMovement(
            objectData.collider,
            movement
        );
        
        const correctedMovement = controller.computedMovement();
        const currentPos = objectData.collider.translation();
        
        // Apply movement to the collider's parent body
        const body = objectData.rigidBody;
        if (body) {
            body.setTranslation({
                x: currentPos.x + correctedMovement.x,
                y: currentPos.y + correctedMovement.y,
                z: currentPos.z + correctedMovement.z
            }, true);
        }
        
        // Check if character is grounded
        const isGrounded = controller.computedGrounded();
        console.log("Character grounded:", isGrounded);
    }
}

// Usage examples
moveCharacter("player", 1.0, 0.0, 5.0); // Move right at speed 5
const movement = { x: 0.1, y: 0.0, z: 0.0 }; // Move right manually
manualMoveCharacter("player", movement);
```

### Advanced Character Controller

```javascript
class AdvancedCharacterController {
    constructor(collider) {
        this.collider = collider;
        this.body = collider.parent();
        this.controller = window.MakeIt3DContext.rapierContext.characterController;
        
        // Movement properties
        this.speed = 5.0;
        this.jumpForce = 10.0;
        this.isGrounded = false;
    }
    
    update(deltaTime) {
        const currentPos = this.collider.translation();
        let movement = { x: 0, y: 0, z: 0 };
        
        // Apply gravity if not grounded
        if (!this.isGrounded) {
            movement.y = -9.81 * deltaTime;
        }
        
        // Compute collision-aware movement
        this.controller.computeColliderMovement(this.collider, movement);
        const correctedMovement = this.controller.computedMovement();
        
        // Update position
        this.body.setTranslation({
            x: currentPos.x + correctedMovement.x,
            y: currentPos.y + correctedMovement.y,
            z: currentPos.z + correctedMovement.z
        }, true);
        
        // Update grounded state
        this.isGrounded = this.controller.computedGrounded();
    }
    
    move(direction) {
        const currentVel = this.body.linvel();
        this.body.setLinvel({
            x: direction.x * this.speed,
            y: currentVel.y,
            z: direction.z * this.speed
        });
    }
    
    jump() {
        if (this.isGrounded) {
            this.body.applyImpulse({ x: 0, y: this.jumpForce, z: 0 }, true);
        }
    }
}

// Usage
const playerCollider = colliders.get("player");
const playerController = new AdvancedCharacterController(playerCollider);

// In your tick function
function onTick(runtime) {
    const deltaTime = runtime.dt;
    playerController.update(deltaTime);
    
    // Handle input
    if (runtime.keyboard.isKeyDown("ArrowRight")) {
        playerController.move({ x: 1, y: 0, z: 0 });
    }
    if (runtime.keyboard.isKeyDown("Space")) {
        playerController.jump();
    }
}
```

## Joints and Constraints

### Fixed Joint

```javascript
const { rapier, world, objects, joints } = window.MakeIt3DContext.rapierContext;

const objectData1 = objects.get("object1");
const objectData2 = objects.get("object2");

if (objectData1 && objectData2) {
    const body1 = objectData1.rigidBody;
    const body2 = objectData2.rigidBody;
    
    const jointDesc = rapier.JointDesc.fixed(
        { x: 0.0, y: 0.0, z: 0.0 }, // anchor point on body1
        { w: 1.0, x: 0.0, y: 0.0, z: 0.0 }, // rotation on body1
        { x: 1.0, y: 0.0, z: 0.0 }, // anchor point on body2
        { w: 1.0, x: 0.0, y: 0.0, z: 0.0 }  // rotation on body2
    );
    
    const joint = world.createImpulseJoint(jointDesc, body1, body2, true);
    joints.set("fixedJoint1", joint);
}
```

### Revolute Joint (Hinge)

```javascript
const { rapier, world, objects, joints } = window.MakeIt3DContext.rapierContext;

const doorData = objects.get("door");
const frameData = objects.get("doorFrame");

if (doorData && frameData) {
    const body1 = doorData.rigidBody;
    const body2 = frameData.rigidBody;
    
    const jointDesc = rapier.JointDesc.revolute(
        { x: 0.0, y: 0.0, z: 0.0 }, // anchor on body1
        { x: -0.5, y: 0.0, z: 0.0 }, // anchor on body2
        { x: 0.0, y: 1.0, z: 0.0 }   // rotation axis
    );
    
    // Set joint limits
    jointDesc.setLimits(-1.57, 1.57); // -90 to +90 degrees
    
    const joint = world.createImpulseJoint(jointDesc, body1, body2, true);
    joints.set("doorHinge", joint);
}
```

### Prismatic Joint (Slider)

```javascript
const { rapier, world, objects, joints } = window.MakeIt3DContext.rapierContext;

const pistonData = objects.get("piston");
const cylinderData = objects.get("cylinder");

if (pistonData && cylinderData) {
    const body1 = pistonData.rigidBody;
    const body2 = cylinderData.rigidBody;
    
    const jointDesc = rapier.JointDesc.prismatic(
        { x: 0.0, y: 0.0, z: 0.0 }, // anchor on body1
        { x: 0.0, y: 0.0, z: 0.0 }, // anchor on body2
        { x: 0.0, y: 1.0, z: 0.0 }   // slide axis
    );
    
    // Set slide limits
    jointDesc.setLimits(0.0, 2.0); // Can slide 2 units up
    
    const joint = world.createImpulseJoint(jointDesc, body1, body2, true);
    joints.set("pistonSlider", joint);
}
```

## Best Practices

### ✅ Object Registration
Always register physics objects for easy management:
```javascript
objects.set("uniqueId", {
    rigidBody: body,
    collider: collider,
    mesh: threeMesh, // if you have a corresponding 3D mesh
    type: "dynamic", // or "static", "kinematic"
    tag: "player"    // custom tag for identification
});
```

### ✅ Use Descriptive IDs
Use unique, descriptive IDs for easy management:
```javascript
objects.set("player_character", {
    rigidBody: playerBody,
    collider: playerCollider,
    type: "dynamic",
    tag: "player"
});

objects.set("enemy_01", {
    rigidBody: enemyBody,
    collider: enemyCollider,
    type: "dynamic",
    tag: "enemy"
});
```

### ✅ Memory Management
Clean up physics objects when removing them:
```javascript
const objectData = objects.get("objectId");
if (objectData) {
    // Remove from world first
    if (objectData.rigidBody) {
        world.removeRigidBody(objectData.rigidBody);
    }
    if (objectData.collider) {
        world.removeCollider(objectData.collider);
    }
    
    // Remove from registry
    objects.delete("objectId");
}
```

### ✅ Efficient Collision Handling
Process collision events efficiently:
```javascript
function processCollisions() {
    eventQueue.drainCollisionEvents((handle1, handle2, started) => {
        // Only process collision starts to avoid duplicates
        if (started) {
            handleCollision(handle1, handle2);
        }
    });
}
```

## Important Notes

### ⚠️ Context Availability
The Rapier context is only available after physics initialization. Always check:
```javascript
if (window.MakeIt3DContext && window.MakeIt3DContext.rapierContext) {
    const { world, objects } = window.MakeIt3DContext.rapierContext;
    // Your code here
}
```

### ⚠️ World Stepping
The physics world step is handled automatically by the plugin using `pluginUtils.UpdateWorldStep()`. Avoid calling `world.step()` manually unless you need custom timing.

### ⚠️ Coordinate System
Rapier uses a right-handed coordinate system where:
- X: Right
- Y: Up  
- Z: Forward (towards viewer)

### ⚠️ Units and Scale
Rapier works best with objects sized around 0.1 to 10 units. Avoid very large or very small objects for stability.

## Advanced Examples

### Custom Physics Material

```javascript
const { rapier, world } = window.MakeIt3DContext.rapierContext;

// Create collider with custom physics properties
const colliderDesc = rapier.ColliderDesc.cuboid(1.0, 1.0, 1.0)
    .setDensity(2.0)          // Heavy object
    .setFriction(0.9)         // High friction
    .setRestitution(0.8)      // Bouncy
    .setFrictionCombineRule(rapier.CoefficientCombineRule.Max)
    .setRestitutionCombineRule(rapier.CoefficientCombineRule.Max);

const collider = world.createCollider(colliderDesc, body);
```

### Sensor/Trigger Areas

```javascript
const { rapier, world, objects } = window.MakeIt3DContext.rapierContext;

// Create a sensor that detects but doesn't collide
const sensorDesc = rapier.ColliderDesc.cuboid(2.0, 2.0, 2.0)
    .setSensor(true); // This makes it a sensor

const sensor = world.createCollider(sensorDesc, sensorBody);

// Register the sensor
objects.set("triggerZone", {
    rigidBody: sensorBody,
    collider: sensor,
    type: "sensor",
    tag: "trigger"
});

// Handle sensor events
eventQueue.drainCollisionEvents((handle1, handle2, started) => {
    const collider1 = world.getCollider(handle1);
    const collider2 = world.getCollider(handle2);
    
    if (collider1.isSensor() || collider2.isSensor()) {
        if (started) {
            console.log("Object entered sensor zone");
        } else {
            console.log("Object left sensor zone");
        }
    }
});
```

### Physics-Based Vehicles

```javascript
class SimpleVehicle {
    constructor(chassisBody, wheelPositions) {
        this.chassis = chassisBody;
        this.wheels = [];
        
        // Create wheels and attach them
        wheelPositions.forEach((pos, index) => {
            const wheelBody = this.createWheel(pos);
            const joint = this.attachWheel(wheelBody, pos);
            
            this.wheels.push({ body: wheelBody, joint: joint });
        });
    }
    
    createWheel(position) {
        const wheelBodyDesc = RAPIER.RigidBodyDesc.dynamic()
            .setTranslation(position.x, position.y, position.z);
        const wheelBody = world.createRigidBody(wheelBodyDesc);
        
        const wheelColliderDesc = RAPIER.ColliderDesc.ball(0.3)
            .setFriction(0.8);
        world.createCollider(wheelColliderDesc, wheelBody);
        
        return wheelBody;
    }
    
    attachWheel(wheelBody, position) {
        const jointDesc = RAPIER.JointDesc.revolute(
            position, // anchor on chassis
            { x: 0.0, y: 0.0, z: 0.0 }, // anchor on wheel
            { x: 0.0, y: 0.0, z: 1.0 }   // rotation axis
        );
        
        return world.createImpulseJoint(jointDesc, this.chassis, wheelBody, true);
    }
    
    applyMotorTorque(torque) {
        this.wheels.forEach(wheel => {
            wheel.body.applyTorqueImpulse({ x: 0.0, y: 0.0, z: torque }, true);
        });
    }
}
```
