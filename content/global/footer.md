---
component: footer
type: global_component
---

# Footer Component

## Logo
- **File:** `img/white-logo.png`
- **Class:** `f-logo`
- **Alt:** ""

## Our Office Section
**Heading:** Our Office

**Address:**
```
2098 Gaither Road Rockville
Maryland – 20878
United States
```

## Contact Section
**Heading:** Contact

**Email:** support@singal.org

### Social Media Links
**Facebook:**
- **URL:** `https://www.facebook.com/Singal-Foundation-109544670382822/`
- **Title:** "Join us on Facebook"
- **Icon:** `fa fa-facebook`
- **Class:** `fb`
- **Target:** `_blank`

**Twitter:**
- **URL:** `https://twitter.com/SingalFoundati1`
- **Title:** "Join us on Twitter"
- **Icon:** `fa fa-twitter`
- **Class:** `tw`
- **Target:** `_blank`

**Instagram:**
- **URL:** `https://www.instagram.com/singal_foundation/`
- **Title:** "Join us on Instagram"
- **Icon:** `fa fa-instagram`
- **Class:** `in`
- **Target:** `_blank`

## Where We're Helping Section
**Heading:** Where We're Helping

**Map Image:**
- **File:** `img/map.png`
- **Class:** `img-fluid`
- **Alt:** ""

## Copyright Section
**Text:**
```
© 2021 Singal.org, All Rights Reserved. | Singal Foundation is a 501(c)(3) Non-Profit Organization with the EIN: 82-3445516.
```

## HTML Structure
```html
<footer>
  <div class="container m-center">
    <div class="row">
      <!-- Column 1: Logo -->
      <div class="col-lg-3 col-md-12">
        <img class="f-logo" src="img/white-logo.png" alt="">
      </div>
      
      <!-- Column 2: Office -->
      <div class="col-lg-2 col-md-12 office">
        <h4>Our Office</h4>
        <p>Address...</p>
      </div>
      
      <!-- Column 3: Contact -->
      <div class="col-lg-2 col-md-12">
        <h4>Contact</h4>
        support@singal.org
        <div class="effect varrius f-center">
          <div class="buttons">
            <a target="_blank" href="[facebook-url]" class="fb" title="Join us on Facebook">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="[twitter-url]" class="tw" title="Join us on Twitter">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="[instagram-url]" class="in" title="Join us on Instagram">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Column 4: Map -->
      <div class="col-lg-4 offset-sm-1 col-md-12 f-map">
        <h4>Where We're Helping</h4>
        <img src="img/map.png" alt="" class="img-fluid">
      </div>
    </div>
    
    <!-- Copyright Row -->
    <div class="row">
      <div class="col-md-12">
        <small>© 2021 Singal.org, All Rights Reserved...</small>
      </div>
    </div>
  </div>
</footer>
```

## Styling Notes
- **Background:** Black (#000)
- **Padding:** 75px top/bottom
- **Text Color:** #cdcdcd (light gray)
- **Heading Color:** #f9c583 (orange/gold)
- **Heading Font Size:** 16px, bold
- **Social Icons:**
  - Circular buttons (40px width/height)
  - Border: 2px solid
  - Hover effect: Varrius animation (circle fill from top)
  - Transition: 0.2s
- **Layout:** 4-column responsive grid
  - Column 1: Logo (25% width)
  - Column 2: Office (16.67% width)
  - Column 3: Contact (16.67% width)
  - Column 4: Map (33.33% width with offset)
