---
title: "Education - Singal Foundation"
page_type: education_videos
url: "education.html"
template: hero_carousel_with_videos
sections:
  - hero_carousel
  - video_grid
---

# Education Page Content

## Hero Carousel
**Type:** Bootstrap Carousel (3 slides)
**Auto-play:** Yes (Bootstrap data-ride="carousel")
**Indicators:** Yes (3 dots)
**Controls:** Previous/Next arrows

### Slide 1
- **Desktop Image:** `img/e-slider-3.jpg`
- **Mobile Image:** `img/e-slider-3-mo.jpg`
- **Headline:**
```
Our Initiative in
Financial Education
```
- **Subheadline:**
```
Inspiring children and teens to live empowered lives
through financial education.
```
- **CTA:** Commented out (was "Read Story" linking to stories/caroline.html)

### Slide 2
- **Desktop Image:** `img/e-slider-1.jpg`
- **Mobile Image:** `img/e-slider-1-mo.jpg`
- **Headline:**
```
Our Initiative in
Financial Education
```
- **Subheadline:**
```
Inspiring children and teens to live empowered lives
through financial education.
```
- **CTA:** Commented out (was "Read Story" linking to stories/farming.html)
- **Class:** `ci2`

### Slide 3
- **Desktop Image:** `img/e-slider-2.jpg`
- **Mobile Image:** `img/e-slider-2-mo.jpg`
- **Headline:**
```
Our Initiative in
Financial Education
```
- **Subheadline:**
```
Inspiring children and teens to live empowered lives
through financial education.
```
- **CTA:** Commented out (was "Read Story" linking to stories/aditi.html)
- **Class:** `ci3`

---

## Video Grid Section
**Layout:** 2-column grid (3 rows = 6 videos total)
**Wrapper Class:** `impact-area edu`
**Video Player:** Vimeo embeds via Magnific Popup

### Row 1: Knowledge Bomb Series

#### Video 1: The Three Rules of the Rich
- **Thumbnail:** `img/kb-thumb-1.jpg`
- **Title:** The Three Rules of the Rich
- **Video URL:** `https://vimeo.com/471558307`
- **Popup Class:** `popup-vimeo1`
- **Play Icon:** `img/click-video.png`
- **Box Style:** `impact-img-box` (disaster relief color overlay)

#### Video 2: You Must Have Multiple Streams Of Income
- **Thumbnail:** `img/kb-thumb-2.jpg`
- **Title:** You Must Have Multiple Streams Of Income
- **Video URL:** `https://vimeo.com/471558681`
- **Popup Class:** `popup-vimeo2`
- **Play Icon:** `img/click-video.png`
- **Box Style:** `impact-img-box3` (entrepreneurship color overlay)

### Row 2: BLS Series

#### Video 3: Set A Goal
- **Thumbnail:** `img/bls-thumb-1.jpg`
- **Title:** Set A Goal
- **Video URL:** `https://vimeo.com/361126193`
- **Popup Class:** `popup-vimeo1`
- **Play Icon:** `img/click-video.png`
- **Box Style:** `impact-img-box3` (entrepreneurship color overlay)

#### Video 4: Discover Your Spark
- **Thumbnail:** `img/bls-thumb-2.jpg`
- **Title:** Discover Your Spark
- **Video URL:** `https://vimeo.com/361126456`
- **Popup Class:** `popup-vimeo2`
- **Play Icon:** `img/click-video.png`
- **Box Style:** `impact-img-box` (disaster relief color overlay)

### Row 3: RE Series

#### Video 5: Overview of the System
- **Thumbnail:** `img/re-thumb-1.jpg`
- **Title:** Overview of the System
- **Video URL:** `https://vimeo.com/355867892`
- **Popup Class:** `popup-vimeo1`
- **Play Icon:** `img/click-video.png`
- **Box Style:** `impact-img-box` (disaster relief color overlay)

#### Video 6: Giving Your Child an Unfair Advantage
- **Thumbnail:** `img/re-thumb-2.jpg`
- **Title:** Giving Your Child an Unfair Advantage
- **Video URL:** `https://vimeo.com/373149845`
- **Popup Class:** `popup-vimeo4`
- **Play Icon:** `img/click-video.png`
- **Box Style:** `impact-img-box3` (entrepreneurship color overlay)

---

## Commented Out Content

### Thank You Message (hidden):
```html
<!--<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="detail-text ex">
        <h2>Thank You Chris Farell And Team for Submitting These Amazing Videos.</h2>
      </div>
    </div>
  </div>
</div>-->
```

---

## Video Series Context

**KB Series:** "Knowledge Bomb" - Financial education fundamentals
**BLS Series:** Goal setting and personal development  
**RE Series:** System overview and child development

**Note:** These appear to be partner-created content for financial education initiatives.

---

## HTML Structure Notes

### Hero Carousel:
```html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  
  <div class="carousel-inner">
    <div class="carousel-item [active] [ci2/ci3]">
      <img class="w-100" src="[desktop-image]">
      <img class="w-100 mobslide" src="[mobile-image]">
      <div class="container edu carousel-caption d-none d-md-block">
        <h1>Headline</h1>
        <p>Subheadline</p>
        <!-- Optional CTA button -->
      </div>
    </div>
  </div>
  
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

### Video Grid:
```html
<div class="impact-area edu">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="impact-img-box [or impact-img-box3]">
          <img src="[thumbnail]">
          <div class="video-text">
            <a class="popup-vimeo[1-4]" href="[vimeo-url]">
              <img src="img/click-video.png" class="video-play-icon">
            </a>
            <h4>[Video Title]</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Magnific Popup Script:
```javascript
$('.popup-vimeo1, .popup-vimeo2, .popup-vimeo3, .popup-vimeo4').magnificPopup({
  disableOn: 300,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});
```

## Design Notes
- **Mobile Images:** Separate portrait-oriented images for mobile
- **Carousel Caption:** Hidden on mobile (`d-none d-md-block`)
- **Video Overlays:** Reuses impact box overlay styles (disaster/entrepreneurship colors)
- **Play Icon:** Centered absolutely with click-to-play image
- **Video Title:** Positioned at bottom of thumbnail
- **No Footer CTA:** This page goes straight to footer (no newsletter signup)
