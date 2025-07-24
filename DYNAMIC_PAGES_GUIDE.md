# Dynamic Pages - Multiple Pages Management

## Overview

The Dynamic Pages collection allows you to create and manage multiple dynamic pages with flexible content types. This is perfect for creating various pages like policy pages, resource pages, information pages, etc.

## Features

### 1. **Multiple Page Support**
- Create unlimited dynamic pages
- Each page has its own unique slug and content
- Pages can be published/unpublished independently

### 2. **Page Organization**
- **Categories**: Organize pages into categories:
  - General Pages
  - Academic Pages
  - Administrative Pages
  - Student Resources
  - Faculty Resources
  - Research Pages
  - Events & News
  - Other

- **Priority**: Set priority for ordering pages (higher numbers appear first)

### 3. **SEO Features**
- Meta title and description
- Keywords
- Open Graph image for social sharing

### 4. **Flexible Content Types**
Each page section can contain:
- **Rich Text Content**: Standard rich text editor
- **Link Table**: Simple table with labels and links
- **Dynamic Table**: Custom tables with multiple columns
- **Mixed Content**: Combination of rich text + tables

## API Endpoints

### Get All Published Pages
```
GET /api/dynamic-pages
```

Query Parameters:
- `category`: Filter by category (optional)
- `limit`: Number of pages to return (default: 100)
- `page`: Page number for pagination (default: 1)

Example:
```
GET /api/dynamic-pages?category=academic&limit=20&page=1
```

### Get Pages by Category
```
GET /api/dynamic-pages/category/{category}
```

Example:
```
GET /api/dynamic-pages/category/student-resources
```

### Get Single Page by Slug
```
GET /api/dynamic-page/{slug}
```

Example:
```
GET /api/dynamic-page/the-dynamic-page
```

## Frontend Implementation

### 1. List All Pages
```javascript
const response = await fetch('/api/dynamic-pages')
const { data: pages, totalDocs, totalPages } = await response.json()

// Render page list
pages.map(page => (
  <Link href={`/${page.slug}`} key={page.id}>
    <h3>{page.pageTitle}</h3>
    <p>{page.heroSubtitle}</p>
    <span>Category: {page.category}</span>
  </Link>
))
```

### 2. List Pages by Category
```javascript
const category = 'academic'
const response = await fetch(`/api/dynamic-pages/category/${category}`)
const { data: pages } = await response.json()

// Render category-specific pages
```

### 3. Display Single Page
```javascript
const slug = router.query.slug
const response = await fetch(`/api/dynamic-page/${slug}`)
const { data: page } = await response.json()

// Render page content
<div>
  <h1>{page.heroTitle}</h1>
  {page.heroSubtitle && <p>{page.heroSubtitle}</p>}
  
  {page.sections?.map(section => (
    <section key={section.id}>
      <h2>{section.title}</h2>
      
      {section.contentType === 'richText' && (
        <div dangerouslySetInnerHTML={{ __html: section.content }} />
      )}
      
      {section.contentType === 'table' && (
        <table>
          {section.tableData?.map(row => (
            <tr key={row.id}>
              <td>
                <a href={row.link} target={row.isExternal ? '_blank' : '_self'}>
                  {row.label}
                </a>
              </td>
            </tr>
          ))}
        </table>
      )}
      
      {section.contentType === 'dynamicTable' && (
        <DynamicTableComponent 
          columns={section.dynamicTableConfig.columns}
          rows={section.dynamicTableConfig.rows}
          variant={section.dynamicTableConfig.variant}
        />
      )}
    </section>
  ))}
</div>
```

## Admin Usage

### Creating a New Page
1. Go to **Collections > Dynamic Pages** in the admin panel
2. Click **Create New**
3. Fill in the basic information:
   - **Page Title**: Display title for admin
   - **Slug**: URL-friendly identifier (e.g., "academic-policies")
   - **Category**: Choose appropriate category
   - **Priority**: Set ordering priority
   - **Is Published**: Check to make page live

4. Add SEO information (optional but recommended)
5. Set up the hero section
6. Add page sections with desired content types

### Managing Multiple Pages
- Use the **Category** filter to organize pages
- Sort by **Priority** to control page ordering
- Use **Is Published** to control visibility
- Monitor **Updated At** to track recent changes

## Best Practices

1. **Slug Naming**: Use clear, descriptive slugs (e.g., "student-handbook", "faculty-policies")
2. **Categories**: Choose appropriate categories for better organization
3. **Priority**: Use priority to control important page ordering
4. **SEO**: Always fill in meta titles and descriptions
5. **Content Structure**: Use sections to break up content logically

## Example Use Cases

- **Academic Policies**: Create pages for different academic policies
- **Student Resources**: Individual pages for various student resources
- **Faculty Information**: Separate pages for different faculty departments
- **Event Pages**: Create individual pages for major events
- **Administrative Information**: Pages for various administrative procedures
