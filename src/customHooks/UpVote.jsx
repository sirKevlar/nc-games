import { useEffect, useState } from "react";

const UpVote = (actualVote = 0) => {
  const [vote, setVote] = useState(actualVote);
  console.log(actualVote);

  useEffect(() => {
    setVote(actualVote);
  }, [actualVote]);

  const incrementVote = () => {
    setVote((currentVote) => currentVote + 1);
    console.log("VOTE >>>", vote);
  };
  return { vote, incrementVote };
};

export default UpVote;
