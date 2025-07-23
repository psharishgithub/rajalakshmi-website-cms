import { Field, GlobalConfig } from 'payload'
import { CollectionSlug } from 'payload'

export const createGlobalSectionFields = (): Field[] => [
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
    relationTo: 'media' as CollectionSlug,
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
]

export const createGlobalPageConfig = (slug: string, title: string, description?: string): Omit<GlobalConfig, 'access'> => ({
  slug,
  admin: {
    group: 'Content',
    description: description || `Manage ${title} page content`,
  },
  fields: [
    // Hero Section
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      admin: {
        description: `Main hero title for the ${title.toLowerCase()} page`,
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
      relationTo: 'media' as CollectionSlug,
      admin: {
        description: `Hero banner image for the ${title.toLowerCase()} page`,
      },
    },
    {
      name: 'sections',
      type: 'array',
      label: `${title} Sections`,
      fields: createGlobalSectionFields(),
    },
  ],
})
