export const removeItem = id => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id
    }
  };
};

export const editItem = (id, itemContent) => {
  return {
    type: 'EDIT_ITEM',
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
    type: 'ADD_ITEM',
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
    type: 'MODAL_CLOSE'
  };
};

export const openModal = (id = null) => {
  return {
    type: 'MODAL_OPEN',
    payload: {
      id
    }
  };
};
