import getUser from './Query/getUser'
import allUsers from './Query/allUsers'

import login from './Mutation/login'
import register from './Mutation/register'

export default {
  Query: {
    getUser,
    allUsers
  },
  Mutation: {
    login,
    register
  }
}