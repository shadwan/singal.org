---
component: newsletter_signup
type: global_component
used_on:
  - home
  - about
  - causes (with gray background)
---

# Newsletter Signup Component

## Heading
```
Get Involved & Make a Difference
```

## Form Configuration
**Form Action:** `https://sendlane.com/form-api/submission/eyJkb21haW4iOiJzaW5nYWwiLCJmb3JtX2lkIjoiMDA2MDVlY2QtNWU1Zi00YzBmLTk2N2ItZmE2ZGExZDE0YjdkIn0=`
**Method:** POST
**Class:** `form-horizontal`

### Form Fields

**Field 1: First Name**
- **Name attribute:** `1`
- **Type:** Text
- **Placeholder:** "First name"
- **Required:** No (optional)
- **Class:** `form-control`
- **Container class:** `input-box`

**Field 2: Email**
- **Name attribute:** `3`
- **Type:** Email
- **Placeholder:** "Email"
- **Required:** Yes
- **Class:** `form-control`
- **Container class:** `input-box2`

### Submit Button
- **Text:** "Join Now"
- **Icon:** `img/hand.png`
- **Type:** submit
- **ID:** `submit-button`
- **Value:** "Subscribe"
- **Class:** `donate-btn ico`

## Tagline
```
Together, let's create a future where everyone has a chance to succeed.
```

## HTML Structure
```html
<div class="join-now-area [cause]">
  <div class="container">
    <div class="text-center col-md-12 mb-4">
      <h3>Get Involved & Make a Difference</h3>
    </div>
    <div class="row">
      <div class="row form-area">
        <form class="form-horizontal" action="[sendlane-url]" method="post">
          <div class="input-box">
            <input class="form-control" name="1" placeholder="First name" type="Text">
          </div>
          <div class="input-box2">
            <input class="form-control" name="3" placeholder="Email" type="Email" required="required">
          </div>
          <div class="exm-t">
            <button id="submit-button" value="Subscribe" type="submit" class="donate-btn ico">
              <img src="img/hand.png"> Join Now
            </button>
          </div>
        </form>
      </div>
    </div>
    <p>Together, let's create a future where everyone has a chance to succeed.</p>
  </div>
</div>
```

## Variations

### Standard Version (Homepage, About)
- **Background:** White
- **Margin bottom:** 50px

### Cause Page Version
- **Background:** #f7f7f7 (light gray)
- **Margin bottom:** 0
- **Margin top:** 60px
- **Padding:** 60px top/bottom
- **Class:** `join-now-area cause`

## Styling Notes
- **Form area background:** #eee
- **Form padding:** 30px
- **Form border:** 1px solid #e6e6e6
- **Input boxes:**
  - First name width: 280px
  - Email width: 370px
  - Margin right: 20px between fields
- **Form controls:**
  - Padding: 9px 25px
  - Line height: 30px
  - Border radius: 50px (rounded)
  - Border: 1px solid #f7f1e8
  - Focus: Border color #f0e2ce, no box shadow
- **Submit button:**
  - Background: #f8d264 (brand yellow)
  - Hover: #f8b864
  - Margin top: 10px (form-horizontal removes this)
- **Tagline:**
  - Text-align: center
  - Margin-top: 40px
