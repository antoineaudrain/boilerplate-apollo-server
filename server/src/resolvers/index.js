import * as User from './user'

const mergeResolvers = (resolvers) => Object.values(resolvers).reduce(
  (acc, { Query, Mutation, Subscription, ...other }) => ({
    ...acc,
    Query: { ...acc.Query, ...Query },
    Mutation: { ...acc.Mutation, ...Mutation },
    ...other
  }),
  {}
)

export default mergeResolvers({
  User
})
