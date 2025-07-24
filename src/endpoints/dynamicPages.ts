import type { Endpoint } from 'payload'

// Get all published dynamic pages
export const dynamicPagesEndpoint: Endpoint = {
  path: '/dynamic-pages',
  method: 'get',
  handler: async (req) => {
    const { payload } = req
    const { searchParams } = new URL(req.url!)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '100')
    const page = parseInt(searchParams.get('page') || '1')

    try {
      const whereClause: any = {
        isPublished: {
          equals: true,
        },
      }

      // Add category filter if provided
      if (category && category !== 'all') {
        whereClause.category = {
          equals: category,
        }
      }

      const pages = await payload.find({
        collection: 'dynamic-pages',
        where: whereClause,
        sort: '-priority',
        limit,
        page,
      })

      return Response.json({
        success: true,
        data: pages.docs,
        totalDocs: pages.totalDocs,
        totalPages: pages.totalPages,
        page: pages.page,
        limit: pages.limit,
        hasNextPage: pages.hasNextPage,
        hasPrevPage: pages.hasPrevPage,
      })
    } catch (error) {
      console.error('Error fetching dynamic pages:', error)
      return Response.json(
        {
          success: false,
          error: 'Failed to fetch dynamic pages',
        },
        { status: 500 }
      )
    }
  },
}

// Get a single dynamic page by slug
export const dynamicPageBySlugEndpoint: Endpoint = {
  path: '/:slug',
  method: 'get',
  handler: async (req) => {
    const { payload, routeParams } = req
    const { slug } = routeParams || {}

    if (!slug) {
      return Response.json(
        {
          success: false,
          error: 'Slug parameter is required',
        },
        { status: 400 }
      )
    }

    try {
      const pages = await payload.find({
        collection: 'dynamic-pages',
        where: {
          and: [
            {
              slug: {
                equals: slug,
              },
            },
            {
              isPublished: {
                equals: true,
              },
            },
          ],
        },
        limit: 1,
      })

      if (pages.docs.length === 0) {
        return Response.json(
          {
            success: false,
            error: 'Page not found',
          },
          { status: 404 }
        )
      }

      return Response.json({
        success: true,
        data: pages.docs[0],
      })
    } catch (error) {
      console.error('Error fetching dynamic page:', error)
      return Response.json(
        {
          success: false,
          error: 'Failed to fetch page',
        },
        { status: 500 }
      )
    }
  },
}

// Get a single dynamic page by slug with globals pattern
export const globalsDynamicPageEndpoint: Endpoint = {
  path: '/globals-dynamic/:slug',
  method: 'get',
  handler: async (req) => {
    const { payload, routeParams } = req
    const { slug } = routeParams || {}

    if (!slug) {
      return Response.json(
        {
          success: false,
          error: 'Slug parameter is required',
        },
        { status: 400 }
      )
    }

    try {
      const pages = await payload.find({
        collection: 'dynamic-pages',
        where: {
          and: [
            {
              slug: {
                equals: slug,
              },
            },
            {
              isPublished: {
                equals: true,
              },
            },
          ],
        },
        limit: 1,
      })

      if (pages.docs.length === 0) {
        return Response.json(
          {
            success: false,
            error: 'Page not found',
          },
          { status: 404 }
        )
      }

      // Return the page data directly, matching the global pages format
      const pageData = pages.docs[0]
      
      // Transform the dynamic page data to match global page structure exactly
      const globalPageFormat = {
        createdAt: pageData.createdAt,
        updatedAt: pageData.updatedAt,
        globalType: pageData.slug, // Use slug as globalType to match global pages pattern
        heroTitle: pageData.heroTitle,
        heroSubtitle: pageData.heroSubtitle,
        heroImage: pageData.heroImage,
        sections: pageData.sections || [],
        id: pageData.id
      }

      return Response.json(globalPageFormat)
    } catch (error) {
      console.error('Error fetching dynamic page:', error)
      return Response.json(
        {
          success: false,
          error: 'Failed to fetch page',
        },
        { status: 500 }
      )
    }
  },
}

// Get dynamic pages by category
export const dynamicPagesByCategoryEndpoint: Endpoint = {
  path: '/dynamic-pages/category/:category',
  method: 'get',
  handler: async (req) => {
    const { payload, routeParams } = req
    const { category } = routeParams || {}
    const { searchParams } = new URL(req.url!)
    const limit = parseInt(searchParams.get('limit') || '50')
    const page = parseInt(searchParams.get('page') || '1')

    if (!category) {
      return Response.json(
        {
          success: false,
          error: 'Category parameter is required',
        },
        { status: 400 }
      )
    }

    try {
      const pages = await payload.find({
        collection: 'dynamic-pages',
        where: {
          and: [
            {
              category: {
                equals: category,
              },
            },
            {
              isPublished: {
                equals: true,
              },
            },
          ],
        },
        sort: '-priority',
        limit,
        page,
      })

      return Response.json({
        success: true,
        data: pages.docs,
        totalDocs: pages.totalDocs,
        totalPages: pages.totalPages,
        page: pages.page,
        limit: pages.limit,
        hasNextPage: pages.hasNextPage,
        hasPrevPage: pages.hasPrevPage,
        category,
      })
    } catch (error) {
      console.error('Error fetching dynamic pages by category:', error)
      return Response.json(
        {
          success: false,
          error: 'Failed to fetch dynamic pages by category',
        },
        { status: 500 }
      )
    }
  },
}

// Debug endpoint - Get all dynamic pages (including unpublished)
export const allDynamicPagesEndpoint: Endpoint = {
  path: '/dynamic-pages/all',
  method: 'get',
  handler: async (req) => {
    const { payload } = req

    try {
      const pages = await payload.find({
        collection: 'dynamic-pages',
        limit: 100,
        sort: '-updatedAt',
      })

      return Response.json({
        success: true,
        data: pages.docs.map((page: any) => ({
          id: page.id,
          pageTitle: page.pageTitle,
          slug: page.slug,
          isPublished: page.isPublished,
          category: page.category,
          priority: page.priority,
          updatedAt: page.updatedAt,
        })),
        totalDocs: pages.totalDocs,
      })
    } catch (error) {
      console.error('Error fetching all dynamic pages:', error)
      return Response.json(
        {
          success: false,
          error: 'Failed to fetch all dynamic pages',
        },
        { status: 500 }
      )
    }
  },
}
