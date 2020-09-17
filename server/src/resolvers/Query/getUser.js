export default async (parent, { id }) => {
  if (id === 'b7c64447-bbac-4a67-a94a-41df7c6cf332') {
    return {
      id: 'b7c64447-bbac-4a67-a94a-41df7c6cf332',
      username: 'this is a username',
      email: 'this is an email'
    }
  }
  throw Error('Not Found!')
}