import data from './data/data';

import {
  REMOVE_ITEM,
  EDIT_ITEM,
  ADD_ITEM,
  MODAL_CLOSE,
  MODAL_OPEN
} from './actions';

const initialState = {
  isModalOpen: false,
  modalType: '',
  items: data,
  item: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        item: null,
        isModalOpen: false
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload.item, ...state.items]
      };
    case EDIT_ITEM:
      let oldItem = state.items.filter(item => item.id === action.payload.id);
      oldItem = action.payload.itemContent;
      const oldItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      oldItem.id = oldItem.id + Math.random();
      const updatedItems = [...state.items];
      updatedItems.splice(oldItemIndex, 1, oldItem);
      return {
        ...state,
        items: updatedItems
      };
    case MODAL_OPEN:
      return {
        ...state,
        item: state.items.filter(item => item.id === action.payload.id),
        isModalOpen: true,
        modalType: action.payload.type
      };
    case MODAL_CLOSE:
      return { ...state, item: null, isModalOpen: false };
    default:
      return state;
  }
};

export default rootReducer;
