---
sidebar_position: 4
---

# Examples

import ExamplesGrid from '@site/src/components/ui/ExamplesGrid';

Explore these practical examples to see MakeIt3D in action. Each example includes a playable demo and downloadable .c3p project file.

<ExamplesGrid examples={[
  {
    id: "load-custom-model",
    title: "Load Custom Model",
    description: "A simple scene to demonstrate custom model loading by using MakeIt3D in construct3.",
    thumbnail: "https://makeit3d-examples.pages.dev/examples/character_basic/media/thumbnail.png",
    previewMedia: "https://makeit3d-examples.pages.dev/examples/character_basic/media/preview.mp4", // GIF preview
    previewType: "video",
    difficulty: "Beginner",
    tags: ["3D Objects", "Animation"],
    playUrl: "https://makeit3d-examples.pages.dev/examples/character_basic",
    c3pUrl: "https://example.com/download/rotating-cube.c3p",
    featured: true,
    category: "Basic 3D"
  }
]} />
<!-- {
    id: "lighting-demo",
    title: "Dynamic Lighting",
    description: "Explore different lighting techniques including point lights, directional lights, and shadows.",
    thumbnail: "/img/logo.png",
    previewMedia: "/img/examples/lighting-demo.mp4", // Video preview
    previewType: "video",
    difficulty: "Intermediate",
    tags: ["Lighting", "Shadows", "Materials"],
    playUrl: "https://example.com/play/lighting-demo",
    c3pUrl: "https://example.com/download/lighting-demo.c3p",
    category: "Lighting"
  },
  {
    id: "character-controller",
    title: "3D Character Controller",
    description: "A third-person character controller with camera follow, collision detection, and smooth movement.",
    thumbnail: "/img/examples/character-controller.jpg",
    previewMedia: "/img/examples/character-controller.gif",
    previewType: "gif",
    difficulty: "Advanced",
    tags: ["Character Control", "Camera", "Physics"],
    playUrl: "https://example.com/play/character-controller",
    c3pUrl: "https://example.com/download/character-controller.c3p",
    featured: true,
    category: "Gameplay"
  },
  {
    id: "particle-effects",
    title: "Particle System",
    description: "Create stunning visual effects with 3D particle systems for fire, smoke, and magical effects.",
    thumbnail: "/img/examples/particle-effects.jpg",
    previewMedia: "/img/examples/particle-effects.mp4",
    previewType: "video",
    difficulty: "Intermediate",
    tags: ["Particles", "Effects", "Animation"],
    playUrl: "https://example.com/play/particle-effects",
    c3pUrl: "https://example.com/download/particle-effects.c3p",
    category: "Effects"
  },
  {
    id: "model-loading",
    title: "3D Model Loading",
    description: "Learn how to import and display external 3D models in various formats (GLTF, OBJ, FBX).",
    thumbnail: "/img/examples/model-loading.jpg",
    // No preview media - will just show static thumbnail
    difficulty: "Intermediate",
    tags: ["Models", "Import", "GLTF"],
    playUrl: "https://example.com/play/model-loading",
    c3pUrl: "https://example.com/download/model-loading.c3p",
    category: "Models"
  },
  {
    id: "vr-scene",
    title: "VR Environment",
    description: "An immersive VR scene demonstrating spatial audio, hand tracking, and interactive objects.",
    thumbnail: "/img/examples/vr-scene.jpg",
    previewMedia: "/img/examples/vr-scene.gif",
    previewType: "gif",
    difficulty: "Advanced",
    tags: ["VR", "WebXR", "Interaction"],
    playUrl: "https://example.com/play/vr-scene",
    c3pUrl: "https://example.com/download/vr-scene.c3p",
    category: "VR/AR"
  } -->
## Contributing Examples

Have you created something amazing with MakeIt3D? We'd love to feature your work! Here's how you can contribute:

1. **Create** your example project with clear, commented events
2. **Test** thoroughly across different devices and browsers  
3. **Document** your approach with helpful comments
4. **Submit** via our [GitHub repository](https://github.com/your-repo) or [Discord community](https://discord.gg/BPmX5mgkkv)

### Example Guidelines

- **Keep it focused**: Each example should demonstrate 1-2 specific features
- **Add comments**: Explain complex logic in your event sheets
- **Optimize performance**: Ensure smooth 60fps on mid-range devices
- **Include assets**: Provide all necessary textures, models, and sounds
- **Test compatibility**: Verify it works on mobile and desktop

:::tip Pro Tip
The best examples start simple and gradually introduce complexity. Consider creating a series of related examples that build upon each other!
:::