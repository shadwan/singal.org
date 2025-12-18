---
title: "Contact - Singal Foundation"
page_type: contact
url: "contact.html"
template: map_with_form
sections:
  - contact_form
  - contact_info
form_action: "contact-process.php"
---

# Contact Page Content

## Main Container
**Layout:** Map background with white card overlay
**Background Image:** `img/map-bg.jpg` (via CSS class `map-area`)
**Container:** White card with shadow (`map-bg` class)

---

## Contact Form Section (Left Column)
**Column Width:** 8 columns (col-md-8)
**Heading:** "Send Us a Message"

### Form States

**Success State** (class: `sent`):
```
Thank you! Your message has been sent.
```

**Default State** (class: `unsent`):
```
Have a question, concern or feedback? Write to us anytime using the form below.
```

**Error State** (class: `oops`):
```
Appologies, something has gone wrong. Please try again.
```

### Form Configuration
- **Method:** POST
- **Action:** `contact-process.php`
- **ID:** `contact`
- **Hidden Field:** `<input type="hidden" name="submission" value="true">`

### Form Fields

**Field 1: Name**
- **Type:** text
- **Name:** `name`
- **Placeholder:** "What is your name?"
- **Required:** Not specified
- **Column:** col-md-6

**Field 2: Email**
- **Type:** text
- **Name:** `emailAddress`
- **Placeholder:** "Email address"
- **Required:** Not specified
- **Column:** col-md-6

**Field 3: Subject**
- **Type:** text
- **Name:** `messageSubject`
- **Placeholder:** "What is this message about?"
- **Required:** Not specified
- **Column:** col-12
- **Class:** `optional` (has "optional" span overlay)

**Field 4: Message**
- **Type:** textarea
- **Name:** `message`
- **Placeholder:** "Enter your message..."
- **Required:** Not specified
- **Column:** col-12
- **Height:** 85px (via CSS)

### Submit Button
- **Text:** "Send Now" with right arrow icon
- **Class:** `donate-btn ico`
- **Action:** JavaScript submit: `javascript:$('#contact').submit();`
- **Container Class:** `detail-btn con`

---

## Contact Information Section (Right Column)
**Column Width:** 4 columns (col-md-4)
**Heading:** "Contact Information"

### Introduction Text
```
Whether you want to get involved, learn more about our projects or just say hello, we would love to hear from you.
```

### Email Section
**Label:** "Email us at:"
```
support@singal.org
```

### Office Location
**Label:** "Our office is located at:"
```
2098 Gaither Road
Rockville, Maryland – 20850
```
**Note:** Zip code is 20850 here, but footer shows 20878 - discrepancy in original

### Social Media Section
**Label:** "We're social. Are you?"

**Social Links:**
1. **Facebook**
   - **Image:** `img/face.png`
   - **URL:** `https://www.facebook.com/Singal-Foundation-109544670382822/`
   - **Target:** `_blank`

2. **Twitter**
   - **Image:** `img/twitter.png`
   - **URL:** `https://twitter.com/SingalFoundati1`
   - **Target:** `_blank`

3. **Instagram**
   - **Image:** `img/insta.png`
   - **URL:** `https://www.instagram.com/singal_foundation/`
   - **Target:** `_blank`

---

## HTML Structure Notes

### Main Container:
```html
<div class="map-area">
  <div class="container">
    <div class="row map-bg">
      <!-- Form Column -->
      <div class="col-md-8 cform">
        <h3>Send Us a Message</h3>
        <p class="sent">Success message</p>
        <p class="unsent">Default message</p>
        <p class="oops">Error message</p>
        <form method="post" action="contact-process.php" class="unsent" id="contact">
          <!-- Form fields -->
        </form>
      </div>
      
      <!-- Info Column -->
      <div class="col-md-4 cinfo">
        <h3>Contact Information</h3>
        <!-- Contact details -->
      </div>
    </div>
  </div>
</div>
```

### Form Structure:
```html
<form method="post" action="contact-process.php" class="unsent" id="contact">
  <input type="hidden" name="submission" value="true">
  <div class="information_from row">
    <!-- Row 1: Name and Email -->
    <div class="form-group col-md-6">
      <input type="text" class="form-control" name="name" placeholder="What is your name?">
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" name="emailAddress" placeholder="Email address">
    </div>
    
    <!-- Row 2: Subject (optional) -->
    <div class="form-group optional col-12">
      <input type="text" class="form-control" name="messageSubject" placeholder="What is this message about?">
    </div>
    
    <!-- Row 3: Message -->
    <div class="form-group col-12">
      <textarea class="form-control" name="message" placeholder="Enter your message..."></textarea>
    </div>
    
    <!-- Submit Button -->
    <div class="detail-btn con col-12">
      <a class="donate-btn ico" href="javascript:$('#contact').submit();">
        Send Now <i class="fa fa-long-arrow-right"></i>
      </a>
    </div>
  </div>
</form>
```

## Design Notes
- **Background:** Full-width map image (`img/map-bg.jpg`)
- **Card:** White background with box shadow and border-radius
- **Padding:** 40px 30px 30px
- **Form States:** Controlled via class visibility (sent/unsent/oops)
- **Optional Field:** Has "optional" span that fades on hover
- **Social Icons:** PNG images (not Font Awesome like footer)
- **Hover Effect:** Social icons opacity 0.8
- **Mobile Responsive:** Form and info stack vertically on mobile

## Discrepancies Noted
1. **Zip Code:** Contact page shows 20850, footer shows 20878
2. **Social Icons:** Different implementation than footer (PNG vs Font Awesome)
3. **Email Type:** Email field is type="text" not type="email"
