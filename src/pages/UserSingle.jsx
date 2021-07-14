import React from "react";
import { useEffect } from "react";
import { getUserById } from "../utils/api";
import { useParams } from "react-router-dom";

const UserSingle = ({ user, setUser }) => {
  const id = useParams();
  useEffect(() => {
    getUserById(id).then((userData) => {
      const { user } = userData;
      setUser(user);
    });
  }, [setUser, id]);

  return (
    <div className="full-screen">
      <ul className="single-user-list">
        <section className="card">
          <h2>{user.username}</h2>
        </section>
      </ul>
    </div>
  );
};

export default UserSingle;
