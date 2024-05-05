const typeDefs = `

type  {
    gameID: String
   title: String!
}

type User {
    _id: ID!
    username: String!
    email: String
    trackedGames: [game]
  }

  type Auth {
    token: ID!
    user: User
  }

  
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(title: String!, gameID: String): User
    removeBook(title: String!): User
  }
`;

module.exports = typeDefs;