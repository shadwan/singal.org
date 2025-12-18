---
title: "Singal Foundation - Home"
page_type: homepage
url: "index.html"
template: hero_with_video
sections:
  - hero
  - initiatives_grid
  - stories_carousel
  - donation_cta
  - newsletter_signup
meta:
  og_title: "Building a Better Future for Everyone."
  og_description: "The Singal Foundation is a non-profit organization that is committed to creating  a world where everyone has the opportunity to succeed.  Our work includes building schools, creating economic opportunity and growth, providing disaster and medial relief and training the next generation of youth entrepreneurs."
  og_image: "https://singal.org/img/share.png"
---

# Homepage Content

## Hero Section
**Layout:** Full-width background video with overlay
- Background: `video/ocean.mp4` (autoplay, muted, loop)
- Overlay: rgba(0, 0, 0, .5)
- Video also available as popup: Vimeo embed `https://player.vimeo.com/video/351128842`

### Hero Text
**Headline:**
```
Building a
Better Future
for Everyone.
```

**Subheadline:**
```
We are committed to creating a world where
everyone has the opportunity to succeed.
```

### Hero CTAs
- **Desktop:** "Play Video" (opens video popup)
- **Mobile:** "Click Here To Watch Video" (opens video popup)
- Icon: fa-play-circle
- Button class: play-btn

---

## Our Initiatives Section
**Layout:** 3-column grid (responsive)
**Heading:** "Our Initiatives"

### Initiative 1: Education
- **Icon:** `img/edu-icon.png`
- **Color:** Blue (#52a7e4)
- **Link:** `archive/education.html`
- **Title:** Education
- **Description:** 
```
The path out of poverty begins when the next generation can access quality education.
```

### Initiative 2: Shelter Homes
- **Icon:** `img/home-icon.png`
- **Color:** Purple (#7a7cc7)
- **Link:** `archive/shelter.html`
- **Title:** Shelter Homes
- **Description:**
```
We believe in giving individuals access to a safe and stable environment in which they can grow and thrive.
```

### Initiative 3: Entrepreneurship
- **Icon:** `img/ent-icon.png`
- **Color:** Navy Blue (#194f75)
- **Link:** `archive/entrepreneurship.html`
- **Title:** Entrepreneurship
- **Description:**
```
By giving people the tools to lead a productive life, they can lift themselves out of poverty.
```

### Initiative 4: Youth Entrepreneurship
- **Icon:** `img/yoth-icon.png`
- **Color:** Orange (#f8b864)
- **Link:** `archive/youth-entrepreneurship.html`
- **Title:** Youth Entrepreneurship
- **Description:**
```
We strive to equip young people with the values and visions to pursue
their dreams.
```

### Initiative 5: Medical Relief
- **Icon:** `img/medi-icon.png`
- **Color:** Red-Orange/Blue (#6890b7)
- **Link:** `archive/medical-relief.html`
- **Title:** Medical Relief
- **Description:**
```
We can save lives by delivering healthcare services to those who need
it the most.
```

### Initiative 6: Disaster Relief
- **Icon:** `img/de-icon.png`
- **Color:** Metallic (#b28f61)
- **Link:** `archive/disaster-relief.html`
- **Title:** Disaster Relief
- **Description:**
```
We are committed to providing immediate and tangible relief to those affected by natural disasters.
```

---

## Our Stories Section
**Layout:** Owl Carousel (image carousel with overlays)
**Heading:** "Our Stories"

### Featured Stories (in carousel order):

#### Story 1: Joanna
- **Image:** `img/slide1.jpg`
- **Link:** `stories/joanna.html`
- **Category:** Disaster Relief / Houston, TX
- **Title:** Joanna Lost Everything in the Storm
- **CTA:** Read story

#### Story 2: Farming Success
- **Image:** `img/slide2.jpg`
- **Link:** `stories/farming.html`
- **Category:** Entreprenership / Sabwani Marinda, East Africa
- **Title:** A Pig Farming Success Story
- **CTA:** Read story

#### Story 3: Ayush
- **Image:** `img/slide3.jpg`
- **Link:** `stories/ayush.html`
- **Category:** Education / Mumbai, India
- **Title:** Ayush Beat the Odds
- **CTA:** Read story

#### Story 4: Claudia
- **Image:** `img/slide4.jpg`
- **Link:** `stories/claudia.html`
- **Category:** Disaster Relief / Houston, TX
- **Title:** Stronger Than The Storm
- **CTA:** Read story

#### Story 5: Elizabeth
- **Image:** `img/slide5.jpg`
- **Link:** `stories/elizabeth.html`
- **Category:** Entreprenership / Sabwani Marinda, East Africa
- **Title:** From Casual Worker to Business Owner
- **CTA:** Read story

#### Story 6: Caroline
- **Image:** `img/slide6.jpg`
- **Link:** `stories/caroline.html`
- **Category:** Entreprenership / Sabwani Marinda, East Africa
- **Title:** A Kiosk Stand is Sending Kids to School
- **CTA:** Read story

#### Story 7: Roshni
- **Image:** `img/slide7.jpg`
- **Link:** `stories/roshni.html`
- **Category:** Education / Mumbai, India
- **Title:** The Girl Who Pleaded to Go to School
- **CTA:** Read story

### Stories CTA
- **Button:** "More Stories" with right arrow icon
- **Link:** `stories.html`

---

## Donation Section
**Layout:** 2-column (50/50), left side has background image
**Background Image:** `img/donate.png` (positioned left)
**Background Color:** #060709

### Content (right column):
**Headline:**
```
736 Million
People Live in
Extreme Poverty
```

**Body Text:**
```
With each donation, you're helping lift someone
out of poverty through education and entrepreneurship.
```

**CTA:**
- **Button:** "Donate Now" with icon
- **Icon:** `img/donate-icon.png`
- **Link:** `donate.html`

---

## Get Involved & Make a Difference
**Layout:** Centered heading with inline form

**Heading:** "Get Involved & Make a Difference"

### Newsletter Form
**Form Action:** `https://sendlane.com/form-api/submission/eyJkb21haW4iOiJzaW5nYWwiLCJmb3JtX2lkIjoiMDA2MDVlY2QtNWU1Zi00YzBmLTk2N2ItZmE2ZGExZDE0YjdkIn0=`
**Method:** POST

**Fields:**
1. First name (name="1", type="Text", optional)
2. Email (name="3", type="Email", required)

**Submit Button:**
- **Text:** "Join Now"
- **Icon:** `img/hand.png`
- **Type:** submit

**Tagline:**
```
Together, let's create a future where everyone has a chance to succeed.
```

---

## HTML Structure Notes

### Hero Section Structure:
```
<div class="hero-image">
  <div class="hero-text-out"> [overlay wrapper]
    <div class="container hero-text">
      <h1>Headline</h1>
      <p>Subheadline</p>
      <div class="btn-center">
        <a class="video-popup play-btn">CTA</a>
      </div>
    </div>
  </div>
  <video>Background video</video>
</div>
```

### Initiatives Grid:
```
<section class="services">
  <div class="container">
    <div class="row">
      <h3>Our Initiatives</h3>
      <!-- 6 columns, col-md-6 col-lg-4 -->
      <div class="service-box">
        <div class="card text-center">
          <a href="[link]">
            <div class="card-body">
              <img src="[icon]">
              <h5 class="card-title [color-class]">[Title]</h5>
              <p class="card-text">[Description]</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Stories Carousel:
```
<section class="our-stories">
  <div class="container-fluid">
    <h3>Our Stories</h3>
    <div class="owl-carousel">
      <div class="item">
        <a href="[story-link]">
          <img class="owl-lazy" data-src="[image]">
        </a>
        <div class="carousel-text">
          <span>[Category / Location]</span>
          <h4>[Title]</h4>
          <a href="[story-link]">Read story</a>
        </div>
      </div>
    </div>
    <div class="btns text-center">
      <a href="stories.html" class="btn more-stories-btn">More Stories</a>
    </div>
  </div>
</section>
```

### Donate Section:
```
<div class="donate-section">
  <!-- Background image on left via CSS -->
  <div class="container">
    <div class="row">
      <div class="col-md-6"></div> <!-- Empty left column -->
      <div class="col-md-12 col-lg-6">
        <div class="donate-text">
          <h2>Statistic</h2>
          <p>Description</p>
          <a class="donate-btn">CTA</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Newsletter Form:
```
<div class="join-now-area">
  <div class="container">
    <h3>Get Involved & Make a Difference</h3>
    <div class="row form-area">
      <form class="form-horizontal" action="[sendlane-url]" method="post">
        <div class="input-box">
          <input class="form-control" name="1" placeholder="First name">
        </div>
        <div class="input-box2">
          <input class="form-control" name="3" placeholder="Email" required>
        </div>
        <div class="exm-t">
          <button type="submit" class="donate-btn ico">
            <img src="img/hand.png"> Join Now
          </button>
        </div>
      </form>
    </div>
    <p>Together, let's create a future...</p>
  </div>
</div>
```
