import server from './server'

const run = async () => {
  const { url } = await server.listen(process.env.PORT || 3000)
  // eslint-disable-next-line
  console.log(`🚀 Server ready at ${url}`)
}

run().catch((error) => {
  // eslint-disable-next-line
  console.error(error)
  process.exit()
})
