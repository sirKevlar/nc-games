import React from "react";
import { useEffect } from "react";
import { getUsers } from "../utils/api";
// import cooljmessy from "../assets/userIcons/cooljmessy.png";
// import grumpy19 from "../assets/userIcons/grumpy19.png";
import happyamy2016 from "../assets/userIcons/happyamy2016.png";
// import jessjelly from "../assets/userIcons/jessjelly.png";
// import tickle122 from "../assets/userIcons/tickle122.png";
// import weegembump from "../assets/userIcons/weegembump.png";

const Users = ({ users, setUsers }) => {
  useEffect(() => {
    getUsers().then((userFromApi) => {
      const { users } = userFromApi;
      setUsers(users);
    });
  }, [setUsers]);
  console.log(users);
  return (
    <div className="full-screen-scroll">
      <ul className="list">
        {users.map((user) => {
          return (
            <section id="user-card" className="card">
              <li className="users" key={user.username}>
                <div className="card-info">
                  <img
                    className="user-icon"
                    src={happyamy2016}
                    alt="user icon"
                  />
                  <h4 className="usernames">{user.username}</h4>
                </div>
              </li>
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
