import React from "react";
import { useEffect } from "react";
import { getUsers } from "../utils/api";

const Users = ({ users, setUsers }) => {
  useEffect(() => {
    getUsers().then((userFromApi) => {
      const { users } = userFromApi;
      setUsers(users);
    });
  }, [setUsers]);
  return (
    <div className="full-screen-scroll">
      <ul className="reviews-list">
        {users.map((user) => {
          return <li key={user.user_id}>USER: {user.user_id}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
