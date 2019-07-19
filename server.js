const { ApolloServer } = require("apollo-server");
const typeDefs = require("./service/src/types.graphql");
const resolvers = require("./service/src/resolvers/resolvers.graphql");
const UsersModalServer = require("./service/src/models/users.modal.server");
const { createStore } = require("./service/src/datasources/store");

const store = createStore();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    usersService: new UsersModalServer({ store })
  })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
