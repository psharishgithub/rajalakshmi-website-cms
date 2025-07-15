import { CollectionConfig } from 'payload'
import { universalAccess } from '../access'

export const Research: CollectionConfig = {
  slug: 'research',
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
        description: 'Title for the research section',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the research page (e.g., research-activities)',
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

    // Recognition & Focus Section
    {
      name: 'recognitionAndFocus',
      type: 'group',
      label: 'Recognition & Focus',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Recognition and focus areas overview content',
          },
        },
        {
          name: 'recognitionsList',
          type: 'array',
          label: 'Recognitions',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the recognition/award',
              },
            },
            {
              name: 'awardingBody',
              type: 'text',
              required: true,
              admin: {
                description: 'Organization that gave the recognition',
              },
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Research Excellence', value: 'research_excellence' },
                { label: 'Innovation Award', value: 'innovation' },
                { label: 'Best Researcher', value: 'best_researcher' },
                { label: 'Publication Award', value: 'publication' },
                { label: 'Patent Award', value: 'patent' },
                { label: 'Industry Recognition', value: 'industry' },
                { label: 'Government Recognition', value: 'government' },
                { label: 'International Recognition', value: 'international' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Category of recognition',
              },
            },
            {
              name: 'recipient',
              type: 'text',
              admin: {
                description: 'Name of the recipient (faculty/student/institution)',
              },
            },
            {
              name: 'year',
              type: 'number',
              admin: {
                description: 'Year of recognition',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description of the recognition',
              },
            },
            {
              name: 'certificate',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Certificate/document of recognition',
              },
            },
          ],
        },
        {
          name: 'focusAreas',
          type: 'array',
          label: 'Research Focus Areas',
          fields: [
            {
              name: 'areaName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the research focus area',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Associated department',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description of the focus area',
              },
            },
            {
              name: 'keyProjects',
              type: 'array',
              label: 'Key Projects',
              fields: [
                {
                  name: 'projectTitle',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'principalInvestigator',
                  type: 'text',
                },
                {
                  name: 'status',
                  type: 'select',
                  options: [
                    { label: 'Ongoing', value: 'ongoing' },
                    { label: 'Completed', value: 'completed' },
                    { label: 'Proposed', value: 'proposed' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // Industry Institute Collaborations Section
    {
      name: 'industryInstituteCollaborations',
      type: 'group',
      label: 'Industry Institute Collaborations',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Industry-institute collaborations overview content',
          },
        },
        {
          name: 'collaborationsList',
          type: 'array',
          label: 'Collaborations',
          fields: [
            {
              name: 'partnerName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the collaborating partner',
              },
            },
            {
              name: 'partnerType',
              type: 'select',
              options: [
                { label: 'Industry', value: 'industry' },
                { label: 'Research Institute', value: 'research_institute' },
                { label: 'University', value: 'university' },
                { label: 'Government Organization', value: 'government' },
                { label: 'International Organization', value: 'international' },
                { label: 'NGO', value: 'ngo' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of collaborating partner',
              },
            },
            {
              name: 'collaborationType',
              type: 'select',
              options: [
                { label: 'Research Collaboration', value: 'research' },
                { label: 'Student Exchange', value: 'student_exchange' },
                { label: 'Faculty Exchange', value: 'faculty_exchange' },
                { label: 'Joint Projects', value: 'joint_projects' },
                { label: 'Internship Program', value: 'internship' },
                { label: 'Consultancy', value: 'consultancy' },
                { label: 'Training Program', value: 'training' },
                { label: 'Sponsored Research', value: 'sponsored_research' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of collaboration',
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
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Duration of collaboration',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Completed', value: 'completed' },
                { label: 'Suspended', value: 'suspended' },
                { label: 'Renewed', value: 'renewed' },
              ],
              defaultValue: 'active',
              admin: {
                description: 'Current status of collaboration',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the collaboration',
              },
            },
            {
              name: 'objectives',
              type: 'richText',
              admin: {
                description: 'Objectives and goals of the collaboration',
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
              type: 'group',
              label: 'Contact Person',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  admin: {
                    description: 'Name of the contact person from college',
                  },
                },
                {
                  name: 'designation',
                  type: 'text',
                  admin: {
                    description: 'Designation of the contact person',
                  },
                },
                {
                  name: 'email',
                  type: 'email',
                  admin: {
                    description: 'Email of the contact person',
                  },
                },
                {
                  name: 'phone',
                  type: 'text',
                  admin: {
                    description: 'Phone number of the contact person',
                  },
                },
              ],
            },
            {
              name: 'mou',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'MOU document (PDF)',
              },
            },
            {
              name: 'partnerLogo',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Logo of the collaborating partner',
              },
            },
          ],
        },
      ],
    },

    // Externally Funded Projects Section
    {
      name: 'externallyFundedProjects',
      type: 'group',
      label: 'Externally Funded Projects',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Externally funded projects overview content',
          },
        },
        {
          name: 'projectsList',
          type: 'array',
          label: 'Projects',
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
                description: 'Principal Investigator name',
              },
            },
            {
              name: 'coInvestigators',
              type: 'array',
              label: 'Co-Investigators',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of co-investigator',
                  },
                },
                {
                  name: 'designation',
                  type: 'text',
                  admin: {
                    description: 'Designation of co-investigator',
                  },
                },
                {
                  name: 'department',
                  type: 'text',
                  admin: {
                    description: 'Department of co-investigator',
                  },
                },
              ],
            },
            {
              name: 'fundingAgency',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the funding agency',
              },
            },
            {
              name: 'fundingScheme',
              type: 'text',
              admin: {
                description: 'Name of the funding scheme/program',
              },
            },
            {
              name: 'grantAmount',
              type: 'number',
              admin: {
                description: 'Total grant amount in rupees',
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
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Project duration (e.g., 3 years)',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Ongoing', value: 'ongoing' },
                { label: 'Completed', value: 'completed' },
                { label: 'Sanctioned', value: 'sanctioned' },
                { label: 'Submitted', value: 'submitted' },
                { label: 'Under Review', value: 'under_review' },
              ],
              admin: {
                description: 'Current status of the project',
              },
            },
            {
              name: 'abstract',
              type: 'richText',
              admin: {
                description: 'Project abstract/summary',
              },
            },
            {
              name: 'objectives',
              type: 'richText',
              admin: {
                description: 'Project objectives',
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
              name: 'expectedOutcomes',
              type: 'richText',
              admin: {
                description: 'Expected outcomes and deliverables',
              },
            },
            {
              name: 'achievements',
              type: 'richText',
              admin: {
                description: 'Key achievements and milestones',
              },
            },
            {
              name: 'publications',
              type: 'array',
              label: 'Publications from Project',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Publication title',
                  },
                },
                {
                  name: 'authors',
                  type: 'text',
                  admin: {
                    description: 'List of authors',
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
                  name: 'year',
                  type: 'number',
                  admin: {
                    description: 'Year of publication',
                  },
                },
                {
                  name: 'doi',
                  type: 'text',
                  admin: {
                    description: 'DOI or link to publication',
                  },
                },
              ],
            },
            {
              name: 'projectDocument',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Project proposal/report document',
              },
            },
          ],
        },
      ],
    },

    // Internally Funded Projects Section
    {
      name: 'internallyFundedProjects',
      type: 'group',
      label: 'Internally Funded Projects',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Internally funded projects overview content',
          },
        },
        {
          name: 'projectsList',
          type: 'array',
          label: 'Projects',
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
                description: 'Principal Investigator name',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department of the principal investigator',
              },
            },
            {
              name: 'fundingSource',
              type: 'select',
              options: [
                { label: 'College Research Fund', value: 'college_fund' },
                { label: 'Seed Money', value: 'seed_money' },
                { label: 'Faculty Development Fund', value: 'faculty_development' },
                { label: 'Student Research Fund', value: 'student_research' },
                { label: 'Other Internal Fund', value: 'other' },
              ],
              admin: {
                description: 'Source of internal funding',
              },
            },
            {
              name: 'grantAmount',
              type: 'number',
              admin: {
                description: 'Grant amount in rupees',
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
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Project duration',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Ongoing', value: 'ongoing' },
                { label: 'Completed', value: 'completed' },
                { label: 'Approved', value: 'approved' },
                { label: 'Under Review', value: 'under_review' },
              ],
              admin: {
                description: 'Current status of the project',
              },
            },
            {
              name: 'abstract',
              type: 'richText',
              admin: {
                description: 'Project abstract/summary',
              },
            },
            {
              name: 'objectives',
              type: 'richText',
              admin: {
                description: 'Project objectives',
              },
            },
            {
              name: 'outcomes',
              type: 'richText',
              admin: {
                description: 'Project outcomes and results',
              },
            },
            {
              name: 'projectDocument',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Project proposal/report document',
              },
            },
          ],
        },
      ],
    },

    // List of Doctorates Section
    {
      name: 'listOfDoctorates',
      type: 'group',
      label: 'List of Doctorates',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'List of doctorates overview content',
          },
        },
        {
          name: 'doctoratesList',
          type: 'array',
          label: 'Doctorates Awarded',
          fields: [
            {
              name: 'candidateName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the doctorate candidate',
              },
            },
            {
              name: 'thesisTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the doctoral thesis',
              },
            },
            {
              name: 'supervisor',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the research supervisor',
              },
            },
            {
              name: 'coSupervisor',
              type: 'text',
              admin: {
                description: 'Name of the co-supervisor (if any)',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department of research',
              },
            },
            {
              name: 'researchArea',
              type: 'text',
              admin: {
                description: 'Research area/specialization',
              },
            },
            {
              name: 'university',
              type: 'text',
              admin: {
                description: 'University that awarded the degree',
              },
            },
            {
              name: 'degreeAwarded',
              type: 'date',
              admin: {
                description: 'Date when degree was awarded',
              },
            },
            {
              name: 'registrationNumber',
              type: 'text',
              admin: {
                description: 'Registration number of the candidate',
              },
            },
            {
              name: 'abstract',
              type: 'richText',
              admin: {
                description: 'Abstract of the doctoral thesis',
              },
            },
            {
              name: 'publications',
              type: 'array',
              label: 'Publications from Thesis',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Publication title',
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
                  name: 'year',
                  type: 'number',
                  admin: {
                    description: 'Year of publication',
                  },
                },
              ],
            },
            {
              name: 'thesisDocument',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Doctoral thesis document (PDF)',
              },
            },
            {
              name: 'certificateDocument',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Degree certificate document',
              },
            },
          ],
        },
      ],
    },

    // Faculty pursuing Doctorate Section
    {
      name: 'facultyPursuingDoctorate',
      type: 'group',
      label: 'Faculty pursuing Doctorate',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Faculty pursuing doctorate overview content',
          },
        },
        {
          name: 'facultyList',
          type: 'array',
          label: 'Faculty Members',
          fields: [
            {
              name: 'facultyName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the faculty member',
              },
            },
            {
              name: 'designation',
              type: 'text',
              admin: {
                description: 'Current designation',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department of the faculty',
              },
            },
            {
              name: 'researchTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the doctoral research',
              },
            },
            {
              name: 'supervisor',
              type: 'text',
              admin: {
                description: 'Name of the research supervisor',
              },
            },
            {
              name: 'university',
              type: 'text',
              admin: {
                description: 'University where pursuing doctorate',
              },
            },
            {
              name: 'registrationDate',
              type: 'date',
              admin: {
                description: 'Date of registration for doctorate',
              },
            },
            {
              name: 'expectedCompletion',
              type: 'date',
              admin: {
                description: 'Expected completion date',
              },
            },
            {
              name: 'researchArea',
              type: 'text',
              admin: {
                description: 'Research area/specialization',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Coursework', value: 'coursework' },
                { label: 'Synopsis Submitted', value: 'synopsis' },
                { label: 'Research Phase', value: 'research' },
                { label: 'Thesis Writing', value: 'thesis_writing' },
                { label: 'Thesis Submitted', value: 'thesis_submitted' },
                { label: 'Viva Voce', value: 'viva_voce' },
              ],
              admin: {
                description: 'Current status of doctorate',
              },
            },
            {
              name: 'abstract',
              type: 'richText',
              admin: {
                description: 'Research abstract',
              },
            },
            {
              name: 'facultyImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Photo of the faculty member',
              },
            },
          ],
        },
      ],
    },

    // Recognized Research Supervisors Section
    {
      name: 'recognizedResearchSupervisors',
      type: 'group',
      label: 'Recognized Research Supervisors',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Recognized research supervisors overview content',
          },
        },
        {
          name: 'supervisorsList',
          type: 'array',
          label: 'Research Supervisors',
          fields: [
            {
              name: 'supervisorName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the research supervisor',
              },
            },
            {
              name: 'designation',
              type: 'text',
              admin: {
                description: 'Current designation',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department of the supervisor',
              },
            },
            {
              name: 'qualification',
              type: 'text',
              admin: {
                description: 'Educational qualification',
              },
            },
            {
              name: 'specialization',
              type: 'text',
              admin: {
                description: 'Area of specialization',
              },
            },
            {
              name: 'researchAreas',
              type: 'array',
              label: 'Research Areas',
              fields: [
                {
                  name: 'area',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Research area',
                  },
                },
              ],
            },
            {
              name: 'recognizingUniversities',
              type: 'array',
              label: 'Recognizing Universities',
              fields: [
                {
                  name: 'universityName',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of the university',
                  },
                },
                {
                  name: 'recognitionDate',
                  type: 'date',
                  admin: {
                    description: 'Date of recognition',
                  },
                },
                {
                  name: 'validUntil',
                  type: 'date',
                  admin: {
                    description: 'Valid until date',
                  },
                },
                {
                  name: 'recognitionDocument',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    description: 'Recognition certificate document',
                  },
                },
              ],
            },
            {
              name: 'scholarsSupervised',
              type: 'group',
              label: 'Scholars Supervised',
              fields: [
                {
                  name: 'completed',
                  type: 'number',
                  defaultValue: 0,
                  admin: {
                    description: 'Number of scholars completed',
                  },
                },
                {
                  name: 'ongoing',
                  type: 'number',
                  defaultValue: 0,
                  admin: {
                    description: 'Number of scholars currently ongoing',
                  },
                },
              ],
            },
            {
              name: 'experience',
              type: 'text',
              admin: {
                description: 'Years of experience in research supervision',
              },
            },
            {
              name: 'publications',
              type: 'number',
              admin: {
                description: 'Number of research publications',
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
              name: 'supervisorImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Photo of the supervisor',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether currently accepting new research scholars',
              },
            },
          ],
        },
      ],
    },

    // Centres of Excellence Section
    {
      name: 'centresOfExcellence',
      type: 'group',
      label: 'Centres of Excellence',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Centres of excellence overview content',
          },
        },
        {
          name: 'centresList',
          type: 'array',
          label: 'Centres',
          fields: [
            {
              name: 'centreName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the centre of excellence',
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
              name: 'fundingAgency',
              type: 'text',
              admin: {
                description: 'Funding agency or sponsor',
              },
            },
            {
              name: 'director',
              type: 'text',
              admin: {
                description: 'Director of the centre',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Associated department',
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
                    description: 'Focus area of excellence',
                  },
                },
              ],
            },
            {
              name: 'objectives',
              type: 'richText',
              admin: {
                description: 'Objectives of the centre',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the centre',
              },
            },
            {
              name: 'facilities',
              type: 'richText',
              admin: {
                description: 'Available facilities and infrastructure',
              },
            },
            {
              name: 'achievements',
              type: 'richText',
              admin: {
                description: 'Key achievements and milestones',
              },
            },
            {
              name: 'researchPrograms',
              type: 'array',
              label: 'Research Programs',
              fields: [
                {
                  name: 'programName',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of the research program',
                  },
                },
                {
                  name: 'description',
                  type: 'text',
                  admin: {
                    description: 'Brief description of the program',
                  },
                },
                {
                  name: 'duration',
                  type: 'text',
                  admin: {
                    description: 'Duration of the program',
                  },
                },
              ],
            },
            {
              name: 'industryPartners',
              type: 'array',
              label: 'Industry Partners',
              fields: [
                {
                  name: 'partnerName',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of industry partner',
                  },
                },
                {
                  name: 'collaborationType',
                  type: 'text',
                  admin: {
                    description: 'Type of collaboration',
                  },
                },
              ],
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
                    description: 'Contact email',
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
                    description: 'Physical location',
                  },
                },
              ],
            },
            {
              name: 'centreImages',
              type: 'array',
              label: 'Centre Images',
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
                description: 'Whether this centre is currently active',
              },
            },
          ],
        },
      ],
    },

    // Projects & Patents Section
    {
      name: 'projectsAndPatents',
      type: 'group',
      label: 'Projects & Patents',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Projects and patents overview content',
          },
        },
        {
          name: 'patentsList',
          type: 'array',
          label: 'Patents',
          fields: [
            {
              name: 'patentTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the patent',
              },
            },
            {
              name: 'inventors',
              type: 'array',
              label: 'Inventors',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of inventor',
                  },
                },
                {
                  name: 'designation',
                  type: 'text',
                  admin: {
                    description: 'Designation of inventor',
                  },
                },
                {
                  name: 'department',
                  type: 'text',
                  admin: {
                    description: 'Department of inventor',
                  },
                },
              ],
            },
            {
              name: 'patentNumber',
              type: 'text',
              admin: {
                description: 'Patent application/grant number',
              },
            },
            {
              name: 'applicationDate',
              type: 'date',
              admin: {
                description: 'Date of patent application',
              },
            },
            {
              name: 'grantDate',
              type: 'date',
              admin: {
                description: 'Date of patent grant (if granted)',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Filed', value: 'filed' },
                { label: 'Published', value: 'published' },
                { label: 'Granted', value: 'granted' },
                { label: 'Rejected', value: 'rejected' },
                { label: 'Withdrawn', value: 'withdrawn' },
              ],
              admin: {
                description: 'Current status of the patent',
              },
            },
            {
              name: 'patentOffice',
              type: 'select',
              options: [
                { label: 'Indian Patent Office', value: 'indian' },
                { label: 'US Patent Office', value: 'us' },
                { label: 'European Patent Office', value: 'european' },
                { label: 'International (PCT)', value: 'international' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Patent office where filed',
              },
            },
            {
              name: 'abstract',
              type: 'richText',
              admin: {
                description: 'Patent abstract',
              },
            },
            {
              name: 'technicalField',
              type: 'text',
              admin: {
                description: 'Technical field of the invention',
              },
            },
            {
              name: 'commercialization',
              type: 'richText',
              admin: {
                description: 'Commercialization potential and status',
              },
            },
            {
              name: 'patentDocument',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Patent document (PDF)',
              },
            },
          ],
        },
        {
          name: 'innovationProjects',
          type: 'array',
          label: 'Innovation Projects',
          fields: [
            {
              name: 'projectTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the innovation project',
              },
            },
            {
              name: 'projectLeader',
              type: 'text',
              admin: {
                description: 'Project leader name',
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
                    description: 'Name of team member',
                  },
                },
                {
                  name: 'role',
                  type: 'text',
                  admin: {
                    description: 'Role in the project',
                  },
                },
              ],
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Associated department',
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
              name: 'completionDate',
              type: 'date',
              admin: {
                description: 'Project completion date',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Ongoing', value: 'ongoing' },
                { label: 'Completed', value: 'completed' },
                { label: 'Prototype', value: 'prototype' },
                { label: 'Commercialized', value: 'commercialized' },
              ],
              admin: {
                description: 'Current status of the project',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Project description',
              },
            },
            {
              name: 'outcomes',
              type: 'richText',
              admin: {
                description: 'Project outcomes and impact',
              },
            },
            {
              name: 'funding',
              type: 'text',
              admin: {
                description: 'Funding source and amount',
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

    // DST FIST Lab Section
    {
      name: 'dstFistLab',
      type: 'group',
      label: 'DST FIST Lab',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'DST FIST Lab overview content',
          },
        },
        {
          name: 'labDetails',
          type: 'group',
          label: 'Lab Details',
          fields: [
            {
              name: 'labName',
              type: 'text',
              admin: {
                description: 'Name of the DST FIST Lab',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department housing the lab',
              },
            },
            {
              name: 'coordinator',
              type: 'text',
              admin: {
                description: 'Lab coordinator name',
              },
            },
            {
              name: 'grantAmount',
              type: 'number',
              admin: {
                description: 'DST FIST grant amount in rupees',
              },
            },
            {
              name: 'grantPeriod',
              type: 'text',
              admin: {
                description: 'Grant period (e.g., 2020-2025)',
              },
            },
            {
              name: 'phase',
              type: 'select',
              options: [
                { label: 'Phase I', value: 'phase1' },
                { label: 'Phase II', value: 'phase2' },
                { label: 'Phase III', value: 'phase3' },
              ],
              admin: {
                description: 'FIST grant phase',
              },
            },
            {
              name: 'objectives',
              type: 'richText',
              admin: {
                description: 'Objectives of the DST FIST Lab',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the lab',
              },
            },
          ],
        },
        {
          name: 'infrastructure',
          type: 'group',
          label: 'Infrastructure',
          fields: [
            {
              name: 'equipmentList',
              type: 'array',
              label: 'Major Equipment',
              fields: [
                {
                  name: 'equipmentName',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of the equipment',
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
                  name: 'supplier',
                  type: 'text',
                  admin: {
                    description: 'Equipment supplier',
                  },
                },
                {
                  name: 'cost',
                  type: 'number',
                  admin: {
                    description: 'Cost of the equipment in rupees',
                  },
                },
                {
                  name: 'installationDate',
                  type: 'date',
                  admin: {
                    description: 'Date of installation',
                  },
                },
                {
                  name: 'applications',
                  type: 'richText',
                  admin: {
                    description: 'Applications and usage of the equipment',
                  },
                },
                {
                  name: 'status',
                  type: 'select',
                  options: [
                    { label: 'Operational', value: 'operational' },
                    { label: 'Under Installation', value: 'installation' },
                    { label: 'Under Maintenance', value: 'maintenance' },
                    { label: 'Procured', value: 'procured' },
                  ],
                  defaultValue: 'operational',
                  admin: {
                    description: 'Current status of the equipment',
                  },
                },
              ],
            },
            {
              name: 'facilities',
              type: 'richText',
              admin: {
                description: 'Additional facilities and infrastructure',
              },
            },
          ],
        },
        {
          name: 'researchActivities',
          type: 'group',
          label: 'Research Activities',
          fields: [
            {
              name: 'ongoingProjects',
              type: 'array',
              label: 'Ongoing Projects',
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
                  admin: {
                    description: 'Principal investigator name',
                  },
                },
                {
                  name: 'duration',
                  type: 'text',
                  admin: {
                    description: 'Project duration',
                  },
                },
                {
                  name: 'fundingAgency',
                  type: 'text',
                  admin: {
                    description: 'Funding agency',
                  },
                },
                {
                  name: 'grantAmount',
                  type: 'number',
                  admin: {
                    description: 'Grant amount',
                  },
                },
              ],
            },
            {
              name: 'publications',
              type: 'array',
              label: 'Publications from Lab',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Publication title',
                  },
                },
                {
                  name: 'authors',
                  type: 'text',
                  admin: {
                    description: 'List of authors',
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
                  name: 'year',
                  type: 'number',
                  admin: {
                    description: 'Year of publication',
                  },
                },
                {
                  name: 'impactFactor',
                  type: 'number',
                  admin: {
                    description: 'Impact factor of the journal',
                  },
                },
                {
                  name: 'doi',
                  type: 'text',
                  admin: {
                    description: 'DOI or link to publication',
                  },
                },
              ],
            },
            {
              name: 'studentResearch',
              type: 'richText',
              admin: {
                description: 'Student research activities and achievements',
              },
            },
          ],
        },
        {
          name: 'collaboration',
          type: 'group',
          label: 'Collaboration',
          fields: [
            {
              name: 'industryCollaborations',
              type: 'array',
              label: 'Industry Collaborations',
              fields: [
                {
                  name: 'companyName',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of the collaborating company',
                  },
                },
                {
                  name: 'collaborationType',
                  type: 'text',
                  admin: {
                    description: 'Type of collaboration',
                  },
                },
                {
                  name: 'duration',
                  type: 'text',
                  admin: {
                    description: 'Duration of collaboration',
                  },
                },
              ],
            },
            {
              name: 'academicCollaborations',
              type: 'array',
              label: 'Academic Collaborations',
              fields: [
                {
                  name: 'institutionName',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of the collaborating institution',
                  },
                },
                {
                  name: 'collaborationType',
                  type: 'text',
                  admin: {
                    description: 'Type of collaboration',
                  },
                },
                {
                  name: 'duration',
                  type: 'text',
                  admin: {
                    description: 'Duration of collaboration',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'achievements',
          type: 'richText',
          admin: {
            description: 'Key achievements and milestones of the DST FIST Lab',
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
                description: 'Lab contact email',
              },
            },
            {
              name: 'phone',
              type: 'text',
              admin: {
                description: 'Lab contact phone',
              },
            },
            {
              name: 'location',
              type: 'text',
              admin: {
                description: 'Lab location/address',
              },
            },
          ],
        },
        {
          name: 'labImages',
          type: 'array',
          label: 'Lab Images',
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
          name: 'documents',
          type: 'array',
          label: 'Related Documents',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Document title',
              },
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Upload document (PDF)',
              },
            },
            {
              name: 'description',
              type: 'text',
              admin: {
                description: 'Brief description of the document',
              },
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
