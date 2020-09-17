import { mergeResolvers } from '../utils/helpers'
import * as User from './user'

const resolvers = {
  User
}

export default mergeResolvers(resolvers)
