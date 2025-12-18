---
component: navigation
type: global_component
---

# Navigation Component

## Logo
- **File:** `img/logo.svg`
- **Link:** `index.html`
- **Alt:** ""

## Main Menu Items
1. **Home**
   - Link: `index.html`
   - Active class: `active` (when on homepage)

2. **About**
   - Link: `about.html`
   - Active class: `active` (when on about page)

3. **Causes**
   - Link: `causes.html`
   - Active class: `active` (when on causes page)

4. **Education**
   - Link: `education.html`
   - Active class: `active` (when on education page)

5. **Stories**
   - Link: `stories.html`
   - Active class: `active` (when on stories page)

6. **Contact**
   - Link: `contact.html`
   - Active class: `active` (when on contact page)

## Donate Button
- **Text:** "Donate Now"
- **Link:** `donate.html`
- **Icon Desktop:** `img/donate-icon.png`
- **Icon Mobile:** `img/donate-icon-mob.png`
- **Classes:** `donate-btn ico`
- **Mobile class:** `ex mob` (additional)
- **Position:** Right side of navigation

## Mobile Menu
- **Toggle:** Hamburger icon (Bootstrap navbar-toggler)
- **Behavior:** Collapses to hamburger menu on mobile
- **Donate button:** Appears in top-right before hamburger toggle

## Sticky Behavior
- **Class:** `navbar_fixed` (applied on scroll)
- **Data attributes:** `data-spy="affix" data-offset-top="60" data-offset-bottom="200"`
- **Scroll effect:** 
  - Fixed position on scroll
  - Background changes to #3b3b3b
  - Box shadow added
  - Slides down from top

## HTML Structure
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light" data-spy="affix" data-offset-top="60" data-offset-bottom="200">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="img/logo.svg" alt="">
    </a>
    
    <!-- Mobile Donate Button -->
    <ul class="navbar-nav mob">
      <li class="nav-item dnt-btn">
        <a class="donate-btn ico ex mob" href="donate.html">
          <img src="img/donate-icon-mob.png"><br/>Donate Now
        </a>
      </li>
    </ul>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarToggler">
      <!-- Main Menu -->
      <ul class="navbar-nav mx-auto mt-2 mt-lg-0 mdl-menu">
        <li class="nav-item [active]">
          <a class="nav-link" href="[url]">[Label]</a>
        </li>
      </ul>
      
      <!-- Desktop Donate Button -->
      <ul class="navbar-nav desk">
        <li class="nav-item dnt-btn">
          <a class="donate-btn ico" href="donate.html">
            <img src="img/donate-icon.png"> Donate Now
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Styling Notes
- **Base class:** `navbar navbar-expand-lg navbar-light bg-light`
- **Container:** Centered, responsive
- **Logo width:** 175px
- **Menu alignment:** Center (mx-auto)
- **Font weight:** Bold for all links
- **Active state:** Yellow underline (#f9be71) that grows on hover
- **Hover effect:** Yellow underline animation (0.2s transition)
- **Padding:** 22px left/right per menu item
