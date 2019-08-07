import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { App } from "./App";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000" }),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
  queryDeduplication: true
});

console.log("client: ", client);

export const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
