const {ApolloServer} = require('apollo-server');
const typeDefs = require('./service/types.graphql');
const resolvers = require('./service/resolvers.graphql');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`);
});