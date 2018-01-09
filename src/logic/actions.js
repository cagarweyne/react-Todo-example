import { ADD_ITEM, DELETE_ITEM, COMPLETE, INCOMPLETE } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = id => {
  return { type: DELETE_ITEM, id }
};

export const complete = id => {
  return {
    type: COMPLETE, id
  }
};

export const inComplete = id => {
  return {
    type: INCOMPLETE, id
  }
};