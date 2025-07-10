import { CollectionConfig } from 'payload'
import { adminOnly } from '../access'

export const RegulationCategories: CollectionConfig = {
  slug: 'regulation-categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'isActive', 'order', 'updatedAt'],
  },
  access: adminOnly,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Name of the regulation category (e.g., "Academic Regulations", "Administrative Policies", "Student Guidelines")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of what this category represents',
      },
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Icon class or emoji for the category (optional)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this category is active and visible',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order of display (higher numbers appear first)',
      },
    },
  ],
  timestamps: true,
}
