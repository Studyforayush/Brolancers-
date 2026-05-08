# 🎯 Custom Cursor - Quick Reference Card

## One-Liner Activation

✅ **Already active globally** - No setup needed! The custom cursor is automatically available on your entire website.

## Interactive Elements That Work Automatically

| Element | Cursor Effect |
|---------|----------------|
| `<a>` | ✅ Auto-detected |
| `<button>` | ✅ Auto-detected |
| `<input>` | ✅ Auto-detected |
| `<textarea>` | ✅ Auto-detected |
| `<select>` | ✅ Auto-detected |
| `[role="button"]` | ✅ Auto-detected |

## Add Cursor Hover to Custom Elements

### Method 1: CSS Class (Recommended)
```tsx
<div className="cursor-hover">
  Hover me
</div>
```

### Method 2: Data Attribute
```tsx
<div data-cursor-hover>
  Hover me
</div>
```

### Method 3: Work Card Class
```tsx
<div className="work-card">
  Portfolio item
</div>
```

## Cursor Visual States

```
Normal State:
├── Center dot: 2px white circle
└── Outer circle: 32px white with subtle glow

Hover State:
├── Center dot: 2px yellow (#F6E84A) with glow
└── Outer circle: 48px violet (#8B5CFF) with enhanced glow

Click State:
└── Slight opacity reduction (0.6)
```

## Color Palette

```css
/* Your brand colors */
Primary:   #12051F (background)
Text:      #F6F1E8
Accent:    #F6E84A (yellow - hover center dot)
Violet:    #8B5CFF (violet - hover circle glow)
```

## Common Patterns

### Portfolio/Work Grid
```tsx
<div className="work-card p-6 hover:shadow-lg">
  <img src="..." alt="..." />
  <h3>Project Title</h3>
</div>
```

### Interactive Cards
```tsx
<div className="cursor-hover p-4 bg-slate-900 hover:bg-slate-800">
  <p>Hover area with cursor effect</p>
</div>
```

### Links and Navigation
```tsx
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
```

## CSS Classes for Effects

```css
/* Use these classes in your components */
.cursor-hover          /* Generic hover area */
.work-card             /* Portfolio items */
.project-card          /* Project cards */
.portfolio-item        /* Portfolio grid items */
[data-cursor-hover]    /* Custom data attribute */
```

## Customization Snippets

### Change Cursor Size
```tsx
// In CustomCursor.tsx - animate function
width: cursorState.isHovering ? "60px" : "40px"; // Change these values
height: cursorState.isHovering ? "60px" : "40px";
```

### Change Animation Speed
```tsx
// Slower trailing (more delay)
const x = prev.x + dx * 0.1;
const y = prev.y + dy * 0.1;

// Faster tracking (less delay)
const x = prev.x + dx * 0.25;
const y = prev.y + dy * 0.25;
```

### Change Colors
```tsx
// Center dot on hover
backgroundColor: "#F6E84A" // Yellow

// Outer circle on hover
borderColor: "rgba(139, 92, 255, 0.8)" // Violet
```

## Behavior on Different Devices

| Device Type | Cursor Behavior |
|-------------|-----------------|
| Desktop | ✅ Full custom cursor |
| Tablet | 🚫 Auto-disabled |
| Mobile | 🚫 Auto-disabled |
| Touch Input | 🚫 Falls back to default |

## Performance Tips

✅ **Best Practices**
- No additional dependencies required
- Uses native requestAnimationFrame
- Minimal DOM updates (2 elements only)
- Mobile-optimized detection
- CSS blend modes for efficiency

## Debugging Tips

### Check if cursor is working
```javascript
// Open DevTools console
// Hover over elements - should see cursor expand and change color

// Check if CustomCursor component is mounted
document.querySelector('[data-testid="cursor-dot"]')
```

### Test hover detection
1. Hover over `<a>` - should expand and glow
2. Hover over `<button>` - should expand and glow
3. Hover over `.cursor-hover` - should expand and glow
4. Hover over regular text - should NOT expand

### Check mobile detection
```javascript
// In browser console
navigator.maxTouchPoints > 0 // Should be true on touch devices
window.innerWidth // Should affect detection if < 768px
```

## File Locations for Quick Access

```
Project Root
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx              ← Edit cursor appearance
│   │   └── CustomCursorDemo.tsx          ← See examples
│   ├── styles/
│   │   └── cursor-effects.css            ← Add hover effects
│   └── routes/
│       └── __root.tsx                     ← Integration point (don't edit)
│
├── CURSOR_IMPLEMENTATION_SUMMARY.md       ← Full documentation
├── CUSTOM_CURSOR_GUIDE.md                 ← Detailed guide
└── CURSOR_QUICK_REFERENCE.md             ← This file
```

## Frequently Used Selectors

```css
/* Cursor auto-detects */
a, button, input, textarea, select, [role="button"]

/* Use these classes to add hover */
.cursor-hover
.work-card
.project-card
.portfolio-item

/* Or use data attribute */
[data-cursor-hover]
```

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Cursor not visible | Check if on desktop, not mobile |
| Hover not working | Add `cursor-hover` class or use standard element |
| Laggy cursor | Reduce easing value to 0.1 |
| Colors not changing | Check CSS in CustomCursor.tsx |
| Mobile cursor showing | Resize window below 768px to test |

## Test Checklist

- [ ] Cursor visible on desktop
- [ ] Cursor disappears on mobile
- [ ] Hover over link - cursor expands ✓
- [ ] Hover over button - cursor expands ✓
- [ ] Hover over input - cursor expands ✓
- [ ] Hover over work-card - cursor expands ✓
- [ ] Click button - slight opacity change ✓
- [ ] Move cursor fast - smooth trailing ✓
- [ ] Scroll page - cursor still works ✓

## Integration Checklist

- [x] CustomCursor component created
- [x] Cursor effects CSS added
- [x] CustomCursor in root layout
- [x] CSS imported globally
- [x] MutationObserver for dynamic elements
- [x] Mobile detection implemented
- [x] Accessibility maintained
- [x] Documentation complete

---

## TL;DR

✨ **Your custom cursor is already working!**

Just use these elements and the cursor will automatically respond:
- Links, buttons, inputs, textareas, selects
- Elements with `cursor-hover` class
- Elements with `data-cursor-hover` attribute
- `.work-card` and `.project-card` classes

No additional setup required. Start building! 🚀
