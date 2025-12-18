---
title: "Causes - Singal Foundation"
page_type: causes_list
url: "causes.html"
template: hero_with_grid
body_class: "bd-causes"
sections:
  - hero
  - causes_grid
  - newsletter_signup
---

# Causes Page Content

## Hero Section
**Layout:** Full-width background image
- Background class: `hero-image-cause`
- Background image: Specified via CSS

### Hero Text
**Headline:**
```
Discover Our
Work At A Glance
```

**Subheadline:**
```
We are committed to creating a world where everyone
has the opportunity to succeed.
```

---

## Discover Our Causes Section
**Heading:** "Discover Our Causes"
**Layout:** 3-column grid (responsive to 2-col, then 1-col)

### Cause 1: Education
- **Icon:** `img/edu-icon.png`
- **Color:** Blue (class: `blue`)
- **Link:** `archive/education.html`
- **Title:** Education
- **Description:**
```
The path out of poverty begins when the next generation can access quality education.
```
- **Button:** "Discover" with right arrow icon
- **Button Style:** Bordered button (yellow border, no fill)

### Cause 2: Shelter Homes
- **Icon:** `img/home-icon.png`
- **Color:** Purple (class: `purple`)
- **Link:** `archive/shelter.html`
- **Title:** Shelter Homes
- **Description:**
```
We believe in giving children access to a safe and stable environment in which they can grow and thrive.
```
**Note:** Homepage says "individuals" but this page says "children"
- **Button:** "Discover" with right arrow icon

### Cause 3: Entrepreneurship
- **Icon:** `img/ent-icon.png`
- **Color:** Navy Blue (class: `navy-blue`)
- **Link:** `archive/entrepreneurship.html`
- **Title:** Entrepreneurship
- **Description:**
```
By giving people the tools to lead a productive life, they can lift themselves out of poverty.
```
- **Button:** "Discover" with right arrow icon

### Cause 4: Youth Entrepreneurship
- **Icon:** `img/yoth-icon.png`
- **Color:** Orange (class: `orange`)
- **Link:** `archive/youth-entrepreneurship.html`
- **Title:** Youth Entrepreneurship
- **Description:**
```
We strive to equip young people with the values and visions to pursue
their dreams.
```
- **Button:** "Discover" with right arrow icon

### Cause 5: Medical Relief
- **Icon:** `img/medi-icon.png`
- **Color:** Red-Orange (class: `red-orange`)
- **Link:** `archive/medical-relief.html`
- **Title:** Medical Relief
- **Description:**
```
We can save lives by delivering healthcare services to those who need
it the most.
```
- **Button:** "Discover" with right arrow icon

### Cause 6: Disaster Relief
- **Icon:** `img/de-icon.png`
- **Color:** Metallic (class: `metalic`)
- **Link:** `archive/disaster-relief.html`
- **Title:** Disaster Relief
- **Description:**
```
We are committed to providing immediate and tangible relief to those affected by natural disasters.
```
- **Button:** "Discover" with right arrow icon

---

## Newsletter Signup Section
**See:** `global/newsletter.md`
**Variant:** Cause page variant (gray background)

---

## HTML Structure Notes

### Hero Section:
```html
<div class="hero-image-cause">
  <div class="container hero-text">
    <h1>Discover Our <br/>Work At A Glance</h1>
    <p>We are committed to creating a world where everyone <br/>has the opportunity to succeed.</p>
  </div>
</div>
```

### Causes Grid:
```html
<section class="services causes">
  <div class="container">
    <div class="row">
      <div class="text-center col-md-12 mb-5">
        <h3>Discover Our Causes</h3>
      </div>
      
      <!-- 6 cause cards, col-md-6 col-lg-4 -->
      <div class="col-md-6 col-lg-4 service-box">
        <div class="card text-center">
          <a href="[link]">
            <div class="card-body">
              <img src="[icon]" alt="" class="fluid-img">
              <h5 class="card-title [color-class]">[Title]</h5>
              <p class="card-text">[Description]</p>
              <div class="btn-border">
                <button>Discover <i class="fa fa-long-arrow-right"></i></button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Button Style:
- Class: `btn-border`
- Contains: `<button>` tag (not `<a>`)
- Style: Yellow border `#f8d264`, transparent background
- Hover: Filled yellow background
- Icon: Right arrow (`fa-long-arrow-right`)
- Animation: Arrow flashes on hover

## Design Notes
- **Card Hover:** Opacity 0.6 on hover
- **Button Hover:** Background fills with yellow, arrow animates
- **Grid:** Responsive 3-col → 2-col → 1-col
- **Margin Bottom:** Increased to 60px per card (vs 30px on homepage)
