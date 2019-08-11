import  gql  from "graphql-tag";

export const GET_USERS = gql`
    query getUsers($pageSize: Int, $after: String) {
        users(pageSize: $pageSize, after: $after) {
            users {
              id
              username
            }
        }
    }
  `;
