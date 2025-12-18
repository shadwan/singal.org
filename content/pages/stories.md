---
title: "Stories - Singal Foundation"
page_type: stories_list
url: "stories.html"
template: hero_carousel_with_grid
sections:
  - hero_carousel
  - stories_grid
  - show_more_button
total_stories: 11
initially_visible: 6
expandable_stories: 5
---

# Stories Page Content

## Hero Carousel
**Type:** Bootstrap Carousel (4 slides)
**Auto-play:** Yes (Bootstrap data-ride="carousel")
**Indicators:** Yes (4 dots)
**Controls:** Previous/Next arrows

### Slide 1: Caroline's Story
- **Desktop Image:** `img/slider-1.jpg`
- **Mobile Image:** `img/slider-1-mo.jpg`
- **Headline:**
```
A Small Kiosk is
Sending Kids to School
```
- **Subheadline:**
```
Catch a glimpse of Monica's new lease of life, through this uplifting story of
how a small grant had such a profound impact on her family and children.
```
**Note:** Title mentions "Monica" but story is filed as "caroline.html" - possible name variation
- **CTA:** "Read Story" → `stories/caroline.html`

### Slide 2: Farming Story
- **Desktop Image:** `img/slider-2.jpg`
- **Mobile Image:** `img/slider-2-mo.jpg`
- **Headline:**
```
A Pig Farming
Success Story
```
- **Subheadline:**
```
Get insight into the lives of three entrepreneurs
who pulled themselves out of extreme poverty
with a financial grant from the Singal Foundation.
```
- **CTA:** "Read Story" → `stories/farming.html`
- **Class:** `ci2`

### Slide 3: Aditi's Story
- **Desktop Image:** `img/slider-3.jpg`
- **Mobile Image:** `img/slider-3-mo.jpg`
- **Headline:**
```
Aditi,
the Little Dreamer
```
- **Subheadline:**
```
Learn how the ARC Schools are giving slum children the
ability to dream big and see a brighter future for themselves.
```
- **CTA:** "Read Story" → `stories/aditi.html`
- **Class:** `ci3`

### Slide 4: Joanna's Story
- **Desktop Image:** `img/slider-4.jpg`
- **Mobile Image:** `img/slider-4-mo.jpg`
- **Headline:**
```
Joanna Lost
Everything
```
- **Subheadline:**
```
Discover how a grant from the Singal
Foundation bought restoration and hope
to this small business owner.
```
- **CTA:** "Read Story" → `stories/joanna.html`
- **Class:** `ci4`

---

## Stories Grid Section
**Layout:** 2-column grid
**Total Stories:** 11
**Initially Visible:** 6 stories
**Hidden Stories:** 5 stories (shown on "Show More" click)

### Initially Visible Stories (6)

#### Story 1: Joanna
- **Image:** `img/impact-1.jpg`
- **Category:** Disaster Relief / Houston, TX
- **Title:** Joanna Lost all in the Storm
- **Link:** `stories/joanna.html`
- **Box Style:** `impact-img-box` (disaster relief overlay)

#### Story 2: Aditi
- **Image:** `img/impact-2.jpg`
- **Category:** Education / Mumbai, India
- **Title:** Aditi, the Little Dreamer
- **Link:** `stories/aditi.html`
- **Box Style:** `impact-img-box2` (education overlay)

#### Story 3: Caroline
- **Image:** `img/impact-3.jpg`
- **Category:** Entreprenership / Sabwani Marinda, East Africa
- **Title:** A Small Kiosk is Sending Kids to School
- **Link:** `stories/caroline.html`
- **Box Style:** `impact-img-box3` (entrepreneurship overlay)

#### Story 4: Claudia
- **Image:** `img/impact-4.jpg`
- **Category:** Disaster Relief / Houston, TX
- **Title:** Stronger Than the Storm
- **Link:** `stories/claudia.html`
- **Box Style:** `impact-img-box` (disaster relief overlay)

#### Story 5: Farming
- **Image:** `img/impact-6.jpg`
- **Category:** Entreprenership / Sabwani Marinda, East Africa
- **Title:** A Pig Farming Success Story
- **Link:** `stories/farming.html`
- **Box Style:** `impact-img-box3` (entrepreneurship overlay)

#### Story 6: Ayush
- **Image:** `img/impact-5.jpg`
- **Category:** Education / Mumbai, India
- **Title:** Ayush Beat the Odds
- **Link:** `stories/ayush.html`
- **Box Style:** `impact-img-box2` (education overlay)

---

### Hidden Stories (5) - Revealed on Click
**Container ID:** `hide`
**Container Class:** `more-story row plr15`

#### Story 7: Elizabeth
- **Image:** `img/impact-7.jpg`
- **Category:** Entreprenership / Sabwani Marinda, East Africa
- **Title:** From Casual Worker to Business Owner
- **Link:** `stories/elizabeth.html`
- **Box Style:** `impact-img-box3` (entrepreneurship overlay)

#### Story 8: Aarav
- **Image:** `img/impact-8.jpg`
- **Category:** Education / Mumbai, India
- **Title:** Aarav Gets His First Toothbrush
- **Link:** `stories/aarav.html`
- **Box Style:** `impact-img-box2` (education overlay)

#### Story 9: Roshni
- **Image:** `img/impact-9.jpg`
- **Category:** Education / Mumbai, India
- **Title:** The Girl Who Pleaded to Go to School
- **Link:** `stories/roshni.html`
- **Box Style:** `impact-img-box2` (education overlay)

#### Story 10: Chuck
- **Image:** `img/impact-10.jpg`
- **Category:** Disaster Relief / Houston, TX
- **Title:** Keeping the Faith
- **Link:** `stories/chuck.html`
- **Box Style:** `impact-img-box` (disaster relief overlay)

#### Story 11: Charles
- **Image:** `img/impact-11.jpg`
- **Category:** Disaster Relief / Houston, TX
- **Title:** Top Houston Chiropractor Receives Grant
- **Link:** `stories/charles.html`
- **Box Style:** `impact-img-box` (disaster relief overlay)

---

## Show More Button
**Text:** "Show More Stories" with down angle icon
**Class:** `btn more-stories-btn show-story`
**Container Class:** `btns f-center2`
**Behavior:** Reveals hidden stories container
**Icon:** `fa-angle-down`

---

## Story Categories Summary
- **Education:** 4 stories (Aditi, Ayush, Aarav, Roshni)
- **Entrepreneurship:** 3 stories (Caroline, Farming, Elizabeth)
- **Disaster Relief:** 4 stories (Joanna, Claudia, Chuck, Charles)

## Geographic Distribution
- **Mumbai, India:** 4 stories (all education)
- **Houston, TX:** 4 stories (all disaster relief)
- **Sabwani Marinda, East Africa:** 3 stories (all entrepreneurship)

---

## HTML Structure Notes

### Hero Carousel:
```html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <!-- 4 carousel items -->
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
```

### Stories Grid:
```html
<div class="impact-area">
  <div class="container">
    <div class="row">
      <!-- 6 initially visible stories -->
      <div class="col-md-6">
        <a href="[story-url]">
          <div class="impact-img-box [or impact-img-box2/impact-img-box3]">
            <img src="[image]">
            <div class="impct-text">
              <span>[Category / Location]</span>
              <h4>[Title]</h4>
              <span class="link">Read story</span>
            </div>
          </div>
        </a>
      </div>
      
      <!-- Hidden stories container -->
      <div class="more-story row plr15" id="hide">
        <!-- 5 additional stories -->
      </div>
      
      <!-- Show More Button -->
      <div class="clear"></div>
      <div class="btns f-center2">
        <a class="btn more-stories-btn show-story">
          Show More Stories <i class="fa fa-angle-down"></i>
        </a>
      </div>
    </div>
  </div>
</div>
```

## Design Notes
- **Carousel:** Full-width hero carousel with 4 featured stories
- **Grid:** 2-column responsive grid of story cards
- **Color Coding:** Stories use category-specific overlay colors
- **Link Style:** "Read story" with yellow color and underline
- **Expand Behavior:** JavaScript reveals hidden stories div
- **Image Overlays:** Gradient overlays in initiative colors
- **Hover Effect:** Increased opacity on hover

## Content Note
Slide 1 mentions "Monica's new lease of life" but the story is filed as caroline.html - this suggests the protagonist's name may be Monica Caroline or the filename doesn't match the character name.
