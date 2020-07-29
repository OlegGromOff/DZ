import { ADD_TO_LIST, DELETE_FROM_LIST } from '../../App.js';

export const addToList = (hero) => {
  return {
    type: ADD_TO_LIST,
    payload: {
      hero,
    },
  };
};

export const removeFromList = (id) => {
  return {
    type: DELETE_FROM_LIST,
    payload: {
      id,
    },
  };
};