import neo4j from 'neo4j-driver'

// const apiKey = import.meta.env.VITE_VERCEL_AIRTABLE_API_KEY;
const uri = import.meta.env.VITE_VERCEL_URI
const user = import.meta.env.VITE_VERCEL_USER
const password = import.meta.env.VITE_VERCEL_PASSWORD
// console.log("password :>> ", password);
// console.log("user :>> ", user);
// console.log("uri :>> ", uri);
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))

export async function user_likes_build(userName, buildName) {
  // To learn more about sessions: https://neo4j.com/docs/javascript-manual/current/session-api/
  const session = driver.session({ database: 'neo4j' })

  try {
    // To learn more about the Cypher syntax, see: https://neo4j.com/docs/cypher-manual/current/
    // The Reference Card is also a good resource for keywords: https://neo4j.com/docs/cypher-refcard/current/
    const writeQuery = `MERGE (p1:User { name: $userName })
                                  MERGE (p2:Build { name: $buildName })
                                  MERGE (p1)-[:LIKES]->(p2)
                                  RETURN p1, p2`

    // Write transactions allow the driver to handle retries and transient errors.
    const writeResult = await session.executeWrite((tx) =>
      tx.run(writeQuery, { userName, buildName })
    )

    // Check the write results.
    writeResult.records.forEach((record) => {
      const user = record.get('p1')
      const build = record.get('p2')
      console.info(
        `Created Like between: ${user.properties.name}, ${build.properties.name}`
      )
    })
  } catch (error) {
    console.error(`Something went wrong: ${error}`)
  } finally {
    // Close down the session if you're not using it anymore.
    await session.close()
  }
}
