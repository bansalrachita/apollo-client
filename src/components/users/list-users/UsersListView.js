import React from "react";
import { Query } from "react-apollo/index";
import { gql } from "apollo-boost/lib/index";

export const UsersListView = () => {
  return (
    <Query
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
          console.log('data', data);
        if (loading) return <div>loading...</div>;
        if (error) return <div>error!</div>;
        if (Array.isArray(data.users)) {
          return (
            <>
              <div>{data.users.map(user => user.username)}</div>
              <div>loading...</div>
            </>
          );
        }
        return null;
      }}
    </Query>
  );
};
