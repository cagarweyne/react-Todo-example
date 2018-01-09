import { ADD_ITEM, DELETE_ITEM, COMPLETE, INCOMPLETE } from './constants';

let nextId = 3;

export const initialState = {
  items: [
    { id: 1, content: 'Make sure items are completeable', completed: false },
    { id: 2, content: 'Add filters (Use HOC)', completed: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        id: nextId++,
        content: action.content,
        completed: false,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };

    case COMPLETE:
      return {
      ...state,
        items: state.items.map((item, i) => item.id === action.id ? {...item, completed: true} : item )
      };

    case INCOMPLETE:
      return state =  {
        ...state,
        items: state.items.map((item, i) => item.id === action.id ? {...item, completed: false} : item )
      };

    default:
      return state;
  }
};

export default reducer;
