import { ADD_LIST } from '../../App.js';

const defaultState = {
  list: null,
};

const peopleList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        list: action.payload.list,
      };

    default:
      return state;
  }
};

export default peopleList;