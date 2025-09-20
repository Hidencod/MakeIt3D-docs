---
sidebar_position: 4
---

# ⚡Actions

This section lists all available **Actions** in MakeIt3D. Use these in Construct 3 Event Sheets to create and control 3D elements.

import ActionCard from '@site/src/components/ui/ActionCard';

## World
<div className="actionsGrid">
  <ActionCard
    action={{
      name: "Initialize Rapier Physics",
      category: "world",
      description: "Initialize the Rapier physics engine to enable physics simulation in your 3D scene.",
      parameters: [],
      example: "MakeIt3D.InitRapierPhysics()"
    }}
  />

  <ActionCard
    action={{
      name: "Update Physics Step",
      category: "world",
      description: "Update the physics engine simulation to keep everything synchronized with the frame rate.",
      parameters: [
        { name: "deltaTime", description: "Time elapsed since last frame update." }
      ],
      example: "MakeIt3D.UpdatePhysicsStep(dt)"
    }}
  />
<ActionCard
    action={{
      name: "Change Gravity",
      category: "world",
      description: "Modify the physics world's gravity settings and optionally wake sleeping objects to apply changes immediately.",
      parameters: [
        { name: "x", description: "Gravity force along X axis." },
        { name: "y", description: "Gravity force along Y axis." },
        { name: "z", description: "Gravity force along Z axis." },
        { name: "wakeSleeping", description: "Whether to wake sleeping bodies (true/false)." }
      ],
      example: "MakeIt3D.ChangeGravity(0, -9.81, 0, true)"
    }}
  />

  <ActionCard
    action={{
      name: "Set Object Gravity Scale",
      category: "world",
      description: "Set a multiplier for how much gravity affects a specific rigidbody object.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to modify gravity for." },
        { name: "gravityScale", description: "Gravity multiplier (1.0 = normal, 0 = no gravity, 2.0 = double gravity)." }
      ],
      example: "MakeIt3D.SetGravityScale('feather1', 0.1)"
    }}
  />

</div>

  ## Transformations
  <div className="actionsGrid">
  <ActionCard
    action={{
      name: "Set Object Position",
      category: "transforms",
      description: "Directly set the position of a rigidbody. Best used with kinematic objects to avoid unrealistic teleporting.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody object to move." },
        { name: "x", description: "X coordinate of the new position." },
        { name: "y", description: "Y coordinate of the new position." },
        { name: "z", description: "Z coordinate of the new position." }
      ],
      example: "MakeIt3D.SetPosition('player1', 10, 5, -3)"
    }}
  />

  <ActionCard
    action={{
      name: "Set Object Rotation",
      category: "transforms",
      description: "Directly set the rotation of a rigidbody. Best used with kinematic objects to avoid unrealistic teleporting.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody object to rotate." },
        { name: "x", description: "X rotation in degrees." },
        { name: "y", description: "Y rotation in degrees." },
        { name: "z", description: "Z rotation in degrees." }
      ],
      example: "MakeIt3D.SetRotation('platform1', 0, 45, 0)"
    }}
  />
</div>
  ## Raycast 
<div className="actionsGrid">
  <ActionCard
    action={{
      name: "Camera to Screen Raycast",
      category: "raycast",
      description: "Cast a ray from the camera through screen coordinates to detect objects in 3D space.",
      parameters: [
        { name: "x", description: "X coordinate on screen viewport." },
        { name: "y", description: "Y coordinate on screen viewport." },
        { name: "rayLength?", description: "Maximum distance of the ray (default: 1000)." },
        { name: "getNormal?", description: "Whether to return surface normal at hit point." }
      ],
      example: "MakeIt3D.CameraToScreenRay(400, 300, 1000, true)"
    }}
  />

  <ActionCard
    action={{
      name: "Object to Directional Raycast",
      category: "raycast",
      description: "Cast a ray from an object's position in a specified local direction, updating with object movement.",
      parameters: [
        { name: "objectId", description: "ID of object to cast ray from." },
        { name: "direction", description: "Ray direction as Vector3 (e.g., Vector3(0,0,-1) for forward)." },
        { name: "rayLength?", description: "Maximum distance of the ray (default: 1000)." },
        { name: "debug?", description: "Whether to draw a debug line showing the ray." }
      ],
      example: "MakeIt3D.ObjectToDirectionalRay('player1', Vector3(0,-1,0), 2, true)"
    }}
  />

  <ActionCard
    action={{
      name: "Origin to Directional Raycast",
      category: "raycast",
      description: "Cast a ray from any world position in a specified direction for general-purpose collision detection.",
      parameters: [
        { name: "origin", description: "Starting position as Vector3." },
        { name: "direction", description: "Ray direction as Vector3." },
        { name: "rayLength?", description: "Maximum distance of the ray (default: 1000)." },
        { name: "debug?", description: "Whether to draw a debug line showing the ray." }
      ],
      example: "MakeIt3D.OriginToDirectionalRay(Vector3(0,10,0), Vector3(0,-1,0), 50, false)"
    }}
  />

 <ActionCard
    action={{
      name: "Set Ignore Raycast",
      category: "raycast",
      description: "Configure whether raycast operations should ignore specific objects and pass through them.",
      parameters: [
        { name: "objectId", description: "ID of object(s) to configure raycast behavior for." },
        { name: "ignore", description: "Whether to ignore this object in raycasts (true/false)." }
      ],
      example: "MakeIt3D.IgnoreRaycast('glass_window', true)"
    }}
  />
</div>

## Joints

  <ActionCard
    action={{
      name: "Create Fixed Joint",
      category: "joints",
      description: "Create a rigid connection between two rigidbodies that prevents all relative motion.",
      parameters: [
        { name: "objectIdA", description: "ID of the first rigidbody to connect." },
        { name: "objectIdB", description: "ID of the second rigidbody to connect." },
        { name: "jointId", description: "Unique identifier for this joint connection." }
      ],
      example: "MakeIt3D.CreateFixedJoint('car_body', 'car_wheel', 'wheel_joint_1')"
    }}
  />

  <ActionCard
    action={{
      name: "Create Revolute Joint",
      category: "joints",
      description: "Create a hinge joint that allows rotation around a specified axis between two rigidbodies.",
      parameters: [
        { name: "objectIdA", description: "ID of the first rigidbody to connect." },
        { name: "objectIdB", description: "ID of the second rigidbody to connect." },
        { name: "jointId", description: "Unique identifier for this joint connection." },
        { name: "anchorA", description: "Local anchor point on first object as Vector3." },
        { name: "anchorB", description: "Local anchor point on second object as Vector3." },
        { name: "axis", description: "Rotation axis as normalized Vector3." }
      ],
      example: "MakeIt3D.CreateRevoluteJoint('door', 'frame', 'door_hinge', Vector3(0,0,0), Vector3(0,0,0), Vector3(0,1,0))"
    }}
  />

  <ActionCard
    action={{
      name: "Create Spherical Joint",
      category: "joints",
      description: "Create a ball joint that allows rotation in all directions between two rigidbodies.",
      parameters: [
        { name: "objectIdA", description: "ID of the first rigidbody to connect." },
        { name: "objectIdB", description: "ID of the second rigidbody to connect." },
        { name: "jointId", description: "Unique identifier for this joint connection." },
        { name: "anchorA", description: "Local anchor point on first object as Vector3." },
        { name: "anchorB", description: "Local anchor point on second object as Vector3." }
      ],
      example: "MakeIt3D.CreateSphericalJoint('shoulder', 'arm', 'shoulder_joint', Vector3(0,0,0), Vector3(0,0,0))"
    }}
  />

  <ActionCard
    action={{
      name: "Create Prismatic Joint",
      category: "joints",
      description: "Create a sliding joint that allows linear movement along a specified axis with optional distance limits.",
      parameters: [
        { name: "objectIdA", description: "ID of the first rigidbody to connect." },
        { name: "objectIdB", description: "ID of the second rigidbody to connect." },
        { name: "jointId", description: "Unique identifier for this joint connection." },
        { name: "anchorA", description: "Local anchor point on first object as Vector3." },
        { name: "anchorB", description: "Local anchor point on second object as Vector3." },
        { name: "axis", description: "Sliding axis as Vector3." },
        { name: "minLimit", description: "Minimum sliding distance (can be negative)." },
        { name: "maxLimit", description: "Maximum sliding distance." }
      ],
      example: "MakeIt3D.CreatePrismaticJoint('piston', 'cylinder', 'piston_joint', Vector3(0,0,0), Vector3(0,0,0), Vector3(0,1,0), -2, 2)"
    }}
  />

  <ActionCard
    action={{
      name: "Remove Joint",
      category: "joints",
      description: "Remove an existing joint connection from the physics world using its unique identifier.",
      parameters: [
        { name: "jointId", description: "Unique identifier of the joint to remove." }
      ],
      example: "MakeIt3D.RemoveJoint('door_hinge')"
    }}
  />

  <ActionCard
    action={{
      name: "Set Joint Motor Position",
      category: "joints",
      description: "Drive a joint towards a specific target position using a spring-damper system.",
      parameters: [
        { name: "jointId", description: "Unique identifier of the joint to control." },
        { name: "targetPosition", description: "Target position/angle for the joint." },
        { name: "stiffness", description: "Spring strength of the motor control." },
        { name: "damping", description: "Oscillation resistance of the motor." }
      ],
      example: "MakeIt3D.SetJointMotorPosition('servo_joint', 1.57, 1000, 50)"
    }}
  />

  <ActionCard
    action={{
      name: "Set Joint Motor Velocity",
      category: "joints",
      description: "Drive a joint at a constant target velocity, ignoring position control.",
      parameters: [
        { name: "jointId", description: "Unique identifier of the joint to control." },
        { name: "targetVelocity", description: "Desired velocity for the joint movement." },
        { name: "damping", description: "Oscillation resistance of the motor." }
      ],
      example: "MakeIt3D.SetJointMotorVelocity('wheel_motor', 10, 20)"
    }}
  />

  <ActionCard
    action={{
      name: "Set Joint Motor Advanced",
      category: "joints",
      description: "Advanced motor control combining both position and velocity using spring-like behavior.",
      parameters: [
        { name: "jointId", description: "Unique identifier of the joint to control." },
        { name: "targetPosition", description: "Target position for the joint." },
        { name: "targetVelocity", description: "Target velocity for the joint." },
        { name: "stiffness", description: "Spring strength coefficient." },
        { name: "damping", description: "Damping coefficient for stability." }
      ],
      example: "MakeIt3D.SetJointMotor('advanced_servo', 0.5, 2.0, 800, 40)"
    }}
  />

  <ActionCard
    action={{
      name: "Set Joint Motor Model",
      category: "joints",
      description: "Configure the underlying motor control algorithm for a joint (force-based or acceleration-based).",
      parameters: [
        { name: "jointId", description: "Unique identifier of the joint to configure." },
        { name: "model", description: "Motor model type: 'force' or 'acceleration'." }
      ],
      example: "MakeIt3D.SetJointMotorModel('precise_joint', 'acceleration')"
    }}
  />

  <ActionCard
    action={{
      name: "Set Joint Motor Max Impulse",
      category: "joints",
      description: "Limit the maximum force or torque that a joint motor can apply for safety or realism.",
      parameters: [
        { name: "jointId", description: "Unique identifier of the joint to limit." },
        { name: "maxImpulse", description: "Maximum impulse (force/torque) the motor can apply." }
      ],
      example: "MakeIt3D.SetJointMotorMaxImpulse('safety_joint', 500)"
    }}
  />

  ## Objects (Rigidbody)
  <ActionCard
    action={{
      name: "Add Plane RigidBody",
      category: "objects",
      description: "Add an infinite plane rigidbody to the scene with physics properties and visual appearance.",
      parameters: [
        { name: "objectId", description: "Unique identifier for the plane object." },
        { name: "type", description: "Rigidbody type: static, dynamic, or kinematic." },
        { name: "density?", description: "Mass per unit volume of the object." },
        { name: "linearDamping?", description: "Air resistance affecting linear velocity." },
        { name: "angularDamping?", description: "Rotational friction affecting spin." },
        { name: "friction?", description: "Surface friction to prevent sliding." },
        { name: "restitution?", description: "Bounciness (0 = no bounce, 1 = perfect bounce)." },
        { name: "position?", description: "World position using Vector3(x,y,z)." },
        { name: "rotation?", description: "World rotation using Vector3(x,y,z)." },
        { name: "color?", description: "RGB color using rgbEx(r,g,b)." },
        { name: "scale?", description: "Object scale using Vector3(x,y,z)." },
        { name: "tag?", description: "Tag for later identification." }
      ],
      example: "MakeIt3D.AddPlane('ground', 'static', 1.0, 0.1, 0.1, 0.8, 0.0, Vector3(0,-5,0), Vector3(0,0,0), rgbEx(100,100,100), Vector3(1,1,1), 'floor')"
    }}
  />

  <ActionCard
    action={{
      name: "Add Cube RigidBody",
      category: "objects",
      description: "Add a cube-shaped rigidbody to the scene with full physics simulation capabilities.",
      parameters: [
        { name: "objectId", description: "Unique identifier for the cube object." },
        { name: "type", description: "Rigidbody type: static, dynamic, kinematic-position, or kinematic-velocity." },
        { name: "density?", description: "Mass per unit volume of the object." },
        { name: "linearDamping?", description: "Air resistance affecting linear velocity." },
        { name: "angularDamping?", description: "Rotational friction affecting spin." },
        { name: "friction?", description: "Surface friction to prevent sliding." },
        { name: "restitution?", description: "Bounciness (0 = no bounce, 1 = perfect bounce)." },
        { name: "position?", description: "World position using Vector3(x,y,z)." },
        { name: "rotation?", description: "World rotation using Vector3(x,y,z)." },
        { name: "color?", description: "RGB color using rgbEx(r,g,b)." },
        { name: "scale?", description: "Object scale using Vector3(x,y,z)." },
        { name: "tag?", description: "Tag for later identification." }
      ],
      example: "MakeIt3D.AddCube('box1', 'dynamic', 1.0, 0.1, 0.1, 0.7, 0.3, Vector3(0,10,0), Vector3(0,0,0), rgbEx(255,0,0), Vector3(1,1,1), 'redbox')"
    }}
  />

  <ActionCard
    action={{
      name: "Add Sphere RigidBody",
      category: "objects",
      description: "Add a spherical rigidbody to the scene with realistic physics behavior.",
      parameters: [
        { name: "objectId", description: "Unique identifier for the sphere object." },
        { name: "type", description: "Rigidbody type: static, dynamic, kinematic-position, or kinematic-velocity." },
        { name: "density?", description: "Mass per unit volume of the object." },
        { name: "linearDamping?", description: "Air resistance affecting linear velocity." },
        { name: "angularDamping?", description: "Rotational friction affecting spin." },
        { name: "friction?", description: "Surface friction to prevent sliding." },
        { name: "restitution?", description: "Bounciness (0 = no bounce, 1 = perfect bounce)." },
        { name: "position?", description: "World position using Vector3(x,y,z)." },
        { name: "rotation?", description: "World rotation using Vector3(x,y,z)." },
        { name: "color?", description: "RGB color using rgbEx(r,g,b)." },
        { name: "scale?", description: "Object scale using Vector3(x,y,z)." },
        { name: "tag?", description: "Tag for later identification." }
      ],
      example: "MakeIt3D.AddSphere('ball1', 'dynamic', 1.0, 0.05, 0.05, 0.6, 0.8, Vector3(0,15,0), Vector3(0,0,0), rgbEx(0,255,0), Vector3(1,1,1), 'greenball')"
    }}
  />

  <ActionCard
    action={{
      name: "Add Cylinder RigidBody",
      category: "objects",
      description: "Add a cylindrical rigidbody to the scene for creating pillars, barrels, or rolling objects.",
      parameters: [
        { name: "objectId", description: "Unique identifier for the cylinder object." },
        { name: "type", description: "Rigidbody type: static, dynamic, kinematic-position, or kinematic-velocity." },
        { name: "density?", description: "Mass per unit volume of the object." },
        { name: "linearDamping?", description: "Air resistance affecting linear velocity." },
        { name: "angularDamping?", description: "Rotational friction affecting spin." },
        { name: "friction?", description: "Surface friction to prevent sliding." },
        { name: "restitution?", description: "Bounciness (0 = no bounce, 1 = perfect bounce)." },
        { name: "position?", description: "World position using Vector3(x,y,z)." },
        { name: "rotation?", description: "World rotation using Vector3(x,y,z)." },
        { name: "color?", description: "RGB color using rgbEx(r,g,b)." },
        { name: "scale?", description: "Object scale using Vector3(x,y,z)." },
        { name: "tag?", description: "Tag for later identification." }
      ],
      example: "MakeIt3D.AddCylinder('barrel1', 'dynamic', 1.2, 0.1, 0.1, 0.8, 0.2, Vector3(5,8,0), Vector3(0,0,0), rgbEx(139,69,19), Vector3(1,2,1), 'barrel')"
    }}
  />

  <ActionCard
    action={{
      name: "Add Cone RigidBody",
      category: "objects",
      description: "Add a cone-shaped rigidbody to the scene for creating pointed objects or markers.",
      parameters: [
        { name: "objectId", description: "Unique identifier for the cone object." },
        { name: "type", description: "Rigidbody type: static, dynamic, kinematic-position, or kinematic-velocity." },
        { name: "density?", description: "Mass per unit volume of the object." },
        { name: "linearDamping?", description: "Air resistance affecting linear velocity." },
        { name: "angularDamping?", description: "Rotational friction affecting spin." },
        { name: "friction?", description: "Surface friction to prevent sliding." },
        { name: "restitution?", description: "Bounciness (0 = no bounce, 1 = perfect bounce)." },
        { name: "position?", description: "World position using Vector3(x,y,z)." },
        { name: "rotation?", description: "World rotation using Vector3(x,y,z)." },
        { name: "color?", description: "RGB color using rgbEx(r,g,b)." },
        { name: "scale?", description: "Object scale using Vector3(x,y,z)." },
        { name: "tag?", description: "Tag for later identification." }
      ],
      example: "MakeIt3D.AddCone('cone1', 'dynamic', 1.0, 0.1, 0.1, 0.7, 0.3, Vector3(-5,8,0), Vector3(0,0,0), rgbEx(255,165,0), Vector3(1,1,1), 'cone')"
    }}
  />

  <ActionCard
    action={{
      name: "Add Capsule RigidBody",
      category: "objects",
      description: "Add a capsule (pill-shaped) rigidbody to the scene, ideal for character controllers or rounded objects.",
      parameters: [
        { name: "objectId", description: "Unique identifier for the capsule object." },
        { name: "type", description: "Rigidbody type: static, dynamic, kinematic-position, or kinematic-velocity." },
        { name: "density?", description: "Mass per unit volume of the object." },
        { name: "linearDamping?", description: "Air resistance affecting linear velocity." },
        { name: "angularDamping?", description: "Rotational friction affecting spin." },
        { name: "friction?", description: "Surface friction to prevent sliding." },
        { name: "restitution?", description: "Bounciness (0 = no bounce, 1 = perfect bounce)." },
        { name: "position?", description: "World position using Vector3(x,y,z)." },
        { name: "rotation?", description: "World rotation using Vector3(x,y,z)." },
        { name: "color?", description: "RGB color using rgbEx(r,g,b)." },
        { name: "scale?", description: "Object scale using Vector3(x,y,z)." },
        { name: "radius", description: "Radius of the capsule's rounded ends." },
        { name: "length", description: "Length of the capsule's cylindrical body." },
        { name: "tag?", description: "Tag for later identification." }
      ],
      example: "MakeIt3D.AddCapsule('player1', 'kinematic-position', 1.0, 0.2, 0.2, 0.5, 0.1, Vector3(0,5,0), Vector3(0,0,0), rgbEx(0,0,255), Vector3(1,1,1), 0.5, 2.0, 'player')"
    }}
  />

  <ActionCard
    action={{
      name: "Attach RigidBody to Object",
      category: "objects",
      description: "Convert an existing 3D object into a physics-enabled rigidbody with collision detection.",
      parameters: [
        { name: "objectId", description: "ID of the existing 3D object to make physical." },
        { name: "type", description: "Rigidbody type: static, dynamic, kinematic-position, or kinematic-velocity." },
        { name: "colliderType", description: "Collision shape: guess_shape, plane, cube, sphere, capsule, cylinder, cone." },
        { name: "density?", description: "Mass per unit volume of the object." },
        { name: "linearDamping?", description: "Air resistance affecting linear velocity." },
        { name: "angularDamping?", description: "Rotational friction affecting spin." },
        { name: "friction?", description: "Surface friction to prevent sliding." },
        { name: "restitution?", description: "Bounciness (0 = no bounce, 1 = perfect bounce)." },
        { name: "tag?", description: "Tag for later identification." }
      ],
      example: "MakeIt3D.AttachRigidBodyToObject('myModel', 'dynamic', 'guess_shape', 1.0, 0.1, 0.1, 0.7, 0.3, 'physicsobject')"
    }}
  />

## Forces & Tourques

  <ActionCard
    action={{
      name: "Apply Force",
      category: "forces",
      description: "Apply continuous force to a rigidbody. Force persists until reset, ideal for propulsion or wind effects.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to apply force to." },
        { name: "x", description: "Force magnitude in X direction." },
        { name: "y", description: "Force magnitude in Y direction." },
        { name: "z", description: "Force magnitude in Z direction." }
      ],
      example: "MakeIt3D.ApplyForce('rocket1', 0, 100, 0)"
    }}
  />

  <ActionCard
    action={{
      name: "Apply Force at Point",
      category: "forces",
      description: "Apply continuous force at a specific point on the rigidbody, creating both linear and rotational motion.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to apply force to." },
        { name: "x", description: "Force magnitude in X direction." },
        { name: "y", description: "Force magnitude in Y direction." },
        { name: "z", description: "Force magnitude in Z direction." },
        { name: "pointX", description: "X coordinate of force application point." },
        { name: "pointY", description: "Y coordinate of force application point." },
        { name: "pointZ", description: "Z coordinate of force application point." }
      ],
      example: "MakeIt3D.ApplyForceAtPoint('car1', 50, 0, 0, 0, -1, 2)"
    }}
  />

  <ActionCard
    action={{
      name: "Apply Impulse",
      category: "forces",
      description: "Apply an instant burst of force to a rigidbody, ideal for jumps, explosions, or one-time pushes.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to apply impulse to." },
        { name: "x", description: "Impulse magnitude in X direction." },
        { name: "y", description: "Impulse magnitude in Y direction." },
        { name: "z", description: "Impulse magnitude in Z direction." }
      ],
      example: "MakeIt3D.ApplyImpulse('ball1', 0, 500, 0)"
    }}
  />

  <ActionCard
    action={{
      name: "Apply Impulse Toward Point",
      category: "forces",
      description: "Apply an impulse that pushes the rigidbody toward or away from a specific world position.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to apply impulse to." },
        { name: "pointX", description: "X coordinate of target point." },
        { name: "pointY", description: "Y coordinate of target point." },
        { name: "pointZ", description: "Z coordinate of target point." },
        { name: "strength", description: "Strength of the impulse (negative values repel)." }
      ],
      example: "MakeIt3D.ApplyImpulseTowardPoint('asteroid1', 0, 0, 0, -200)"
    }}
  />

  <ActionCard
    action={{
      name: "Apply Impulse at Point",
      category: "forces",
      description: "Apply an instant impulse at a specific point on the rigidbody for realistic impact simulation.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to apply impulse to." },
        { name: "x", description: "Impulse magnitude in X direction." },
        { name: "y", description: "Impulse magnitude in Y direction." },
        { name: "z", description: "Impulse magnitude in Z direction." },
        { name: "pointX", description: "X coordinate of impulse application point." },
        { name: "pointY", description: "Y coordinate of impulse application point." },
        { name: "pointZ", description: "Z coordinate of impulse application point." }
      ],
      example: "MakeIt3D.ApplyImpulseAtPoint('crate1', 100, 0, 0, 0, 1, 0)"
    }}
  />

  <ActionCard
    action={{
      name: "Apply Torque",
      category: "torques",
      description: "Apply continuous rotational force to a rigidbody. Torque persists until reset, ideal for motors or spinning effects.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to apply torque to." },
        { name: "x", description: "Torque around X axis." },
        { name: "y", description: "Torque around Y axis." },
        { name: "z", description: "Torque around Z axis." }
      ],
      example: "MakeIt3D.ApplyTorque('wheel1', 0, 0, 50)"
    }}
  />

  <ActionCard
    action={{
      name: "Apply Torque at Point",
      category: "torques",
      description: "Apply continuous rotational force at a specific point on the rigidbody for complex rotational effects.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to apply torque to." },
        { name: "x", description: "Torque around X axis." },
        { name: "y", description: "Torque around Y axis." },
        { name: "z", description: "Torque around Z axis." },
        { name: "pointX", description: "X coordinate of torque application point." },
        { name: "pointY", description: "Y coordinate of torque application point." },
        { name: "pointZ", description: "Z coordinate of torque application point." }
      ],
      example: "MakeIt3D.ApplyTorqueAtPoint('propeller1', 0, 100, 0, 0, 0, 2)"
    }}
  />

  <ActionCard
    action={{
      name: "Apply Torque Impulse",
      category: "torques",
      description: "Apply an instant burst of rotational force to a rigidbody for sudden spinning motion.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to apply torque impulse to." },
        { name: "x", description: "Torque impulse around X axis." },
        { name: "y", description: "Torque impulse around Y axis." },
        { name: "z", description: "Torque impulse around Z axis." }
      ],
      example: "MakeIt3D.ApplyTorqueImpulse('dice1', 50, 100, 75)"
    }}
  />

  <ActionCard
    action={{
      name: "Reset Force",
      category: "forces",
      description: "Stop all continuous forces currently being applied to a rigidbody.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to reset forces for." }
      ],
      example: "MakeIt3D.ResetForce('rocket1')"
    }}
  />

  <ActionCard
    action={{
      name: "Reset Torque",
      category: "torques",
      description: "Stop all continuous torques currently being applied to a rigidbody.",
      parameters: [
        { name: "objectId", description: "ID of the rigidbody to reset torques for." }
      ],
      example: "MakeIt3D.ResetTorque('motor1')"
    }}
  />

## Collions & Triggers
  <ActionCard
    action={{
      name: "Enable Collision Events",
      category: "collision",
      description: "Enable physical collision detection events for an object to receive OnCollisionEnter and OnCollisionExit callbacks.",
      parameters: [
        { name: "objectId", description: "ID of the object to enable collision events for." }
      ],
      example: "MakeIt3D.EnableCollisionEvents('player1')"
    }}
  />

  <ActionCard
    action={{
      name: "Enable Trigger Events",
      category: "collision",
      description: "Enable non-physical trigger events for an object to receive OnTriggerEnter and OnTriggerExit callbacks.",
      parameters: [
        { name: "objectId", description: "ID of the object to enable trigger events for." }
      ],
      example: "MakeIt3D.EnableTriggerEvents('checkpoint1')"
    }}
  />

  <ActionCard
    action={{
      name: "Disable Collision Events",
      category: "collision",
      description: "Disable physical collision event detection for an object to stop receiving collision callbacks.",
      parameters: [
        { name: "objectId", description: "ID of the object to disable collision events for." }
      ],
      example: "MakeIt3D.DisableCollisionEvents('wall1')"
    }}
  />

  <ActionCard
    action={{
      name: "Disable Trigger Events",
      category: "collision",
      description: "Disable non-physical trigger event detection for an object to stop receiving trigger callbacks.",
      parameters: [
        { name: "objectId", description: "ID of the object to disable trigger events for." }
      ],
      example: "MakeIt3D.DisableTriggerEvents('powerup1')"
    }}
  />

  <ActionCard
    action={{
      name: "Enable Contact Force Events",
      category: "collision",
      description: "Enable contact force event detection to receive detailed collision force information when impacts exceed the threshold.",
      parameters: [
        { name: "objectId", description: "ID of the object to enable contact force events for." },
        { name: "threshold", description: "Minimum force magnitude to trigger events (in Newtons)." }
      ],
      example: "MakeIt3D.EnableContactForceEvents('car1', 500)"
    }}
  />

  


 


## Continue with other sections...

You can organize the rest of your actions (Lights, Materials, Animation, Utils) in the same professional card format!