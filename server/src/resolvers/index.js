import { mergeResolvers } from '../utils/helpers'
import * as User from './user'

const resolvers = {
  User
}

export default Object.values(resolvers).reduce(
  (acc, { Query, Mutation, Subscription, ...other }) => ({
    ...acc,
    Query: { ...acc.Query, ...Query },
    Mutation: { ...acc.Mutation, ...Mutation },
    ...other
  }),
  {}
)
