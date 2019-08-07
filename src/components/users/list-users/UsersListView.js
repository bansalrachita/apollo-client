import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {GET_USERS} from '../../../queries';

export const UsersListView = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log('data: ', data);
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
};
