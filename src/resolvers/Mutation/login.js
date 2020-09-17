export default async (parent, { input }) => {
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
}