import { ADD_TO_LIST, DELETE_FROM_LIST } from '../../App.js';

const defaultState = {
  list: [],
};

const favoriteList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state, // возвращаю предыдущую версию state 
        list: [...state.list, action.payload.hero,], // новая версия state

      };

    case DELETE_FROM_LIST:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }

};

export default favoriteList;