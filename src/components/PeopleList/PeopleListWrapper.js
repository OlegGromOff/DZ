import React, { useEffect } from "react";
import PeopleList from "./PeopleList";
import { connect } from "react-redux";
import { addList } from "../../store/peopleList/actions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const PeopleListWrapper = ({ list, addList }) => {
  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character/?page=1";
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        addList(data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <>{list ? <PeopleList list={list} /> : "Loading....."}</>;
};

PeopleListWrapper.propTypes = {
  list: PropTypes.array,
  addList: PropTypes.func.isRequired,
};

const putStateToProps = (state) => {
  return { list: state.peopleList.list, id: state.peopleList.id };
};

const putActionsToProps = (dispatch) => {
  return {
    addList: bindActionCreators(addList, dispatch)
  }
};

export default connect(putStateToProps, putActionsToProps)(PeopleListWrapper); //передает внутрь пропса компонента PeopleListWrapper данные из state