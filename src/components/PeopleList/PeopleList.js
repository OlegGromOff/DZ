import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export default function PeopleList({ list }) {
  const history = useHistory();

  const heroInfo = (item) => {
    history.push(`/herodetails/${item.id}`); //генерирую урл исходя из id героя
  };
  return (
    <>
      <h3>People List</h3>
      <ul >
        {list.map((item) => (
          <li
            onClick={() => {
              heroInfo(item); // перехожу по новосозданному урлу
            }}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
PeopleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};