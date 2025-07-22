import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'

export const Placement: GlobalConfig = {
  slug: 'placement',
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
        description: 'Title for the placement section',
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
              name: 'role',
              type: 'select',
              options: [
                { label: 'Director', value: 'director' },
                { label: 'Assistant Director', value: 'assistant_director' },
                { label: 'Coordinator', value: 'coordinator' },
                { label: 'Officer', value: 'officer' },
                { label: 'Student Coordinator', value: 'student_coordinator' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Role in the placement cell',
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
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Photo of the team member',
              },
            },
            {
              name: 'bio',
              type: 'textarea',
              admin: {
                description: 'Brief biography',
              },
            },
          ],
        },
        {
          name: 'contactInfo',
          type: 'group',
          label: 'Placement Cell Contact',
          fields: [
            {
              name: 'email',
              type: 'email',
              admin: {
                description: 'Official placement cell email',
              },
            },
            {
              name: 'phone',
              type: 'text',
              admin: {
                description: 'Official contact number',
              },
            },
            {
              name: 'address',
              type: 'textarea',
              admin: {
                description: 'Physical address of placement cell',
              },
            },
            {
              name: 'hours',
              type: 'text',
              admin: {
                description: 'Working hours (e.g., 9:00 AM - 5:00 PM)',
              },
            },
          ],
        },
      ],
    },

    // Placement Statistics Section
    {
      name: 'placementStatistics',
      type: 'group',
      label: 'Placement Statistics',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Placement statistics overview content',
          },
        },
        {
          name: 'yearwiseData',
          type: 'array',
          label: 'Year-wise Placement Data',
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
                description: 'Total students eligible for placement',
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
              name: 'highestPackage',
              type: 'number',
              admin: {
                description: 'Highest salary package (in LPA)',
              },
            },
            {
              name: 'averagePackage',
              type: 'number',
              admin: {
                description: 'Average salary package (in LPA)',
              },
            },
            {
              name: 'medianPackage',
              type: 'number',
              admin: {
                description: 'Median salary package (in LPA)',
              },
            },
            {
              name: 'totalCompanies',
              type: 'number',
              admin: {
                description: 'Total number of companies participated',
              },
            },
            {
              name: 'multipleOffers',
              type: 'number',
              admin: {
                description: 'Students with multiple offers',
              },
            },
            {
              name: 'departmentWiseData',
              type: 'array',
              label: 'Department-wise Statistics',
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
                  name: 'totalStudents',
                  type: 'number',
                  admin: {
                    description: 'Total students from this department',
                  },
                },
                {
                  name: 'studentsPlaced',
                  type: 'number',
                  admin: {
                    description: 'Students placed from this department',
                  },
                },
                {
                  name: 'placementPercentage',
                  type: 'number',
                  admin: {
                    description: 'Placement percentage for this department',
                  },
                },
                {
                  name: 'highestPackage',
                  type: 'number',
                  admin: {
                    description: 'Highest package in this department (in LPA)',
                  },
                },
                {
                  name: 'averagePackage',
                  type: 'number',
                  admin: {
                    description: 'Average package in this department (in LPA)',
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    // Recruiting Companies Section
    {
      name: 'recruitingCompanies',
      type: 'group',
      label: 'Recruiting Companies',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Recruiting companies overview content',
          },
        },
        {
          name: 'companiesList',
          type: 'array',
          label: 'Companies List',
          fields: [
            {
              name: 'companyName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the company',
              },
            },
            {
              name: 'companyType',
              type: 'select',
              options: [
                { label: 'Core Recruiter', value: 'core' },
                { label: 'Dream Company', value: 'dream' },
                { label: 'Super Dream Company', value: 'super_dream' },
                { label: 'Regular Recruiter', value: 'regular' },
                { label: 'Start-up', value: 'startup' },
                { label: 'MNC', value: 'mnc' },
                { label: 'Government', value: 'government' },
                { label: 'PSU', value: 'psu' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type/category of the company',
              },
            },
            {
              name: 'industry',
              type: 'select',
              options: [
                { label: 'IT/Software', value: 'it_software' },
                { label: 'Consulting', value: 'consulting' },
                { label: 'Financial Services', value: 'financial' },
                { label: 'Manufacturing', value: 'manufacturing' },
                { label: 'Automotive', value: 'automotive' },
                { label: 'Aerospace', value: 'aerospace' },
                { label: 'Telecommunications', value: 'telecom' },
                { label: 'Healthcare', value: 'healthcare' },
                { label: 'Energy', value: 'energy' },
                { label: 'Education', value: 'education' },
                { label: 'Government', value: 'government' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Industry sector',
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
              type: 'textarea',
              admin: {
                description: 'Brief description of the company',
              },
            },
            {
              name: 'recruitmentYears',
              type: 'text',
              admin: {
                description: 'Years when the company recruited (comma separated)',
              },
            },
            {
              name: 'rolesOffered',
              type: 'text',
              admin: {
                description: 'Job roles typically offered (comma separated)',
              },
            },
            {
              name: 'eligibleDepartments',
              type: 'text',
              admin: {
                description: 'Departments eligible for recruitment (comma separated)',
              },
            },
            {
              name: 'packageRange',
              type: 'text',
              admin: {
                description: 'Salary package range (e.g., 8-12 LPA)',
              },
            },
            {
              name: 'location',
              type: 'text',
              admin: {
                description: 'Work location(s)',
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
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether the company is currently recruiting',
              },
            },
          ],
        },
      ],
    },

    // Placement Process Section
    {
      name: 'placementProcess',
      type: 'group',
      label: 'Placement Process',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Placement process overview content',
          },
        },
        {
          name: 'processSteps',
          type: 'array',
          label: 'Process Steps',
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
              name: 'stepTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the process step',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of this step',
              },
            },
            {
              name: 'documents',
              type: 'array',
              label: 'Required Documents',
              fields: [
                {
                  name: 'documentName',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Name of the required document',
                  },
                },
                {
                  name: 'description',
                  type: 'text',
                  admin: {
                    description: 'Description of the document requirement',
                  },
                },
                {
                  name: 'isMandatory',
                  type: 'checkbox',
                  defaultValue: true,
                  admin: {
                    description: 'Whether this document is mandatory',
                  },
                },
              ],
            },
            {
              name: 'deadline',
              type: 'text',
              admin: {
                description: 'Deadline or timeline for this step',
              },
            },
          ],
        },
        {
          name: 'eligibilityCriteria',
          type: 'richText',
          admin: {
            description: 'General eligibility criteria for placements',
          },
        },
        {
          name: 'registrationProcess',
          type: 'richText',
          admin: {
            description: 'Student registration process for placements',
          },
        },
        {
          name: 'selectionProcess',
          type: 'richText',
          admin: {
            description: 'Company selection process and rounds',
          },
        },
        {
          name: 'placementRules',
          type: 'richText',
          admin: {
            description: 'Important placement rules and regulations',
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
            description: 'Training programs overview content',
          },
        },
        {
          name: 'programsList',
          type: 'array',
          label: 'Training Programs',
          fields: [
            {
              name: 'programTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the training program',
              },
            },
            {
              name: 'programType',
              type: 'select',
              options: [
                { label: 'Technical Skills', value: 'technical' },
                { label: 'Soft Skills', value: 'soft_skills' },
                { label: 'Communication Skills', value: 'communication' },
                { label: 'Interview Preparation', value: 'interview_prep' },
                { label: 'Aptitude Training', value: 'aptitude' },
                { label: 'Industry Specific', value: 'industry_specific' },
                { label: 'Personality Development', value: 'personality' },
                { label: 'Other', value: 'other' },
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
                description: 'Duration of the program (e.g., 2 weeks, 40 hours)',
              },
            },
            {
              name: 'targetAudience',
              type: 'text',
              admin: {
                description: 'Target audience (e.g., Final year students, All students)',
              },
            },
            {
              name: 'topics',
              type: 'richText',
              admin: {
                description: 'Topics covered in the program',
              },
            },
            {
              name: 'outcomes',
              type: 'richText',
              admin: {
                description: 'Expected learning outcomes',
              },
            },
            {
              name: 'instructor',
              type: 'text',
              admin: {
                description: 'Program instructor/facilitator',
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
              name: 'registrationInfo',
              type: 'richText',
              admin: {
                description: 'Registration information and process',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether this program is currently offered',
              },
            },
          ],
        },
      ],
    },

    // Student Success Stories Section
    {
      name: 'successStories',
      type: 'group',
      label: 'Student Success Stories',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Success stories overview content',
          },
        },
        {
          name: 'storiesList',
          type: 'array',
          label: 'Success Stories',
          fields: [
            {
              name: 'studentName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the student',
              },
            },
            {
              name: 'department',
              type: 'text',
              required: true,
              admin: {
                description: 'Department/Branch of the student',
              },
            },
            {
              name: 'passoutYear',
              type: 'text',
              required: true,
              admin: {
                description: 'Year of graduation',
              },
            },
            {
              name: 'companyName',
              type: 'text',
              required: true,
              admin: {
                description: 'Company where placed',
              },
            },
            {
              name: 'position',
              type: 'text',
              admin: {
                description: 'Job position/role',
              },
            },
            {
              name: 'packageOffered',
              type: 'number',
              admin: {
                description: 'Package offered (in LPA)',
              },
            },
            {
              name: 'currentPosition',
              type: 'text',
              admin: {
                description: 'Current position (if different from initial)',
              },
            },
            {
              name: 'story',
              type: 'richText',
              required: true,
              admin: {
                description: 'Student success story and experience',
              },
            },
            {
              name: 'achievements',
              type: 'richText',
              admin: {
                description: 'Notable achievements and recognitions',
              },
            },
            {
              name: 'advice',
              type: 'richText',
              admin: {
                description: 'Advice for junior students',
              },
            },
            {
              name: 'studentPhoto',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Photo of the student',
              },
            },
            {
              name: 'companyLogo',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Logo of the company',
              },
            },
            {
              name: 'isFeatured',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Whether to feature this story prominently',
              },
            },
          ],
        },
      ],
    },

    // Placement Resources Section
    {
      name: 'placementResources',
      type: 'group',
      label: 'Placement Resources',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Placement resources overview content',
          },
        },
        {
          name: 'resourcesList',
          type: 'array',
          label: 'Resources',
          fields: [
            {
              name: 'resourceTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the resource',
              },
            },
            {
              name: 'resourceType',
              type: 'select',
              options: [
                { label: 'Resume Template', value: 'resume_template' },
                { label: 'Interview Guide', value: 'interview_guide' },
                { label: 'Aptitude Materials', value: 'aptitude_materials' },
                { label: 'Technical Resources', value: 'technical_resources' },
                { label: 'Company Information', value: 'company_info' },
                { label: 'Previous Year Questions', value: 'previous_questions' },
                { label: 'Video Tutorial', value: 'video_tutorial' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of resource',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Description of the resource',
              },
            },
            {
              name: 'targetAudience',
              type: 'text',
              admin: {
                description: 'Who should use this resource',
              },
            },
            {
              name: 'resourceFile',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload the resource file (PDF, DOC, etc.)',
              },
            },
            {
              name: 'resourceUrl',
              type: 'text',
              admin: {
                description: 'External URL for the resource (if applicable)',
              },
            },
            {
              name: 'downloadCount',
              type: 'number',
              defaultValue: 0,
              admin: {
                description: 'Number of times downloaded (for tracking)',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether this resource is currently available',
              },
            },
          ],
        },
      ],
    },
  ],
}
