import { CollectionConfig } from 'payload'
import { adminAndBloggerWithSuperAdminAccess } from '../access'

export const DepartmentSections: CollectionConfig = {
  slug: 'department-sections',
  admin: {
    useAsTitle: 'department',
    defaultColumns: ['department', 'slug', 'isActive', 'updatedAt'],
  },
  access: adminAndBloggerWithSuperAdminAccess,
  fields: [
    {
      name: 'department',
      type: 'text',
      required: true,
      admin: {
        description: 'Name of the department (e.g., Computer Science Engineering)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the department (e.g., computer-science-engineering)',
      },
    },
    {
      name: 'departmentCode',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Department code (e.g., CSE, ECE, MECH)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this department section is active and visible',
      },
    },
    
    // Introduction Section
    {
      name: 'introduction',
      type: 'group',
      label: 'Introduction',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Introduction content for the department',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Featured image for introduction section',
          },
        },
      ],
    },

    // PEOs Section
    {
      name: 'peos',
      type: 'group',
      label: 'Program Educational Objectives (PEOs)',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Program Educational Objectives content',
          },
        },
        {
          name: 'objectives',
          type: 'array',
          label: 'PEO List',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },

    // POs Section
    {
      name: 'pos',
      type: 'group',
      label: 'Program Outcomes (POs)',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Program Outcomes content',
          },
        },
        {
          name: 'outcomes',
          type: 'array',
          label: 'PO List',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },

    // Opportunities Section
    {
      name: 'opportunities',
      type: 'group',
      label: 'Career Opportunities',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Career opportunities content',
          },
        },
        {
          name: 'opportunityList',
          type: 'array',
          label: 'Opportunity List',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },

    // Lab Facility Section
    {
      name: 'labFacility',
      type: 'group',
      label: 'Lab Facilities',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Lab facilities overview content',
          },
        },
        {
          name: 'labs',
          type: 'array',
          label: 'Laboratory List',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'equipment',
              type: 'textarea',
              admin: {
                description: 'List of equipment/software available',
              },
            },
            {
              name: 'images',
              type: 'array',
              label: 'Lab Images',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },

    // Faculty Section
    {
      name: 'faculty',
      type: 'group',
      label: 'Faculty Members',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Faculty overview content',
          },
        },
        {
          name: 'facultyMembers',
          type: 'array',
          label: 'Faculty List',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'designation',
              type: 'text',
              required: true,
            },
            {
              name: 'qualification',
              type: 'text',
            },
            {
              name: 'specialization',
              type: 'text',
            },
            {
              name: 'experience',
              type: 'text',
            },
            {
              name: 'email',
              type: 'email',
            },
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'bio',
              type: 'textarea',
            },
          ],
        },
      ],
    },

    // Achievements Section
    {
      name: 'achievements',
      type: 'group',
      label: 'Department Achievements',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Achievements overview content',
          },
        },
        {
          name: 'achievementList',
          type: 'array',
          label: 'Achievement List',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'date',
              type: 'date',
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Academic', value: 'academic' },
                { label: 'Research', value: 'research' },
                { label: 'Student Achievement', value: 'student' },
                { label: 'Faculty Achievement', value: 'faculty' },
                { label: 'Awards & Recognition', value: 'awards' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },

    // Classroom Section
    {
      name: 'classroom',
      type: 'group',
      label: 'Classroom Facilities',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Classroom facilities content',
          },
        },
        {
          name: 'classrooms',
          type: 'array',
          label: 'Classroom List',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'capacity',
              type: 'number',
            },
            {
              name: 'facilities',
              type: 'textarea',
              admin: {
                description: 'List of facilities available in this classroom',
              },
            },
            {
              name: 'images',
              type: 'array',
              label: 'Classroom Images',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },

    // Faculty Publications Section
    {
      name: 'facultyPublications',
      type: 'group',
      label: 'Faculty Publications',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Faculty publications overview content',
          },
        },
        {
          name: 'publications',
          type: 'array',
          label: 'Publication List',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'authors',
              type: 'text',
              required: true,
            },
            {
              name: 'journal',
              type: 'text',
            },
            {
              name: 'conference',
              type: 'text',
            },
            {
              name: 'year',
              type: 'number',
              required: true,
            },
            {
              name: 'type',
              type: 'select',
              options: [
                { label: 'Journal Paper', value: 'journal' },
                { label: 'Conference Paper', value: 'conference' },
                { label: 'Book Chapter', value: 'book_chapter' },
                { label: 'Book', value: 'book' },
                { label: 'Patent', value: 'patent' },
                { label: 'Other', value: 'other' },
              ],
              required: true,
            },
            {
              name: 'doi',
              type: 'text',
              admin: {
                description: 'DOI or URL link to the publication',
              },
            },
          ],
        },
      ],
    },

    // Guest Lectures Section
    {
      name: 'guestLectures',
      type: 'group',
      label: 'Guest Lectures',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Guest lectures overview content',
          },
        },
        {
          name: 'lectures',
          type: 'array',
          label: 'Guest Lecture List',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'speaker',
              type: 'text',
              required: true,
            },
            {
              name: 'speakerDesignation',
              type: 'text',
            },
            {
              name: 'organization',
              type: 'text',
            },
            {
              name: 'date',
              type: 'date',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },

    // MoUs Section
    {
      name: 'mous',
      type: 'group',
      label: 'Memorandums of Understanding (MoUs)',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'MoUs overview content',
          },
        },
        {
          name: 'mouList',
          type: 'array',
          label: 'MoU List',
          fields: [
            {
              name: 'organization',
              type: 'text',
              required: true,
            },
            {
              name: 'purpose',
              type: 'textarea',
              required: true,
            },
            {
              name: 'dateOfSigning',
              type: 'date',
            },
            {
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Duration of the MoU (e.g., 3 years)',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Expired', value: 'expired' },
                { label: 'Renewed', value: 'renewed' },
              ],
              defaultValue: 'active',
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'MoU document (PDF)',
              },
            },
          ],
        },
      ],
    },

    // University Rank Holders Section
    {
      name: 'universityRankHolders',
      type: 'group',
      label: 'University Rank Holders',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'University rank holders overview content',
          },
        },
        {
          name: 'rankHolders',
          type: 'array',
          label: 'Rank Holder List',
          fields: [
            {
              name: 'studentName',
              type: 'text',
              required: true,
            },
            {
              name: 'rank',
              type: 'number',
              required: true,
            },
            {
              name: 'academicYear',
              type: 'text',
              required: true,
              admin: {
                description: 'Academic year in format: 2024-25',
                placeholder: '2024-25',
              },
            },
            {
              name: 'course',
              type: 'text',
              required: true,
              admin: {
                description: 'Course/Program (e.g., B.E CSE, M.E CSE)',
              },
            },
            {
              name: 'cgpa',
              type: 'number',
              admin: {
                description: 'CGPA/Percentage achieved',
              },
            },
            {
              name: 'photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'currentPosition',
              type: 'text',
              admin: {
                description: 'Current job/position of the student',
              },
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
