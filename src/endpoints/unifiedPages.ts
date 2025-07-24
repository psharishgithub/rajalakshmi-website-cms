import { Endpoint } from 'payload'

// Unified endpoint to serve both global pages and dynamic pages by slug
export const unifiedPageEndpoint: Endpoint = {
  path: '/unified-page/:slug',
  method: 'get',
  handler: async (req) => {
    const { payload, routeParams } = req
    const { slug } = routeParams || {}

    if (!slug) {
      return Response.json(
        { error: 'Slug parameter is required' },
        { status: 400 }
      )
    }

    try {
      let pageData = null
      let pageType = null

      // First, try to find in dynamic pages (published only)
      try {
        const dynamicPage = await payload.find({
          collection: 'dynamic-pages',
          where: {
            and: [
              { slug: { equals: slug } },
              { isPublished: { equals: true } }
            ]
          },
          limit: 1,
        })

        if (dynamicPage.docs && dynamicPage.docs.length > 0) {
          pageData = dynamicPage.docs[0]
          pageType = 'dynamic'
        }
      } catch (dynamicError) {
        console.log(`No dynamic page found for slug: ${slug}`)
      }

      // If no dynamic page found, try to find in globals
      if (!pageData) {
        try {
          const globalPage = await payload.findGlobal({
            slug: slug as any, // TypeScript workaround for dynamic global slugs
          })

          if (globalPage && globalPage.id) {
            pageData = globalPage
            pageType = 'global'
          }
        } catch (globalError) {
          console.log(`No global page found for slug: ${slug}`)
        }
      }

      if (!pageData) {
        return Response.json(
          { error: 'Page not found' },
          { status: 404 }
        )
      }

      // Transform the response to ensure consistent structure
      const slugString = String(slug)
      const unifiedResponse = {
        ...pageData,
        pageType,
        source: pageType === 'dynamic' ? 'dynamic-pages' : 'globals',
        // Ensure these fields exist for consistent frontend handling
        heroTitle: pageData.heroTitle || pageData.pageTitle || `${slugString.charAt(0).toUpperCase() + slugString.slice(1).replace('-', ' ')} Page`,
        sections: pageData.sections || [],
      }

      return Response.json(unifiedResponse)
    } catch (error) {
      console.error('Error in unified page endpoint:', error)
      return Response.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    }
  },
}

// Alternative endpoint that accepts slug as query parameter
export const unifiedPageQueryEndpoint: Endpoint = {
  path: '/unified-page',
  method: 'get',
  handler: async (req) => {
    const { payload } = req
    const { searchParams } = new URL(req.url!)
    const slug = searchParams.get('slug')

    if (!slug) {
      return Response.json(
        { error: 'Slug query parameter is required' },
        { status: 400 }
      )
    }

    try {
      let pageData = null
      let pageType = null

      // First, try to find in dynamic pages (published only)
      try {
        const dynamicPage = await payload.find({
          collection: 'dynamic-pages',
          where: {
            and: [
              { slug: { equals: slug } },
              { isPublished: { equals: true } }
            ]
          },
          limit: 1,
        })

        if (dynamicPage.docs && dynamicPage.docs.length > 0) {
          pageData = dynamicPage.docs[0]
          pageType = 'dynamic'
        }
      } catch (dynamicError) {
        console.log(`No dynamic page found for slug: ${slug}`)
      }

      // If no dynamic page found, try to find in globals
      if (!pageData) {
        try {
          const globalPage = await payload.findGlobal({
            slug: slug as any, // TypeScript workaround for dynamic global slugs
          })

          if (globalPage && globalPage.id) {
            pageData = globalPage
            pageType = 'global'
          }
        } catch (globalError) {
          console.log(`No global page found for slug: ${slug}`)
        }
      }

      if (!pageData) {
        return Response.json(
          { error: 'Page not found' },
          { status: 404 }
        )
      }

      // Transform the response to ensure consistent structure
      const slugString = String(slug)
      const unifiedResponse = {
        ...pageData,
        pageType,
        source: pageType === 'dynamic' ? 'dynamic-pages' : 'globals',
        // Ensure these fields exist for consistent frontend handling
        heroTitle: pageData.heroTitle || pageData.pageTitle || `${slugString.charAt(0).toUpperCase() + slugString.slice(1).replace('-', ' ')} Page`,
        sections: pageData.sections || [],
      }

      return Response.json(unifiedResponse)
    } catch (error) {
      console.error('Error in unified page query endpoint:', error)
      return Response.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    }
  },
}
