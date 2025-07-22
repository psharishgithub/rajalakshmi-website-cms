# Global Pages API Documentation

This document outlines the structured API endpoints for all global pages in the Rajalakshmi Engineering College website CMS.

## API Structure

Each global page follows a consistent two-tier API structure:

1. **Sections Listing**: Get all sections for a page
2. **Section Content**: Get detailed content for a specific section

## Available Global Pages

- **About**: College information, profile, history, leadership, etc.
- **NAAC**: NAAC accreditation details, DVV clarifications, criteria
- **Research**: Research centers, publications, projects, facilities
- **Placement**: Placement statistics, recruiters, training programs
- **Admissions**: Admission process, eligibility, fee structure
- **IQAC**: Internal Quality Assurance Cell information
- **International Relations**: Global partnerships and programs

## API Endpoints

### Overview Endpoint

Get a list of all active global pages:

```
GET /api/global-pages
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "slug": "about",
      "title": "About",
      "isActive": true
    },
    {
      "slug": "naac", 
      "title": "NAAC",
      "isActive": true
    }
    // ... other pages
  ]
}
```

### Sections Listing Endpoints

Get all sections for a specific global page:

```
GET /api/{global-slug}/sections
```

**Examples:**
- `GET /api/about/sections`
- `GET /api/naac/sections`
- `GET /api/research/sections`
- `GET /api/placement/sections`
- `GET /api/admissions/sections`
- `GET /api/iqac/sections`
- `GET /api/international-relations/sections`

**Response:**
```json
{
  "success": true,
  "data": {
    "title": "About",
    "slug": "about",
    "isActive": true,
    "sections": [
      {
        "id": "profile",
        "title": "Profile",
        "type": "profile",
        "order": 100,
        "isActive": true,
        "hasContent": true
      },
      {
        "id": "vision-mission",
        "title": "Vision & Mission", 
        "type": "visionMission",
        "order": 101,
        "isActive": true,
        "hasContent": true
      }
      // ... more sections
    ]
  }
}
```

### Section Content Endpoints

Get detailed content for a specific section:

```
GET /api/{global-slug}/sections/{section-id}
```

**Examples:**
- `GET /api/about/sections/profile`
- `GET /api/naac/sections/dvv-clarifications`
- `GET /api/research/sections/research-centre`
- `GET /api/placement/sections/placement-statistics`

**Response:**
```json
{
  "success": true,
  "data": {
    "title": "Profile",
    "sectionId": "profile",
    "globalSlug": "about",
    "content": {
      // Complete section content based on the field structure
      "content": "Rich text content...",
      "documents": [...],
      // ... other fields specific to this section type
    }
  }
}
```

## Section Types by Global Page

### About Page Sections
- `profile` - College Profile
- `vision-mission` - Vision & Mission
- `objectives` - Objectives
- `history` - History
- `leadership` - Leadership Team
- `governance` - Governance Structure
- `accreditation` - Accreditation Details
- `affiliations` - Affiliations
- `infrastructure` - Infrastructure
- `campus-facilities` - Campus Facilities
- `achievements` - Achievements

### NAAC Page Sections
- `dvv-clarifications` - DVV Clarifications
- `extended-profile` - Extended Profile
- `curricular-aspects` - Curricular Aspects
- `teaching-learning-evaluation` - Teaching Learning and Evaluation
- `research-innovations-extension` - Research, Innovations and Extension
- `infrastructure-learning-resources` - Infrastructure and Learning Resources
- `student-support-progression` - Student Support and Progression
- `governance-leadership-management` - Governance, Leadership and Management
- `institutional-values-best-practices` - Institutional Values and Best Practices
- `best-practices` - Best Practices
- `institutional-distinctiveness` - Institutional Distinctiveness
- `undertaking` - Undertaking

### Research Page Sections
- `research-centre` - Research Centre
- `research-publications` - Research Publications
- `funded-projects` - Funded Projects
- `patents-ipr` - Patents & IPR
- `consultancy` - Consultancy
- `research-scholars` - Research Scholars
- `mou-collaborations` - MOU & Collaborations
- `conferences-seminars` - Conferences & Seminars
- `research-facilities` - Research Facilities

### Placement Page Sections
- `overview` - Placement Overview
- `placement-statistics` - Placement Statistics
- `recruiters` - Recruiters
- `placement-team` - Placement Team
- `training-programs` - Training Programs
- `placement-process` - Placement Process
- `success-stories` - Success Stories

### Admissions Page Sections
- `overview` - Admissions Overview
- `eligibility-criteria` - Eligibility Criteria
- `admission-process` - Admission Process
- `important-dates` - Important Dates
- `fee-structure` - Fee Structure
- `scholarships` - Scholarships
- `hostel-facilities` - Hostel Facilities

### IQAC Page Sections
- `overview` - IQAC Overview
- `composition` - IQAC Composition
- `meetings` - IQAC Meetings
- `activities` - IQAC Activities
- `aqar` - AQAR Reports
- `policies` - Policies
- `feedback-analysis` - Feedback Analysis

### International Relations Page Sections
- `overview` - International Relations Overview
- `partnerships` - International Partnerships
- `student-exchange` - Student Exchange Programs
- `faculty-exchange` - Faculty Exchange
- `international-students` - International Students
- `global-programs` - Global Programs

## Frontend Implementation Guide

### 1. Page Listing Component

Use the overview endpoint to create a navigation menu or page listing:

```javascript
// Fetch all global pages
const response = await fetch('/api/global-pages')
const { data: pages } = await response.json()

// Render page links
pages.map(page => (
  <Link href={`/${page.slug}`}>
    {page.title}
  </Link>
))
```

### 2. Section Listing Component

For each page, show available sections:

```javascript
// Fetch sections for a specific page
const response = await fetch(`/api/${pageSlug}/sections`)
const { data: pageData } = await response.json()

// Render sections
pageData.sections.map(section => (
  <div key={section.id}>
    <h3>{section.title}</h3>
    <button onClick={() => loadSection(section.id)}>
      View Details
    </button>
  </div>
))
```

### 3. Section Detail Component

Show detailed content when a section is clicked:

```javascript
// Fetch specific section content
const response = await fetch(`/api/${pageSlug}/sections/${sectionId}`)
const { data: sectionData } = await response.json()

// Render section content
<div>
  <h2>{sectionData.title}</h2>
  <div dangerouslySetInnerHTML={{ __html: sectionData.content.content }} />
  {/* Render other content fields based on section type */}
</div>
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message description"
}
```

Common HTTP status codes:
- `200` - Success
- `404` - Resource not found
- `500` - Server error

## Notes

1. All sections are automatically filtered to show only those with content (`hasContent: true`)
2. Sections are ordered by the `order` field in ascending order
3. The API handles different field structures across global pages transparently
4. Rich text content is returned as HTML and should be rendered safely
5. Document uploads are returned with full media object details including URLs
