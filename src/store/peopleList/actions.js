import { ADD_LIST } from '../../App.js';

export const addList = (list) => {
  return {
    type: ADD_LIST,
    payload: {
      list,
    },
  };
};