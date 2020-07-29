import { createStore } from "redux";
import { combineReducers } from "redux";
import peopleList from "./peopleList/reducers";
import favoriteList from "./favoriteList/reducers";

const store = createStore(
  combineReducers( // добавляю сразу несколько редьюсеров
    {
      peopleList,
      favoriteList,
    }
  )
);
export default store;