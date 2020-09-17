// import { crypto, jwt } from '../utils/helpers'
import { REGEX } from '../utils/helpers'

export const Query = {
  // eslint-disable-next-line
  getUser: (parent, { id }) => {
    if (id === 'b7c64447-bbac-4a67-a94a-41df7c6cf332') {
      return {
        id: 'b7c64447-bbac-4a67-a94a-41df7c6cf332',
        username: 'this is a username',
        email: 'this is an email'
      }
    }
    throw Error('Not Found!')
  },
  // eslint-disable-next-line
  allUsers: (parent, args) => [
    {
      id: 'b7c64447-bbac-4a67-a94a-41df7c6cf332',
      username: 'this is a username',
      email: 'this is an email'
    },
    {
      id: 'c2e74a47-d6aa-4573-8147-4e92bf75c6c6',
      username: 'this is another username',
      email: 'this is another email'
    }
  ]
}

export const Mutation = {
  // eslint-disable-next-line
  login: async (parent, { input }) => {
    // const { email, password } = input
    // const user = get user
    // if (!user) {
    //   throw new Error('Wrong email')
    // }

    // const valid = crypto.compare(password, user.password_key, user.password)
    // if (!valid) {
    //   throw new Error('Wrong password')
    // }

    // const token = jwt.create(user)
    return { token: 'this is a jsonwebtoken' }
  },
  // eslint-disable-next-line
  register: async (parent, { input }) => {
    // const user = create user
    const { email, username, password } = input
    if (!REGEX.email.test(email)) {
      throw Error('Wrong email!')
    } else if (!REGEX.password.test(password)) {
      throw Error('Wrong password!')
    } else if (!REGEX.username.test(username)) {
      throw Error('Username must contains at least 5 characters!')
    }

    return {
      user: {
        id: 'b7c64447-bbac-4a67-a94a-41df7c6cf332',
        username: 'this is a username',
        email: 'this is an email'
      }
    }
  }
}
