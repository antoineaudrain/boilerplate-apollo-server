import { REGEX } from '../../utils/helpers'

export default async (parent, { input }) => {
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