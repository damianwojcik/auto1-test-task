const initialState = {
  isModalOpen: false,
  items: [
    {
      id: '1',
      firstname: 'Damian',
      lastname: 'Wójcik',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/18085193?s=460&v=4',
      email: 'khamian@gmail.com',
      phone: '792225950',
      hasPremium: true,
      bids: [
        {
          id: '1',
          carTitle: 'Fiat',
          amount: 521,
          created: '1576048176000'
        },
        {
          id: '2',
          carTitle: 'Opel',
          amount: 123,
          created: '1576393776000'
        },
        {
          id: '3',
          carTitle: 'Porsche',
          amount: 456,
          created: '1575356976000'
        }
      ]
    },
    {
      id: '2',
      firstname: 'Dan',
      lastname: 'Abramov',
      avatarUrl:
        'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg',
      email: 'abramov@gmail.com',
      phone: '796665950',
      bids: [
        {
          id: '4',
          carTitle: 'Seicento',
          amount: 231,
          created: '1572764976000'
        },
        {
          id: '5',
          carTitle: 'Opel',
          amount: 322,
          created: '1572937776000'
        }
      ]
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    case 'ADD_ITEM':
      return {
        ...state,
        items: [action.payload.item, ...state.items]
      };
    case 'MODAL_OPEN':
      return { ...state, isModalOpen: true };
    case 'MODAL_CLOSE':
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};

export default rootReducer;
