const {ApolloServer} = require('apollo-server');
const typeDefs = require('./service/src/types.graphql');
const resolvers = require('./service/src/resolvers.graphql');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`);
});