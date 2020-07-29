import React from "react";
import { useHistory } from "react-router-dom";

export default function PeopleListBtn({ title, path }) {
  const history = useHistory();
  const onClick = () => {
    history.push(path);
  };
  return (
    <button
      style={{
        margin: "15px",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}