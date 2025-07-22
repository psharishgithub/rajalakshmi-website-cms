// API Testing Script for Global Pages Endpoints
// Run this script to test all the global page endpoints

const BASE_URL = 'http://localhost:3000/api' // Adjust to your server URL

// Test helper function
async function testEndpoint(url, description) {
  console.log(`\n🧪 Testing: ${description}`)
  console.log(`📍 URL: ${url}`)
  
  try {
    const response = await fetch(url)
    const data = await response.json()
    
    if (response.ok && data.success) {
      console.log(`✅ SUCCESS: ${description}`)
      console.log(`📊 Data preview:`, JSON.stringify(data, null, 2).slice(0, 500) + '...')
    } else {
      console.log(`❌ FAILED: ${description}`)
      console.log(`🔍 Error:`, data.error || 'Unknown error')
    }
  } catch (error) {
    console.log(`❌ REQUEST FAILED: ${description}`)
    console.log(`🔍 Error:`, error.message)
  }
}

// Main test function
async function testGlobalsAPI() {
  console.log('🚀 Starting Global Pages API Tests\n')
  console.log('=' * 50)

  // Test 1: Overview endpoint
  await testEndpoint(
    `${BASE_URL}/global-pages`,
    'Get all global pages overview'
  )

  // Test 2: Individual page sections
  const globalPages = [
    'about',
    'naac',
    'research', 
    'placement',
    'admissions',
    'iqac',
    'international-relations'
  ]

  for (const page of globalPages) {
    await testEndpoint(
      `${BASE_URL}/${page}/sections`,
      `Get ${page} page sections`
    )
  }

  // Test 3: Sample section content endpoints
  const sampleSections = [
    { page: 'about', section: 'profile' },
    { page: 'about', section: 'vision-mission' },
    { page: 'naac', section: 'dvv-clarifications' },
    { page: 'naac', section: 'extended-profile' },
    { page: 'research', section: 'research-centre' },
    { page: 'research', section: 'research-publications' },
    { page: 'placement', section: 'overview' },
    { page: 'placement', section: 'placement-statistics' },
    { page: 'admissions', section: 'overview' },
    { page: 'admissions', section: 'eligibility-criteria' },
    { page: 'iqac', section: 'overview' },
    { page: 'iqac', section: 'composition' },
    { page: 'international-relations', section: 'overview' },
    { page: 'international-relations', section: 'partnerships' },
  ]

  console.log('\n' + '=' * 50)
  console.log('🧪 Testing Section Content Endpoints')
  console.log('=' * 50)

  for (const { page, section } of sampleSections) {
    await testEndpoint(
      `${BASE_URL}/${page}/sections/${section}`,
      `Get ${page} - ${section} content`
    )
  }

  console.log('\n' + '=' * 50)
  console.log('✅ API Testing Complete!')
  console.log('=' * 50)
}

// Utility function to get sections for a specific page
async function getSectionsForPage(pageSlug) {
  try {
    const response = await fetch(`${BASE_URL}/${pageSlug}/sections`)
    const data = await response.json()
    
    if (data.success) {
      console.log(`\n📋 Sections available for ${pageSlug}:`)
      data.data.sections.forEach(section => {
        console.log(`  - ${section.id}: ${section.title}`)
      })
      return data.data.sections
    }
  } catch (error) {
    console.error(`Error fetching sections for ${pageSlug}:`, error.message)
  }
  return []
}

// Utility function to get content for a specific section
async function getSectionContent(pageSlug, sectionId) {
  try {
    const response = await fetch(`${BASE_URL}/${pageSlug}/sections/${sectionId}`)
    const data = await response.json()
    
    if (data.success) {
      console.log(`\n📄 Content for ${pageSlug}/${sectionId}:`)
      console.log(`  Title: ${data.data.title}`)
      console.log(`  Content preview:`, JSON.stringify(data.data.content, null, 2).slice(0, 300) + '...')
      return data.data
    }
  } catch (error) {
    console.error(`Error fetching content for ${pageSlug}/${sectionId}:`, error.message)
  }
  return null
}

// Interactive function to explore a specific page
async function explorePage(pageSlug) {
  console.log(`\n🔍 Exploring ${pageSlug} page...`)
  
  const sections = await getSectionsForPage(pageSlug)
  
  if (sections.length > 0) {
    console.log(`\n📖 Testing first few sections...`)
    
    // Test first 3 sections
    for (let i = 0; i < Math.min(3, sections.length); i++) {
      const section = sections[i]
      await getSectionContent(pageSlug, section.id)
    }
  }
}

// Export functions for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    testGlobalsAPI,
    getSectionsForPage,
    getSectionContent,
    explorePage,
    BASE_URL
  }
}

// Run tests if this script is executed directly
if (typeof window === 'undefined' && require.main === module) {
  testGlobalsAPI()
}

// Browser-friendly version
if (typeof window !== 'undefined') {
  window.GlobalsAPITester = {
    testGlobalsAPI,
    getSectionsForPage,
    getSectionContent,
    explorePage,
    BASE_URL
  }
  
  console.log('🌐 Global Pages API Tester loaded!')
  console.log('Use window.GlobalsAPITester.testGlobalsAPI() to run all tests')
  console.log('Use window.GlobalsAPITester.explorePage("about") to explore a specific page')
}
