// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Announcements } from './collections/Announcements'
import { HomeSlider } from './collections/HomeSlider'
import { BlogPosts } from './collections/BlogPosts'
import { Testimonials } from './collections/Testimonials'
import { COE } from './collections/COE'
import { COECategories } from './collections/COECategories'
import { Regulations } from './collections/Regulations'
import { RegulationCategories } from './collections/RegulationCategories'
import { Departments } from './collections/Departments'
import { DepartmentSections } from './collections/DepartmentSections'
import { SecondaryNav } from './collections/SecondaryNav'
import { DynamicPages } from './collections/DynamicPages'

// Import globals
import { About } from './globals/About'
import { Admissions } from './globals/Admissions'
import { Research } from './globals/Research'
import { Placement } from './globals/Placement'
import { InternationalRelations } from './globals/InternationalRelations'

// Import endpoints
import { departmentsNavEndpoint, departmentContentEndpoint, departmentBySectionEndpoint } from './endpoints/departments'
import { dynamicPagesEndpoint, dynamicPageBySlugEndpoint, globalsDynamicPageEndpoint, dynamicPagesByCategoryEndpoint, allDynamicPagesEndpoint, globalsPatternEndpoint } from './endpoints/dynamicPages'
import { unifiedPageEndpoint, unifiedPageQueryEndpoint } from './endpoints/unifiedPages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Announcements, HomeSlider, BlogPosts, Testimonials, COE, COECategories, Regulations, RegulationCategories, Departments, DepartmentSections, SecondaryNav, DynamicPages],
  globals: [About, Admissions, Research, Placement, InternationalRelations],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  cors: [
    'http://localhost:3000', 
    'http://localhost:3001', 
    'http://localhost:5173', 
    'http://localhost:4200',
    'https://reccms.flashserver.in',
    'https://cmsrec.flashserver.in',
    'https://recwebsite.flashserver.in',
  ],
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'http://localhost:5173',
    'http://localhost:4200',
    'https://reccms.flashserver.in',
    'https://cmsrec.flashserver.in',
    'https://recwebsite.flashserver.in',
  ],
  sharp,
  plugins: [
    payloadCloudPlugin(),
  ],
  endpoints: [
    unifiedPageEndpoint,
    unifiedPageQueryEndpoint,
    globalsPatternEndpoint,
    departmentsNavEndpoint,
    departmentContentEndpoint,
    departmentBySectionEndpoint,
    dynamicPagesEndpoint,
    dynamicPageBySlugEndpoint,
    globalsDynamicPageEndpoint,
    dynamicPagesByCategoryEndpoint,
    allDynamicPagesEndpoint,
  ],
})
