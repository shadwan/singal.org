---
project: Singal Foundation Website Redesign
extraction_date: 2025-12-16
status: Phase 1 Complete (Core content extracted)
---

# Singal Foundation - Content Archive

This directory contains the extracted content from the original Singal.org website, organized in markdown format for easy reference during the redesign process.

## Directory Structure

```
content/
├── README.md                 (this file)
├── pages/                    Main website pages
│   ├── home.md              ✅ Homepage content
│   ├── about.md             ✅ About page content
│   ├── causes.md            ⏳ To be extracted
│   ├── education.md         ⏳ To be extracted
│   ├── stories-list.md      ⏳ To be extracted
│   ├── contact.md           ⏳ To be extracted
│   ├── donate.md            ⏳ To be extracted
│   └── privacy-policy.md    ⏳ To be extracted
│
├── initiatives/              Cause/initiative detail pages
│   └── (6 files pending)
│
├── stories/                  Individual impact stories
│   ├── joanna.md            ✅ Disaster relief story
│   ├── farming.md           ✅ Entrepreneurship story
│   ├── ayush.md             ✅ Education story
│   └── (7+ more stories pending)
│
├── global/                   Reusable components
│   ├── navigation.md        ✅ Main navigation
│   ├── footer.md            ✅ Footer component
│   └── newsletter.md        ✅ Newsletter signup
│
├── archive/                  Archive pages
│   └── (6 files pending)
│
└── metadata/                 Design system & data
    ├── extraction-summary.md ✅ This extraction status
    ├── colors.md             ✅ Complete color palette
    └── stats.md              ✅ All impact statistics
```

## What's Available Now

### ✅ Complete & Ready to Use

**Pages:**
- `pages/home.md` - Complete homepage with all sections
- `pages/about.md` - Full about page with 6 initiatives

**Stories (3 examples):**
- `stories/joanna.md` - Disaster relief (Houston, TX)
- `stories/farming.md` - Entrepreneurship (East Africa)
- `stories/ayush.md` - Education (Mumbai, India)

**Global Components:**
- `global/navigation.md` - Full navigation spec
- `global/footer.md` - Complete footer
- `global/newsletter.md` - Newsletter form

**Metadata:**
- `metadata/colors.md` - Complete color system
- `metadata/stats.md` - All impact numbers
- `metadata/extraction-summary.md` - Status tracker

### ⏳ Pending Extraction

See `metadata/extraction-summary.md` for complete list of remaining files (~28 files, estimated 7 hours work).

## How to Use These Files

### For Content Writers
- Copy exact text from markdown files
- Preserve quotes and emphasis (bold, italic)
- Maintain impact statistics accuracy

### For Designers
- Reference color codes in `metadata/colors.md`
- Review layout patterns in "HTML Structure Notes" sections
- Check image requirements and captions

### For Developers
- YAML frontmatter can convert to JSON/database
- Content sections map to component props
- Structure notes guide component architecture
- CSS classes documented for reference

### For Project Managers
- Track extraction progress in `metadata/extraction-summary.md`
- Reference impact stats in `metadata/stats.md`
- Review complete pages to estimate redesign scope

## File Format Explained

Each markdown file contains:

### YAML Frontmatter (metadata)
```yaml
---
title: "Page Title"
category: education
location: "Mumbai, India"
color_theme: "#52a7e4"
grant_amount: 25000
---
```

### Content Sections
- Exact text from original site
- Organized by visual sections
- Headings preserved

### Images
```markdown
**File:** `img/photo.jpg`
**Caption:** "Image description"
**Usage:** Where/how image appears
```

### HTML Structure Notes
```markdown
## HTML Structure Notes
<div class="container">
  <div class="row">
    <!-- Layout pattern documented -->
  </div>
</div>
```

### Impact Data
```markdown
## Impact Stats
- **Grant Amount:** $25,000
- **People Served:** 1,000
```

## Key Numbers (Quick Reference)

From `metadata/stats.md`:

- **8 schools** funded in India
- **$223,182+** in documented grants
- **22 countries** reached with COVID-19 relief
- **277 businesses** supported during pandemic
- **6 core initiatives:** Education, Shelter, Entrepreneurship, Youth Entrepreneurship, Medical, Disaster Relief

## Color Palette (Quick Reference)

From `metadata/colors.md`:

**Brand:**
- Primary Yellow: `#f8d264`
- Hover Yellow: `#f8b864`

**Initiatives:**
- Education: `#52a7e4` (Blue)
- Shelter: `#7a7cc7` (Purple)
- Entrepreneurship: `#194f75` (Navy)
- Youth: `#f8b864` (Orange)
- Medical: `#6890b7` (Steel Blue)
- Disaster: `#b28f61` (Metallic)

## Original Website Backup

The complete website (234 files) is backed up in:
```
original-site-backup/singal.org/
```

This includes:
- All HTML pages (34)
- All images (147)
- CSS files
- JavaScript
- Videos
- Fonts

## Content Extraction Approach

1. **Exact Preservation:** All text copied exactly as-is
2. **Structure Documentation:** HTML layout patterns documented
3. **Metadata Rich:** Colors, dates, amounts, locations tagged
4. **Cross-Referenced:** Related content linked
5. **Reusable:** Organized for easy content reuse

## Navigation Map

```
Homepage (index.html)
├── About (about.html)
│   ├── Our Story
│   ├── Education Section
│   ├── Shelter Homes Section
│   ├── Business Grants Section
│   ├── Disaster Relief Section
│   ├── Youth Entrepreneurship Section
│   ├── Medical Relief Section
│   └── Mission Statement
├── Causes (causes.html)
├── Education (education.html)
├── Stories (stories.html)
│   └── Individual Stories
│       ├── Joanna
│       ├── Farming
│       ├── Ayush
│       └── 7+ more
├── Contact (contact.html)
└── Donate (donate.html)
```

## Next Steps for Complete Extraction

1. Extract 5 remaining main pages
2. Extract 7+ remaining stories
3. Extract 10 cause detail pages
4. Extract 6 archive pages
5. Create additional metadata files (locations, partners, images)

See `metadata/extraction-summary.md` for detailed status.

## Questions or Issues?

If you need specific content extracted urgently or have questions about the format:
1. Check `metadata/extraction-summary.md` for what's available
2. Review example files in `stories/` to understand format
3. Reference original backup in `original-site-backup/singal.org/`

## Usage Examples

### Example 1: Getting Story Content
```markdown
1. Open stories/joanna.md
2. Copy content from "Story Content" section
3. Reference metadata for grant amount, location, etc.
4. Check "Impact Stats" for metrics
```

### Example 2: Getting Color for Initiative
```markdown
1. Open metadata/colors.md
2. Find "Initiative Color Themes" section
3. Copy hex code for desired initiative
4. Reference accent color if needed
```

### Example 3: Understanding Layout
```markdown
1. Open pages/about.md
2. Scroll to "HTML Structure Notes"
3. See alternating 2-column pattern
4. Use as reference for redesign
```

## Content Reuse Guidelines

**✅ Can Reuse As-Is:**
- Mission statements
- Impact statistics
- Story content
- Initiative descriptions
- Contact information

**⚠️ May Need Updates:**
- Copyright year (currently 2021)
- Grant amounts (add new ones)
- Number of schools (if expanded)
- Social media links (verify current)

**🔄 Should Refresh:**
- Meta descriptions (for SEO)
- Photography (higher quality?)
- Video links (check if still active)

## File Naming Convention

- **Pages:** Lowercase with hyphens (e.g., `about.md`, `stories-list.md`)
- **Stories:** Lowercase names matching original (e.g., `joanna.md`)
- **Global:** Descriptive component names (e.g., `navigation.md`)
- **Metadata:** Category-based (e.g., `colors.md`, `stats.md`)

---

**Last Updated:** December 16, 2025
**Status:** Phase 1 Complete - Core content extracted, ready for redesign brainstorming
**Next Phase:** Complete remaining extractions or proceed with redesign planning
