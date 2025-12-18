---
type: design_system
category: colors
---

# Color Palette

## Brand Colors

### Primary Yellow (Main CTA)
- **Hex:** `#f8d264`
- **Usage:** Primary buttons, donate buttons, main CTAs
- **Hover:** `#f8b864`
- **Examples:** "Donate Now" buttons, "Join Now" buttons

### Secondary Yellow (Accents)
- **Hex:** `#f9be71`
- **Usage:** Navigation hover states, link hover
- **Examples:** Menu item underlines on hover

### Yellow CTA Dark
- **Hex:** `#ffcf10`
- **Usage:** Story links, "Read story" CTAs
- **Examples:** Story carousel overlay links

## Initiative Color Themes

### Education
- **Primary:** `#52a7e4` (Sky blue)
- **Accent:** `#add7ff` (Light blue for underlines/backgrounds)
- **Usage:** Education cards, education page accents
- **Examples:** Card title color, section underlines

### Shelter Homes
- **Primary:** `#7a7cc7` (Purple)
- **Accent:** `#a3a4de` (Light purple)
- **Usage:** Shelter homes cards and pages
- **Examples:** Card title color, section underlines

### Entrepreneurship
- **Primary:** `#194f75` (Navy blue)
- **Accent:** `#194f75` (Same for underlines)
- **Usage:** Entrepreneurship cards and pages
- **Examples:** Card title color, business grant sections

### Youth Entrepreneurship
- **Primary:** `#f8b864` (Orange)
- **Accent:** `#f8b864` (Same for underlines)
- **Usage:** Youth entrepreneurship cards and pages
- **Examples:** Card title color, youth program sections

### Medical Relief
- **Primary:** `#6890b7` (Steel blue)
- **Accent:** `#6890b7` (Same for underlines)
- **Usage:** Medical relief cards and pages
- **Note:** CSS shows `#6890b7` but color name says "red-orange"

### Disaster Relief
- **Primary:** `#b28f61` (Metallic brown/gold)
- **Accent:** `#b28f61` (Same for underlines)
- **Usage:** Disaster relief cards and pages
- **Examples:** Card title color, disaster relief sections

## Text Colors

### Headings
- **Black:** `#000000`
- **Usage:** All H1, H2, H3 headings
- **Font:** ProximaNova-Black

### Body Text
- **Dark Gray:** `#6b6b6b`
- **Usage:** Paragraph text, body copy
- **Font:** ProximaNova (Regular)

### Light Text
- **Light Gray:** `#cdcdcd`
- **Usage:** Footer text
- **Examples:** Footer body text, secondary information

### Placeholder/Muted
- **Gray:** `#acacac`
- **Usage:** Form placeholder text, muted text
- **Examples:** Input placeholders

### Dark Text
- **Dark:** `#333` or `#000`
- **Usage:** Bold text within paragraphs
- **Examples:** Strong emphasis in body copy

## Background Colors

### Light Backgrounds
- **Off-White:** `#f7f7f7`
- **Usage:** Section backgrounds, form areas
- **Examples:** Newsletter section, cause page backgrounds

- **Cream:** `#fffbf6`
- **Usage:** Image frame backgrounds
- **Examples:** Photo borders, image containers

- **Warm Beige:** `#f8eae0`
- **Usage:** Mission section backgrounds
- **Examples:** Mission statement area

- **Light Beige:** `#faf8f2`
- **Usage:** Donation form footer
- **Examples:** Copyright section on donate page

### Form Backgrounds
- **Light Gray:** `#eee`
- **Usage:** Form containers
- **Examples:** Newsletter signup form background

- **Form Gray:** `#f1f1f1`
- **Usage:** Input field backgrounds
- **Examples:** Text inputs, inactive button states

### Dark Backgrounds
- **Black:** `#000`
- **Usage:** Footer background
- **Examples:** Main footer section

- **Dark Gray:** `#3b3b3b`
- **Usage:** Fixed navigation background
- **Examples:** Sticky nav on scroll

- **Donation Dark:** `#060709`
- **Usage:** Donation section background
- **Examples:** "736 Million" section

- **Donation Brown:** `#362209`
- **Usage:** Donate page background
- **Examples:** Main donate page area

- **Mission Dark:** `#1e1c17`
- **Usage:** Outcome section backgrounds
- **Examples:** Mission outcome areas

## Border Colors

### Light Borders
- **Light Gray:** `#f3f3f3`
- **Usage:** Navigation bottom border
- **Examples:** Nav separator line

- **Beige:** `#f7f1e8` / `#f0e2ce`
- **Usage:** Form field borders
- **Examples:** Input borders, focus states

- **Gray:** `#ccc`
- **Usage:** Image frames
- **Examples:** Photo borders

- **Form Border:** `#e6e6e6`
- **Usage:** Form container borders
- **Examples:** Newsletter form outline

## Gradient Overlays

### Story/Impact Overlays
These gradients are used on story and impact images:

**Disaster Relief (Metallic Brown):**
```css
linear-gradient(0deg, rgba(176, 142, 96, 1) 10%, rgba(49, 35, 21, 0.19091386554621848) 100%)
```
- Start: `#b08e60` (Metallic brown at 10%)
- End: Transparent

**Education (Blue):**
```css
linear-gradient(0deg, rgba(82, 166, 226, 1) 10%, rgba(49, 35, 21, 0.19091386554621848) 100%)
```
- Start: `#52a6e2` (Blue at 10%)
- End: Transparent

**Entrepreneurship (Navy):**
```css
linear-gradient(0deg, rgba(26, 79, 118, 1) 10%, rgba(49, 35, 21, 0.19091386554621848) 100%)
```
- Start: `#1a4f76` (Navy at 10%)
- End: Transparent

**Hero/Carousel Overlay:**
```css
linear-gradient(90deg, rgba(49, 35, 21, 1) 35%, rgba(49, 35, 21, 0.19) 100%)
```
- Start: Dark brown `#312315` at 35%
- End: Transparent

## Accent Colors by Page

### Homepage
- Primary: Yellow `#f8d264`
- Accents: Initiative colors (6 different)

### About Page
- Primary: Yellow `#f8d264`
- Video CTA: Yellow
- Section accents: Light blue `#add7ff` (underlines)

### Causes Pages
- Each cause uses its initiative color
- Underlines and accents match initiative theme

### Stories
- Category-based coloring:
  - Education stories: Blue tones
  - Disaster stories: Brown/metallic tones
  - Entrepreneurship: Navy/dark blue tones

## Color Usage Guidelines (from CSS)

### Interactive Elements
- **Default State:** Initiative color or black
- **Hover State:** Slightly darker or yellow transition
- **Active State:** Yellow `#f9be71`
- **Transition:** 0.2s ease

### Cards
- **Border:** None or subtle `#ccc`
- **Hover:** Opacity change to 0.6-0.8
- **Background:** White or transparent

### Buttons
- **Primary:** Yellow `#f8d264`
- **Hover:** Darker yellow `#f8b864`
- **Text:** Black `#000`
- **Border Radius:** 25px (rounded)

### Links
- **Default:** Inherit or black
- **Hover:** Yellow `#f9be71`
- **Active:** Yellow `#f9be71`
- **Underline:** Animated yellow bar
