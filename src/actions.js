export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export const MODAL_CLOSE = 'MODAL_CLOSE';
export const MODAL_OPEN = 'MODAL_OPEN';

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id
    }
  };
};

export const editItem = (id, itemContent) => {
  return {
    type: EDIT_ITEM,
    payload: {
      id,
      itemContent
    }
  };
};

export const addItem = itemContent => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: ADD_ITEM,
    payload: {
      item: {
        ...itemContent,
        id: getId()
      }
    }
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};

export const openModal = (id = null, type) => {
  return {
    type: MODAL_OPEN,
    payload: {
      id,
      type
    }
  };
};
