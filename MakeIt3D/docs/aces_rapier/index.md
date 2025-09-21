---
sidebar_position: 4
---

# Rapier API Reference

**Rapier** provides a wide range of **Actions, Conditions, and Expressions (ACE)** 
that you can use in Construct 3 Event Sheets to create and control physics.

:::danger **Important Technical Note** 
MakeIt3D uses a separate Three.js rendering system that overlays on Construct 3's canvas. 3D objects do not integrate with Construct's layout system, sprite behaviors, or collision detection. This is a standalone 3D rendering solution controlled through events, not an extension of Construct's 2D object system.
:::

import MyCard from '@site/src/components/ui/MyCard';

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  padding: '2rem 0',
  marginTop: '2rem'
}}>
  <MyCard title="Actions" variant="actions" subtitle="Available Methods" href="/docs/aces_rapier/actions">
    42
  </MyCard>

  <MyCard title="Conditions" variant="conditions" subtitle="Logic Checks" href="/docs/aces_rapier/conditions">
    13
  </MyCard>

  <MyCard title="Expressions" variant="expressions" subtitle="Data Getters" href="/docs/aces_rapier/expressions">
    21
  </MyCard>

  <MyCard title="Plugin Properties" variant="properties" subtitle="Properties" href="/docs/aces_rapier/properties">
    1
  </MyCard>

  <MyCard title="Scripting API" variant="dependency" subtitle="scripting interface" href="/docs/aces_rapier/scripting">
    1
  </MyCard>


</div>

## What's New ✨

The API includes powerful features for:
- **3D Object Creation** - Spawn and manipulate 3D objects dynamically
- **Scene Management** - Control lighting, cameras, and environments  
- **Physics Integration** - Add realistic physics to your 3D scenes
- **Material Systems** - Apply textures, shaders, and visual effects