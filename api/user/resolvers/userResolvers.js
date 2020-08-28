const users = [
  {
    nome: "Ana",
    ativo: true
  },
  {
    nome: "Marcia",
    ativo: false
  }
]

const resolvers = {
  Query: {
    users: () => users
  },
}

module.exports = resolvers