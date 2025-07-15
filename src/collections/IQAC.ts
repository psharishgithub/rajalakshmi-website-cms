import { CollectionConfig } from 'payload'
import { universalAccess } from '../access'

export const IQAC: CollectionConfig = {
  slug: 'iqac',
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
        description: 'Title for the IQAC page section',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the IQAC page (e.g., 2024-25)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this IQAC page is active and visible',
      },
    },

    // Coordinator's Message Section
    {
      name: 'coordinatorMessage',
      type: 'group',
      label: "Coordinator's Message",
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: "IQAC Coordinator's message content",
          },
        },
        {
          name: 'coordinatorName',
          type: 'text',
          admin: {
            description: "Name of the IQAC Coordinator",
          },
        },
        {
          name: 'coordinatorDesignation',
          type: 'text',
          admin: {
            description: "Designation of the IQAC Coordinator",
          },
        },
        {
          name: 'coordinatorImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: "Photo of the IQAC Coordinator",
          },
        },
      ],
    },

    // Members Section
    {
      name: 'members',
      type: 'group',
      label: 'Members',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'IQAC members overview content',
          },
        },
        {
          name: 'memberList',
          type: 'array',
          label: 'IQAC Members',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              admin: {
                description: 'Full name of the IQAC member',
              },
            },
            {
              name: 'designation',
              type: 'text',
              admin: {
                description: 'Designation of the member',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department/Organization of the member',
              },
            },
            {
              name: 'role',
              type: 'select',
              options: [
                { label: 'Chairperson', value: 'chairperson' },
                { label: 'Coordinator', value: 'coordinator' },
                { label: 'Member Secretary', value: 'member_secretary' },
                { label: 'Faculty Member', value: 'faculty_member' },
                { label: 'Student Representative', value: 'student_rep' },
                { label: 'Alumni Representative', value: 'alumni_rep' },
                { label: 'Industry Representative', value: 'industry_rep' },
                { label: 'External Expert', value: 'external_expert' },
                { label: 'Member', value: 'member' },
              ],
              admin: {
                description: 'Role of the member in IQAC',
              },
            },
            {
              name: 'contactEmail',
              type: 'email',
              admin: {
                description: 'Contact email of the member',
              },
            },
            {
              name: 'memberImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Photo of the member',
              },
            },
          ],
        },
      ],
    },

    // Minutes Section
    {
      name: 'minutes',
      type: 'group',
      label: 'Minutes',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'IQAC minutes overview content',
          },
        },
        {
          name: 'minutesList',
          type: 'array',
          label: 'Meeting Minutes',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the meeting',
              },
            },
            {
              name: 'meetingDate',
              type: 'date',
              required: true,
              admin: {
                description: 'Date of the meeting',
              },
            },
            {
              name: 'meetingType',
              type: 'select',
              options: [
                { label: 'Regular Meeting', value: 'regular' },
                { label: 'Special Meeting', value: 'special' },
                { label: 'Review Meeting', value: 'review' },
                { label: 'Planning Meeting', value: 'planning' },
              ],
              admin: {
                description: 'Type of the meeting',
              },
            },
            {
              name: 'agenda',
              type: 'textarea',
              admin: {
                description: 'Meeting agenda',
              },
            },
            {
              name: 'minutesDocument',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Upload the minutes document (PDF)',
              },
            },
          ],
        },
      ],
    },

    // Accreditation Section
    {
      name: 'accreditation',
      type: 'group',
      label: 'Accreditation',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Accreditation overview content',
          },
        },
        {
          name: 'accreditationList',
          type: 'array',
          label: 'Accreditation Details',
          fields: [
            {
              name: 'accreditingBody',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the accrediting body (e.g., NAAC, NBA)',
              },
            },
            {
              name: 'accreditationType',
              type: 'select',
              options: [
                { label: 'NAAC', value: 'naac' },
                { label: 'NBA', value: 'nba' },
                { label: 'NIRF', value: 'nirf' },
                { label: 'ISO', value: 'iso' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of accreditation',
              },
            },
            {
              name: 'grade',
              type: 'text',
              admin: {
                description: 'Grade/Rating received',
              },
            },
            {
              name: 'validFrom',
              type: 'date',
              admin: {
                description: 'Accreditation valid from date',
              },
            },
            {
              name: 'validUntil',
              type: 'date',
              admin: {
                description: 'Accreditation valid until date',
              },
            },
            {
              name: 'certificate',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload the accreditation certificate',
              },
            },
            {
              name: 'report',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload the accreditation report',
              },
            },
          ],
        },
      ],
    },

    // AQAR Section
    {
      name: 'aqar',
      type: 'group',
      label: 'AQAR (Annual Quality Assurance Report)',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'AQAR overview content',
          },
        },
        {
          name: 'aqarList',
          type: 'array',
          label: 'AQAR Reports',
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
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the AQAR report',
              },
            },
            {
              name: 'submissionDate',
              type: 'date',
              admin: {
                description: 'Date of submission to NAAC',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Submitted', value: 'submitted' },
                { label: 'Approved', value: 'approved' },
                { label: 'Under Review', value: 'under_review' },
              ],
              admin: {
                description: 'Status of the AQAR report',
              },
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Upload the AQAR document (PDF)',
              },
            },
          ],
        },
      ],
    },

    // Audited Statement Section
    {
      name: 'auditedStatement',
      type: 'group',
      label: 'Audited Statement',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Audited statement overview content',
          },
        },
        {
          name: 'statementList',
          type: 'array',
          label: 'Audited Statements',
          fields: [
            {
              name: 'financialYear',
              type: 'text',
              required: true,
              admin: {
                description: 'Financial year (e.g., 2023-24)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the audited statement',
              },
            },
            {
              name: 'auditorName',
              type: 'text',
              admin: {
                description: 'Name of the auditing firm/auditor',
              },
            },
            {
              name: 'auditDate',
              type: 'date',
              admin: {
                description: 'Date of audit completion',
              },
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Upload the audited statement document (PDF)',
              },
            },
          ],
        },
      ],
    },

    // IQAC Policy Section
    {
      name: 'iqacPolicy',
      type: 'group',
      label: 'IQAC Policy',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'IQAC policy overview content',
          },
        },
        {
          name: 'policyList',
          type: 'array',
          label: 'IQAC Policies',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the policy',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              admin: {
                description: 'Brief description of the policy',
              },
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Quality Policy', value: 'quality_policy' },
                { label: 'Academic Policy', value: 'academic_policy' },
                { label: 'Research Policy', value: 'research_policy' },
                { label: 'Assessment Policy', value: 'assessment_policy' },
                { label: 'Feedback Policy', value: 'feedback_policy' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Category of the policy',
              },
            },
            {
              name: 'effectiveDate',
              type: 'date',
              admin: {
                description: 'Date from which the policy is effective',
              },
            },
            {
              name: 'version',
              type: 'text',
              admin: {
                description: 'Version of the policy document',
              },
            },
            {
              name: 'document',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Upload the policy document (PDF)',
              },
            },
          ],
        },
      ],
    },

    // Student Survey Section
    {
      name: 'studentSurvey',
      type: 'group',
      label: 'Student Survey',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Student survey overview content',
          },
        },
        {
          name: 'surveyList',
          type: 'array',
          label: 'Student Surveys',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the survey',
              },
            },
            {
              name: 'academicYear',
              type: 'text',
              required: true,
              admin: {
                description: 'Academic year of the survey (e.g., 2023-24)',
              },
            },
            {
              name: 'surveyType',
              type: 'select',
              options: [
                { label: 'Course Feedback', value: 'course_feedback' },
                { label: 'Faculty Feedback', value: 'faculty_feedback' },
                { label: 'Infrastructure Feedback', value: 'infrastructure_feedback' },
                { label: 'Overall Satisfaction', value: 'overall_satisfaction' },
                { label: 'Exit Survey', value: 'exit_survey' },
                { label: 'Alumni Survey', value: 'alumni_survey' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of student survey',
              },
            },
            {
              name: 'semester',
              type: 'select',
              options: [
                { label: 'Semester 1', value: 'sem1' },
                { label: 'Semester 2', value: 'sem2' },
                { label: 'Semester 3', value: 'sem3' },
                { label: 'Semester 4', value: 'sem4' },
                { label: 'Semester 5', value: 'sem5' },
                { label: 'Semester 6', value: 'sem6' },
                { label: 'Semester 7', value: 'sem7' },
                { label: 'Semester 8', value: 'sem8' },
                { label: 'All Semesters', value: 'all' },
              ],
              admin: {
                description: 'Semester for which the survey was conducted',
              },
            },
            {
              name: 'department',
              type: 'text',
              admin: {
                description: 'Department (if survey is department-specific)',
              },
            },
            {
              name: 'responseCount',
              type: 'number',
              admin: {
                description: 'Number of student responses received',
              },
            },
            {
              name: 'surveyPeriod',
              type: 'group',
              fields: [
                {
                  name: 'startDate',
                  type: 'date',
                  admin: {
                    description: 'Survey start date',
                  },
                },
                {
                  name: 'endDate',
                  type: 'date',
                  admin: {
                    description: 'Survey end date',
                  },
                },
              ],
            },
            {
              name: 'analysisReport',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload the survey analysis report (PDF)',
              },
            },
            {
              name: 'actionTaken',
              type: 'richText',
              admin: {
                description: 'Action taken based on survey feedback',
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
