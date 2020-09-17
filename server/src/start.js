import server from './server'

const run = async () => {
  const { url } = await server.listen(process.env.PORT || 3000)
  console.log(`🚀 Server ready at ${url}`)
}

run().catch((error) => {
  console.error(error)
  process.exit()
})