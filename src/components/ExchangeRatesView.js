import React from "react";
import { Query } from "react-apollo/index";
import { gql } from "apollo-boost/lib/index";

export const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
        if(loading) return <div>loading...</div>
        if(error) return <div>error!</div>

        return (
            <div>
                success...
            </div>
        )
    }}
  </Query>
);
