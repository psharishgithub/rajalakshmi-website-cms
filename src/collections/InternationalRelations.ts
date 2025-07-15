import { CollectionConfig } from 'payload'
import { universalAccess } from '../access'

export const InternationalRelations: CollectionConfig = {
  slug: 'international-relations',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'isActive', 'updatedAt'],
  },
  access: universalAccess,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title for the international relations section',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the international relations page (e.g., international-relations)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this international relations page is active and visible',
      },
    },
    {
      name: 'introduction',
      type: 'group',
      label: 'Introduction',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Introduction content for international relations',
          },
        },
        {
          name: 'vision',
          type: 'richText',
          admin: {
            description: 'Vision statement for international relations',
          },
        },
        {
          name: 'mission',
          type: 'richText',
          admin: {
            description: 'Mission statement for international relations',
          },
        },
        {
          name: 'objectives',
          type: 'array',
          label: 'Objectives',
          fields: [
            {
              name: 'objective',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Featured image for introduction section',
          },
        },
      ],
    },
    {
      name: 'services',
      type: 'group',
      label: 'Services',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Services overview content',
          },
        },
        {
          name: 'servicesList',
          type: 'array',
          label: 'Services List',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Student Exchange', value: 'student_exchange' },
                { label: 'Faculty Exchange', value: 'faculty_exchange' },
                { label: 'Research Collaboration', value: 'research_collaboration' },
                { label: 'Academic Partnership', value: 'academic_partnership' },
                { label: 'International Programs', value: 'international_programs' },
                { label: 'Study Abroad', value: 'study_abroad' },
                { label: 'Cultural Exchange', value: 'cultural_exchange' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Service icon/image',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
      ],
    },
    {
      name: 'admissions',
      type: 'group',
      label: 'Admissions',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'International admissions overview content',
          },
        },
        {
          name: 'programs',
          type: 'array',
          label: 'International Programs',
          fields: [
            {
              name: 'programName',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'richText',
            },
            {
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Program duration (e.g., 2 years, 6 months)',
              },
            },
            {
              name: 'eligibility',
              type: 'richText',
            },
            {
              name: 'applicationProcess',
              type: 'richText',
            },
            {
              name: 'fees',
              type: 'text',
            },
            {
              name: 'intake',
              type: 'select',
              options: [
                { label: 'Fall (August/September)', value: 'fall' },
                { label: 'Spring (January/February)', value: 'spring' },
                { label: 'Summer (May/June)', value: 'summer' },
                { label: 'Multiple Intakes', value: 'multiple' },
              ],
            },
            {
              name: 'brochure',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Program brochure (PDF)',
              },
            },
          ],
        },
        {
          name: 'requirements',
          type: 'array',
          label: 'Admission Requirements',
          fields: [
            {
              name: 'requirement',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
        {
          name: 'applicationForm',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'International admission application form (PDF)',
          },
        },
      ],
    },
    {
      name: 'approvalsAccreditations',
      type: 'group',
      label: 'Approvals, Accreditations & Honours',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Approvals, accreditations and honours overview content',
          },
        },
        {
          name: 'approvals',
          type: 'array',
          label: 'International Approvals',
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
              name: 'description',
              type: 'textarea',
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
              name: 'certificate',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Approval certificate (PDF)',
              },
            },
          ],
        },
        {
          name: 'accreditations',
          type: 'array',
          label: 'International Accreditations',
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
        {
          name: 'honours',
          type: 'array',
          label: 'International Honours & Recognition',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'awardingBody',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'dateReceived',
              type: 'date',
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Academic Excellence', value: 'academic_excellence' },
                { label: 'Research Recognition', value: 'research_recognition' },
                { label: 'International Partnership', value: 'international_partnership' },
                { label: 'Quality Assurance', value: 'quality_assurance' },
                { label: 'Innovation Award', value: 'innovation_award' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'certificate',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Award certificate/document (PDF)',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'research',
      type: 'group',
      label: 'Research',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'International research collaboration overview content',
          },
        },
        {
          name: 'researchAreas',
          type: 'array',
          label: 'Research Areas',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'richText',
            },
            {
              name: 'collaborations',
              type: 'array',
              label: 'International Collaborations',
              fields: [
                {
                  name: 'institution',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'country',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'collaborationType',
                  type: 'select',
                  options: [
                    { label: 'Joint Research', value: 'joint_research' },
                    { label: 'Student Exchange', value: 'student_exchange' },
                    { label: 'Faculty Exchange', value: 'faculty_exchange' },
                    { label: 'Publication', value: 'publication' },
                    { label: 'Conference', value: 'conference' },
                    { label: 'Project', value: 'project' },
                  ],
                },
                {
                  name: 'startDate',
                  type: 'date',
                },
                {
                  name: 'endDate',
                  type: 'date',
                },
                {
                  name: 'status',
                  type: 'select',
                  options: [
                    { label: 'Active', value: 'active' },
                    { label: 'Completed', value: 'completed' },
                    { label: 'Proposed', value: 'proposed' },
                  ],
                  defaultValue: 'active',
                },
              ],
            },
          ],
        },
        {
          name: 'publications',
          type: 'array',
          label: 'International Publications',
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
              name: 'publishedDate',
              type: 'date',
            },
            {
              name: 'doi',
              type: 'text',
            },
            {
              name: 'abstract',
              type: 'textarea',
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Publication document (PDF)',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'mous',
      type: 'group',
      label: 'Memorandums of Understanding (MOUs)',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'International MOUs overview content',
          },
        },
        {
          name: 'mouList',
          type: 'array',
          label: 'International MOU List',
          fields: [
            {
              name: 'institution',
              type: 'text',
              required: true,
            },
            {
              name: 'country',
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
                description: 'Duration of the MOU (e.g., 3 years, 5 years)',
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
                { label: 'Draft', value: 'draft' },
              ],
              defaultValue: 'active',
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Academic Collaboration', value: 'academic' },
                { label: 'Research Partnership', value: 'research' },
                { label: 'Student Exchange', value: 'student_exchange' },
                { label: 'Faculty Exchange', value: 'faculty_exchange' },
                { label: 'Dual Degree Program', value: 'dual_degree' },
                { label: 'Joint Research', value: 'joint_research' },
                { label: 'Cultural Exchange', value: 'cultural_exchange' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'keyActivities',
              type: 'array',
              label: 'Key Activities',
              fields: [
                {
                  name: 'activity',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'benefits',
              type: 'textarea',
              admin: {
                description: 'Benefits and outcomes of the MOU',
              },
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
              name: 'institutionLogo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'contactPerson',
              type: 'text',
            },
            {
              name: 'contactEmail',
              type: 'email',
            },
          ],
        },
      ],
    },
    {
      name: 'testimonials',
      type: 'group',
      label: 'Testimonials',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Testimonials overview content',
          },
        },
        {
          name: 'testimonialsList',
          type: 'array',
          label: 'International Testimonials',
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
              name: 'institution',
              type: 'text',
            },
            {
              name: 'country',
              type: 'text',
            },
            {
              name: 'testimonial',
              type: 'richText',
              required: true,
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'International Student', value: 'international_student' },
                { label: 'Exchange Student', value: 'exchange_student' },
                { label: 'Visiting Faculty', value: 'visiting_faculty' },
                { label: 'Partner Institution', value: 'partner_institution' },
                { label: 'Alumni', value: 'alumni' },
                { label: 'Research Collaborator', value: 'research_collaborator' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'program',
              type: 'text',
              admin: {
                description: 'Program or collaboration they were part of',
              },
            },
            {
              name: 'year',
              type: 'number',
              admin: {
                description: 'Year of their experience/graduation',
              },
            },
            {
              name: 'rating',
              type: 'number',
              min: 1,
              max: 5,
              admin: {
                description: 'Rating out of 5 stars',
              },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Photo of the person giving testimonial',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether this testimonial is active and visible',
              },
            },
            {
              name: 'isFeatured',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Whether this testimonial should be featured prominently',
              },
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
