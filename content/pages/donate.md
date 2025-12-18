---
title: "Donate - Singal Foundation"
page_type: donation_form
url: "donate.html"
template: complex_donation_form
sections:
  - background_slideshow
  - cause_selection
  - donation_amount
  - frequency_selection
  - donor_information
  - payment_processing
background_images:
  - education: "img/donate/ed-bg.jpg"
  - shelter: "img/donate/sh-bg.jpg"
  - entrepreneur: "img/donate/ent-bg.jpg"
  - youth: "img/donate/ye-bg.jpg"
  - medical: "img/donate/mr-bg.jpg"
  - disaster: "img/donate/ds-bg.jpg"
  - any: "img/donate/as-bg.jpg"
---

# Donate Page Content

## Introduction Text
```
Would you like to provide education, medical/dental care for those in pain, inspire entrepreneurs, provide shelter to those in need or support disaster survivors? Your special gift can do these things! Just choose a cause you want to give to and make a difference in someone's life!
```

---

## Choose a Cause Section
**Heading:** "Choose a Cause"
**Type:** Tab interface (Bootstrap tabs)
**Background:** Dynamic background changes based on selected cause

### Cause Tabs (7 options):

#### 1. Education (Default Active)
- **Tab Text:** "Education"
- **Data Attribute:** `data-set="edu"`
- **Background:** `img/donate/ed-bg.jpg`
- **Description:**
```
You can help underprivileged kids in India build a strong foundation for their future. A donation of just $35 a month will provide access to education for students in need. Equipped with literacy and essential life skills, they can grow into adults who earn higher wages, educate their own children, and have a voice in their community.
```
- **Suggested Amount:** $35/month

#### 2. Shelter Homes
- **Tab Text:** "Shelter Homes"
- **Data Attribute:** `data-set="shelter"`
- **Background:** `img/donate/sh-bg.jpg`
- **Description:**
```
Help us create a future where everyone has a safe, stable and affordable place to call home. Your donation will help people achieve a better future and lift themselves out of poverty.
```

#### 3. Entrepreneurship
- **Tab Text:** "Entrepreneurship"
- **Data Attribute:** `data-set="entrepreneur"`
- **Background:** `img/donate/ent-bg.jpg`
- **Description:**
```
Help us end extreme poverty in rural Africa through entrepreneurship and innovation! Each business is comprised of 3 entrepreneurs and impacts an average of 20 people! It takes just $30 to lift one person out of extreme poverty, $75 to provide one year of training and $150 to fund one business. Thank you for donating to entrepreneurship!
```
- **Pricing:**
  - $30 = Lift 1 person out of extreme poverty
  - $75 = Provide 1 year of training
  - $150 = Fund 1 business

#### 4. Youth Entrepreneurship
- **Tab Text:** "Youth Entrepreneurship"
- **Data Attribute:** `data-set="youth"`
- **Background:** `img/donate/ye-bg.jpg`
- **Description:**
```
Do you have a passion to inspire the next generation of entrepreneurs? Your support is vital to providing students with entrepreneurial education and experiences to help them prosper and become contributing members of society.
```

#### 5. Medical Relief
- **Tab Text:** "Medical Relief"
- **Data Attribute:** `data-set="medical"`
- **Background:** `img/donate/mr-bg.jpg`
- **Description:**
```
Is health and wellness your main passion? You can help provide medicines, mend painful wounds and provide treatment to those suffering from terminal illnesses. Thank you for sharing health!
```

#### 6. Disaster Relief
- **Tab Text:** "Disaster Relief"  
- **Data Attribute:** `data-set="disater"` (note: typo in original)
- **Background:** `img/donate/ds-bg.jpg`
- **Description:**
```
Is your desire simply to help those in the greatest need? Your support of any amount can send aid to natural disaster survivors and touch loves all around the globe. Thank you for sharing hope!
```
**Note:** "touch loves" appears to be typo for "touch lives"

#### 7. Any Cause
- **Tab Text:** "Any Cause"
- **Data Attribute:** `data-set="any"`
- **Background:** `img/donate/as-bg.jpg`
- **Description:**
```
Do you want to donate to a cause that's in most need? Your gift will go a long way in making a difference in someone's life! Thank you for sharing hope.
```

---

## Donation Form Structure

### Section 1: Give Today
**Heading:** "Give Today"
**Frequency Options:** One Time / Monthly (Radio buttons)

### Section 2: Quick Amount Buttons
Pre-set donation amounts (clickable buttons):
- Values displayed as buttons
- Custom amount input field with $ prefix
- All amounts trigger form population

### Section 3: Donor Information Form
**Fields:**
- First Name (required)
- Last Name (required)
- Email (required)
- Phone Number (optional)
- Address Line 1 (optional)
- Address Line 2 (optional)
- City (optional)
- State/Province (optional)
- ZIP/Postal Code (optional)
- Country (optional)
- Comments/Special Instructions (textarea, optional)

### Section 4: Donation Summary
**Display:** "You are donating: $[AMOUNT]"
**Button:** Yellow donate button "Proceed to Payment"

---

## Copyright Footer
**Background:** Light beige (#faf8f2)
**Text:** 
```
© 2019 Singal Foundation, All Rights Reserved.
```
**Link:** "Privacy Policy" (right-aligned, orange text with underline)

---

## Technical Notes

### Dynamic Background System
- JavaScript changes background image based on selected cause tab
- Class `bk-image` with cause-specific class (`edu`, `shelter`, `entrepreneur`, etc.)
- Images positioned as full-screen backgrounds
- Smooth transitions between backgrounds

### Form Behavior
- One-time vs Monthly toggle affects donation processing
- Custom amount field accepts manual input
- Quick buttons populate amount field
- Form validation for required fields
- Proceeds to payment gateway (likely PayPal or Stripe integration)

### Mobile Responsive
- Separate mobile image: `img/donate-sm.jpg`
- Tab layout adjusts for mobile
- Form stacks vertically on small screens

---

## Design Notes
- **Container:** White card (`donate_inner`) over dynamic background
- **Max Width:** 800px centered
- **Padding:** 40px 50px (desktop), 70px bottom
- **Tab Style:** Gray background inactive, yellow when active
- **Amount Buttons:** Gray background, yellow on active
- **Submit Button:** Yellow (`theme_btn`), 270px wide
- **Border Radius:** 23px for submit button

---

## Integration Points
- **Payment Gateway:** Form submits to payment processor (not visible in HTML)
- **Email Service:** Likely integrates with Sendlane or similar for receipts
- **CRM:** Donor information likely captured in database

---

## Content Strategy Notes

### Pricing Guidance Provided:
- **Education:** $35/month
- **Entrepreneurship:** $30, $75, or $150 (specific outcomes per amount)
- **Other Causes:** No specific amounts suggested

### Messaging Patterns:
- **Education:** Focus on future potential, voice in community
- **Shelter:** Stability, lifting out of poverty
- **Entrepreneurship:** Specific metrics (3 entrepreneurs, 20 people impacted)
- **Youth:** Next generation, contributing members
- **Medical:** Immediate relief (medicines, wounds, terminal illness)
- **Disaster:** Greatest need, global reach, hope
- **Any Cause:** Flexibility, trust in organization's judgment

### Emotional Appeals:
- Questions engage donor ("Do you have a passion...")
- Gratitude expressed ("Thank you for sharing health/hope")
- Specific outcomes vs. general support
- Community impact emphasized

---

## Recommended for Redesign
1. Fix typos ("touch loves" → "touch lives", "disater" → "disaster")
2. Consider suggested amounts for all causes (not just education/entrepreneurship)
3. Add impact visualization (e.g., "$35 = 1 child educated for a month")
4. Consider recurring donation benefits/incentives
5. Add social proof (number of donors, total raised)
6. Payment options visibility (show accepted methods upfront)
7. Security badges for trust
8. Option to dedicate donation in someone's honor
