# Properties

Configure your **MakeIt3D** plugin through the Properties Panel in Construct 3.

## Properties Panel Overview

The MakeIt3D Properties Panel contains four main settings:

- **Enable Logs** - Toggle debugging information
- **Three.js Editor** - Launch the visual scene editor
- **Global Scene** - Control scene persistence across layouts
- **More Information** - Access help documentation

---

## Property Reference

### 🐛 Enable Logs

**Type:** Checkbox  
**Default:** Unchecked

Shows detailed information in the browser console for debugging purposes.

#### When to Use
- ✅ **Development:** Check this to see object creation, errors, and debug messages
- ❌ **Production:** Uncheck for better performance and cleaner console output

---

### 🚀 Three.js Editor

**Type:** Button  
**Action:** Launch Editor

Opens the Three.js editor in a new tab for visual scene creation.

#### Workflow
1. Click "Launch Editor"
2. Design your 3D scene with lights, materials, and objects
3. Export your scene as a JSON file
4. Load the JSON file in your MakeIt3D project

---

### 🌍 Global Scene

**Type:** Dropdown  
**Options:** Yes / No  
**Default:** No

**This is the most important setting!** Controls whether your 3D scene persists when changing layouts.

#### No (Default) - Scene Resets
- Scene is destroyed when changing layouts
- Objects are removed from memory
- Better memory management
- **Best for:** Level-based games, puzzles, platformers

#### Yes - Scene Persists  
- Scene continues across all layouts
- Objects remain in memory
- Better performance (no recreation needed)
- **Best for:** Open-world games, RPGs, continuous experiences

#### Decision Guide

**Choose "No" if your game has:**
- Separate levels or stages
- Different 3D content per layout
- Menu systems with various backgrounds
- Memory constraints
- Distinct gameplay sections

**Choose "Yes" if your game has:**
- One continuous 3D world
- Persistent 3D elements across layouts
- Open-world exploration
- Connected areas or rooms
- Seamless transitions between areas

---

### 📚 More Information

**Type:** Button  
**Action:** Help

Opens additional documentation and resources for the MakeIt3D plugin.

---

## Quick Setup

### Development Setup
```
✅ Enable Logs: CHECKED
🌍 Global Scene: Test both options to see what works best
```

### Production Setup
```
❌ Enable Logs: UNCHECKED
🎯 Global Scene: Choose based on your game type
```

---

## Common Configurations

### Level-Based Games
```
Enable Logs: Off (production)
Global Scene: No
```
Each level gets a fresh 3D scene. Memory is cleared between levels.

### Open-World Games
```
Enable Logs: Off (production)  
Global Scene: Yes
```
3D world persists as players move between different areas.

### Development/Testing
```
Enable Logs: On
Global Scene: Test both settings
```
Enable logging to debug issues and test both scene persistence options.

---

## Troubleshooting

**Scene not appearing after layout change?**
- Check if Global Scene is set correctly for your game type
- Enable logs to see console messages

**Performance issues?**
- Disable logs in production builds
- Consider "No" for Global Scene if you have memory constraints

**Objects disappearing?**
- If you want persistent objects, set Global Scene to "Yes"
- If objects should reset per level, use "No"

---

## Best Practices

1. **Always test with logs enabled** during development
2. **Disable logs** before publishing your game
3. **Choose Global Scene setting** based on your game's structure, not performance assumptions
4. **Use the Three.js Editor** for complex scene setups
5. **Document your choice** of Global Scene setting for your team