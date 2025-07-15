import { CollectionConfig } from 'payload'
import { universalAccess } from '../access'

export const Placement: CollectionConfig = {
  slug: 'placement',
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
        description: 'Title for the placement section',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the placement page (e.g., placement-2024-25)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this placement page is active and visible',
      },
    },

    // Placement Cell Section
    {
      name: 'placementCell',
      type: 'group',
      label: 'Placement Cell',
      fields: [
        {
          name: 'overview',
          type: 'richText',
          admin: {
            description: 'Overview of the placement cell',
          },
        },
        {
          name: 'vision',
          type: 'richText',
          admin: {
            description: 'Vision of the placement cell',
          },
        },
        {
          name: 'mission',
          type: 'richText',
          admin: {
            description: 'Mission of the placement cell',
          },
        },
        {
          name: 'objectives',
          type: 'richText',
          admin: {
            description: 'Objectives and goals of the placement cell',
          },
        },
        {
          name: 'teamMembers',
          type: 'array',
          label: 'Team Members',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the team member',
              },
            },
            {
              name: 'designation',
              type: 'text',
              required: true,
              admin: {
                description: 'Designation/Position',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department',
              },
            },
            {
              name: 'email',
              type: 'email',
              admin: {
                description: 'Email address',
              },
            },
            {
              name: 'phone',
              type: 'text',
              admin: {
                description: 'Phone number',
              },
            },
            {
              name: 'photo',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Photo of the team member',
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

    // Why Rajalakshmi Section
    {
      name: 'whyRajalakshmi',
      type: 'group',
      label: 'Why Rajalakshmi?',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Content explaining why students should choose Rajalakshmi',
          },
        },
        {
          name: 'strengthsList',
          type: 'array',
          label: 'Key Strengths',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the strength',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description of the strength',
              },
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Icon or image representing this strength',
              },
            },
          ],
        },
        {
          name: 'statistics',
          type: 'array',
          label: 'Key Statistics',
          fields: [
            {
              name: 'metric',
              type: 'text',
              required: true,
              admin: {
                description: 'Metric name (e.g., Placement Rate)',
              },
            },
            {
              name: 'value',
              type: 'text',
              required: true,
              admin: {
                description: 'Value (e.g., 95%)',
              },
            },
            {
              name: 'description',
              type: 'text',
              admin: {
                description: 'Additional description',
              },
            },
          ],
        },
      ],
    },

    // Procedure Section
    {
      name: 'procedure',
      type: 'group',
      label: 'Procedure',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Overview of placement procedure',
          },
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Placement Process Steps',
          fields: [
            {
              name: 'stepNumber',
              type: 'number',
              required: true,
              admin: {
                description: 'Step number in the process',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the step',
              },
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
              admin: {
                description: 'Detailed description of the step',
              },
            },
            {
              name: 'timeline',
              type: 'text',
              admin: {
                description: 'Expected timeline for this step',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Required Documents',
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
        {
          name: 'eligibilityCriteria',
          type: 'richText',
          admin: {
            description: 'Eligibility criteria for placement',
          },
        },
        {
          name: 'registrationProcess',
          type: 'richText',
          admin: {
            description: 'Student registration process details',
          },
        },
      ],
    },

    // Training Programs Section
    {
      name: 'trainingPrograms',
      type: 'group',
      label: 'Training Programs',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Overview of training programs',
          },
        },
        {
          name: 'programsList',
          type: 'array',
          label: 'Training Programs',
          fields: [
            {
              name: 'programName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the training program',
              },
            },
            {
              name: 'programType',
              type: 'select',
              options: [
                { label: 'Technical Skills', value: 'technical' },
                { label: 'Soft Skills', value: 'soft_skills' },
                { label: 'Aptitude Training', value: 'aptitude' },
                { label: 'Interview Preparation', value: 'interview' },
                { label: 'Industry Specific', value: 'industry_specific' },
                { label: 'Communication Skills', value: 'communication' },
                { label: 'Leadership Training', value: 'leadership' },
              ],
              admin: {
                description: 'Type of training program',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the program',
              },
            },
            {
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Duration of the program',
              },
            },
            {
              name: 'targetAudience',
              type: 'text',
              admin: {
                description: 'Target audience (e.g., Final year students)',
              },
            },
            {
              name: 'schedule',
              type: 'richText',
              admin: {
                description: 'Program schedule and timings',
              },
            },
            {
              name: 'trainer',
              type: 'text',
              admin: {
                description: 'Trainer/Instructor name',
              },
            },
            {
              name: 'materials',
              type: 'array',
              label: 'Training Materials',
              fields: [
                {
                  name: 'material',
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
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
      ],
    },

    // Placement Report Section
    {
      name: 'placementReport',
      type: 'group',
      label: 'Placement Report',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Overview of placement reports',
          },
        },
        {
          name: 'yearlyReports',
          type: 'array',
          label: 'Yearly Placement Reports',
          fields: [
            {
              name: 'academicYear',
              type: 'text',
              required: true,
              admin: {
                description: 'Academic year (e.g., 2023-24)',
              },
            },
            {
              name: 'totalStudents',
              type: 'number',
              admin: {
                description: 'Total eligible students',
              },
            },
            {
              name: 'studentsPlaced',
              type: 'number',
              admin: {
                description: 'Number of students placed',
              },
            },
            {
              name: 'placementPercentage',
              type: 'number',
              admin: {
                description: 'Placement percentage',
              },
            },
            {
              name: 'averagePackage',
              type: 'text',
              admin: {
                description: 'Average package offered',
              },
            },
            {
              name: 'highestPackage',
              type: 'text',
              admin: {
                description: 'Highest package offered',
              },
            },
            {
              name: 'companiesVisited',
              type: 'number',
              admin: {
                description: 'Number of companies visited',
              },
            },
            {
              name: 'departmentWiseData',
              type: 'array',
              label: 'Department-wise Data',
              fields: [
                {
                  name: 'department',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'totalStudents',
                  type: 'number',
                },
                {
                  name: 'studentsPlaced',
                  type: 'number',
                },
                {
                  name: 'placementPercentage',
                  type: 'number',
                },
              ],
            },
            {
              name: 'reportDocument',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Detailed placement report document (PDF)',
              },
            },
          ],
        },
      ],
    },

    // Recruiters Section
    {
      name: 'recruiters',
      type: 'group',
      label: 'Recruiters',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Overview content about recruiters',
          },
        },
        {
          name: 'recruitersList',
          type: 'array',
          label: 'Recruiting Companies',
          fields: [
            {
              name: 'companyName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the recruiting company',
              },
            },
            {
              name: 'companyLogo',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Company logo',
              },
            },
            {
              name: 'industry',
              type: 'select',
              options: [
                { label: 'IT/Software', value: 'it_software' },
                { label: 'Manufacturing', value: 'manufacturing' },
                { label: 'Automotive', value: 'automotive' },
                { label: 'Banking/Finance', value: 'banking_finance' },
                { label: 'Consulting', value: 'consulting' },
                { label: 'Healthcare', value: 'healthcare' },
                { label: 'Education', value: 'education' },
                { label: 'Government', value: 'government' },
                { label: 'Others', value: 'others' },
              ],
              admin: {
                description: 'Industry category',
              },
            },
            {
              name: 'website',
              type: 'text',
              admin: {
                description: 'Company website URL',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Brief description about the company',
              },
            },
            {
              name: 'rolesOffered',
              type: 'text',
              admin: {
                description: 'Typical roles offered (comma separated)',
              },
            },
            {
              name: 'packageRange',
              type: 'text',
              admin: {
                description: 'Package range offered',
              },
            },
            {
              name: 'visitFrequency',
              type: 'select',
              options: [
                { label: 'Annual', value: 'annual' },
                { label: 'Bi-annual', value: 'biannual' },
                { label: 'Occasional', value: 'occasional' },
                { label: 'Regular', value: 'regular' },
              ],
              admin: {
                description: 'How frequently they visit for recruitment',
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

    // Employability Training Camp Section
    {
      name: 'employabilityTrainingCamp',
      type: 'group',
      label: 'Employability Training Camp',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Overview of employability training camp',
          },
        },
        {
          name: 'campDetails',
          type: 'array',
          label: 'Training Camps',
          fields: [
            {
              name: 'campTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the training camp',
              },
            },
            {
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Duration of the camp',
              },
            },
            {
              name: 'startDate',
              type: 'date',
              admin: {
                description: 'Start date of the camp',
              },
            },
            {
              name: 'endDate',
              type: 'date',
              admin: {
                description: 'End date of the camp',
              },
            },
            {
              name: 'objectives',
              type: 'richText',
              admin: {
                description: 'Objectives and goals of the camp',
              },
            },
            {
              name: 'modules',
              type: 'array',
              label: 'Training Modules',
              fields: [
                {
                  name: 'moduleName',
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
                },
                {
                  name: 'trainer',
                  type: 'text',
                },
              ],
            },
            {
              name: 'targetParticipants',
              type: 'text',
              admin: {
                description: 'Target participants (e.g., Final year students)',
              },
            },
            {
              name: 'outcomes',
              type: 'richText',
              admin: {
                description: 'Expected outcomes and benefits',
              },
            },
            {
              name: 'registrationLink',
              type: 'text',
              admin: {
                description: 'Registration link for the camp',
              },
            },
            {
              name: 'materials',
              type: 'array',
              label: 'Camp Materials',
              fields: [
                {
                  name: 'material',
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
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
      ],
    },

    // Placement Contact Section
    {
      name: 'placementContact',
      type: 'group',
      label: 'Placement Contact',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'General contact information content',
          },
        },
        {
          name: 'placementOfficer',
          type: 'group',
          label: 'Placement Officer',
          fields: [
            {
              name: 'name',
              type: 'text',
              admin: {
                description: 'Name of the placement officer',
              },
            },
            {
              name: 'designation',
              type: 'text',
              admin: {
                description: 'Designation/Title',
              },
            },
            {
              name: 'email',
              type: 'email',
              admin: {
                description: 'Email address',
              },
            },
            {
              name: 'phone',
              type: 'text',
              admin: {
                description: 'Phone number',
              },
            },
            {
              name: 'officeHours',
              type: 'text',
              admin: {
                description: 'Office hours',
              },
            },
          ],
        },
        {
          name: 'generalContact',
          type: 'group',
          label: 'General Contact',
          fields: [
            {
              name: 'address',
              type: 'richText',
              admin: {
                description: 'Physical address of placement cell',
              },
            },
            {
              name: 'email',
              type: 'email',
              admin: {
                description: 'General email for placement queries',
              },
            },
            {
              name: 'phone',
              type: 'text',
              admin: {
                description: 'General phone number',
              },
            },
            {
              name: 'fax',
              type: 'text',
              admin: {
                description: 'Fax number if available',
              },
            },
            {
              name: 'officeHours',
              type: 'text',
              admin: {
                description: 'General office hours',
              },
            },
          ],
        },
        {
          name: 'departmentContacts',
          type: 'array',
          label: 'Department-wise Contacts',
          fields: [
            {
              name: 'department',
              type: 'text',
              required: true,
              admin: {
                description: 'Department name',
              },
            },
            {
              name: 'coordinatorName',
              type: 'text',
              admin: {
                description: 'Placement coordinator name',
              },
            },
            {
              name: 'email',
              type: 'email',
              admin: {
                description: 'Department coordinator email',
              },
            },
            {
              name: 'phone',
              type: 'text',
              admin: {
                description: 'Department coordinator phone',
              },
            },
          ],
        },
      ],
    },

    // Downloads Section
    {
      name: 'downloads',
      type: 'group',
      label: 'Downloads',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Overview content for downloads section',
          },
        },
        {
          name: 'downloadsList',
          type: 'array',
          label: 'Download Files',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the download',
              },
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Placement Brochure', value: 'brochure' },
                { label: 'Placement Report', value: 'report' },
                { label: 'Application Forms', value: 'forms' },
                { label: 'Training Materials', value: 'training' },
                { label: 'Guidelines', value: 'guidelines' },
                { label: 'Policies', value: 'policies' },
                { label: 'Company Information', value: 'company_info' },
                { label: 'Others', value: 'others' },
              ],
              admin: {
                description: 'Category of the download',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description of the file',
              },
            },
            {
              name: 'file',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'File to download',
              },
            },
            {
              name: 'fileSize',
              type: 'text',
              admin: {
                description: 'File size (e.g., 2.5 MB)',
              },
            },
            {
              name: 'lastUpdated',
              type: 'date',
              admin: {
                description: 'Last updated date',
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

    // Gallery Section
    {
      name: 'gallery',
      type: 'group',
      label: 'Gallery',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Overview content for gallery section',
          },
        },
        {
          name: 'galleryItems',
          type: 'array',
          label: 'Gallery Items',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the gallery item',
              },
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Placement Drive', value: 'placement_drive' },
                { label: 'Training Programs', value: 'training' },
                { label: 'Campus Interviews', value: 'interviews' },
                { label: 'Industry Visits', value: 'industry_visits' },
                { label: 'Job Fairs', value: 'job_fairs' },
                { label: 'Awards & Recognition', value: 'awards' },
                { label: 'Others', value: 'others' },
              ],
              admin: {
                description: 'Category of the gallery item',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description of the event/activity',
              },
            },
            {
              name: 'date',
              type: 'date',
              admin: {
                description: 'Date of the event/activity',
              },
            },
            {
              name: 'images',
              type: 'array',
              label: 'Images',
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
                  admin: {
                    description: 'Image caption',
                  },
                },
              ],
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

    // Capacity Development and Skills Enhancement Section
    {
      name: 'capacityDevelopmentSkillsEnhancement',
      type: 'group',
      label: 'Capacity Development and Skills Enhancement',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Overview of capacity development and skills enhancement programs',
          },
        },
        {
          name: 'programs',
          type: 'array',
          label: 'Development Programs',
          fields: [
            {
              name: 'programName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the development program',
              },
            },
            {
              name: 'programType',
              type: 'select',
              options: [
                { label: 'Technical Skills', value: 'technical' },
                { label: 'Soft Skills', value: 'soft_skills' },
                { label: 'Leadership Development', value: 'leadership' },
                { label: 'Communication Skills', value: 'communication' },
                { label: 'Entrepreneurship', value: 'entrepreneurship' },
                { label: 'Industry Readiness', value: 'industry_readiness' },
                { label: 'Research Skills', value: 'research' },
                { label: 'Others', value: 'others' },
              ],
              admin: {
                description: 'Type of development program',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the program',
              },
            },
            {
              name: 'objectives',
              type: 'richText',
              admin: {
                description: 'Learning objectives and outcomes',
              },
            },
            {
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Duration of the program',
              },
            },
            {
              name: 'targetAudience',
              type: 'text',
              admin: {
                description: 'Target audience for the program',
              },
            },
            {
              name: 'methodology',
              type: 'richText',
              admin: {
                description: 'Teaching/training methodology used',
              },
            },
            {
              name: 'facilitators',
              type: 'array',
              label: 'Facilitators',
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
                  name: 'organization',
                  type: 'text',
                },
                {
                  name: 'expertise',
                  type: 'text',
                },
              ],
            },
            {
              name: 'schedule',
              type: 'richText',
              admin: {
                description: 'Program schedule and timeline',
              },
            },
            {
              name: 'resources',
              type: 'array',
              label: 'Resources & Materials',
              fields: [
                {
                  name: 'resource',
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
            {
              name: 'outcomes',
              type: 'richText',
              admin: {
                description: 'Expected outcomes and success metrics',
              },
            },
            {
              name: 'feedback',
              type: 'richText',
              admin: {
                description: 'Participant feedback and testimonials',
              },
            },
            {
              name: 'registrationInfo',
              type: 'richText',
              admin: {
                description: 'Registration process and requirements',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'skillAssessment',
          type: 'group',
          label: 'Skills Assessment',
          fields: [
            {
              name: 'overview',
              type: 'richText',
              admin: {
                description: 'Overview of skills assessment process',
              },
            },
            {
              name: 'assessmentTools',
              type: 'array',
              label: 'Assessment Tools',
              fields: [
                {
                  name: 'toolName',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'richText',
                },
                {
                  name: 'skillsAssessed',
                  type: 'text',
                  admin: {
                    description: 'Skills assessed by this tool',
                  },
                },
                {
                  name: 'accessLink',
                  type: 'text',
                  admin: {
                    description: 'Link to access the assessment tool',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'certifications',
          type: 'group',
          label: 'Certifications',
          fields: [
            {
              name: 'overview',
              type: 'richText',
              admin: {
                description: 'Overview of certification programs',
              },
            },
            {
              name: 'certificationList',
              type: 'array',
              label: 'Available Certifications',
              fields: [
                {
                  name: 'certificationName',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'provider',
                  type: 'text',
                  admin: {
                    description: 'Certification provider/organization',
                  },
                },
                {
                  name: 'description',
                  type: 'richText',
                },
                {
                  name: 'eligibility',
                  type: 'richText',
                  admin: {
                    description: 'Eligibility criteria',
                  },
                },
                {
                  name: 'duration',
                  type: 'text',
                },
                {
                  name: 'fee',
                  type: 'text',
                  admin: {
                    description: 'Certification fee if any',
                  },
                },
                {
                  name: 'registrationLink',
                  type: 'text',
                  admin: {
                    description: 'Registration link',
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
