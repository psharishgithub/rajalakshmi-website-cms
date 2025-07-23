# Table Components Usage Guide

This guide explains how to use the different table components available in your dynamic pages.

## Available Table Types

### 1. Link Table
**Use Case**: Simple lists of links with labels
**Content Type**: "Link Table"

**Configuration**:
- Add rows with `label` and `link` fields
- Check `isExternal` for links that open in new tabs
- Set optional `tableTitle` for custom header

**Example Use Cases**:
- Document downloads
- External resource links
- Quick navigation lists

### 2. Dynamic Table
**Use Case**: Complex tables with multiple columns and mixed data types
**Content Type**: "Dynamic Table"

**Configuration**:
1. **Define Columns**:
   - `key`: Unique identifier (e.g., "name", "department", "email")
   - `label`: Display name for column header
   - `width`: Optional CSS class for column width

2. **Add Rows**:
   - Use JSON format in the `data` field
   - Keys must match column keys
   - Values will auto-detect links and format them appropriately

3. **Choose Variant**:
   - `default`: Clean, minimal styling
   - `bordered`: Heavy borders around table
   - `striped`: Alternating row colors

**Example JSON for a faculty table**:
```json
{
  "name": "Dr. John Smith",
  "department": "Computer Science",
  "email": "john.smith@college.edu",
  "profile": "https://college.edu/faculty/john-smith"
}
```

### 3. Mixed Content (Rich Text + Link Table)
**Use Case**: Rich text content combined with a simple link table
**Content Type**: "Mixed Content (Rich Text + Link Table)"

**Configuration**:
- Add rich text content first
- Add link table data below
- Both sections will display with proper spacing

### 4. Mixed Content (Rich Text + Dynamic Table)
**Use Case**: Rich text content combined with a complex dynamic table
**Content Type**: "Mixed Content (Rich Text + Dynamic Table)"

**Configuration**:
- Add rich text content first
- Configure dynamic table with columns and data
- Choose table variant and optional title
- Both sections will display with proper spacing

## Tips for Content Creators

### Link Table Best Practices
- Keep labels concise but descriptive
- Group related links in the same table
- Use meaningful table titles
- Check "isExternal" for all external links

### Dynamic Table Best Practices
- Plan your columns before starting
- Use consistent data types within columns
- URLs in any field will automatically become clickable links
- Use descriptive column labels
- Test with sample data first

### JSON Data Entry for Dynamic Tables
When entering JSON data for dynamic table rows:

1. **Format properly**:
   ```json
   {
     "column1": "value1",
     "column2": "value2",
     "column3": "value3"
   }
   ```

2. **Include all column keys** (use empty string "" for missing values)

3. **Use quotes around all values** except numbers and booleans

4. **URLs will auto-format**: Any value starting with "http" or "/" will become a clickable link

## Sample JSON Data for Dynamic Tables

### Faculty Directory Example
```json
{
  "name": "Dr. Jane Smith",
  "designation": "Professor & Head",
  "department": "Computer Science",
  "email": "jane.smith@college.edu",
  "phone": "+91-9876543210",
  "profile": "https://college.edu/faculty/jane-smith"
}
```

### Course Curriculum Example
```json
{
  "code": "CS101",
  "title": "Programming Fundamentals",
  "credits": "4",
  "semester": "Fall",
  "prerequisites": "Mathematics",
  "syllabus": "/documents/cs101-syllabus.pdf"
}
```

### Research Publications Example
```json
{
  "title": "Machine Learning in Educational Systems",
  "authors": "Smith, J., Doe, A.",
  "journal": "International Journal of Computer Science",
  "year": "2024",
  "impact": "2.5",
  "link": "https://journal.com/article/ml-education"
}
```

## Common Use Cases

### Faculty Directory with Introduction
Use **Mixed Content (Rich Text + Dynamic Table)**:
1. Add rich text explaining the department
2. Configure dynamic table with columns: name, designation, department, email, phone
3. Add faculty data as JSON rows
4. Choose "striped" variant for better readability

### Course Curriculum with Description
Use **Mixed Content (Rich Text + Dynamic Table)**:
1. Add rich text describing the program structure
2. Configure dynamic table with columns: code, title, credits, semester, prerequisites
3. Add course data as JSON rows

### Research Publications with Context
Use **Mixed Content (Rich Text + Dynamic Table)**:
1. Add rich text about research focus areas
2. Configure dynamic table with columns: title, authors, journal, year, link
3. Add publication data with clickable links

### Quick Links
Use **Link Table** for:
- Downloadable forms
- External resources
- Navigation shortcuts
- Document repositories

## Troubleshooting

**Table not showing**: Check that you've added at least one row of data

**JSON errors**: Validate your JSON format using online tools

**Links not working**: Ensure URLs include "http://" or "https://"

**Styling issues**: Try different variants (default, bordered, striped)

**Column alignment**: Use width classes like "w-20", "w-1/4", "w-1/3" for better column sizing
