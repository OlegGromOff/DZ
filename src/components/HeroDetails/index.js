import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addToList } from "../../store/favoriteList/actions";
import PropTypes from "prop-types";

function HeroDetails({ list, addToList, favoriteList }) {
  const params = useParams();
  const user = list.find((item) => item.id === +params.id);
  return user && <Hero list={favoriteList} user={user} addToList={addToList} />;
}

const putStateToProps = (state) => {
  return { list: state.peopleList.list, favoriteList: state.favoriteList.list };
};

const putActionsToProps = { addToList };

export default connect(putStateToProps, putActionsToProps)(HeroDetails);

HeroDetails.propTypes = {
  list: PropTypes.array,
  addList: PropTypes.func,
};

export function Hero({ list, user, addToList }) {
  const { gender, name, image, species, location, id } = user;

  return (
    <>
      <div className="person">
        <img src={image} alt="avatar" />
        <h4>{name}</h4>
        <div>ID: {id}</div>
        <div> Gender: {gender}</div>
        <div>Species: {species}</div>
        <div>Location: {location.name}</div>
      </div>
      <button className="addBtn"
        onClick={() => {
          const isInList = list.find((item) => (item.id = user.id));
          !isInList && addToList(user);
        }}
      >
        Add to Favorite!
      </button>
    </>
  );
}
Hero.propTypes = {
  user: PropTypes.object.isRequired,
  addToList: PropTypes.func.isRequired,
};