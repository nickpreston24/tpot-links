//https://memgraph.com/blog/cypher-cheat-sheet
const uri = import.meta.env.VITE_VERCEL_URI
const user = import.meta.env.VITE_VERCEL_USER
const password = import.meta.env.VITE_VERCEL_PASSWORD
import neo4j from 'neo4j-driver'
import { devmode } from '../helpers'
export const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))

//Execute Raw Queries here
async function executeCypherQuery(statement, params = {}) {
  try {
    let session = driver.session()
    const result = await session.run(statement, params)
    await session.close()
    return result
  } catch (error) {
    throw error // we are logging this error at the time of calling this method
  }
}

export const toObjectFormat = (records = []) => {
  console.log('records.length', records)
  if (!records?.length) records = [{ ...records }]
  return records.map((n) => n.properties)
}

export async function create(label = null, props = {}) {
  if (!label) return ['Label cannot be null']
  devmode && console.log(`posting new ${label}...`)
  devmode && console.log('props', props)

  let keys = toNeoProps(props)

  devmode && console.log('keys', keys)

  let query = `MERGE (p:${label} ${keys}) RETURN p`

  console.log('query', query)
  const result = await executeCypherQuery(query, {
    ...props
  })

  const single = result.records[0]
  const node = single.get(0)

  devmode && console.log(`node`, node.properties.name)

  return node
}

function toNeoProps(props) {
  return JSON.stringify(
    Object.assign(
      ...Object.keys(props).map((key) => {
        return { [key]: `$${key || ''}` }
      })
    )
  ).replaceAll(`"`, '')
}

export async function getRecords(label = null, limit = 35) {
  if (!label)
    return [`Nodes could not be found because you did not provide a label name`]

  let query = `MATCH (n:${label}) return n LIMIT ${limit}`
  devmode && console.log('query', query)
  let results = await executeCypherQuery(query, {})
  console.log('results', results)
  return toObjectFormat(results.records)
}
