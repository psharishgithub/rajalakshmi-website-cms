import { CollectionConfig } from 'payload'
import { universalAccessPublished } from '../access'

export const DynamicPages: CollectionConfig = {
  slug: 'dynamic-pages',
  admin: {
    group: 'Content',
    description: 'Create and manage multiple dynamic pages with flexible content types',
    useAsTitle: 'pageTitle',
    defaultColumns: ['pageTitle', 'slug', 'category', 'isPublished', 'priority', 'updatedAt'],
    pagination: {
      defaultLimit: 20,
    },
  },
  access: universalAccessPublished,
  fields: [
    // Page Identification
    {
      name: 'pageTitle',
      type: 'text',
      required: true,
      admin: {
        description: 'Title of the page (used for admin display)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for this page (e.g., "about-us", "contact")',
      },
      validate: (val: string | undefined | null) => {
        if (!val) return 'Slug is required'
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(val)) {
          return 'Slug must contain only lowercase letters, numbers, and hyphens'
        }
        return true
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'General Pages', value: 'general' },
        { label: 'Academic Pages', value: 'academic' },
        { label: 'Administrative Pages', value: 'administrative' },
        { label: 'Student Resources', value: 'student-resources' },
        { label: 'Faculty Resources', value: 'faculty-resources' },
        { label: 'Research Pages', value: 'research' },
        { label: 'Events & News', value: 'events-news' },
        { label: 'Other', value: 'other' },
      ],
      defaultValue: 'general',
      admin: {
        description: 'Category to help organize and filter pages',
      },
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether this page is published and accessible',
      },
    },
    {
      name: 'priority',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Priority for ordering pages (higher numbers appear first)',
      },
    },
    // SEO Fields
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: {
            description: 'Meta title for SEO (defaults to page title if empty)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: {
            description: 'Meta description for SEO',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'SEO keywords (comma-separated)',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Open Graph image for social media sharing',
          },
        },
      ],
    },
    // Hero Section
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      admin: {
        description: 'Main hero title for the page',
      },
    },
    {
      name: 'heroSubtitle',
      type: 'text',
      admin: {
        description: 'Hero subtitle displayed below the main title',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Hero banner image for the page',
      },
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Page Sections',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Title of the section',
          },
        },
        {
          name: 'contentType',
          type: 'select',
          options: [
            { label: 'Rich Text Content', value: 'richText' },
            { label: 'Link Table', value: 'table' },
            { label: 'Dynamic Table', value: 'dynamicTable' },
            { label: 'Mixed Content (Rich Text + Link Table)', value: 'mixed' },
            { label: 'Mixed Content (Rich Text + Dynamic Table)', value: 'mixedDynamic' },
          ],
          defaultValue: 'richText',
          admin: {
            description: 'Choose the type of content for this section',
          },
        },
        {
          name: 'content',
          type: 'richText',
          admin: {
            condition: (data, siblingData) => 
              siblingData?.contentType === 'richText' || 
              siblingData?.contentType === 'mixed' ||
              siblingData?.contentType === 'mixedDynamic',
            description: 'Rich text content for this section',
          },
        },
        {
          name: 'tableData',
          type: 'array',
          label: 'Table Rows',
          admin: {
            condition: (data, siblingData) => 
              siblingData?.contentType === 'table' || 
              siblingData?.contentType === 'mixed',
            description: 'Table data with labels and links',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: {
                description: 'Display text for the table row',
              },
            },
            {
              name: 'link',
              type: 'text',
              required: true,
              admin: {
                description: 'URL or file path for the link',
              },
            },
            {
              name: 'isExternal',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Check if this is an external link (opens in new tab)',
              },
            },
          ],
        },
        {
          name: 'dynamicTableConfig',
          type: 'group',
          label: 'Dynamic Table Configuration',
          admin: {
            condition: (data, siblingData) => 
              siblingData?.contentType === 'dynamicTable' ||
              siblingData?.contentType === 'mixedDynamic',
            description: 'Configure a custom table with multiple columns',
          },
          fields: [
            {
              name: 'columns',
              type: 'array',
              label: 'Table Columns',
              required: true,
              fields: [
                {
                  name: 'key',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Unique identifier for this column (no spaces, use camelCase)',
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Display label for the column header',
                  },
                },
                {
                  name: 'width',
                  type: 'text',
                  admin: {
                    description: 'Optional CSS width (e.g., "w-20", "w-1/4")',
                  },
                },
              ],
            },
            {
              name: 'rows',
              type: 'array',
              label: 'Table Rows',
              required: true,
              fields: [
                {
                  name: 'data',
                  type: 'json',
                  admin: {
                    description: 'Row data as JSON object. Keys should match column keys.',
                  },
                },
              ],
            },
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Bordered', value: 'bordered' },
                { label: 'Striped', value: 'striped' },
              ],
              defaultValue: 'default',
              admin: {
                description: 'Visual style of the table',
              },
            },
          ],
        },
        {
          name: 'tableTitle',
          type: 'text',
          admin: {
            condition: (data, siblingData) => 
              siblingData?.contentType === 'table' || 
              siblingData?.contentType === 'mixed' ||
              siblingData?.contentType === 'dynamicTable' ||
              siblingData?.contentType === 'mixedDynamic',
            description: 'Optional custom title for the table (defaults to "Table Title")',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Optional image for this section',
          },
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
          admin: {
            description: 'Order of display (lower numbers appear first)',
          },
        },
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Whether this section is active and visible',
          },
        },
      ],
    },
  ],
}
