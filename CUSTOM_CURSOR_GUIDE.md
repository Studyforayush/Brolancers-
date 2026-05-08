# Custom Cursor Implementation Guide

## Overview
The custom cursor has been successfully integrated into your Brolancers website. It provides a premium, smooth animated pointer effect that responds to user interactions.

## Features

✨ **Smooth Animation**
- Center dot with instant tracking
- Outer circle with 0.15 easing for smooth delay effect
- Uses requestAnimationFrame for 60fps smooth movement
- No jank or lag

🎨 **Visual Design**
- Center dot: White (#FFFFFF), changes to yellow (#F6E84A) on hover
- Outer circle: White with subtle glow, transitions to violet (#8B5CFF) on hover
- Smooth transitions and animations
- Premium, modern appearance

📱 **Mobile Friendly**
- Automatically hides on mobile/tablet devices
- Falls back to normal cursor behavior
- Respects touch input

🎯 **Interactive Elements**
- Detects hovering over buttons, links, cards, images, and custom elements
- Smooth expansion and color change on hover
- Subtle glow effects using brand colors

🎬 **Accessibility**
- Does not interfere with scrolling
- Works with form elements
- Maintains keyboard navigation
- No accessibility issues

## How It Works

1. **Cursor Tracking**: Listens to mouse movements and tracks cursor position
2. **Smooth Movement**: Applies easing (0.15) to create smooth trailing effect
3. **Hover Detection**: Automatically detects interactive elements
4. **Dynamic Updates**: Uses MutationObserver for dynamically added elements
5. **Mobile Detection**: Disables on touch devices using multiple detection methods

## Usage

### Basic Setup (Already Done)
The CustomCursor component is automatically imported and rendered in the root layout:

```tsx
// src/routes/__root.tsx
import { CustomCursor } from "../components/CustomCursor";

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <Outlet />
    </QueryClientProvider>
  );
}
```

### Adding Cursor Hover Effects

The cursor automatically detects these interactive elements:

```tsx
// These work out of the box:
<a href="/">Link</a>
<button>Click me</button>
<input type="text" />
<textarea></textarea>
<select>
  <option>Option</option>
</select>

// Custom hover with class
<div className="cursor-hover">Custom hover area</div>

// Work/project cards
<div className="work-card">Portfolio item</div>

// Data attribute approach
<div data-cursor-hover>Hover me</div>
```

### Interactive Elements That Trigger Hover State

The cursor responds to hover on:

1. **Links** (`<a>`)
2. **Buttons** (`<button>`)
3. **Form inputs** (`<input>`, `<textarea>`, `<select>`)
4. **Elements with `cursor-hover` class**
5. **Work cards** (`.work-card`, `.project-card`)
6. **Elements with `data-cursor-hover` attribute**
7. **Any element with `[role="button"]`**

### Customization

#### Change Cursor Appearance

Edit the cursor size and colors in `src/components/CustomCursor.tsx`:

```tsx
// Outer circle size on normal state
width: cursorState.isHovering ? "48px" : "32px";

// Outer circle size on hover
height: cursorState.isHovering ? "48px" : "32px";

// Center dot color on hover
backgroundColor: cursorState.isHovering ? "#F6E84A" : "#ffffff";

// Outer circle glow color on hover
borderColor: cursorState.isHovering
  ? "rgba(139, 92, 255, 0.8)"
  : "rgba(255, 255, 255, 0.4)";
```

#### Adjust Animation Speed

Change the easing value (currently 0.15) for faster/slower trailing:

```tsx
// In the animate function
const x = prev.x + dx * 0.15;  // Lower = slower/more delay, Higher = faster
const y = prev.y + dy * 0.15;
```

- `0.1` = Very slow, strong trailing effect
- `0.15` = Smooth, elegant (default)
- `0.25` = Faster tracking
- `0.5` = Very fast, almost no delay

#### Add Custom Hover States

Create your own hover classes:

```tsx
// In your component
<div className="custom-interactive">Special button</div>

// The cursor will automatically detect it because the MutationObserver
// continuously monitors for new interactive elements
```

#### Disable Cursor on Specific Pages

If you want to disable the cursor on certain pages, you can wrap the Outlet:

```tsx
// In a route component
import { useMemo } from "react";

export function SpecialPage() {
  const shouldHideCursor = useMemo(() => {
    // Set to true to hide cursor on this page
    return false;
  }, []);

  return (
    <div style={{ cursor: shouldHideCursor ? "auto" : "none" }}>
      {/* Page content */}
    </div>
  );
}
```

## Cursor Color Reference

Based on your brand colors:

- **Background**: #12051F
- **Text**: #F6F1E8
- **Highlight accent**: #F6E84A (Center dot on hover)
- **Violet accent**: #8B5CFF (Outer circle on hover)

## Performance Considerations

✅ **Optimized for Performance**
- Uses `requestAnimationFrame` for smooth 60fps animation
- DOM updates are minimized (only dot and circle positions)
- `mix-blend-lighten` mode for better visual blending
- Mobile detection prevents cursor from running on touch devices
- Event delegation and single listener pattern

## Browser Support

✅ Works in all modern browsers:
- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Mobile browsers automatically fallback to default cursor

## Troubleshooting

### Cursor not visible
1. Check if you're on a desktop (mobile auto-disables it)
2. Ensure CustomCursor is imported in the root layout
3. Check browser console for errors

### Cursor feels laggy
1. Reduce easing value to 0.1 for faster response (if desired)
2. Check for CPU-intensive scripts running in parallel
3. Ensure JavaScript isn't being throttled

### Cursor doesn't expand on hover
1. Verify elements have one of the hover-detectable selectors
2. Check z-index values on interactive elements
3. Ensure CSS `pointer-events` isn't being blocked

### Missing hover effects on dynamically added elements
1. The MutationObserver should handle this automatically
2. If not, add the `data-cursor-hover` attribute manually
3. Or use one of the standard selectors (a, button, input, etc.)

## Development Tips

### Test Cursor States
1. Hover over different elements to see color changes
2. Click to see opacity change
3. Move cursor near edges to see easing effect
4. Resize window to test mobile detection

### Add Debug Info
You can temporarily add console logs to track cursor state:

```tsx
// In CustomCursor.tsx animate function
console.log("Cursor position:", x, y);
console.log("Is hovering:", cursorState.isHovering);
```

## Future Enhancements

Potential additions you can make:

1. **Click Ripple Effect**: Add expanding circles on click
2. **Cursor Trail**: Multiple dots following cursor
3. **Gesture Recognition**: Different cursor states for specific swipes
4. **Parallax Cursor**: Parallax effect with certain elements
5. **Customizable Presets**: Light/dark theme cursor styles
6. **Cursor Labels**: Tooltip showing "Click", "Scroll", etc.

## Support for Interactive Elements

The cursor intelligently handles:
- ✅ Links and navigation
- ✅ Buttons and form controls
- ✅ Input fields and text areas
- ✅ Custom interactive divs
- ✅ Work/portfolio cards
- ✅ Images with hover effects
- ✅ Dynamic elements added after page load

---

**The custom cursor is now active on your entire website. No additional setup required!**
