const { ApolloServer } = require('apollo-server')
const UsersAPI = require('./user/datasources')
const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')

const typeDefs = (() => {
  const arquivosSchemas = loadFilesSync(path.join(__dirname, './user/schemas'))
  return mergeTypeDefs(arquivosSchemas, { all: true })
})()

const resolvers = (() => {
  return loadFilesSync(path.join(__dirname, './user/resolvers'))
})()

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI(),
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`Servidor rodando na porta ${url}`);
});