import { CollectionConfig } from 'payload'
import { adminOnly } from '../access'

export const HomeSlider: CollectionConfig = {
  slug: 'home-slider',
  admin: {
    useAsTitle: 'title',
  },
  access: adminOnly,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'desktopImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Desktop version - Recommended aspect ratio: 16:9',
      },
    },
    {
      name: 'mobileImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Mobile version - Recommended aspect ratio: 3:4',
      },
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
  timestamps: true,
}