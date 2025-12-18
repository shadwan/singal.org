---
title: "Our Initiatives in Education"
category: education
page_type: "archive_listing"
projects: 1
color_theme: "#52a7e4"
---

# Our Initiatives in Education

**Hero Tagline:** We believe in empowering individuals so they can lift themselves out of poverty

## Project Listing

### Dream Centers - Mumbai, India

**Partner:** Dream Centers  
**Location:** Mumbai slum communities, India

**Description:**  
The Singal Foundation partnered with the Dream Centers to fund 8 self sustainable schools in the slum communities of India. To date, the Singal Foundation has funded the development of 8 schools and served over 1,900 children in India - and this is only the beginning. Our vision is to give every child an opportunity to get a quality education.

**Image:** `img/edu-d.jpg`

**CTA:** More Information → `/cause/education.html`

---

## Discover More Initiatives

Grid of 5 other initiative cards:
1. Medical Relief (red-orange)
2. Shelter Homes (purple)
3. Entrepreneurship (navy-blue)
4. Youth Entrepreneurship (orange)
5. Disaster Relief (metalic)

## Design Notes

**Page Structure:**
- Hero section with background image (class: `hero-image-cause`)
- Single project section (class: `edu-s-sec`)
- Project displays as 2-column layout: image left, text right
- "Discover More Initiatives" grid (5 cards, other initiatives)
- Newsletter signup form
- Standard footer

**Body Class:** `.bd-causes`

**Hero Classes:** `.hero-image-cause` (different from cause detail pages)

**Project Section:**
- `.edu-s-sec` - Education section wrapper
- `.ed-img` - Image column
- `.edu-s-text` - Text column with title, description, CTA
- `.detail-btn` - CTA button container

**Layout Pattern:**
- 2-column (col-md-6 / col-md-6)
- Image on left, content on right
- CTA button: "More Information" with right arrow

**Archive Grid:**
- `.services.arc.causes` - Archive services section
- `.service-box.archive` - Individual service card
- `.ex` - Some cards have "ex" class (purpose unclear)
- 5 cards in mobile-responsive grid (`.mob-ser`)

**Note:** This is a simpler "archive" page format showing one primary project per initiative category, with links to other initiatives. Different structure from the detailed cause pages which show full approach sections.
