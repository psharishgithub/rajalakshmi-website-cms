import { CollectionConfig } from 'payload'
import { universalAccessVisible } from '../access'

export const SecondaryNav: CollectionConfig = {
  slug: 'secondary-nav',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'linkType', 'isVisible', 'order', 'updatedAt'],
    description: 'Manage secondary navigation bar buttons and their content pages',
    group: 'Landing Page Components',
  },
  access: universalAccessVisible,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title/Label for the navigation button',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Optional description for admin reference',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for this navigation item (e.g., admissions-portal, student-resources)',
      },
    },
    {
      name: 'linkType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Content Page',
          value: 'content',
        },
        {
          label: 'External Link',
          value: 'external',
        },
      ],
      defaultValue: 'content',
      admin: {
        description: 'Choose whether this creates a content page or links to an external URL',
      },
    },
    {
      name: 'externalUrl',
      type: 'text',
      admin: {
        condition: (data) => data.linkType === 'external',
        description: 'Full external URL (e.g., https://google.com)',
      },
    },
    // Content Page Fields
    {
      name: 'pageContent',
      type: 'group',
      label: 'Page Content',
      admin: {
        condition: (data) => data.linkType === 'content',
        description: 'Content for the page this navigation button will create',
      },
      fields: [
        {
          name: 'heroSection',
          type: 'group',
          label: 'Hero Section',
          fields: [
            {
              name: 'heroTitle',
              type: 'text',
              admin: {
                description: 'Main title for the page (defaults to nav title if empty)',
              },
            },
            {
              name: 'heroSubtitle',
              type: 'text',
              admin: {
                description: 'Subtitle or tagline for the page',
              },
            },
            {
              name: 'heroContent',
              type: 'richText',
              admin: {
                description: 'Rich text content for the hero section',
              },
            },
          ],
        },
        {
          name: 'mainContent',
          type: 'richText',
          required: true,
          admin: {
            description: 'Main content of the page',
          },
        },
        {
          name: 'contentSections',
          type: 'array',
          label: 'Additional Content Sections',
          admin: {
            description: 'Add multiple content sections to build your page',
          },
          fields: [
            {
              name: 'sectionTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title for this content section',
              },
            },
            {
              name: 'sectionType',
              type: 'select',
              required: true,
              options: [
                { label: 'Text Content', value: 'text' },
                { label: 'Image Gallery', value: 'gallery' },
                { label: 'Cards/Features', value: 'cards' },
                { label: 'List Items', value: 'list' },
                { label: 'Accordion/FAQ', value: 'accordion' },
                { label: 'Contact Information', value: 'contact' },
                { label: 'Download Links', value: 'downloads' },
              ],
              defaultValue: 'text',
              admin: {
                description: 'Type of content section',
              },
            },
            {
              name: 'textContent',
              type: 'richText',
              admin: {
                condition: (data, siblingData) => siblingData?.sectionType === 'text',
                description: 'Rich text content for this section',
              },
            },
            {
              name: 'imageGallery',
              type: 'array',
              label: 'Images',
              admin: {
                condition: (data, siblingData) => siblingData?.sectionType === 'gallery',
                description: 'Collection of images for gallery',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                  admin: {
                    description: 'Image caption',
                  },
                },
                {
                  name: 'altText',
                  type: 'text',
                  admin: {
                    description: 'Alt text for accessibility',
                  },
                },
              ],
            },
            {
              name: 'cardItems',
              type: 'array',
              label: 'Cards/Features',
              admin: {
                condition: (data, siblingData) => siblingData?.sectionType === 'cards',
                description: 'Feature cards or highlight items',
              },
              fields: [
                {
                  name: 'cardTitle',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'cardDescription',
                  type: 'richText',
                },
                {
                  name: 'cardImage',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'cardLink',
                  type: 'text',
                  admin: {
                    description: 'Optional link for the card',
                  },
                },
                {
                  name: 'cardIcon',
                  type: 'text',
                  admin: {
                    description: 'Icon class or emoji for the card',
                  },
                },
              ],
            },
            {
              name: 'listItems',
              type: 'array',
              label: 'List Items',
              admin: {
                condition: (data, siblingData) => siblingData?.sectionType === 'list',
                description: 'List of items with titles and descriptions',
              },
              fields: [
                {
                  name: 'itemTitle',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'itemDescription',
                  type: 'richText',
                },
                {
                  name: 'itemLink',
                  type: 'text',
                  admin: {
                    description: 'Optional link for this item',
                  },
                },
              ],
            },
            {
              name: 'accordionItems',
              type: 'array',
              label: 'Accordion Items',
              admin: {
                condition: (data, siblingData) => siblingData?.sectionType === 'accordion',
                description: 'Expandable accordion items (great for FAQs)',
              },
              fields: [
                {
                  name: 'question',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Question or header text',
                  },
                },
                {
                  name: 'answer',
                  type: 'richText',
                  required: true,
                  admin: {
                    description: 'Answer or content that expands',
                  },
                },
                {
                  name: 'isOpenByDefault',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    description: 'Whether this item should be expanded by default',
                  },
                },
              ],
            },
            {
              name: 'contactInfo',
              type: 'group',
              label: 'Contact Information',
              admin: {
                condition: (data, siblingData) => siblingData?.sectionType === 'contact',
                description: 'Contact details section',
              },
              fields: [
                {
                  name: 'email',
                  type: 'email',
                },
                {
                  name: 'phone',
                  type: 'text',
                },
                {
                  name: 'address',
                  type: 'textarea',
                },
                {
                  name: 'workingHours',
                  type: 'text',
                },
                {
                  name: 'mapEmbedCode',
                  type: 'textarea',
                  admin: {
                    description: 'Google Maps embed code (iframe)',
                  },
                },
              ],
            },
            {
              name: 'downloadLinks',
              type: 'array',
              label: 'Download Links',
              admin: {
                condition: (data, siblingData) => siblingData?.sectionType === 'downloads',
                description: 'Downloadable files and documents',
              },
              fields: [
                {
                  name: 'downloadTitle',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'downloadDescription',
                  type: 'text',
                },
                {
                  name: 'downloadFile',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'downloadCategory',
                  type: 'text',
                  admin: {
                    description: 'Category for grouping downloads',
                  },
                },
              ],
            },
            {
              name: 'sectionOrder',
              type: 'number',
              defaultValue: 0,
              admin: {
                description: 'Order of this section (higher numbers appear first)',
              },
            },
          ],
        },
        {
          name: 'seoSettings',
          type: 'group',
          label: 'SEO Settings',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              admin: {
                description: 'Page title for search engines (defaults to page title if empty)',
              },
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              admin: {
                description: 'Page description for search engines',
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
                description: 'Image for social media sharing',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'openInNewTab',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (data) => data.linkType === 'external',
        description: 'Open external links in a new tab',
      },
    },
    {
      name: 'buttonStyle',
      type: 'select',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Outline', value: 'outline' },
        { label: 'Text', value: 'text' },
        { label: 'Warning', value: 'warning' },
        { label: 'Info', value: 'info' },
        { label: 'Success', value: 'success' },
        { label: 'Danger', value: 'danger' },
      ],
      defaultValue: 'primary',
      admin: {
        description: 'Visual style of the button',
      },
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Optional icon class or emoji for the button (e.g., fa-home, 🏠)',
      },
    },
    {
      name: 'iconPosition',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'None', value: 'none' },
      ],
      defaultValue: 'left',
      admin: {
        condition: (data) => data.icon && data.icon.length > 0,
        description: 'Position of the icon relative to text',
      },
    },
    {
      name: 'isVisible',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this button is visible in the navigation',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order of appearance (higher numbers appear first)',
      },
    },
    {
      name: 'showOnPages',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'All Pages', value: 'all' },
        { label: 'Home Page Only', value: 'home' },
        { label: 'Internal Pages Only', value: 'internal' },
        { label: 'Specific Pages', value: 'specific' },
      ],
      defaultValue: ['all'],
      admin: {
        description: 'Control on which pages this button should appear',
      },
    },
    {
      name: 'specificPages',
      type: 'array',
      label: 'Specific Pages',
      admin: {
        condition: (data) => data.showOnPages?.includes('specific'),
        description: 'Define specific pages where this button should appear',
      },
      fields: [
        {
          name: 'pagePath',
          type: 'text',
          required: true,
          admin: {
            description: 'Page path (e.g., /about, /research, /admissions)',
          },
        },
      ],
    },
    {
      name: 'accessLevel',
      type: 'select',
      options: [
        { label: 'Public', value: 'public' },
        { label: 'Students Only', value: 'students' },
        { label: 'Faculty Only', value: 'faculty' },
        { label: 'Admin Only', value: 'admin' },
      ],
      defaultValue: 'public',
      admin: {
        description: 'Who can see this navigation button',
      },
    },
    {
      name: 'scheduleSettings',
      type: 'group',
      label: 'Schedule Settings',
      fields: [
        {
          name: 'isScheduled',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Enable time-based visibility for this button',
          },
        },
        {
          name: 'startDate',
          type: 'date',
          admin: {
            condition: (data, siblingData) => siblingData?.isScheduled,
            description: 'Start date for button visibility',
          },
        },
        {
          name: 'endDate',
          type: 'date',
          admin: {
            condition: (data, siblingData) => siblingData?.isScheduled,
            description: 'End date for button visibility (leave empty for no end date)',
          },
        },
      ],
    },
    {
      name: 'analytics',
      type: 'group',
      label: 'Analytics & Tracking',
      fields: [
        {
          name: 'trackClicks',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Track clicks on this button for analytics',
          },
        },
        {
          name: 'clickCount',
          type: 'number',
          defaultValue: 0,
          admin: {
            readOnly: true,
            description: 'Total number of clicks (automatically updated)',
          },
        },
        {
          name: 'googleAnalyticsEvent',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData?.trackClicks,
            description: 'Custom Google Analytics event name for this button',
          },
        },
      ],
    },
    {
      name: 'additionalAttributes',
      type: 'group',
      label: 'Additional Attributes',
      fields: [
        {
          name: 'cssClass',
          type: 'text',
          admin: {
            description: 'Additional CSS classes for custom styling',
          },
        },
        {
          name: 'tooltip',
          type: 'text',
          admin: {
            description: 'Tooltip text that appears on hover',
          },
        },
        {
          name: 'ariaLabel',
          type: 'text',
          admin: {
            description: 'Accessibility label for screen readers',
          },
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Data Attributes',
          admin: {
            description: 'Custom data attributes for the button element',
          },
          fields: [
            {
              name: 'key',
              type: 'text',
              required: true,
              admin: {
                description: 'Attribute name (without data- prefix)',
              },
            },
            {
              name: 'value',
              type: 'text',
              required: true,
              admin: {
                description: 'Attribute value',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about this navigation item (not visible to users)',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        // Validate required fields based on linkType
        if (data.linkType === 'external' && !data.externalUrl) {
          throw new Error('External URL is required for external link type')
        }
        if (data.linkType === 'content' && !data.pageContent?.mainContent) {
          throw new Error('Main content is required for content page type')
        }

        // Auto-generate slug from title if not provided
        if (!data.slug && data.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
        }

        // Auto-generate aria-label if not provided
        if (!data.additionalAttributes?.ariaLabel) {
          if (!data.additionalAttributes) {
            data.additionalAttributes = {}
          }
          data.additionalAttributes.ariaLabel = `Navigate to ${data.title}`
        }

        // Auto-generate SEO meta title if content page and not provided
        if (data.linkType === 'content' && !data.pageContent?.seoSettings?.metaTitle) {
          if (!data.pageContent) {
            data.pageContent = {}
          }
          if (!data.pageContent.seoSettings) {
            data.pageContent.seoSettings = {}
          }
          data.pageContent.seoSettings.metaTitle = data.pageContent?.heroSection?.heroTitle || data.title
        }

        return data
      },
    ],
  },
  timestamps: true,
}
