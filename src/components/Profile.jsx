import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
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

const Profile = () => {
  const { profileUser } = useContext(UserContext);
  return (
    <div>
      <img
        className="small-icon"
        src={userIcons[profileUser]}
        alt="user icon"
      />
      <h4>{profileUser}</h4>
      <button className="button">SIGN OUT</button>
    </div>
  );
};

export default Profile;
