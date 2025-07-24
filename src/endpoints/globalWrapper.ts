import type { Endpoint } from 'payload'

export const globalWrapperEndpoint: Endpoint = {
  path: '/globals/:slug',
  method: 'get',
  handler: async (req) => {
    const { slug } = req.routeParams || {}
    
    if (!slug) {
      return Response.json(
        { 
          success: false, 
          error: 'Slug parameter is required' 
        },
        { status: 400 }
      )
    }

    try {
      // Check if it's a dynamic page first
      const dynamicPages = await req.payload.find({
        collection: 'dynamic-pages',
        where: {
          and: [
            { slug: { equals: slug } },
            { isPublished: { equals: true } }
          ]
        },
        limit: 1,
      })

      if (dynamicPages.docs.length > 0) {
        // Return dynamic page data in standardized format
        return Response.json({
          success: true,
          data: dynamicPages.docs[0]
        })
      }

      // Try to fetch from built-in globals
      try {
        const globalData = await req.payload.findGlobal({
          slug: slug as any, // Type assertion since we're checking all possible globals
        })

        if (globalData) {
          return Response.json({
            success: true,
            data: globalData
          })
        }
      } catch (globalError) {
        // Global doesn't exist, continue to 404
      }

      // Neither dynamic page nor global found
      return Response.json(
        { 
          success: false, 
          error: `Page '${slug}' not found` 
        },
        { status: 404 }
      )
      
    } catch (error) {
      console.error('Error in global wrapper endpoint:', error)
      return Response.json(
        { 
          success: false, 
          error: 'Internal server error' 
        },
        { status: 500 }
      )
    }
  },
}
