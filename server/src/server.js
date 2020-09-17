import { ApolloServer } from 'apollo-server'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { jwt } from './utils/helpers'
import resolvers from './resolvers'

const SCHEMA_DIRECTORY = join(__dirname, 'schema')

export default new ApolloServer({
  typeDefs: readdirSync(SCHEMA_DIRECTORY).map((file) =>
    readFileSync(join(SCHEMA_DIRECTORY, file), 'utf8')
  ),
  resolvers,
  context: async ({ req }) => {
    const context = {}
    const authorization = req?.headers?.authorization
    if (authorization) {
      context.user = jwt.decode(authorization.split(' ')[1])?.user
    }
    return context
  },
  playground: process.env.NODE_ENV !== 'production',
  introspection: true
})
