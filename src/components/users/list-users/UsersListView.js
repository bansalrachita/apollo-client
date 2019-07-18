import React from "react";
import { Query } from "react-apollo/index";
import { gql } from "apollo-boost/lib/index";

export const UsersListView = ({ client }) => {
  return (
    <Query
      client={client}
      query={gql`
        {
          users {
            id
            username
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <div>loading...</div>;
        if (error) return <div>error!</div>;

        return (
          <>
            <div>{data.map(user => user.username)}</div>
              <div>loading...</div>
          </>
        );
      }}
    </Query>
  );
};
