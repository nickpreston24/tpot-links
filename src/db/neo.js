import neo4j from 'neo4j-driver'

// const apiKey = import.meta.env.VITE_VERCEL_AIRTABLE_API_KEY;
const uri = import.meta.env.VITE_VERCEL_URI
const user = import.meta.env.VITE_VERCEL_USER
const password = import.meta.env.VITE_VERCEL_PASSWORD
const devmode = import.meta.env.DEV

console.log('devmode :>> ', devmode)

devmode && console.log('password :>> ', password)
devmode && console.log('user :>> ', user)
devmode && console.log('uri :>> ', uri)

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))

export async function get_first_10_pages() {
  const session = driver.session({ database: 'neo4j' })
  //  devmode && console.log('driver :>> ', driver)
  //  devmode && console.log('session :>> ', session)

  const readQuery = `
    match (page:Page)
    return page
    limit 10`

  try {
    const results = await session.executeRead((transaction) =>
      transaction.run(readQuery)
    )
    devmode && console.log('results :>> ', results)
    results.records.forEach((record) => {
      console.log(`Found Paper: ${record.get('page')}`)
    })

    const dtos = to_dto(results.records)
    console.log('dtos :>> ', dtos)

    // return results
    return dtos
  } catch (error) {
    console.error(`Something went wrong: ${error}`)
  } finally {
    await session.close()
  }
}

export const to_dto = (records = []) => {
  devmode && console.log('records', records)
  return records?.map((r) => r['_fields']?.map((r) => r?.properties)?.[0])
}
