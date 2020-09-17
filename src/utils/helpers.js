import { createHmac } from 'crypto'
import { sign, verify } from 'jsonwebtoken'

export const crypto = {
  hash: (password, passwordKey) =>
    createHmac('sha512', passwordKey).update(password).digest('hex'),
  compare: (password, passwordKey, hashedPassword) =>
    hashedPassword ===
    createHmac('sha512', passwordKey).update(password).digest('hex')
}

export const jwt = {
  create: (user) => sign({ user: { id: user.id } }, process.env.JWT_KEY),
  decode: (token) => verify(token, process.env.JWT_KEY)
}

export const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  username: /^[A-Za-z0-9\s$&+,:;=?@#|'<>.^*()%!-]{5,}$/
}