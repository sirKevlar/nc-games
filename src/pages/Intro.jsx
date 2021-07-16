import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../utils/api";
import gamesLogo from "../assets/logos/gamesLogoSimple.png";
import { UserContext } from "../contexts/UserContext";

const Intro = ({ users, setUsers }) => {
  const { setProfileUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((userFromApi) => {
      const { users } = userFromApi;
      setUsers(users);
    });
  }, [setUsers]);

  return (
    <div className="full-viewport">
      <img class="logo" src={gamesLogo} alt="games logo" />
      <div className="user-select">
        <h3>Select your user...</h3>
        <form className="dropdown">
          <select
            id="user-id"
            onChange={(event) => {
              const newUser = event.target.value;
              setProfileUser(newUser);
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
          <Link className="no-styling" to={`/home`}>
            <button className="button">LET ME IN</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Intro;
