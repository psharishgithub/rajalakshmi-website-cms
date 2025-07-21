import { CollectionConfig } from 'payload'
import { universalAccess } from '../access'

export const Departments: CollectionConfig = {
  slug: 'departments',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'code', 'isActive', 'order', 'updatedAt'],
    description: 'Manage departments for navigation dropdown',
  },
  access: universalAccess,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Department name (e.g., Computer Science Engineering)',
      },
    },
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Department code (e.g., CSE, ECE, MECH)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug (e.g., computer-science-engineering)',
      },
    },
    {
      name: 'shortName',
      type: 'text',
      admin: {
        description: 'Short name for display in dropdown (optional)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of the department',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Department icon for navigation',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show in navigation dropdown',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order in dropdown (higher numbers first)',
      },
    },
    {
      name: 'establishedYear',
      type: 'number',
      admin: {
        description: 'Year the department was established',
      },
    },
    {
      name: 'headOfDepartment',
      type: 'text',
      admin: {
        description: 'Current Head of Department',
      },
    },
    {
      name: 'contactEmail',
      type: 'email',
      admin: {
        description: 'Department contact email',
      },
    },
    {
      name: 'contactPhone',
      type: 'text',
      admin: {
        description: 'Department contact phone',
      },
    },
  ],
  timestamps: true,
}
