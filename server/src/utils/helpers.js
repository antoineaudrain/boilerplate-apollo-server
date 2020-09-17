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
