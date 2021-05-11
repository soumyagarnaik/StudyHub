import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Soumya Ranjan',
    email: 'soumya@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'bablu ranjan',
    email: 'bablu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users