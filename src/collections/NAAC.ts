import { CollectionConfig } from 'payload'
import { adminAndBloggerWithSuperAdminAccess } from '../access'

export const NAAC: CollectionConfig = {
  slug: 'naac',
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
        description: 'Title for the NAAC section',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the NAAC page (e.g., 2024-25)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this NAAC page is active and visible',
      },
    },

    // DVV Clarifications Section
    {
      name: 'dvvClarifications',
      type: 'group',
      label: 'DVV Clarifications',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'DVV clarifications overview content',
          },
        },
        {
          name: 'clarificationsList',
          type: 'array',
          label: 'DVV Clarifications',
          fields: [
            {
              name: 'criterion',
              type: 'text',
              required: true,
              admin: {
                description: 'Criterion number (e.g., 1.1.1, 2.2.3)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the clarification',
              },
            },
            {
              name: 'dvvQuery',
              type: 'richText',
              admin: {
                description: 'DVV query/clarification requested',
              },
            },
            {
              name: 'institutionResponse',
              type: 'richText',
              admin: {
                description: 'Institution response to DVV query',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Submitted', value: 'submitted' },
                { label: 'Accepted', value: 'accepted' },
                { label: 'Under Review', value: 'under_review' },
              ],
              defaultValue: 'pending',
            },
            {
              name: 'submissionDate',
              type: 'date',
              admin: {
                description: 'Date of response submission',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                  admin: {
                    description: 'Description of the document',
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    // Extended Profile Section
    {
      name: 'extendedProfile',
      type: 'group',
      label: 'Extended Profile',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Extended profile overview content',
          },
        },
        {
          name: 'profileData',
          type: 'array',
          label: 'Extended Profile Data',
          fields: [
            {
              name: 'year',
              type: 'text',
              required: true,
              admin: {
                description: 'Academic year (e.g., 2023-24)',
              },
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Student Data', value: 'student_data' },
                { label: 'Academic Data', value: 'academic_data' },
                { label: 'Institutional Data', value: 'institutional_data' },
                { label: 'Financial Data', value: 'financial_data' },
                { label: 'Infrastructure Data', value: 'infrastructure_data' },
              ],
              admin: {
                description: 'Category of profile data',
              },
            },
            {
              name: 'data',
              type: 'richText',
              admin: {
                description: 'Extended profile data content',
              },
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload extended profile document (PDF/Excel)',
              },
            },
          ],
        },
      ],
    },

    // Curricular Aspects Section
    {
      name: 'curricularAspects',
      type: 'group',
      label: 'Curricular Aspects',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Curricular aspects overview content',
          },
        },
        {
          name: 'criteriaList',
          type: 'array',
          label: 'Curricular Aspects Criteria',
          fields: [
            {
              name: 'criterionNumber',
              type: 'text',
              required: true,
              admin: {
                description: 'Criterion number (e.g., 1.1.1)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the criterion',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description and response to the criterion',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    // Teaching Learning and Evaluation Section
    {
      name: 'teachingLearningEvaluation',
      type: 'group',
      label: 'Teaching Learning and Evaluation',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Teaching learning and evaluation overview content',
          },
        },
        {
          name: 'criteriaList',
          type: 'array',
          label: 'Teaching Learning Criteria',
          fields: [
            {
              name: 'criterionNumber',
              type: 'text',
              required: true,
              admin: {
                description: 'Criterion number (e.g., 2.1.1)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the criterion',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description and response to the criterion',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    // Research, Innovations and Extension Section
    {
      name: 'researchInnovationsExtension',
      type: 'group',
      label: 'Research, Innovations and Extension',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Research, innovations and extension overview content',
          },
        },
        {
          name: 'criteriaList',
          type: 'array',
          label: 'Research Innovation Criteria',
          fields: [
            {
              name: 'criterionNumber',
              type: 'text',
              required: true,
              admin: {
                description: 'Criterion number (e.g., 3.1.1)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the criterion',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description and response to the criterion',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    // Infrastructure and Learning Resources Section
    {
      name: 'infrastructureLearningResources',
      type: 'group',
      label: 'Infrastructure and Learning Resources',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Infrastructure and learning resources overview content',
          },
        },
        {
          name: 'criteriaList',
          type: 'array',
          label: 'Infrastructure Criteria',
          fields: [
            {
              name: 'criterionNumber',
              type: 'text',
              required: true,
              admin: {
                description: 'Criterion number (e.g., 4.1.1)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the criterion',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description and response to the criterion',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    // Student Support and Progression Section
    {
      name: 'studentSupportProgression',
      type: 'group',
      label: 'Student Support and Progression',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Student support and progression overview content',
          },
        },
        {
          name: 'criteriaList',
          type: 'array',
          label: 'Student Support Criteria',
          fields: [
            {
              name: 'criterionNumber',
              type: 'text',
              required: true,
              admin: {
                description: 'Criterion number (e.g., 5.1.1)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the criterion',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description and response to the criterion',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    // Governance, Leadership and Management Section
    {
      name: 'governanceLeadershipManagement',
      type: 'group',
      label: 'Governance, Leadership and Management',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Governance, leadership and management overview content',
          },
        },
        {
          name: 'criteriaList',
          type: 'array',
          label: 'Governance Criteria',
          fields: [
            {
              name: 'criterionNumber',
              type: 'text',
              required: true,
              admin: {
                description: 'Criterion number (e.g., 6.1.1)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the criterion',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description and response to the criterion',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    // Institutional Values and Best Practices Section
    {
      name: 'institutionalValuesBestPractices',
      type: 'group',
      label: 'Institutional Values and Best Practices',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Institutional values and best practices overview content',
          },
        },
        {
          name: 'criteriaList',
          type: 'array',
          label: 'Institutional Values Criteria',
          fields: [
            {
              name: 'criterionNumber',
              type: 'text',
              required: true,
              admin: {
                description: 'Criterion number (e.g., 7.1.1)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the criterion',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description and response to the criterion',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    // Best Practices Section
    {
      name: 'bestPractices',
      type: 'group',
      label: 'Best Practices',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Best practices overview content',
          },
        },
        {
          name: 'practicesList',
          type: 'array',
          label: 'Best Practices',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the best practice',
              },
            },
            {
              name: 'objective',
              type: 'richText',
              admin: {
                description: 'Objective of the practice',
              },
            },
            {
              name: 'context',
              type: 'richText',
              admin: {
                description: 'Context and background of the practice',
              },
            },
            {
              name: 'practice',
              type: 'richText',
              admin: {
                description: 'Description of the practice',
              },
            },
            {
              name: 'evidence',
              type: 'richText',
              admin: {
                description: 'Evidence of success',
              },
            },
            {
              name: 'problems',
              type: 'richText',
              admin: {
                description: 'Problems encountered and resources required',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    // Institutional Distinctiveness Section
    {
      name: 'institutionalDistinctiveness',
      type: 'group',
      label: 'Institutional Distinctiveness',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Institutional distinctiveness overview content',
          },
        },
        {
          name: 'distinctiveFeatures',
          type: 'array',
          label: 'Distinctive Features',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the distinctive feature',
              },
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
              admin: {
                description: 'Detailed description of the distinctive feature',
              },
            },
            {
              name: 'impact',
              type: 'richText',
              admin: {
                description: 'Impact and significance of this feature',
              },
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Academic Innovation', value: 'academic_innovation' },
                { label: 'Research Excellence', value: 'research_excellence' },
                { label: 'Industry Collaboration', value: 'industry_collaboration' },
                { label: 'Social Impact', value: 'social_impact' },
                { label: 'Infrastructure', value: 'infrastructure' },
                { label: 'Student Development', value: 'student_development' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Category of distinctive feature',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Supporting Documents',
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    // Undertaking Section
    {
      name: 'undertaking',
      type: 'group',
      label: 'Undertaking',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Undertaking content',
          },
        },
        {
          name: 'undertakingDocument',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload the official undertaking document (PDF)',
          },
        },
        {
          name: 'principalName',
          type: 'text',
          admin: {
            description: 'Name of the Principal',
          },
        },
        {
          name: 'principalSignature',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Principal signature image',
          },
        },
        {
          name: 'institutionSeal',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Institution seal/stamp image',
          },
        },
        {
          name: 'dateOfSubmission',
          type: 'date',
          admin: {
            description: 'Date of undertaking submission',
          },
        },
      ],
    },

    {
      name: 'priority',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Higher numbers appear first',
      },
    },
  ],
  timestamps: true,
}
