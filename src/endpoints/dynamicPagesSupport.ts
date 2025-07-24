import type { Endpoint } from 'payload'

// Endpoint to list all dynamic pages
export const listDynamicPagesEndpoint: Endpoint = {
  path: '/dynamic-pages',
  method: 'get',
  handler: async (req) => {
    try {
      const result = await req.payload.find({
        collection: 'dynamic-pages',
        where: {
          isPublished: { equals: true }
        },
        sort: '-updatedAt',
      })

      return Response.json({
        success: true,
        data: result.docs,
        totalPages: result.totalPages,
        page: result.page,
        limit: result.limit,
        totalDocs: result.totalDocs,
      })
    } catch (error) {
      console.error('Error fetching dynamic pages:', error)
      return Response.json(
        { 
          success: false, 
          error: 'Failed to fetch dynamic pages' 
        },
        { status: 500 }
      )
    }
  },
}

// Endpoint to get dynamic pages by category
export const dynamicPagesByCategoryEndpoint: Endpoint = {
  path: '/dynamic-pages/category/:category',
  method: 'get',
  handler: async (req) => {
    const { category } = req.routeParams || {}
    
    if (!category) {
      return Response.json(
        { 
          success: false, 
          error: 'Category parameter is required' 
        },
        { status: 400 }
      )
    }

    try {
      const result = await req.payload.find({
        collection: 'dynamic-pages',
        where: {
          and: [
            { category: { equals: category } },
            { status: { equals: 'published' } }
          ]
        },
        sort: ['priority', '-updatedAt'],
      })

      return Response.json({
        success: true,
        data: result.docs,
        category: category,
        totalDocs: result.totalDocs,
      })
    } catch (error) {
      console.error('Error fetching dynamic pages by category:', error)
      return Response.json(
        { 
          success: false, 
          error: 'Failed to fetch dynamic pages for category' 
        },
        { status: 500 }
      )
    }
  },
}
