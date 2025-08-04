import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'
import { createSEOFields } from './shared/globalConfig'

export const InternationalRelations: GlobalConfig = {
  slug: 'international-relations',
  admin: {
    group: 'Content',
  },
  access: globalAccess,
  fields: [
    // SEO Fields
    ...createSEOFields(),
    // Hero Section
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      admin: {
        description: 'Main hero title for the about page',
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
      name: 'sections',
      type: 'array',
      label: 'About Sections',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Title of the about section',
          },
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            description: 'Content for this about section',
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
