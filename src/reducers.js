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
          carTitle: 'Fiat Panda',
          amount: 180,
          created: '1576048176000'
        },
        {
          id: '2',
          carTitle: 'Skoda Fabia',
          amount: 200,
          created: '1576393776000'
        },
        {
          id: '3',
          carTitle: 'Porsche Cayenne',
          amount: 450,
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
          carTitle: 'Fiat Seicento',
          amount: 100,
          created: '1572764976000'
        },
        {
          id: '5',
          carTitle: 'Opel Corsa',
          amount: 250,
          created: '1572937776000'
        }
      ]
    },
    {
      id: '3',
      firstname: 'Dam',
      lastname: 'Woj',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/180?s=460&v=4',
      email: 'damwoj@gmail.com',
      phone: '792214950',
      hasPremium: true,
      bids: [
        {
          id: '1',
          carTitle: 'Fiat Panda',
          amount: 180,
          created: '1576048176000'
        },
        {
          id: '2',
          carTitle: 'Skoda Fabia',
          amount: 200,
          created: '1576393776000'
        }
      ]
    },
    {
      id: '4',
      firstname: 'Adam',
      lastname: 'Driver',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/18?s=460&v=4',
      email: 'mikey@gmail.com',
      phone: '796665950',
      bids: [
        {
          id: '4',
          carTitle: 'Fiat Punto',
          amount: 100,
          created: '1572764976000'
        },
        {
          id: '5',
          carTitle: 'Matiz',
          amount: 250,
          created: '1572937776000'
        }
      ]
    },
    {
      id: '5',
      firstname: 'Danny',
      lastname: 'Abram',
      avatarUrl:
        'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg',
      email: 'abramov@gmail.com',
      phone: '796665950',
      bids: [
        {
          id: '4',
          carTitle: 'Fiat Seicento',
          amount: 100,
          created: '1572764976000'
        },
        {
          id: '5',
          carTitle: 'Opel Corsa',
          amount: 250,
          created: '1572937776000'
        }
      ]
    },
    {
      id: '6',
      firstname: 'Adam',
      lastname: 'Johnes',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/181?s=460&v=4',
      email: 'ajon@gmail.com',
      phone: '796665950',
      bids: [
        {
          id: '4',
          carTitle: 'Fiat Punto',
          amount: 100,
          created: '1572764976000'
        },
        {
          id: '5',
          carTitle: 'Matiz',
          amount: 250,
          created: '1572937776000'
        }
      ]
    },
    {
      id: '7',
      firstname: 'Alfred',
      lastname: 'Nobel',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/18193?s=460&v=4',
      email: 'anobel@gmail.com',
      phone: '7921125950',
      hasPremium: true,
      bids: [
        {
          id: '1',
          carTitle: 'Fiat Panda',
          amount: 180,
          created: '1576048176000'
        },
        {
          id: '2',
          carTitle: 'Skoda Fabia',
          amount: 200,
          created: '1576393776000'
        },
        {
          id: '3',
          carTitle: 'Porsche Cayenne',
          amount: 450,
          created: '1575356976000'
        }
      ]
    },
    {
      id: '8',
      firstname: 'Ernest',
      lastname: 'Abram',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/18143?s=460&v=4',
      email: 'erbram@gmail.com',
      phone: '796665950',
      bids: [
        {
          id: '4',
          carTitle: 'Fiat Seicento',
          amount: 100,
          created: '1572764976000'
        },
        {
          id: '5',
          carTitle: 'Opel Corsa',
          amount: 250,
          created: '1572937776000'
        }
      ]
    },
    {
      id: '9',
      firstname: 'Daniel',
      lastname: 'Cis',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/1808193?s=460&v=4',
      email: 'cis@gmail.com',
      phone: '791225950',
      hasPremium: true,
      bids: [
        {
          id: '1',
          carTitle: 'Fiat Panda',
          amount: 180,
          created: '1576048176000'
        },
        {
          id: '2',
          carTitle: 'Skoda Fabia',
          amount: 200,
          created: '1576393776000'
        },
        {
          id: '3',
          carTitle: 'Porsche Cayenne',
          amount: 450,
          created: '1575356976000'
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
    case 'EDIT_ITEM':
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
    case 'MODAL_OPEN':
      return {
        ...state,
        item: state.items.filter(item => item.id === action.payload.id),
        isModalOpen: true
      };
    case 'MODAL_CLOSE':
      return { ...state, item: null, isModalOpen: false };
    default:
      return state;
  }
};

export default rootReducer;
