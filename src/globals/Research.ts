import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'

export const Research: GlobalConfig = {
  slug: 'research',
  admin: {
    group: 'Content',
  },
  access: globalAccess,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title for the research section',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this research page is active and visible',
      },
    },

    // Research Centre Section
    {
      name: 'researchCentre',
      type: 'group',
      label: 'Research Centre',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Research centre overview content',
          },
        },
        {
          name: 'centresList',
          type: 'array',
          label: 'Research Centres',
          fields: [
            {
              name: 'centreName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the research centre',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department associated with the centre',
              },
            },
            {
              name: 'director',
              type: 'text',
              admin: {
                description: 'Director/Head of the research centre',
              },
            },
            {
              name: 'establishedYear',
              type: 'number',
              admin: {
                description: 'Year the centre was established',
              },
            },
            {
              name: 'focusAreas',
              type: 'array',
              label: 'Focus Areas',
              fields: [
                {
                  name: 'area',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Research focus area',
                  },
                },
              ],
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the research centre',
              },
            },
            {
              name: 'facilities',
              type: 'richText',
              admin: {
                description: 'Available facilities in the research centre',
              },
            },
            {
              name: 'achievements',
              type: 'richText',
              admin: {
                description: 'Key achievements and recognitions',
              },
            },
            {
              name: 'contactInfo',
              type: 'group',
              label: 'Contact Information',
              fields: [
                {
                  name: 'email',
                  type: 'email',
                  admin: {
                    description: 'Contact email for the research centre',
                  },
                },
                {
                  name: 'phone',
                  type: 'text',
                  admin: {
                    description: 'Contact phone number',
                  },
                },
                {
                  name: 'location',
                  type: 'text',
                  admin: {
                    description: 'Physical location/address',
                  },
                },
              ],
            },
            {
              name: 'centreImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Image of the research centre',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether this research centre is currently active',
              },
            },
          ],
        },
      ],
    },

    // Research Facilities Section
    {
      name: 'researchFacilities',
      type: 'group',
      label: 'Research Facilities',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Research facilities overview content',
          },
        },
        {
          name: 'facilitiesList',
          type: 'array',
          label: 'Facilities',
          fields: [
            {
              name: 'facilityName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the research facility',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department that manages the facility',
              },
            },
            {
              name: 'facilityType',
              type: 'select',
              options: [
                { label: 'Laboratory', value: 'laboratory' },
                { label: 'Equipment', value: 'equipment' },
                { label: 'Software', value: 'software' },
                { label: 'Library/Database', value: 'library' },
                { label: 'Computing Facility', value: 'computing' },
                { label: 'Testing Facility', value: 'testing' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of research facility',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the facility',
              },
            },
            {
              name: 'specifications',
              type: 'richText',
              admin: {
                description: 'Technical specifications and capabilities',
              },
            },
            {
              name: 'equipmentList',
              type: 'array',
              label: 'Equipment/Tools',
              fields: [
                {
                  name: 'equipmentName',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of the equipment/tool',
                  },
                },
                {
                  name: 'model',
                  type: 'text',
                  admin: {
                    description: 'Model/specification of the equipment',
                  },
                },
                {
                  name: 'quantity',
                  type: 'number',
                  admin: {
                    description: 'Number of units available',
                  },
                },
                {
                  name: 'description',
                  type: 'text',
                  admin: {
                    description: 'Brief description of the equipment',
                  },
                },
              ],
            },
            {
              name: 'usage',
              type: 'richText',
              admin: {
                description: 'Usage guidelines and procedures',
              },
            },
            {
              name: 'facilityImages',
              type: 'array',
              label: 'Facility Images',
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
              admin: {
                description: 'Whether this facility is currently available',
              },
            },
          ],
        },
      ],
    },

    // Research Publications Section
    {
      name: 'researchPublications',
      type: 'group',
      label: 'Research Publications',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Research publications overview content',
          },
        },
        {
          name: 'publicationsList',
          type: 'array',
          label: 'Publications',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the publication',
              },
            },
            {
              name: 'authors',
              type: 'text',
              required: true,
              admin: {
                description: 'Authors of the publication (comma separated)',
              },
            },
            {
              name: 'publicationType',
              type: 'select',
              options: [
                { label: 'Journal Article', value: 'journal' },
                { label: 'Conference Paper', value: 'conference' },
                { label: 'Book Chapter', value: 'book_chapter' },
                { label: 'Book', value: 'book' },
                { label: 'Patent', value: 'patent' },
                { label: 'Technical Report', value: 'technical_report' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of publication',
              },
            },
            {
              name: 'journal',
              type: 'text',
              admin: {
                description: 'Journal/Conference name',
              },
            },
            {
              name: 'volume',
              type: 'text',
              admin: {
                description: 'Volume number',
              },
            },
            {
              name: 'issue',
              type: 'text',
              admin: {
                description: 'Issue number',
              },
            },
            {
              name: 'pages',
              type: 'text',
              admin: {
                description: 'Page numbers',
              },
            },
            {
              name: 'publishedDate',
              type: 'date',
              admin: {
                description: 'Date of publication',
              },
            },
            {
              name: 'doi',
              type: 'text',
              admin: {
                description: 'DOI (Digital Object Identifier)',
              },
            },
            {
              name: 'abstract',
              type: 'richText',
              admin: {
                description: 'Abstract of the publication',
              },
            },
            {
              name: 'keywords',
              type: 'text',
              admin: {
                description: 'Keywords (comma separated)',
              },
            },
            {
              name: 'impactFactor',
              type: 'text',
              admin: {
                description: 'Impact factor of the journal',
              },
            },
            {
              name: 'url',
              type: 'text',
              admin: {
                description: 'URL to the publication',
              },
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload publication document (PDF)',
              },
            },
          ],
        },
      ],
    },

    // Research Projects Section
    {
      name: 'researchProjects',
      type: 'group',
      label: 'Research Projects',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Research projects overview content',
          },
        },
        {
          name: 'projectsList',
          type: 'array',
          label: 'Research Projects',
          fields: [
            {
              name: 'projectTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the research project',
              },
            },
            {
              name: 'principalInvestigator',
              type: 'text',
              required: true,
              admin: {
                description: 'Principal investigator name',
              },
            },
            {
              name: 'coInvestigators',
              type: 'text',
              admin: {
                description: 'Co-investigators (comma separated)',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department conducting the research',
              },
            },
            {
              name: 'fundingAgency',
              type: 'text',
              admin: {
                description: 'Funding agency/organization',
              },
            },
            {
              name: 'fundingAmount',
              type: 'number',
              admin: {
                description: 'Total funding amount',
              },
            },
            {
              name: 'projectDuration',
              type: 'text',
              admin: {
                description: 'Project duration (e.g., 3 years)',
              },
            },
            {
              name: 'startDate',
              type: 'date',
              admin: {
                description: 'Project start date',
              },
            },
            {
              name: 'endDate',
              type: 'date',
              admin: {
                description: 'Project end date',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Ongoing', value: 'ongoing' },
                { label: 'Completed', value: 'completed' },
                { label: 'Proposed', value: 'proposed' },
                { label: 'Suspended', value: 'suspended' },
              ],
              defaultValue: 'ongoing',
              admin: {
                description: 'Current status of the project',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the project',
              },
            },
            {
              name: 'objectives',
              type: 'richText',
              admin: {
                description: 'Project objectives and goals',
              },
            },
            {
              name: 'methodology',
              type: 'richText',
              admin: {
                description: 'Research methodology',
              },
            },
            {
              name: 'outcomes',
              type: 'richText',
              admin: {
                description: 'Expected or achieved outcomes',
              },
            },
            {
              name: 'publications',
              type: 'richText',
              admin: {
                description: 'Publications arising from this project',
              },
            },
            {
              name: 'projectImages',
              type: 'array',
              label: 'Project Images',
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
          ],
        },
      ],
    },

    // Research Collaborations Section
    {
      name: 'researchCollaborations',
      type: 'group',
      label: 'Research Collaborations',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Research collaborations overview content',
          },
        },
        {
          name: 'collaborationsList',
          type: 'array',
          label: 'Collaborations',
          fields: [
            {
              name: 'organizationName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the collaborating organization',
              },
            },
            {
              name: 'organizationType',
              type: 'select',
              options: [
                { label: 'Academic Institution', value: 'academic' },
                { label: 'Research Institute', value: 'research_institute' },
                { label: 'Industry', value: 'industry' },
                { label: 'Government Agency', value: 'government' },
                { label: 'International Organization', value: 'international' },
                { label: 'NGO/Non-profit', value: 'ngo' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of collaborating organization',
              },
            },
            {
              name: 'country',
              type: 'text',
              admin: {
                description: 'Country of the collaborating organization',
              },
            },
            {
              name: 'collaborationType',
              type: 'select',
              options: [
                { label: 'Joint Research Project', value: 'joint_research' },
                { label: 'Faculty Exchange', value: 'faculty_exchange' },
                { label: 'Student Exchange', value: 'student_exchange' },
                { label: 'Resource Sharing', value: 'resource_sharing' },
                { label: 'Joint Publications', value: 'joint_publications' },
                { label: 'Consultancy', value: 'consultancy' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of collaboration',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description of the collaboration',
              },
            },
            {
              name: 'startDate',
              type: 'date',
              admin: {
                description: 'Start date of collaboration',
              },
            },
            {
              name: 'endDate',
              type: 'date',
              admin: {
                description: 'End date of collaboration (if applicable)',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Completed', value: 'completed' },
                { label: 'Proposed', value: 'proposed' },
                { label: 'Suspended', value: 'suspended' },
              ],
              defaultValue: 'active',
              admin: {
                description: 'Current status of the collaboration',
              },
            },
            {
              name: 'outcomes',
              type: 'richText',
              admin: {
                description: 'Outcomes and achievements from the collaboration',
              },
            },
            {
              name: 'contactPerson',
              type: 'text',
              admin: {
                description: 'Contact person from our institution',
              },
            },
            {
              name: 'organizationLogo',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Logo of the collaborating organization',
              },
            },
          ],
        },
      ],
    },

    // Research Policies Section
    {
      name: 'researchPolicies',
      type: 'group',
      label: 'Research Policies',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Research policies overview content',
          },
        },
        {
          name: 'policiesList',
          type: 'array',
          label: 'Research Policies',
          fields: [
            {
              name: 'policyTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the research policy',
              },
            },
            {
              name: 'policyType',
              type: 'select',
              options: [
                { label: 'Research Ethics', value: 'ethics' },
                { label: 'Intellectual Property', value: 'ip' },
                { label: 'Publication Policy', value: 'publication' },
                { label: 'Data Management', value: 'data_management' },
                { label: 'Research Funding', value: 'funding' },
                { label: 'Collaboration Policy', value: 'collaboration' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of research policy',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description of the policy',
              },
            },
            {
              name: 'policyDocument',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Upload the complete policy document (PDF)',
              },
            },
            {
              name: 'effectiveDate',
              type: 'date',
              admin: {
                description: 'Date when the policy became effective',
              },
            },
            {
              name: 'version',
              type: 'text',
              admin: {
                description: 'Policy version (e.g., v1.0, v2.1)',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether this policy is currently active',
              },
            },
          ],
        },
      ],
    },

    // Research Achievements Section
    {
      name: 'researchAchievements',
      type: 'group',
      label: 'Research Achievements',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Research achievements overview content',
          },
        },
        {
          name: 'achievementsList',
          type: 'array',
          label: 'Achievements',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the achievement',
              },
            },
            {
              name: 'achievementType',
              type: 'select',
              options: [
                { label: 'Award/Recognition', value: 'award' },
                { label: 'Patent', value: 'patent' },
                { label: 'Best Paper Award', value: 'best_paper' },
                { label: 'Research Grant', value: 'grant' },
                { label: 'Technology Transfer', value: 'tech_transfer' },
                { label: 'Start-up/Spin-off', value: 'startup' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of achievement',
              },
            },
            {
              name: 'recipient',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the recipient(s)',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department of the recipient',
              },
            },
            {
              name: 'awardingBody',
              type: 'text',
              admin: {
                description: 'Organization/body that gave the award',
              },
            },
            {
              name: 'dateReceived',
              type: 'date',
              admin: {
                description: 'Date when the achievement was received',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the achievement',
              },
            },
            {
              name: 'amount',
              type: 'number',
              admin: {
                description: 'Monetary value (if applicable)',
              },
            },
            {
              name: 'certificate',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload certificate or proof document',
              },
            },
            {
              name: 'achievementImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Image related to the achievement',
              },
            },
          ],
        },
      ],
    },
  ],
}
