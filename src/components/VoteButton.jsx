import React from "react";
import UpVote from "../customHooks/UpVote";

const VoteButton = () => {
  return (
    <div>
      <button class="button" onClick={UpVote}>
        UP VOTE
      </button>
    </div>
  );
};

export default VoteButton;
