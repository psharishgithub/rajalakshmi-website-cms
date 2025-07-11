import { CollectionConfig } from 'payload'
import { adminAndBloggerWithSuperAdminAccess } from '../access'

export const About: CollectionConfig = {
  slug: 'about',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'isActive', 'updatedAt'],
  },
  access: adminAndBloggerWithSuperAdminAccess,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title for the about page section',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the about page (e.g., about-college)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this about page is active and visible',
      },
    },

    // Profile Section
    {
      name: 'profile',
      type: 'group',
      label: 'Profile',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'College profile content',
          },
        },
        {
          name: 'establishedYear',
          type: 'number',
          admin: {
            description: 'Year the college was established',
          },
        },
        {
          name: 'vision',
          type: 'richText',
          admin: {
            description: 'College vision statement',
          },
        },
        {
          name: 'mission',
          type: 'richText',
          admin: {
            description: 'College mission statement',
          },
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Featured image for profile section',
          },
        },
      ],
    },

    // Correspondent's Message
    {
      name: 'correspondentMessage',
      type: 'group',
      label: "Correspondent's Message",
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: "Correspondent's message content",
          },
        },
        {
          name: 'correspondentName',
          type: 'text',
          admin: {
            description: 'Name of the correspondent',
          },
        },
        {
          name: 'correspondentDesignation',
          type: 'text',
          admin: {
            description: 'Designation of the correspondent',
          },
        },
        {
          name: 'correspondentImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Photo of the correspondent',
          },
        },
        {
          name: 'correspondentSignature',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Signature of the correspondent',
          },
        },
      ],
    },

    // Principal
    {
      name: 'principal',
      type: 'group',
      label: 'Principal',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: "Principal's message content",
          },
        },
        {
          name: 'principalName',
          type: 'text',
          admin: {
            description: 'Name of the principal',
          },
        },
        {
          name: 'principalDesignation',
          type: 'text',
          admin: {
            description: 'Designation of the principal',
          },
        },
        {
          name: 'principalQualification',
          type: 'text',
          admin: {
            description: 'Qualification of the principal',
          },
        },
        {
          name: 'principalImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Photo of the principal',
          },
        },
        {
          name: 'principalSignature',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Signature of the principal',
          },
        },
      ],
    },

    // About the College
    {
      name: 'aboutCollege',
      type: 'group',
      label: 'About the College',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Detailed information about the college',
          },
        },
        {
          name: 'highlights',
          type: 'array',
          label: 'College Highlights',
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
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'campusImages',
          type: 'array',
          label: 'Campus Images',
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
            },
          ],
        },
      ],
    },

    // Accreditations
    {
      name: 'accreditations',
      type: 'group',
      label: 'Accreditations',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Accreditations overview content',
          },
        },
        {
          name: 'accreditationList',
          type: 'array',
          label: 'Accreditation List',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'accreditingBody',
              type: 'text',
              required: true,
            },
            {
              name: 'grade',
              type: 'text',
            },
            {
              name: 'validFrom',
              type: 'date',
            },
            {
              name: 'validTo',
              type: 'date',
            },
            {
              name: 'certificate',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Accreditation certificate (PDF)',
              },
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },

    // Approvals
    {
      name: 'approvals',
      type: 'group',
      label: 'Approvals',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Approvals overview content',
          },
        },
        {
          name: 'approvalList',
          type: 'array',
          label: 'Approval List',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'approvingBody',
              type: 'text',
              required: true,
            },
            {
              name: 'approvalNumber',
              type: 'text',
            },
            {
              name: 'dateOfApproval',
              type: 'date',
            },
            {
              name: 'validityPeriod',
              type: 'text',
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Approval document (PDF)',
              },
            },
          ],
        },
      ],
    },

    // Governing Body
    {
      name: 'governingBody',
      type: 'group',
      label: 'Governing Body',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Governing body overview content',
          },
        },
        {
          name: 'members',
          type: 'array',
          label: 'Governing Body Members',
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
              name: 'organization',
              type: 'text',
            },
            {
              name: 'position',
              type: 'select',
              options: [
                { label: 'Chairman', value: 'chairman' },
                { label: 'Secretary', value: 'secretary' },
                { label: 'Treasurer', value: 'treasurer' },
                { label: 'Member', value: 'member' },
                { label: 'Principal', value: 'principal' },
                { label: 'Other', value: 'other' },
              ],
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

    // Academic Council
    {
      name: 'academicCouncil',
      type: 'group',
      label: 'Academic Council',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Academic council overview content',
          },
        },
        {
          name: 'members',
          type: 'array',
          label: 'Academic Council Members',
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
              name: 'department',
              type: 'text',
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
              name: 'position',
              type: 'select',
              options: [
                { label: 'Chairman', value: 'chairman' },
                { label: 'Secretary', value: 'secretary' },
                { label: 'Member', value: 'member' },
                { label: 'External Expert', value: 'external_expert' },
                { label: 'Student Representative', value: 'student_rep' },
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

    // MOUs
    {
      name: 'mous',
      type: 'group',
      label: 'Memorandums of Understanding (MOUs)',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'MOUs overview content',
          },
        },
        {
          name: 'mouList',
          type: 'array',
          label: 'MOU List',
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
                description: 'Duration of the MOU (e.g., 3 years)',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Expired', value: 'expired' },
                { label: 'Renewed', value: 'renewed' },
                { label: 'Under Review', value: 'under_review' },
              ],
              defaultValue: 'active',
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Academic Collaboration', value: 'academic' },
                { label: 'Research Partnership', value: 'research' },
                { label: 'Industry Partnership', value: 'industry' },
                { label: 'International Collaboration', value: 'international' },
                { label: 'Student Exchange', value: 'student_exchange' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'MOU document (PDF)',
              },
            },
            {
              name: 'organizationLogo',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },

    // Eminent Faculty Members
    {
      name: 'eminentFaculty',
      type: 'group',
      label: 'Eminent Faculty Members',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Eminent faculty overview content',
          },
        },
        {
          name: 'facultyMembers',
          type: 'array',
          label: 'Eminent Faculty List',
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
              name: 'department',
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
              name: 'achievements',
              type: 'textarea',
              admin: {
                description: 'Notable achievements and recognitions',
              },
            },
            {
              name: 'researchInterests',
              type: 'textarea',
            },
            {
              name: 'publications',
              type: 'number',
              admin: {
                description: 'Number of publications',
              },
            },
            {
              name: 'awards',
              type: 'textarea',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'email',
              type: 'email',
            },
          ],
        },
      ],
    },

    // Mandatory Disclosures
    {
      name: 'mandatoryDisclosures',
      type: 'group',
      label: 'Mandatory Disclosures',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Mandatory disclosures overview content',
          },
        },
        {
          name: 'disclosures',
          type: 'array',
          label: 'Disclosure Documents',
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
              name: 'category',
              type: 'select',
              options: [
                { label: 'Financial Information', value: 'financial' },
                { label: 'Academic Information', value: 'academic' },
                { label: 'Infrastructure Details', value: 'infrastructure' },
                { label: 'Faculty Information', value: 'faculty' },
                { label: 'Student Information', value: 'student' },
                { label: 'Statutory Compliance', value: 'statutory' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Disclosure document (PDF)',
              },
            },
            {
              name: 'lastUpdated',
              type: 'date',
            },
          ],
        },
      ],
    },

    // Visitor's Remark
    {
      name: 'visitorsRemark',
      type: 'group',
      label: "Visitor's Remark",
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: "Visitor's remarks overview content",
          },
        },
        {
          name: 'remarks',
          type: 'array',
          label: "Visitor's Remarks",
          fields: [
            {
              name: 'visitorName',
              type: 'text',
              required: true,
            },
            {
              name: 'visitorDesignation',
              type: 'text',
            },
            {
              name: 'visitorOrganization',
              type: 'text',
            },
            {
              name: 'visitDate',
              type: 'date',
            },
            {
              name: 'remark',
              type: 'richText',
              required: true,
            },
            {
              name: 'visitorImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'visitImages',
              type: 'array',
              label: 'Visit Images',
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
                },
              ],
            },
          ],
        },
      ],
    },

    // Policies
    {
      name: 'policies',
      type: 'group',
      label: 'Policies',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Policies overview content',
          },
        },
        {
          name: 'policyList',
          type: 'array',
          label: 'Policy Documents',
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
              name: 'category',
              type: 'select',
              options: [
                { label: 'Academic Policy', value: 'academic' },
                { label: 'Administrative Policy', value: 'administrative' },
                { label: 'HR Policy', value: 'hr' },
                { label: 'Student Policy', value: 'student' },
                { label: 'Anti-Ragging Policy', value: 'anti_ragging' },
                { label: 'Grievance Policy', value: 'grievance' },
                { label: 'Research Policy', value: 'research' },
                { label: 'IT Policy', value: 'it' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Policy document (PDF)',
              },
            },
            {
              name: 'effectiveDate',
              type: 'date',
            },
            {
              name: 'version',
              type: 'text',
              admin: {
                description: 'Policy version (e.g., v1.0, v2.1)',
              },
            },
          ],
        },
      ],
    },

    // Committees
    {
      name: 'committees',
      type: 'group',
      label: 'Committees',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Committees overview content',
          },
        },
        {
          name: 'committeeList',
          type: 'array',
          label: 'Committee List',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'purpose',
              type: 'textarea',
              required: true,
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Academic Committee', value: 'academic' },
                { label: 'Administrative Committee', value: 'administrative' },
                { label: 'Student Committee', value: 'student' },
                { label: 'Grievance Committee', value: 'grievance' },
                { label: 'Anti-Ragging Committee', value: 'anti_ragging' },
                { label: 'Internal Quality Assurance', value: 'iqac' },
                { label: 'Research Committee', value: 'research' },
                { label: 'Placement Committee', value: 'placement' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'chairman',
              type: 'text',
            },
            {
              name: 'members',
              type: 'array',
              label: 'Committee Members',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'designation',
                  type: 'text',
                },
                {
                  name: 'department',
                  type: 'text',
                },
                {
                  name: 'role',
                  type: 'select',
                  options: [
                    { label: 'Chairman', value: 'chairman' },
                    { label: 'Convener', value: 'convener' },
                    { label: 'Secretary', value: 'secretary' },
                    { label: 'Member', value: 'member' },
                    { label: 'Student Representative', value: 'student_rep' },
                    { label: 'External Member', value: 'external' },
                  ],
                },
              ],
            },
            {
              name: 'meetingFrequency',
              type: 'text',
              admin: {
                description: 'How often the committee meets (e.g., Monthly, Quarterly)',
              },
            },
            {
              name: 'contactEmail',
              type: 'email',
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
