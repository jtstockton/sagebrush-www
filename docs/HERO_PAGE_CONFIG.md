# Hero Landing Page Configuration Guide

This document provides comprehensive documentation for the hero landing page implementation, including all timing configurations, styling details, and how to customize various aspects.

## Overview

The hero landing page features:
- Full-screen parallax background with landscape images
- Transparent header that becomes solid after scrolling past hero
- Two animated hero titles with scroll-based transitions
- Navigation bar that fades out during scroll
- Smooth scroll animations and cross-fade effects

## File Structure

```
project/
├── overrides/
│   ├── home.html                          # Custom homepage template
│   └── assets/
│       ├── javascripts/
│       │   └── hero.js                    # Scroll animations & parallax
│       └── stylesheets/
│           └── hero.css                   # Hero section styling
├── docs/
│   ├── index.md                           # Homepage content (uses home.html template)
│   ├── stylesheets/
│   │   └── extra.css                      # Global theme overrides
│   └── assets/
│       └── images/
│           ├── landscape1.png             # Hero background (light mode)
│           └── landscape2.png             # Hero background (dark mode)
└── mkdocs.yml                             # Must include: custom_dir: overrides
```

## Critical Timing Configurations

All scroll-based animations are percentage-based relative to hero section height. Here are the key timing points:

### Hero Text 1: "Welcome to Sagebrush Mesh"
- **Initial state**: Centered on screen, fully visible
- **Fade start**: 0% (immediately on scroll)
- **Slide distance**: -200px upward
- **Complete fade**: 25% of hero height
- **Location in code**: `hero.js` lines 47-61

```javascript
const title1FadeEnd = heroHeight * 0.25;  // Complete by 25%
const slideDistance = progress * -200;     // Slide up 200px
```

### Hero Text 2: "Eastern Washington's Premier Mesh Community"
- **Initial state**: Hidden (opacity: 0)
- **Fade in start**: 15% of hero height
- **Fully visible**: 25% of hero height
- **Fade out start**: 60% of hero height
- **Complete fade out**: 80% of hero height
- **Position**: 60vh from top (center-lower viewport)
- **Location in code**: `hero.js` lines 63-82

```javascript
const title2FadeInStart = heroHeight * 0.15;   // Start at 15%
const title2FadeInEnd = heroHeight * 0.25;     // Fully visible at 25%
const title2FadeOutStart = heroHeight * 0.60;  // Start fading at 60%
const title2FadeOutEnd = heroHeight * 0.80;    // Complete fade at 80%
```

### Navigation Bar (Tabs)
- **Initial state**: Transparent, fully visible
- **Fade start**: 0% (immediately on scroll)
- **Complete fade**: 12.5% of hero height
- **Behavior**: Completely hidden (`display: none`) after fade
- **Location in code**: `hero.js` lines 117-163

```javascript
const tabsFadeStart = 0;                       // Start immediately
const tabsFadeEnd = heroHeight * 0.125;        // Complete by 12.5%
```

### Header Title "Sagebrush Mesh" Text
- **Timing**: Synced with navigation bar (0-12.5%)
- **Logo behavior**: Logo stays visible (never fades)
- **Location in code**: `hero.js` lines 127-161

### Header Background
- **Initial state**: Transparent with no background
- **Transition point**: 95% of hero height
- **Final state**: Gradient background with shadow
- **Location in code**: `hero.js` lines 100-115

```javascript
if (scrolled > heroHeight * 0.95) {
  header.classList.add('md-header--scrolled');
  header.classList.remove('md-header--transparent');
}
```

### Parallax Background
- **Speed**: 0.5x scroll speed (moves slower than scroll)
- **Location in code**: `hero.js` lines 52-56

```javascript
const parallaxSpeed = 0.5;
heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
```

## CSS Positioning

### Hero Text 1 (Primary)
```css
.hero-title--primary {
  font-size: clamp(2rem, 5vw, 4.5rem);
  text-align: center;
  z-index: 2;
}
```

### Hero Text 2 (Secondary)
```css
.hero-title--secondary {
  position: absolute;
  top: 60vh;  /* Position in lower-center of viewport */
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(1.5rem, 3.5vw, 3rem);
  z-index: 10;
}
```

**Responsive breakpoints:**
- Tablet (max-width: 960px): `top: 60vh`
- Mobile (max-width: 600px): `top: 60vh`

### Header Z-Index Hierarchy
```
-1  : Hero background (behind everything)
1   : Hero gradient overlay
2   : Hero content and primary title
10  : Secondary title and scroll indicator
90  : Navigation tabs
100 : Header (always on top)
```

## Background Images

### Light Mode
- File: `docs/assets/images/landscape1.png`
- Applied via: `hero.css` line 20-30

### Dark Mode
- File: `docs/assets/images/landscape2.png`
- Applied via: `hero.css` line 32-40

### CSS Implementation
```css
.hero-background {
  background-image: url('/assets/images/landscape1.png');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;  /* Creates parallax effect */
}

[data-md-color-scheme="slate"] .hero-background {
  background-image: url('/assets/images/landscape2.png');
}
```

## Header Behavior

### Transparent Header (Hero Page)
**CSS Classes:**
- `.md-header--transparent` - Applied when at top of hero section
- `body:has(.hero-section) .md-header` - Forces transparency on hero page

**Key CSS:**
```css
.md-header--transparent {
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
  transition: none !important;  /* No transition to prevent flicker */
}
```

### Scrolled Header (After Hero)
**CSS Class:** `.md-header--scrolled`

**Key CSS:**
```css
.md-header--scrolled {
  background: linear-gradient(135deg, #d2b48c 0%, #a7c7a3 100%) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  transition: background 0.3s ease, box-shadow 0.3s ease !important;
}
```

### Normal Pages (Non-Hero)
Headers on non-hero pages always have the gradient background:

```css
body:not(:has(.hero-section)) .md-header {
  background: linear-gradient(135deg, #d2b48c 0%, #a7c7a3 100%) !important;
}
```

## Navigation Tabs Behavior

### Hero Page
- **Initial**: Transparent background, white text with shadows
- **Classes**: `.md-tabs--hero` (marked by JavaScript)
- **Fade**: 0-12.5% of hero scroll
- **Final**: `display: none` (completely removed from view)

**Key CSS:**
```css
body:has(.hero-section) .md-tabs {
  background: transparent !important;
  transition: opacity 0.4s ease !important;
}

.md-tabs--hero.md-tabs--hidden {
  display: none !important;
  visibility: hidden !important;
}
```

### Normal Pages
- Always show gradient background matching header
- No fade behavior

```css
.md-tabs {
  background: linear-gradient(135deg, #d2b48c 0%, #a7c7a3 100%) !important;
}
```

## JavaScript Event Listeners

### Page Load and Navigation
```javascript
// Initial load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHero);
} else {
  initHero();
}

// MkDocs Material instant loading navigation
document.addEventListener('DOMContentSwitch', function() {
  setTimeout(initHero, 50);
});

// Fallback for navigation detection
new MutationObserver(() => {
  if (location.href !== lastLocation) {
    lastLocation = location.href;
    setTimeout(initHero, 50);
  }
}).observe(document.querySelector('body'), {
  childList: true,
  subtree: true
});
```

### Scroll Events
Uses `requestAnimationFrame` for smooth performance:

```javascript
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
```

## Common Customization Tasks

### Adjust Hero Text 1 Fade Timing
**File**: `hero.js` line 45

```javascript
const title1FadeEnd = heroHeight * 0.25;  // Change 0.25 to desired percentage
```

### Adjust Hero Text 2 Appearance
**File**: `hero.js` lines 64-67

```javascript
const title2FadeInStart = heroHeight * 0.15;   // When to start appearing
const title2FadeInEnd = heroHeight * 0.25;     // When fully visible
const title2FadeOutStart = heroHeight * 0.60;  // When to start fading
const title2FadeOutEnd = heroHeight * 0.80;    // When completely gone
```

### Adjust Hero Text 2 Vertical Position
**File**: `hero.css` line 121

```css
.hero-title--secondary {
  top: 60vh;  /* Change this value (50vh = center, 70vh = lower, 40vh = higher) */
}
```

### Adjust Navigation Bar Fade Timing
**File**: `hero.js` lines 119-120

```javascript
const tabsFadeStart = 0;                    // When to start (0 = immediately)
const tabsFadeEnd = heroHeight * 0.125;     // When to complete (0.125 = 12.5%)
```

### Adjust Header Transition Point
**File**: `hero.js` line 102

```javascript
if (scrolled > heroHeight * 0.95) {  // Change 0.95 to desired percentage
  header.classList.add('md-header--scrolled');
}
```

### Adjust Parallax Speed
**File**: `hero.js` line 54

```javascript
const parallaxSpeed = 0.5;  // Lower = slower, Higher = faster (0.3-0.7 recommended)
```

### Change Hero Background Images
Replace the image files:
- Light mode: `docs/assets/images/landscape1.png`
- Dark mode: `docs/assets/images/landscape2.png`

Or update the CSS:

**File**: `hero.css` lines 20-40

```css
.hero-background {
  background-image: url('/assets/images/YOUR_IMAGE.png');
}

[data-md-color-scheme="slate"] .hero-background {
  background-image: url('/assets/images/YOUR_DARK_IMAGE.png');
}
```

### Adjust Font Sizes

**Hero Text 1:**
```css
.hero-title--primary {
  font-size: clamp(2rem, 5vw, 4.5rem);
  /* clamp(minimum, preferred, maximum) */
}
```

**Hero Text 2:**
```css
.hero-title--secondary {
  font-size: clamp(1.5rem, 3.5vw, 3rem);
}
```

### Change Hero Text Content
**File**: `overrides/home.html` lines 99-101

```html
<h1 class="hero-title hero-title--primary" id="heroTitle1">
  Welcome to Sagebrush Mesh  <!-- Change this text -->
</h1>
<h1 class="hero-title hero-title--secondary" id="heroTitle2">
  Eastern Washington's Premier Mesh Community  <!-- Change this text -->
</h1>
```

## Troubleshooting

### Issue: Header flickers when navigating back to homepage
**Solution**: Ensure `transition: none` on transparent header

```css
.md-header--transparent {
  transition: none !important;
}
```

Also check JavaScript initialization (lines 36-42):
```javascript
if (header) {
  header.classList.remove('md-header--scrolled');
  header.classList.add('md-header--transparent');
  setTimeout(() => updateParallax(), 10);
}
```

### Issue: Navigation tabs show gradient on hero page after scrolling
**Solution**: Ensure tabs are marked with `.md-tabs--hero` class immediately on page load

```javascript
// Mark tabs as hero tabs immediately (line 45-47)
if (tabs) {
  tabs.classList.add('md-tabs--hero');
}
```

And ensure CSS overrides any gradient:
```css
body:has(.hero-section) .md-tabs {
  background: transparent !important;
}
```

### Issue: Hero text not appearing at correct position
**Check**:
1. Position value in CSS (`top: 60vh`)
2. Element structure in HTML (text 2 should be outside nested containers)
3. Z-index values (text 2 should have `z-index: 10`)

### Issue: Normal pages have transparent header/tabs
**Check**: `extra.css` should have:

```css
body:not(:has(.hero-section)) .md-header {
  background: linear-gradient(135deg, #d2b48c 0%, #a7c7a3 100%) !important;
}
```

### Issue: Animations not smooth
**Check**:
1. Using `requestAnimationFrame` for scroll (line 139-143)
2. Transitions defined in CSS
3. Browser performance (parallax can be heavy on low-end devices)

### Issue: Header blurry after scrolling
**Solution**: Ensure no `backdrop-filter` on scrolled header

```css
.md-header--scrolled {
  /* DO NOT include: backdrop-filter: blur(10px) !important; */
}
```

## Performance Considerations

### Optimization Techniques Used

1. **RequestAnimationFrame**: All scroll animations use `requestAnimationFrame` to sync with browser repaints
2. **Throttling**: Scroll events are throttled using a `ticking` flag to prevent excessive calculations
3. **CSS Hardware Acceleration**: Using `transform` and `opacity` properties which are GPU-accelerated
4. **Will-change**: Applied to frequently animated elements

```css
.hero-title--primary {
  will-change: opacity, transform;
}
```

5. **Passive Event Listeners**: Scroll listeners use `{ passive: true }` to improve scroll performance

```javascript
window.addEventListener('scroll', onScroll, { passive: true });
```

### Image Preloading
Images are preloaded to prevent loading delays:

```javascript
const imageUrls = [
  '/assets/images/landscape1.png',
  '/assets/images/landscape2.png'
];

imageUrls.forEach(function(url) {
  const img = new Image();
  img.src = url;
});
```

## Testing Checklist

When making changes, test the following scenarios:

- [ ] Initial load of homepage - header transparent, both texts visible
- [ ] Scroll down - text 1 slides and fades, nav bar fades quickly
- [ ] Continue scroll - text 2 appears and becomes visible
- [ ] Scroll to 60% - text 2 starts fading
- [ ] Scroll to 95% - header gets gradient background
- [ ] Navigate to another page - header has gradient, tabs visible
- [ ] Navigate back to home - no flicker, header transparent immediately
- [ ] Scroll up on normal page - header stays consistent (no color change)
- [ ] Test on mobile - responsive font sizes and positioning
- [ ] Test dark mode - correct background image loads
- [ ] Test with slow network - images preload correctly

## Design Decisions and Rationale

### Why separate timing for text 1 and text 2?
Creates a dynamic storytelling effect - first message welcomes users, then reveals more detail as they engage with the page.

### Why fade nav bar so quickly (12.5%)?
Removes UI clutter early, giving hero text prominence without distraction from navigation elements.

### Why transparent header on hero page?
Creates immersive full-screen experience with the landscape background, then transitions to functional header once past hero.

### Why use requestAnimationFrame?
Ensures smooth 60fps animations by syncing with browser repaint cycles, preventing jank.

### Why mark tabs with .md-tabs--hero class?
Provides specific CSS selector to override global tab styling without affecting other pages.

### Why use will-change sparingly?
Only on frequently animated elements (hero titles) to avoid memory overhead from creating unnecessary compositing layers.

### Why no transition on transparent header?
Prevents visual flicker when navigating between pages due to Material for MkDocs instant loading.

## Future Enhancement Ideas

- Add intersection observer for feature cards fade-in (currently implemented but could be enhanced)
- Implement scroll progress indicator
- Add parallax effect to hero text itself (subtle movement)
- Consider adding video background option
- Add option to pause animations when user navigates away from tab
- Implement reduced motion preference detection for accessibility
- Add configurable timing via data attributes in HTML

## Related Files Reference

- `mkdocs.yml` - Line 7: `custom_dir: overrides`
- `docs/index.md` - Lines 1-3: Template frontmatter
- `docs/stylesheets/extra.css` - Lines 54-63: Global header gradient
- `overrides/home.html` - Full hero section structure
- `overrides/assets/javascripts/hero.js` - All animation logic
- `overrides/assets/stylesheets/hero.css` - All hero styling

## Version History

- **Initial Implementation** (2026-01-08): Full parallax hero page with dual text animations, transparent header, and responsive design
