import { CollectionConfig } from 'payload'
import { adminOnly } from '../access'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'authorName',
  },
  access: {
    create: ({ req: { user } }: any) => adminOnly.create({ req: { user } }),
    read: ({ req: { user } }: any) => {
      // If user is SuperAdmin or Admin, show all testimonials (including inactive ones)
      if (user && adminOnly.read({ req: { user } })) {
        return true;
      }
      // For public access (no user), only show active testimonials
      if (!user) {
        return {
          isActive: {
            equals: true,
          },
        };
      }
      // Default deny for non-admin users
      return false;
    },
    update: ({ req: { user } }: any) => adminOnly.update({ req: { user } }),
    delete: ({ req: { user } }: any) => adminOnly.delete({ req: { user } }),
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
    },
    {
      name: 'authorTitle',
      type: 'text',
      admin: {
        description: 'e.g., "Student", "Faculty", "Alumni"',
      },
    },
    {
      name: 'authorImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
  timestamps: true,
}