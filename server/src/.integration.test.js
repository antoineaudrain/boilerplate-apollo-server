import { gql } from 'apollo-server'
import { createTestClient } from 'apollo-server-testing'
import server from './server'

const { query, mutate } = createTestClient(server)


test('get user', async () => {
  const GET_USER = gql`
    query($id: ID!) {
      getUser(id: $id) {
        id
        username
        email
      }
    }
  `

  const { data: { getUser } } = await query({ query: GET_USER, variables: { id: 'b7c64447-bbac-4a67-a94a-41df7c6cf332' } })

  expect(getUser).toEqual({
    id: 'b7c64447-bbac-4a67-a94a-41df7c6cf332',
    username: 'this is a username',
    email: 'this is an email'
  })
})

test('throw error if user is not found', async () => {
  const GET_USER = gql`
    query($id: ID!) {
      getUser(id: $id) {
        id
        username
        email
      }
    }
  `

  const { errors: [error] } = await query({ query: GET_USER, variables: { id: 'a7c64447-bbac-4a67-a94a-41df7c6cf332' } })

  expect(error.message).toEqual("Not Found!")
})

test('get users', async () => {
  const GET_USERS = gql`
    query {
      allUsers {
        id
        username
        email
      }
    }
  `

  const { data: { allUsers } } = await query({ query: GET_USERS })

  expect(allUsers).toEqual([
    {
      id: 'b7c64447-bbac-4a67-a94a-41df7c6cf332',
      username: 'this is a username',
      email: "this is an email"
    },
    {
      id: 'c2e74a47-d6aa-4573-8147-4e92bf75c6c6',
      username: 'this is another username',
      email: 'this is another email'
    }
  ])
})

test('register', async () => {
  const REGISTER = gql`
    mutation($input: RegisterInput!) {
      register(input: $input) {
        user {
          id
          username
          email
        }
      }
    } 
  `

  const { data: { register } } = await mutate({ mutation: REGISTER, variables: { input: {
    email: 'test@test.com',
    password: 'Test1234',
    username: 'test username'
  }}})

  expect(register).toEqual({
    user: {
      id: 'b7c64447-bbac-4a67-a94a-41df7c6cf332',
      username: 'this is a username',
      email: 'this is an email'
    }
  })
})

test('throw error if register with wrong email', async () => {
  const REGISTER = gql`
    mutation($input: RegisterInput!) {
      register(input: $input) {
        user {
          id
          username
          email
        }
      }
    } 
  `

  const { errors: [error] } = await mutate({ mutation: REGISTER, variables: { input: {
    email: 'test',
    password: 'Test1234',
    username: 'test username'
  }}})

  expect(error.message).toEqual('Wrong email!')
})

test('throw error if register with wrong password', async () => {
  const REGISTER = gql`
    mutation($input: RegisterInput!) {
      register(input: $input) {
        user {
          id
          username
          email
        }
      }
    } 
  `

  const { errors: [error] } = await mutate({ mutation: REGISTER, variables: { input: {
    email: 'test@test.com',
    password: 'test',
    username: 'test username'
  }}})

  expect(error.message).toEqual('Wrong password!')
})

test('throw error if register with wrong username', async () => {
  const REGISTER = gql`
    mutation($input: RegisterInput!) {
      register(input: $input) {
        user {
          id
          username
          email
        }
      }
    } 
  `

  const { errors: [error] } = await mutate({ mutation: REGISTER, variables: { input: {
    email: 'test@test.com',
    password: 'Test1234',
    username: 'test'
  }}})

  expect(error.message).toEqual('Username must contains at least 5 characters!')
})