import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'

export const InternationalRelations: GlobalConfig = {
  slug: 'international-relations',
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
        description: 'Title for the international relations section',
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
              name: 'serviceName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the service',
              },
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
              admin: {
                description: 'Detailed description of the service',
              },
            },
            {
              name: 'targetAudience',
              type: 'select',
              options: [
                { label: 'Students', value: 'students' },
                { label: 'Faculty', value: 'faculty' },
                { label: 'Researchers', value: 'researchers' },
                { label: 'International Partners', value: 'international_partners' },
                { label: 'All', value: 'all' },
              ],
              admin: {
                description: 'Who can avail this service',
              },
            },
            {
              name: 'eligibility',
              type: 'richText',
              admin: {
                description: 'Eligibility criteria for this service',
              },
            },
            {
              name: 'process',
              type: 'richText',
              admin: {
                description: 'Process to avail this service',
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
                },
                {
                  name: 'description',
                  type: 'text',
                },
                {
                  name: 'isMandatory',
                  type: 'checkbox',
                  defaultValue: true,
                },
              ],
            },
            {
              name: 'contactPerson',
              type: 'text',
              admin: {
                description: 'Contact person for this service',
              },
            },
            {
              name: 'contactEmail',
              type: 'email',
              admin: {
                description: 'Contact email for this service',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether this service is currently available',
              },
            },
          ],
        },
      ],
    },

    {
      name: 'internationalPrograms',
      type: 'group',
      label: 'International Programs',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'International programs overview content',
          },
        },
        {
          name: 'programsList',
          type: 'array',
          label: 'Programs List',
          fields: [
            {
              name: 'programName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the international program',
              },
            },
            {
              name: 'programType',
              type: 'select',
              options: [
                { label: 'Student Exchange', value: 'student_exchange' },
                { label: 'Faculty Exchange', value: 'faculty_exchange' },
                { label: 'Joint Degree Program', value: 'joint_degree' },
                { label: 'Summer School', value: 'summer_school' },
                { label: 'Research Collaboration', value: 'research_collaboration' },
                { label: 'Internship Program', value: 'internship' },
                { label: 'Study Abroad', value: 'study_abroad' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of international program',
              },
            },
            {
              name: 'partnerInstitution',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of partner institution/university',
              },
            },
            {
              name: 'country',
              type: 'text',
              required: true,
              admin: {
                description: 'Country of the partner institution',
              },
            },
            {
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Duration of the program (e.g., 1 semester, 2 weeks)',
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
              name: 'eligibility',
              type: 'richText',
              admin: {
                description: 'Eligibility criteria for participants',
              },
            },
            {
              name: 'applicationProcess',
              type: 'richText',
              admin: {
                description: 'Application process and requirements',
              },
            },
            {
              name: 'benefits',
              type: 'richText',
              admin: {
                description: 'Benefits and outcomes of the program',
              },
            },
            {
              name: 'costs',
              type: 'richText',
              admin: {
                description: 'Program costs and financial information',
              },
            },
            {
              name: 'scholarships',
              type: 'richText',
              admin: {
                description: 'Available scholarships and financial aid',
              },
            },
            {
              name: 'applicationDeadline',
              type: 'date',
              admin: {
                description: 'Application deadline',
              },
            },
            {
              name: 'programDates',
              type: 'text',
              admin: {
                description: 'Program start and end dates',
              },
            },
            {
              name: 'contactPerson',
              type: 'text',
              admin: {
                description: 'Contact person for this program',
              },
            },
            {
              name: 'contactEmail',
              type: 'email',
              admin: {
                description: 'Contact email for inquiries',
              },
            },
            {
              name: 'programImages',
              type: 'array',
              label: 'Program Images',
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
            {
              name: 'partnerLogo',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Logo of partner institution',
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

    {
      name: 'partnerships',
      type: 'group',
      label: 'International Partnerships',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'International partnerships overview content',
          },
        },
        {
          name: 'partnersList',
          type: 'array',
          label: 'Partners List',
          fields: [
            {
              name: 'institutionName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of partner institution',
              },
            },
            {
              name: 'country',
              type: 'text',
              required: true,
              admin: {
                description: 'Country of partner institution',
              },
            },
            {
              name: 'partnershipType',
              type: 'select',
              options: [
                { label: 'Memorandum of Understanding (MoU)', value: 'mou' },
                { label: 'Academic Collaboration', value: 'academic' },
                { label: 'Research Partnership', value: 'research' },
                { label: 'Student Exchange Agreement', value: 'student_exchange' },
                { label: 'Faculty Exchange Agreement', value: 'faculty_exchange' },
                { label: 'Joint Degree Program', value: 'joint_degree' },
                { label: 'Consortium Membership', value: 'consortium' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of partnership',
              },
            },
            {
              name: 'signedDate',
              type: 'date',
              admin: {
                description: 'Date when partnership was signed',
              },
            },
            {
              name: 'validityPeriod',
              type: 'text',
              admin: {
                description: 'Validity period of the partnership (e.g., 5 years)',
              },
            },
            {
              name: 'renewalDate',
              type: 'date',
              admin: {
                description: 'Next renewal date',
              },
            },
            {
              name: 'partnershipScope',
              type: 'richText',
              admin: {
                description: 'Scope and areas of collaboration',
              },
            },
            {
              name: 'activities',
              type: 'richText',
              admin: {
                description: 'Activities and programs under this partnership',
              },
            },
            {
              name: 'benefits',
              type: 'richText',
              admin: {
                description: 'Benefits and outcomes achieved',
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
              name: 'partnerContact',
              type: 'text',
              admin: {
                description: 'Contact person from partner institution',
              },
            },
            {
              name: 'website',
              type: 'text',
              admin: {
                description: 'Partner institution website',
              },
            },
            {
              name: 'institutionLogo',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Logo of partner institution',
              },
            },
            {
              name: 'partnershipDocument',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Partnership agreement document (PDF)',
              },
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Expired', value: 'expired' },
                { label: 'Under Renewal', value: 'under_renewal' },
                { label: 'Suspended', value: 'suspended' },
              ],
              defaultValue: 'active',
              admin: {
                description: 'Current status of the partnership',
              },
            },
          ],
        },
      ],
    },

    {
      name: 'events',
      type: 'group',
      label: 'International Events & Activities',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'International events overview content',
          },
        },
        {
          name: 'eventsList',
          type: 'array',
          label: 'Events List',
          fields: [
            {
              name: 'eventTitle',
              type: 'text',
              required: true,
              admin: {
                description: 'Title of the event',
              },
            },
            {
              name: 'eventType',
              type: 'select',
              options: [
                { label: 'Conference', value: 'conference' },
                { label: 'Workshop', value: 'workshop' },
                { label: 'Seminar', value: 'seminar' },
                { label: 'Cultural Event', value: 'cultural' },
                { label: 'Student Exchange', value: 'student_exchange' },
                { label: 'Faculty Visit', value: 'faculty_visit' },
                { label: 'Delegation Visit', value: 'delegation_visit' },
                { label: 'Virtual Event', value: 'virtual' },
                { label: 'Other', value: 'other' },
              ],
              admin: {
                description: 'Type of event',
              },
            },
            {
              name: 'eventDate',
              type: 'date',
              admin: {
                description: 'Date of the event',
              },
            },
            {
              name: 'endDate',
              type: 'date',
              admin: {
                description: 'End date (for multi-day events)',
              },
            },
            {
              name: 'venue',
              type: 'text',
              admin: {
                description: 'Event venue/location',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed description of the event',
              },
            },
            {
              name: 'organizer',
              type: 'text',
              admin: {
                description: 'Event organizer/department',
              },
            },
            {
              name: 'participants',
              type: 'richText',
              admin: {
                description: 'Information about participants',
              },
            },
            {
              name: 'outcomes',
              type: 'richText',
              admin: {
                description: 'Event outcomes and achievements',
              },
            },
            {
              name: 'internationalGuests',
              type: 'array',
              label: 'International Guests',
              fields: [
                {
                  name: 'guestName',
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
                  name: 'guestPhoto',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
            {
              name: 'eventImages',
              type: 'array',
              label: 'Event Images',
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
            {
              name: 'eventReport',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload event report document (PDF)',
              },
            },
          ],
        },
      ],
    },

    {
      name: 'studyAbroad',
      type: 'group',
      label: 'Study Abroad Opportunities',
      fields: [
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Study abroad opportunities overview content',
          },
        },
        {
          name: 'opportunitiesList',
          type: 'array',
          label: 'Study Abroad Opportunities',
          fields: [
            {
              name: 'programName',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of the study abroad program',
              },
            },
            {
              name: 'university',
              type: 'text',
              required: true,
              admin: {
                description: 'Host university/institution',
              },
            },
            {
              name: 'country',
              type: 'text',
              required: true,
              admin: {
                description: 'Country of study',
              },
            },
            {
              name: 'programLevel',
              type: 'select',
              options: [
                { label: 'Undergraduate', value: 'undergraduate' },
                { label: 'Postgraduate', value: 'postgraduate' },
                { label: 'Doctoral', value: 'doctoral' },
                { label: 'Certificate', value: 'certificate' },
                { label: 'Exchange Program', value: 'exchange' },
                { label: 'Summer Program', value: 'summer' },
              ],
              admin: {
                description: 'Level of the program',
              },
            },
            {
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Program duration (e.g., 1 semester, 2 years)',
              },
            },
            {
              name: 'fieldOfStudy',
              type: 'text',
              admin: {
                description: 'Field of study/subject area',
              },
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'Detailed program description',
              },
            },
            {
              name: 'eligibility',
              type: 'richText',
              admin: {
                description: 'Eligibility criteria',
              },
            },
            {
              name: 'applicationProcess',
              type: 'richText',
              admin: {
                description: 'Application process and requirements',
              },
            },
            {
              name: 'tuitionFees',
              type: 'text',
              admin: {
                description: 'Tuition fees and costs',
              },
            },
            {
              name: 'scholarships',
              type: 'richText',
              admin: {
                description: 'Available scholarships and financial aid',
              },
            },
            {
              name: 'applicationDeadline',
              type: 'date',
              admin: {
                description: 'Application deadline',
              },
            },
            {
              name: 'intakeMonths',
              type: 'text',
              admin: {
                description: 'Intake months (e.g., September, January)',
              },
            },
            {
              name: 'languageRequirements',
              type: 'richText',
              admin: {
                description: 'Language proficiency requirements',
              },
            },
            {
              name: 'universityRanking',
              type: 'text',
              admin: {
                description: 'University ranking (if applicable)',
              },
            },
            {
              name: 'universityWebsite',
              type: 'text',
              admin: {
                description: 'University website URL',
              },
            },
            {
              name: 'contactPerson',
              type: 'text',
              admin: {
                description: 'Contact person for inquiries',
              },
            },
            {
              name: 'contactEmail',
              type: 'email',
              admin: {
                description: 'Contact email for inquiries',
              },
            },
            {
              name: 'universityImages',
              type: 'array',
              label: 'University Images',
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
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether this opportunity is currently available',
              },
            },
          ],
        },
      ],
    },

    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'officeLocation',
          type: 'text',
          admin: {
            description: 'Physical location of International Relations office',
          },
        },
        {
          name: 'officeHours',
          type: 'text',
          admin: {
            description: 'Office hours (e.g., Mon-Fri: 9:00 AM - 5:00 PM)',
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
          name: 'email',
          type: 'email',
          admin: {
            description: 'General contact email',
          },
        },
        {
          name: 'staffMembers',
          type: 'array',
          label: 'Staff Members',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              admin: {
                description: 'Name of staff member',
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
              name: 'responsibilities',
              type: 'text',
              admin: {
                description: 'Key responsibilities',
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
                description: 'Direct phone number',
              },
            },
            {
              name: 'officeHours',
              type: 'text',
              admin: {
                description: 'Individual office hours',
              },
            },
            {
              name: 'staffPhoto',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Photo of staff member',
              },
            },
          ],
        },
      ],
    },
  ],
}
