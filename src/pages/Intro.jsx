import React from "react";
import { useEffect } from "react";
import { getUsers } from "../utils/api";
import gamesLogo from "../assets/logos/gamesLogoSimple.png";

const Intro = ({ users, setUsers }) => {
  useEffect(() => {
    getUsers().then((userFromApi) => {
      const { users } = userFromApi;
      setUsers(users);
    });
  }, [setUsers]);
  return (
    <div className="full-viewport">
      <img src={gamesLogo} alt="games logo" />
      <div className="user-select">
        <h3>Select your user...</h3>
        <div className="dropdown">
          <select name="user-id">
            {users.map((user) => {
              return <option value={user.username}>{user.username}</option>;
            })}
          </select>
          <button className="button">LET ME IN</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
