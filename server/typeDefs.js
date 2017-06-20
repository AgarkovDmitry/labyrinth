const typeDefs = [
`
  type Token{
    token: String!
    error: String
  }
  type User {
    role: ID!
    token: String!
    id: ID!
    name: String
    surname: String
  }
  type Role {
    content: Boolean,
    user: Boolean,
    order: Boolean,
    email: Boolean,
    question: Boolean,
  }
  type Order {
    id: ID,
    company: String,
    industry: String,
    service: String,
    description: String,
    result: String,
    name: String,
    surname: String,
    phone: String,
    email: String,
    date: String,
    seen: [User]
  }

  type Query {
    role: Role!
    users: [User]!
    order(id: ID!): Order
    orders(count: Int, start: Int): [Order]!
  }
  type Mutation {
    createUser(login: String!, password: String!, name: String!, surname: String!): User
    deleteUser(id: ID!): String

    createOrder(company: String!, industry: String!, service: String!, description: String!, result: String!, name: String!, surname: String!, phone: String!, email: String!): Order
    deleteOrder(id: ID!): String
    seeOrder(id: ID!): Order

    signIn(login: String!, password: String!): Token!
  }
  schema {
    query: Query
    mutation: Mutation
  }
`]

module.exports = typeDefs
