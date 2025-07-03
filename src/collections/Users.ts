import type { CollectionConfig } from 'payload'
import { UserWithRole, isAdmin } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'blogger',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Blogger',
          value: 'blogger',
        },
      ],
      access: {
        create: ({ req: { user } }) => {
          // Only admins can assign roles during creation
          return isAdmin(user)
        },
        update: ({ req: { user } }) => {
          // Only admins can update roles
          return isAdmin(user)
        },
      },
    },
    // Email added by default
    // Add more fields as needed
  ],
  access: {
    // Only admins can create new users
    create: ({ req: { user } }) => {
      return isAdmin(user)
    },
    // Users can read their own profile, admins can read all
    read: ({ req: { user } }) => {
      if (isAdmin(user)) return true
      return {
        id: {
          equals: user?.id,
        },
      }
    },
    // Users can update their own profile (except role), admins can update all
    update: ({ req: { user } }) => {
      if (isAdmin(user)) return true
      return {
        id: {
          equals: user?.id,
        },
      }
    },
    // Only admins can delete users
    delete: ({ req: { user } }) => {
      return isAdmin(user)
    },
  },
}
