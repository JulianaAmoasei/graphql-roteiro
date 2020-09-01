const resolvers = {
  Query: {
    users: (root, args, { dataSources }, info) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }, info) => dataSources.usersAPI.getUserById(id),
  },
}

module.exports = resolvers


