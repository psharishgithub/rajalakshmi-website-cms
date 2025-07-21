import type { Endpoint } from 'payload'

// Get active departments for navigation dropdown
export const departmentsNavEndpoint: Endpoint = {
  path: '/departments-nav',
  method: 'get',
  handler: async (req) => {
    const { payload } = req

    try {
      const departments = await payload.find({
        collection: 'departments',
        where: {
          isActive: {
            equals: true,
          },
        },
        sort: '-order',
        limit: 100,
      })

      const navData = departments.docs.map((dept: any) => ({
        id: dept.id,
        name: dept.name,
        shortName: dept.shortName || dept.name,
        slug: dept.slug,
        code: dept.code,
        icon: dept.icon,
        order: dept.order,
      }))

      return Response.json({
        success: true,
        data: navData,
      })
    } catch (error: any) {
      return Response.json({
        success: false,
        error: error?.message || 'An error occurred',
      }, { status: 500 })
    }
  },
}

// Get department content by slug
export const departmentContentEndpoint: Endpoint = {
  path: '/department-content/:slug',
  method: 'get',
  handler: async (req) => {
    const { payload } = req
    const slug = req.routeParams?.slug

    try {
      // First get the department by slug
      const departmentQuery = await payload.find({
        collection: 'departments',
        where: {
          slug: {
            equals: slug,
          },
          isActive: {
            equals: true,
          },
        },
        limit: 1,
      })

      if (!departmentQuery.docs.length) {
        return Response.json({
          success: false,
          error: 'Department not found',
        }, { status: 404 })
      }

      const department = departmentQuery.docs[0]

      // Then get all content sections for this department
      const sectionsQuery = await payload.find({
        collection: 'department-sections',
        where: {
          department: {
            equals: department.id,
          },
          isActive: {
            equals: true,
          },
        },
        depth: 2,
        limit: 100,
      })

      return Response.json({
        success: true,
        data: {
          department: department,
          sections: sectionsQuery.docs,
        },
      })
    } catch (error: any) {
      return Response.json({
        success: false,
        error: error?.message || 'An error occurred',
      }, { status: 500 })
    }
  },
}
