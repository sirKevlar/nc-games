import React from "react";
import { useEffect } from "react";
import { getUsers } from "../utils/api";
import { selectProfileUser } from "../utils/utils";
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
        <form className="dropdown">
          <select
            id="user-id"
            onChange={(event) => {
              selectProfileUser(event);
            }}
          >
            {users.map((user) => {
              return (
                <option key={user.username} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
          <button className="button">LET ME IN</button>
        </form>
      </div>
    </div>
  );
};

export default Intro;
