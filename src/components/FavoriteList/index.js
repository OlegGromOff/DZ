import React from "react";
import { connect } from "react-redux";
import FavoriteLists from "./FavoriteLists";
import { removeFromList } from "../../store/favoriteList/actions";
import PropTypes from "prop-types";

function FavoriteListContainer({ list, removeFromList }) {
  return <FavoriteLists removeFromList={removeFromList} list={list.list} />;
}

const putStateToProps = (state) => { // передаю в пропс состояние  моего store и слежу за его изменением
  return { list: state.favoriteList };
};

const putActionsToProps = { removeFromList };

export default connect( // генерирую контейнеры, воспользовавшись функцией connect()  (аналог store.subscribe() )
  putStateToProps,
  putActionsToProps
)(FavoriteListContainer);

FavoriteListContainer.propTypes = {
  list: PropTypes.object,
  removeFromList: PropTypes.func.isRequired,
};