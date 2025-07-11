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
import { DepartmentSections } from './collections/DepartmentSections'
import { About } from './collections/About'
import { IQAC } from './collections/IQAC'
import { InternationalRelations } from './collections/InternationalRelations'
import { NAAC } from './collections/NAAC'
import { Admissions } from './collections/Admissions'
import { Research } from './collections/Research'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Announcements, HomeSlider, BlogPosts, Testimonials, COE, COECategories, Regulations, RegulationCategories, DepartmentSections, About, IQAC, InternationalRelations, NAAC, Admissions, Research],
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
    process.env.FRONTEND_URL || '',
  ],
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'http://localhost:5173',
    'http://localhost:4200',
    'https://reccms.flashserver.in',
    process.env.FRONTEND_URL || '',
  ],
  sharp,
  plugins: [
    payloadCloudPlugin(),
  ],
})
