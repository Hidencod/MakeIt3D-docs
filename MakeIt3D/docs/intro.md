---
sidebar_position: 1
---

# Getting Started with MakeIt3D

import HeroBanner from '@site/src/components/ui/HeroBanner';
import NextSteps from '@site/src/components/ui/NextSteps';

<HeroBanner 
    title="Transform Your Construct 3 Projects with Real 3D Power"
    subtitle="MakeIt3D seamlessly integrates Three.js into Construct 3, enabling you to create stunning 3D experiences without leaving your favorite game development environment."
/>

## What is MakeIt3D?

MakeIt3D is a powerful Construct 3 plugin that bridges the gap between 2D game development and 3D graphics. Built on top of the industry-standard Three.js library, it provides an intuitive interface for adding 3D objects, lighting, cameras, and animations directly within Construct 3's visual editor.

### Key Features

- **🎯 Easy Integration** - Add 3D elements to your existing 2D projects
- **🛠️ Visual Editor** - Configure 3D scenes using Construct 3's familiar interface  
- **⚡ High Performance** - Powered by Three.js WebGL renderer
- **📱 Cross-Platform** - Works across all Construct 3 supported platforms
- **🎨 Rich Materials** - Support for textures, lighting, and advanced materials
- **🔄 Animation Ready** - Built-in support for 3D animations and transitions

---

## System Requirements

Before getting started, ensure your development environment meets these requirements:

| Requirement | Specification |
|-------------|---------------|
| **Construct 3** | Latest stable release (recommended) |
| **Browser** | Chrome 70+, Firefox 65+, Safari 12+, Edge 79+ |
| **WebGL** | WebGL 2.0 support required |
| **Hardware** | Dedicated graphics card recommended for complex scenes |

:::tip Performance Tip
For optimal performance, use Chrome or Edge browsers when developing with MakeIt3D.
:::

---

## Installation Guide

### Option 1: Construct 3 Marketplace (Recommended)

1. **Purchase & Download**
   - Visit the [Construct 3 Marketplace](https://www.construct.net/en/make-games/addons)
   - Search for "MakeIt3D" and complete your purchase
   - Download the `MakeIt3D.c3addon` file

2. **Install the Plugin**
   ```
   Construct 3 → Menu → View → Addons Manager → Install New Addon
   ```
   - Browse and select your downloaded `.c3addon` file
   - Click **Install** and wait for the process to complete
   - **Restart Construct 3** when prompted

3. **Verify Installation**
   - Open the **Insert New Object** dialog
   - Look for **MakeIt3D** under the Plugins section
   - ✅ Installation complete!

### Option 2: Direct Download (Itch.io)

1. **Extract Package**
   - Download the `.zip` package from your Itch.io library
   - Extract to a temporary folder
   - Locate the `MakeIt3D.c3addon` file

2. **Follow Installation Steps**
   - Use the same installation process as Option 1 above
   - The addon will be immediately available after restart

:::warning Important
Always download MakeIt3D from official sources (Construct 3 Marketplace or authorized distributors) to ensure you receive authentic, virus-free software with full support.
:::

---

## Quick Start Tutorial

Let's create your first 3D scene in just a few minutes:

### Step 1: Project Setup
```
1. Create a new Construct 3 project
2. Set your layout size (recommended: 1280x720 or higher)
3. Insert → New Object → Plugins → MakeIt3D
```

### Step 2: Add Your First 3D Object
```
1. Select your MakeIt3D object
2. In the Properties panel, set:
   - Scene Width: 800
   - Scene Height: 600
   - Enable Auto-Resize: Yes
```

### Step 3: Create 3D Content
Add this to your **Start of Layout** event:
```
System → On start of layout
├─ MakeIt3D → Create Box (width: 2, height: 2, depth: 2)
├─ MakeIt3D → Set Object Material (color: "#ff6b6b")
├─ MakeIt3D → Set Camera Position (x: 0, y: 0, z: 5)
└─ MakeIt3D → Enable Orbit Controls
```

### Step 4: Run Your Project
Press **F5** to preview your project. You should see a rotating red cube that you can orbit around with your mouse!

---

## What's Next?

Now that you have MakeIt3D up and running, explore these resources to master 3D development:

<NextSteps />

---

## Need Help?

:::info Getting Support
- **Documentation Issues**: Check our [FAQ section](./faq)
- **Bug Reports**: Use the browser console (`F12 → Console`) to identify errors
- **Community**: Join our [Discord server](https://discord.gg/your-server) for community support
- **Direct Support**: Contact us through the Construct 3 Marketplace or Itch.io
:::

Ready to bring your ideas to life in 3D? Let's get building! 🚀