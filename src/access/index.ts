// Define the user type with role
export type UserWithRole = {
  id: string
  email: string
  role: 'SuperAdmin' | 'Admin' | 'Blogger'
}

// Helper functions for access control
export const isSuperAdmin = (user: any): boolean => {
  return (user as UserWithRole)?.role === 'SuperAdmin'
}

export const isAdmin = (user: any): boolean => {
  return (user as UserWithRole)?.role === 'Admin'
}

export const isBlogger = (user: any): boolean => {
  return (user as UserWithRole)?.role === 'Blogger'
}

export const isSuperAdminOrAdmin = (user: any): boolean => {
  const userRole = (user as UserWithRole)?.role
  return userRole === 'SuperAdmin' || userRole === 'Admin'
}

export const isAdminOrBlogger = (user: any): boolean => {
  const userRole = (user as UserWithRole)?.role
  return userRole === 'Admin' || userRole === 'Blogger'
}

export const isAnyAdminOrBlogger = (user: any): boolean => {
  const userRole = (user as UserWithRole)?.role
  return userRole === 'SuperAdmin' || userRole === 'Admin' || userRole === 'Blogger'
}

// Common access patterns
export const superAdminOnly = {
  create: ({ req: { user } }: any) => isSuperAdmin(user),
  read: ({ req: { user } }: any) => isSuperAdmin(user),
  update: ({ req: { user } }: any) => isSuperAdmin(user),
  delete: ({ req: { user } }: any) => isSuperAdmin(user),
}

export const adminOnly = {
  create: ({ req: { user } }: any) => isSuperAdminOrAdmin(user),
  read: ({ req: { user } }: any) => isSuperAdminOrAdmin(user),
  update: ({ req: { user } }: any) => isSuperAdminOrAdmin(user),
  delete: ({ req: { user } }: any) => isSuperAdminOrAdmin(user),
}

export const adminAndBlogger = {
  create: ({ req: { user } }: any) => isAnyAdminOrBlogger(user),
  read: ({ req: { user } }: any) => isAnyAdminOrBlogger(user),
  update: ({ req: { user } }: any) => isAnyAdminOrBlogger(user),
  delete: ({ req: { user } }: any) => isAnyAdminOrBlogger(user),
}

// Blog-specific access control - bloggers can only see their own posts
export const blogPostAccess = {
  create: ({ req: { user } }: any) => isAnyAdminOrBlogger(user),
  read: ({ req: { user } }: any) => {
    if (isSuperAdminOrAdmin(user)) return true
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
    if (isSuperAdminOrAdmin(user)) return true
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
    if (isSuperAdminOrAdmin(user)) return true
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
  create: ({ req: { user } }: any) => isAnyAdminOrBlogger(user),
  read: ({ req: { user } }: any) => {
    // If no user (public access), allow read for frontend
    if (!user) return true
    
    // SuperAdmin and Admin can see all media
    if (isSuperAdminOrAdmin(user)) return true
    
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
    if (isSuperAdminOrAdmin(user)) return true
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
    if (isSuperAdminOrAdmin(user)) return true
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
