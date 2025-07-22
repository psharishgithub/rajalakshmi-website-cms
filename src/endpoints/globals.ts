import { Endpoint } from 'payload'

// Generic function to get global data with sections listing
const getGlobalSections = (globalSlug: string) => {
  return async (req: any) => {
    const { payload } = req

    try {
      const globalData = await payload.findGlobal({
        slug: globalSlug,
        depth: 2,
      })

      if (!globalData) {
        return Response.json({
          success: false,
          error: 'Global data not found',
        }, { status: 404 })
      }

      // Extract sections based on global type
      let sections: any[] = []

      switch (globalSlug) {
        case 'about':
          // About has a general sections array plus specific grouped sections
          sections = [
            ...(globalData.sections || []).map((section: any, index: number) => ({
              id: `section-${index}`,
              title: section.title,
              type: 'general',
              order: section.order || 0,
              isActive: section.isActive !== false,
              hasContent: !!section.content,
            })),
            // Add structured sections
            { id: 'profile', title: 'Profile', type: 'profile', order: 100, isActive: true, hasContent: !!globalData.profile?.content },
            { id: 'vision-mission', title: 'Vision & Mission', type: 'visionMission', order: 101, isActive: true, hasContent: !!globalData.visionMission?.vision },
            { id: 'objectives', title: 'Objectives', type: 'objectives', order: 102, isActive: true, hasContent: !!globalData.objectives?.content },
            { id: 'history', title: 'History', type: 'history', order: 103, isActive: true, hasContent: !!globalData.history?.content },
            { id: 'leadership', title: 'Leadership', type: 'leadership', order: 104, isActive: true, hasContent: !!(globalData.leadership?.members?.length) },
            { id: 'governance', title: 'Governance', type: 'governance', order: 105, isActive: true, hasContent: !!(globalData.governance?.boardMembers?.length) },
            { id: 'accreditation', title: 'Accreditation', type: 'accreditation', order: 106, isActive: true, hasContent: !!globalData.accreditation?.content },
            { id: 'affiliations', title: 'Affiliations', type: 'affiliations', order: 107, isActive: true, hasContent: !!(globalData.affiliations?.affiliationsList?.length) },
            { id: 'infrastructure', title: 'Infrastructure', type: 'infrastructure', order: 108, isActive: true, hasContent: !!globalData.infrastructure?.content },
            { id: 'campus-facilities', title: 'Campus Facilities', type: 'campusFacilities', order: 109, isActive: true, hasContent: !!(globalData.campusFacilities?.facilitiesList?.length) },
            { id: 'achievements', title: 'Achievements', type: 'achievements', order: 110, isActive: true, hasContent: !!(globalData.achievements?.achievementsList?.length) },
          ].filter(section => section.hasContent)
          break

        case 'naac':
          // NAAC has multiple criteria groups
          sections = [
            { id: 'dvv-clarifications', title: 'DVV Clarifications', type: 'dvvClarifications', order: 1, isActive: true, hasContent: !!(globalData.dvvClarifications?.clarificationsList?.length) },
            { id: 'extended-profile', title: 'Extended Profile', type: 'extendedProfile', order: 2, isActive: true, hasContent: !!(globalData.extendedProfile?.profileData?.length) },
            { id: 'curricular-aspects', title: 'Curricular Aspects', type: 'curricularAspects', order: 3, isActive: true, hasContent: !!(globalData.curricularAspects?.criteriaList?.length) },
            { id: 'teaching-learning-evaluation', title: 'Teaching Learning and Evaluation', type: 'teachingLearningEvaluation', order: 4, isActive: true, hasContent: !!(globalData.teachingLearningEvaluation?.criteriaList?.length) },
            { id: 'research-innovations-extension', title: 'Research, Innovations and Extension', type: 'researchInnovationsExtension', order: 5, isActive: true, hasContent: !!(globalData.researchInnovationsExtension?.criteriaList?.length) },
            { id: 'infrastructure-learning-resources', title: 'Infrastructure and Learning Resources', type: 'infrastructureLearningResources', order: 6, isActive: true, hasContent: !!(globalData.infrastructureLearningResources?.criteriaList?.length) },
            { id: 'student-support-progression', title: 'Student Support and Progression', type: 'studentSupportProgression', order: 7, isActive: true, hasContent: !!(globalData.studentSupportProgression?.criteriaList?.length) },
            { id: 'governance-leadership-management', title: 'Governance, Leadership and Management', type: 'governanceLeadershipManagement', order: 8, isActive: true, hasContent: !!(globalData.governanceLeadershipManagement?.criteriaList?.length) },
            { id: 'institutional-values-best-practices', title: 'Institutional Values and Best Practices', type: 'institutionalValuesBestPractices', order: 9, isActive: true, hasContent: !!(globalData.institutionalValuesBestPractices?.criteriaList?.length) },
            { id: 'best-practices', title: 'Best Practices', type: 'bestPractices', order: 10, isActive: true, hasContent: !!(globalData.bestPractices?.practicesList?.length) },
            { id: 'institutional-distinctiveness', title: 'Institutional Distinctiveness', type: 'institutionalDistinctiveness', order: 11, isActive: true, hasContent: !!(globalData.institutionalDistinctiveness?.distinctiveFeatures?.length) },
            { id: 'undertaking', title: 'Undertaking', type: 'undertaking', order: 12, isActive: true, hasContent: !!globalData.undertaking?.content },
          ].filter(section => section.hasContent)
          break

        case 'research':
          // Research has multiple research-related sections
          sections = [
            { id: 'research-centre', title: 'Research Centre', type: 'researchCentre', order: 1, isActive: true, hasContent: !!(globalData.researchCentre?.centresList?.length) },
            { id: 'research-publications', title: 'Research Publications', type: 'researchPublications', order: 2, isActive: true, hasContent: !!(globalData.researchPublications?.publicationsList?.length) },
            { id: 'funded-projects', title: 'Funded Projects', type: 'fundedProjects', order: 3, isActive: true, hasContent: !!(globalData.fundedProjects?.projectsList?.length) },
            { id: 'patents-ipr', title: 'Patents & IPR', type: 'patentsIPR', order: 4, isActive: true, hasContent: !!(globalData.patentsIPR?.patentsList?.length) },
            { id: 'consultancy', title: 'Consultancy', type: 'consultancy', order: 5, isActive: true, hasContent: !!(globalData.consultancy?.projectsList?.length) },
            { id: 'research-scholars', title: 'Research Scholars', type: 'researchScholars', order: 6, isActive: true, hasContent: !!(globalData.researchScholars?.scholarsList?.length) },
            { id: 'mou-collaborations', title: 'MOU & Collaborations', type: 'mouCollaborations', order: 7, isActive: true, hasContent: !!(globalData.mouCollaborations?.collaborationsList?.length) },
            { id: 'conferences-seminars', title: 'Conferences & Seminars', type: 'conferencesSeminars', order: 8, isActive: true, hasContent: !!(globalData.conferencesSeminars?.eventsList?.length) },
            { id: 'research-facilities', title: 'Research Facilities', type: 'researchFacilities', order: 9, isActive: true, hasContent: !!(globalData.researchFacilities?.facilitiesList?.length) },
          ].filter(section => section.hasContent)
          break

        case 'placement':
          sections = [
            { id: 'overview', title: 'Placement Overview', type: 'overview', order: 1, isActive: true, hasContent: !!globalData.overview?.content },
            { id: 'placement-statistics', title: 'Placement Statistics', type: 'placementStatistics', order: 2, isActive: true, hasContent: !!(globalData.placementStatistics?.yearwiseStats?.length) },
            { id: 'recruiters', title: 'Recruiters', type: 'recruiters', order: 3, isActive: true, hasContent: !!(globalData.recruiters?.recruitersList?.length) },
            { id: 'placement-team', title: 'Placement Team', type: 'placementTeam', order: 4, isActive: true, hasContent: !!(globalData.placementTeam?.teamMembers?.length) },
            { id: 'training-programs', title: 'Training Programs', type: 'trainingPrograms', order: 5, isActive: true, hasContent: !!(globalData.trainingPrograms?.programsList?.length) },
            { id: 'placement-process', title: 'Placement Process', type: 'placementProcess', order: 6, isActive: true, hasContent: !!globalData.placementProcess?.content },
            { id: 'success-stories', title: 'Success Stories', type: 'successStories', order: 7, isActive: true, hasContent: !!(globalData.successStories?.storiesList?.length) },
          ].filter(section => section.hasContent)
          break

        case 'admissions':
          sections = [
            { id: 'overview', title: 'Admissions Overview', type: 'overview', order: 1, isActive: true, hasContent: !!globalData.overview?.content },
            { id: 'eligibility-criteria', title: 'Eligibility Criteria', type: 'eligibilityCriteria', order: 2, isActive: true, hasContent: !!(globalData.eligibilityCriteria?.criteriaList?.length) },
            { id: 'admission-process', title: 'Admission Process', type: 'admissionProcess', order: 3, isActive: true, hasContent: !!globalData.admissionProcess?.content },
            { id: 'important-dates', title: 'Important Dates', type: 'importantDates', order: 4, isActive: true, hasContent: !!(globalData.importantDates?.datesList?.length) },
            { id: 'fee-structure', title: 'Fee Structure', type: 'feeStructure', order: 5, isActive: true, hasContent: !!(globalData.feeStructure?.feeCategories?.length) },
            { id: 'scholarships', title: 'Scholarships', type: 'scholarships', order: 6, isActive: true, hasContent: !!(globalData.scholarships?.scholarshipsList?.length) },
            { id: 'hostel-facilities', title: 'Hostel Facilities', type: 'hostelFacilities', order: 7, isActive: true, hasContent: !!globalData.hostelFacilities?.content },
          ].filter(section => section.hasContent)
          break

        case 'iqac':
          sections = [
            { id: 'overview', title: 'IQAC Overview', type: 'overview', order: 1, isActive: true, hasContent: !!globalData.overview?.content },
            { id: 'composition', title: 'IQAC Composition', type: 'composition', order: 2, isActive: true, hasContent: !!(globalData.composition?.members?.length) },
            { id: 'meetings', title: 'IQAC Meetings', type: 'meetings', order: 3, isActive: true, hasContent: !!(globalData.meetings?.meetingsList?.length) },
            { id: 'activities', title: 'IQAC Activities', type: 'activities', order: 4, isActive: true, hasContent: !!(globalData.activities?.activitiesList?.length) },
            { id: 'aqar', title: 'AQAR Reports', type: 'aqar', order: 5, isActive: true, hasContent: !!(globalData.aqar?.reportsList?.length) },
            { id: 'policies', title: 'Policies', type: 'policies', order: 6, isActive: true, hasContent: !!(globalData.policies?.policiesList?.length) },
            { id: 'feedback-analysis', title: 'Feedback Analysis', type: 'feedbackAnalysis', order: 7, isActive: true, hasContent: !!(globalData.feedbackAnalysis?.analysisReports?.length) },
          ].filter(section => section.hasContent)
          break

        case 'international-relations':
          sections = [
            { id: 'overview', title: 'International Relations Overview', type: 'overview', order: 1, isActive: true, hasContent: !!globalData.overview?.content },
            { id: 'partnerships', title: 'International Partnerships', type: 'partnerships', order: 2, isActive: true, hasContent: !!(globalData.partnerships?.partnershipsList?.length) },
            { id: 'student-exchange', title: 'Student Exchange Programs', type: 'studentExchange', order: 3, isActive: true, hasContent: !!(globalData.studentExchange?.programsList?.length) },
            { id: 'faculty-exchange', title: 'Faculty Exchange', type: 'facultyExchange', order: 4, isActive: true, hasContent: !!(globalData.facultyExchange?.exchangeList?.length) },
            { id: 'international-students', title: 'International Students', type: 'internationalStudents', order: 5, isActive: true, hasContent: !!globalData.internationalStudents?.content },
            { id: 'global-programs', title: 'Global Programs', type: 'globalPrograms', order: 6, isActive: true, hasContent: !!(globalData.globalPrograms?.programsList?.length) },
          ].filter(section => section.hasContent)
          break

        default:
          sections = []
      }

      // Sort sections by order
      sections.sort((a, b) => a.order - b.order)

      return Response.json({
        success: true,
        data: {
          title: globalData.title || globalData.heroTitle,
          slug: globalSlug,
          isActive: globalData.isActive !== false,
          sections: sections,
        },
      })
    } catch (error: any) {
      return Response.json({
        success: false,
        error: error?.message || 'An error occurred',
      }, { status: 500 })
    }
  }
}

// Generic function to get specific section content from a global
const getGlobalSectionContent = (globalSlug: string) => {
  return async (req: any) => {
    const { payload } = req
    const sectionId = req.routeParams?.sectionId

    try {
      const globalData = await payload.findGlobal({
        slug: globalSlug,
        depth: 2,
      })

      if (!globalData) {
        return Response.json({
          success: false,
          error: 'Global data not found',
        }, { status: 404 })
      }

      let sectionContent: any = null
      let sectionTitle = ''

      // Handle different section types based on globalSlug and sectionId
      if (globalSlug === 'about') {
        if (sectionId?.startsWith('section-')) {
          const index = parseInt(sectionId.replace('section-', ''))
          if (globalData.sections && globalData.sections[index]) {
            sectionContent = globalData.sections[index]
            sectionTitle = sectionContent.title
          }
        } else {
          // Handle specific grouped sections
          switch (sectionId) {
            case 'profile':
              sectionContent = globalData.profile
              sectionTitle = 'Profile'
              break
            case 'vision-mission':
              sectionContent = globalData.visionMission
              sectionTitle = 'Vision & Mission'
              break
            case 'objectives':
              sectionContent = globalData.objectives
              sectionTitle = 'Objectives'
              break
            case 'history':
              sectionContent = globalData.history
              sectionTitle = 'History'
              break
            case 'leadership':
              sectionContent = globalData.leadership
              sectionTitle = 'Leadership'
              break
            case 'governance':
              sectionContent = globalData.governance
              sectionTitle = 'Governance'
              break
            case 'accreditation':
              sectionContent = globalData.accreditation
              sectionTitle = 'Accreditation'
              break
            case 'affiliations':
              sectionContent = globalData.affiliations
              sectionTitle = 'Affiliations'
              break
            case 'infrastructure':
              sectionContent = globalData.infrastructure
              sectionTitle = 'Infrastructure'
              break
            case 'campus-facilities':
              sectionContent = globalData.campusFacilities
              sectionTitle = 'Campus Facilities'
              break
            case 'achievements':
              sectionContent = globalData.achievements
              sectionTitle = 'Achievements'
              break
          }
        }
      } else {
        // Handle other globals by mapping sectionId to the actual field
        const sectionMap: Record<string, string> = {
          'dvv-clarifications': 'dvvClarifications',
          'extended-profile': 'extendedProfile',
          'curricular-aspects': 'curricularAspects',
          'teaching-learning-evaluation': 'teachingLearningEvaluation',
          'research-innovations-extension': 'researchInnovationsExtension',
          'infrastructure-learning-resources': 'infrastructureLearningResources',
          'student-support-progression': 'studentSupportProgression',
          'governance-leadership-management': 'governanceLeadershipManagement',
          'institutional-values-best-practices': 'institutionalValuesBestPractices',
          'best-practices': 'bestPractices',
          'institutional-distinctiveness': 'institutionalDistinctiveness',
          'undertaking': 'undertaking',
          'research-centre': 'researchCentre',
          'research-publications': 'researchPublications',
          'funded-projects': 'fundedProjects',
          'patents-ipr': 'patentsIPR',
          'consultancy': 'consultancy',
          'research-scholars': 'researchScholars',
          'mou-collaborations': 'mouCollaborations',
          'conferences-seminars': 'conferencesSeminars',
          'research-facilities': 'researchFacilities',
          'overview': 'overview',
          'placement-statistics': 'placementStatistics',
          'recruiters': 'recruiters',
          'placement-team': 'placementTeam',
          'training-programs': 'trainingPrograms',
          'placement-process': 'placementProcess',
          'success-stories': 'successStories',
          'eligibility-criteria': 'eligibilityCriteria',
          'admission-process': 'admissionProcess',
          'important-dates': 'importantDates',
          'fee-structure': 'feeStructure',
          'scholarships': 'scholarships',
          'hostel-facilities': 'hostelFacilities',
          'composition': 'composition',
          'meetings': 'meetings',
          'activities': 'activities',
          'aqar': 'aqar',
          'policies': 'policies',
          'feedback-analysis': 'feedbackAnalysis',
          'partnerships': 'partnerships',
          'student-exchange': 'studentExchange',
          'faculty-exchange': 'facultyExchange',
          'international-students': 'internationalStudents',
          'global-programs': 'globalPrograms',
        }

        const fieldName = sectionMap[sectionId as string]
        if (fieldName && globalData[fieldName]) {
          sectionContent = globalData[fieldName]
          sectionTitle = sectionId?.split('-').map((word: string) => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ') || ''
        }
      }

      if (!sectionContent) {
        return Response.json({
          success: false,
          error: 'Section not found',
        }, { status: 404 })
      }

      return Response.json({
        success: true,
        data: {
          title: sectionTitle,
          sectionId,
          globalSlug,
          content: sectionContent,
        },
      })
    } catch (error: any) {
      return Response.json({
        success: false,
        error: error?.message || 'An error occurred',
      }, { status: 500 })
    }
  }
}

// About page endpoints
export const aboutSectionsEndpoint: Endpoint = {
  path: '/about/sections',
  method: 'get',
  handler: getGlobalSections('about'),
}

export const aboutSectionContentEndpoint: Endpoint = {
  path: '/about/sections/:sectionId',
  method: 'get',
  handler: getGlobalSectionContent('about'),
}

// NAAC page endpoints
export const naacSectionsEndpoint: Endpoint = {
  path: '/naac/sections',
  method: 'get',
  handler: getGlobalSections('naac'),
}

export const naacSectionContentEndpoint: Endpoint = {
  path: '/naac/sections/:sectionId',
  method: 'get',
  handler: getGlobalSectionContent('naac'),
}

// Research page endpoints
export const researchSectionsEndpoint: Endpoint = {
  path: '/research/sections',
  method: 'get',
  handler: getGlobalSections('research'),
}

export const researchSectionContentEndpoint: Endpoint = {
  path: '/research/sections/:sectionId',
  method: 'get',
  handler: getGlobalSectionContent('research'),
}

// Placement page endpoints
export const placementSectionsEndpoint: Endpoint = {
  path: '/placement/sections',
  method: 'get',
  handler: getGlobalSections('placement'),
}

export const placementSectionContentEndpoint: Endpoint = {
  path: '/placement/sections/:sectionId',
  method: 'get',
  handler: getGlobalSectionContent('placement'),
}

// Admissions page endpoints
export const admissionsSectionsEndpoint: Endpoint = {
  path: '/admissions/sections',
  method: 'get',
  handler: getGlobalSections('admissions'),
}

export const admissionsSectionContentEndpoint: Endpoint = {
  path: '/admissions/sections/:sectionId',
  method: 'get',
  handler: getGlobalSectionContent('admissions'),
}

// IQAC page endpoints
export const iqacSectionsEndpoint: Endpoint = {
  path: '/iqac/sections',
  method: 'get',
  handler: getGlobalSections('iqac'),
}

export const iqacSectionContentEndpoint: Endpoint = {
  path: '/iqac/sections/:sectionId',
  method: 'get',
  handler: getGlobalSectionContent('iqac'),
}

// International Relations page endpoints
export const internationalRelationsSectionsEndpoint: Endpoint = {
  path: '/international-relations/sections',
  method: 'get',
  handler: getGlobalSections('international-relations'),
}

export const internationalRelationsSectionContentEndpoint: Endpoint = {
  path: '/international-relations/sections/:sectionId',
  method: 'get',
  handler: getGlobalSectionContent('international-relations'),
}

// Generic endpoint to get all global pages overview
export const globalPagesOverviewEndpoint: Endpoint = {
  path: '/global-pages',
  method: 'get',
  handler: async (req) => {
    const { payload } = req

    try {
      const globalPages = [
        'about',
        'naac', 
        'research',
        'placement',
        'admissions',
        'iqac',
        'international-relations'
      ]

      const pagesData = await Promise.all(
        globalPages.map(async (slug: string) => {
          try {
            const globalData = await payload.findGlobal({
              slug: slug as any,
              depth: 0, // Minimal depth for overview
            })

            return {
              slug,
              title: (globalData as any)?.title || (globalData as any)?.heroTitle || slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' '),
              isActive: (globalData as any)?.isActive !== false,
            }
          } catch (error) {
            return {
              slug,
              title: slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' '),
              isActive: false,
            }
          }
        })
      )

      return Response.json({
        success: true,
        data: pagesData.filter(page => page.isActive),
      })
    } catch (error: any) {
      return Response.json({
        success: false,
        error: error?.message || 'An error occurred',
      }, { status: 500 })
    }
  },
}
