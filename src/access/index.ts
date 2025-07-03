// Define the user type with role
export type UserWithRole = {
  id: string
  email: string
  role: 'admin' | 'blogger'
}

// Helper functions for access control
export const isAdmin = (user: any): boolean => {
  return (user as UserWithRole)?.role === 'admin'
}

export const isBlogger = (user: any): boolean => {
  return (user as UserWithRole)?.role === 'blogger'
}

export const isAdminOrBlogger = (user: any): boolean => {
  const userRole = (user as UserWithRole)?.role
  return userRole === 'admin' || userRole === 'blogger'
}

// Common access patterns
export const adminOnly = {
  create: ({ req: { user } }: any) => isAdmin(user),
  read: ({ req: { user } }: any) => isAdmin(user),
  update: ({ req: { user } }: any) => isAdmin(user),
  delete: ({ req: { user } }: any) => isAdmin(user),
}

export const adminAndBlogger = {
  create: ({ req: { user } }: any) => isAdminOrBlogger(user),
  read: ({ req: { user } }: any) => isAdminOrBlogger(user),
  update: ({ req: { user } }: any) => isAdminOrBlogger(user),
  delete: ({ req: { user } }: any) => isAdminOrBlogger(user),
}

// Blog-specific access control - bloggers can only see their own posts
export const blogPostAccess = {
  create: ({ req: { user } }: any) => isAdminOrBlogger(user),
  read: ({ req: { user } }: any) => {
    if (isAdmin(user)) return true
    if (isBlogger(user)) {
      // Bloggers can only read their own blog posts
      return {
        author: {
          equals: user?.id,
        },
      }
    }
    return false
  },
  update: ({ req: { user } }: any) => {
    if (isAdmin(user)) return true
    if (isBlogger(user)) {
      // Bloggers can only update their own blog posts
      return {
        author: {
          equals: user?.id,
        },
      }
    }
    return false
  },
  delete: ({ req: { user } }: any) => {
    if (isAdmin(user)) return true
    if (isBlogger(user)) {
      // Bloggers can only delete their own blog posts
      return {
        author: {
          equals: user?.id,
        },
      }
    }
    return false
  },
}

// Media-specific access control - users can only see their own uploaded media in admin
export const mediaAccess = {
  create: ({ req: { user } }: any) => isAdminOrBlogger(user),
  read: ({ req: { user } }: any) => {
    // If no user (public access), allow read for frontend
    if (!user) return true
    
    // Admin can see all media
    if (isAdmin(user)) return true
    
    // Bloggers can only see their own uploaded media in admin
    if (isBlogger(user)) {
      return {
        uploadedBy: {
          equals: user?.id,
        },
      }
    }
    
    return false
  },
  update: ({ req: { user } }: any) => {
    if (isAdmin(user)) return true
    if (isBlogger(user)) {
      // Bloggers can only update their own uploaded media
      return {
        uploadedBy: {
          equals: user?.id,
        },
      }
    }
    return false
  },
  delete: ({ req: { user } }: any) => {
    if (isAdmin(user)) return true
    if (isBlogger(user)) {
      // Bloggers can only delete their own uploaded media
      return {
        uploadedBy: {
          equals: user?.id,
        },
      }
    }
    return false
  },
}
