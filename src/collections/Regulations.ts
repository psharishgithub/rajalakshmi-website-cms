import { CollectionConfig } from 'payload'
import { universalAccess } from '../access'

export const Regulations: CollectionConfig = {
  slug: 'regulations',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'isActive', 'updatedAt'],
  },
  access: universalAccess,
  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        // Auto-set the priority based on category if not set
        if (operation === 'create' && !data.priority) {
          data.priority = 0
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title of the regulation document',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of the regulation',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'regulation-categories',
      required: true,
      admin: {
        description: 'Select the category for this regulation',
      },
    },
    {
      name: 'pdfFile',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload the PDF file for this regulation document',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this regulation is active and visible',
      },
    },
    {
      name: 'priority',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Higher numbers appear first within the category',
      },
    },
    {
      name: 'downloadCount',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
        description: 'Number of times this regulation has been downloaded',
      },
    },
    {
      name: 'tags',
      type: 'array',
      admin: {
        description: 'Optional tags for better organization and searchability',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  timestamps: true,
}
