import { getPayload } from 'payload'
import { config } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Load environment variables
config({ path: path.resolve(dirname, '../.env') })

async function createAdmin() {
  try {
    // Import the Payload config
    const configPromise = await import('../src/payload.config.js')
    const payloadConfig = await configPromise.default
    
    // Initialize Payload
    const payload = await getPayload({ config: payloadConfig })

    const email = process.env.ADMIN_EMAIL || 'admin@rajalakshmi.edu.in'
    const password = process.env.ADMIN_PASSWORD || 'admin123'

    // Check if user already exists
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (existingUsers.docs.length > 0) {
      console.log(`Super Admin user with email ${email} already exists.`)
      process.exit(0)
    }

    // Create the Super Admin user
    const result = await payload.create({
      collection: 'users',
      data: {
        email,
        password,
        role: 'SuperAdmin',
      },
    })

    console.log(`Super Admin user created successfully!`)
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
    console.log(`Role: SuperAdmin`)
    console.log(`User ID: ${result.id}`)

    process.exit(0)
  } catch (error) {
    console.error('Error creating admin user:', error)
    process.exit(1)
  }
}

createAdmin()
