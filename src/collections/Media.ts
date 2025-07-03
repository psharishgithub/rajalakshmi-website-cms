import type { CollectionConfig } from 'payload'
import { mediaAccess } from '../access'

export const Media: CollectionConfig = {
  slug: 'media',
  access: mediaAccess,
  admin: {
    // In admin panel, show media based on user role
    defaultColumns: ['filename', 'alt', 'uploadedBy', 'updatedAt'],
  },
  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        // Automatically set uploadedBy to current user when creating
        if (operation === 'create' && req.user) {
          data.uploadedBy = req.user.id
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'uploadedBy',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        readOnly: true,
        description: 'User who uploaded this media',
      },
    },
  ],
  upload: true,
}
