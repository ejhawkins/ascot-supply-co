# Ascot Supply Co

A modern, responsive fluid header implementation for Ascot Supply Co - Premium Industrial Supplies.

## 🎨 Design Reference

This project is based on the Fluid Header Creation design available in Figma:

[View Figma Design](https://figma.com/make/iywUFQ2uam3O8G8SeJAiKn/Fluid-Header-Creation?t=iJN0kfopIK11JCh6-1)

## 📋 Features

### Fluid Header Component
- **Responsive Design**: Seamlessly adapts to mobile, tablet, and desktop viewports
- **Mobile-First Approach**: Optimized for all screen sizes starting from mobile
- **Semantic HTML5**: Clean, accessible markup with proper ARIA labels
- **Modern CSS3**: Utilizes Flexbox, CSS Grid, and custom properties
- **Interactive Navigation**: Mobile menu with smooth animations
- **Accessibility**: Keyboard navigation, focus states, and screen reader support
- **Performance**: Optimized CSS with minimal JavaScript
- **Cross-Browser Compatible**: Works on all modern browsers

### Responsive Breakpoints
- **Mobile**: < 768px - Hamburger menu with slide-down navigation
- **Tablet**: 768px - 1023px - Condensed navigation with optimized spacing
- **Desktop**: 1024px+ - Full navigation with all features visible
- **Large Desktop**: 1280px+ - Maximum width container with optimal readability
- **Extra Large**: 1536px+ - Extended container for ultra-wide displays

## 🚀 Quick Start

### Viewing the Implementation

1. **Clone or download the repository**:
   ```bash
   git clone https://github.com/ejhawkins/ascot-supply-co.git
   cd ascot-supply-co
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Visit**: http://localhost:8000

### No Build Process Required
This is a static HTML/CSS/JS implementation with no dependencies or build tools required.

## 📁 Project Structure

```
ascot-supply-co/
├── index.html      # Main HTML file with semantic structure
├── styles.css      # Complete responsive styles
├── script.js       # Interactive functionality (mobile menu)
└── README.md       # This file
```

## 🎯 Implementation Details

### HTML Structure
- **Semantic Elements**: Uses `<header>`, `<nav>`, `<main>`, `<footer>` for proper document structure
- **Accessibility**: Includes ARIA labels, roles, and proper heading hierarchy
- **SEO Optimized**: Meta tags, descriptive alt text, and semantic markup

### CSS Architecture
- **CSS Custom Properties**: Design system with reusable variables for colors, spacing, typography
- **Mobile-First**: Base styles for mobile with media queries for larger screens
- **Fluid Typography**: Responsive font sizes that scale with viewport
- **Smooth Transitions**: Polished animations for interactions
- **Modern Techniques**: Flexbox for layout, CSS Grid where appropriate

### JavaScript Features
- **Mobile Menu Toggle**: Hamburger menu for small screens
- **Scroll Behavior**: Enhanced header shadow on scroll
- **Keyboard Support**: ESC key closes mobile menu
- **Window Resize Handling**: Automatically adapts on viewport changes
- **Touch-Friendly**: Optimized for mobile interactions

## 🎨 Design System

### Colors
- **Primary**: #2563eb (Blue)
- **Text**: #1e293b (Dark Gray)
- **Background**: #ffffff (White)
- **Borders**: #e2e8f0 (Light Gray)

### Typography
- **Font Family**: System font stack for optimal performance
- **Base Size**: 16px (responsive on mobile)
- **Weights**: 400 (normal), 500 (medium), 700 (bold)

### Spacing Scale
- XS: 0.5rem (8px)
- SM: 0.75rem (12px)
- MD: 1rem (16px)
- LG: 1.5rem (24px)
- XL: 2rem (32px)
- 2XL: 3rem (48px)

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Focus Indicators**: Clear focus styles for keyboard users
- **ARIA Labels**: Proper labeling for screen readers
- **Semantic HTML**: Meaningful structure for assistive technologies
- **Color Contrast**: WCAG AA compliant color combinations
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Skip Links**: Easy navigation for screen reader users

## 📱 Testing

### Desktop Testing
- Chrome, Firefox, Safari, Edge (latest versions)
- Viewport sizes: 1920x1080, 1440x900, 1280x720

### Tablet Testing
- iPad, Surface, Android tablets
- Portrait and landscape orientations
- Viewport sizes: 768x1024, 1024x768

### Mobile Testing
- iPhone, Android devices
- Various screen sizes: 320px - 767px
- Touch interactions and gestures

## 🔧 Customization

### Changing Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --color-primary: #2563eb;
    --color-text: #1e293b;
    /* Add your colors here */
}
```

### Modifying Breakpoints
Adjust media queries in `styles.css`:
```css
@media (max-width: 767px) { /* Mobile */ }
@media (min-width: 768px) and (max-width: 1023px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

### Adding Navigation Items
Add new `<li>` elements in `index.html`:
```html
<li class="nav__item">
    <a href="#new-page" class="nav__link">New Page</a>
</li>
```

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This is a design sample project for demonstration purposes.

## 👤 About

Created for Ascot Supply Co - Premium Industrial Supplies and Equipment.

For questions or feedback, please open an issue in the repository.