import React from "react";
import { useEffect } from "react";
import { getUsers } from "../utils/api";
import { Link } from "react-router-dom";
import cooljmessy from "../assets/userIcons/cooljmessy.png";
import grumpy19 from "../assets/userIcons/grumpy19.png";
import happyamy2016 from "../assets/userIcons/happyamy2016.png";
import jessjelly from "../assets/userIcons/jessjelly.png";
import tickle122 from "../assets/userIcons/tickle122.png";
import weegembump from "../assets/userIcons/weegembump.png";

const userIcons = {
  cooljmessy: cooljmessy,
  grumpy19: grumpy19,
  happyamy2016: happyamy2016,
  jessjelly: jessjelly,
  tickle122: tickle122,
  weegembump: weegembump,
};

const Users = ({ users, setUsers }) => {
  useEffect(() => {
    getUsers().then((userFromApi) => {
      const { users } = userFromApi;
      setUsers(users);
    });
  }, [setUsers]);

  return (
    <div className="full-screen-scroll">
      <ul className="user-list">
        {users.map((user) => {
          return (
            <Link
              key={user.username}
              className="no-styling"
              to={`/users/${user.username}`}
            >
              <section id="user-card" className="card">
                <li className="users">
                  <div className="card-info">
                    <img
                      className="small-icon"
                      src={userIcons[user.username]}
                      alt="user icon"
                    />
                    <h4 className="usernames">{user.username}</h4>
                  </div>
                </li>
              </section>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
