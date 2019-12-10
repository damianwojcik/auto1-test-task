const initialStateItems = [
  {
    id: '1',
    firstname: 'Damian',
    lastname: 'Wójcik',
    avatarUrl: 'https://via.placeholder.com/150',
    email: 'khamian@gmail.com',
    phone: '792225950',
    hasPremium: true,
    bids: [
      {
        id: '1',
        carTitle: 'Fiat',
        amount: 521,
        created: '09-12-2019'
      },
      {
        id: '2',
        carTitle: 'Opel',
        amount: 123,
        created: '09-12-2019'
      },
      {
        id: '3',
        carTitle: 'Porsche',
        amount: 456,
        created: '09-12-2019'
      }
    ]
  },
  {
    id: '2',
    firstname: 'Adam',
    lastname: 'Hash',
    avatarUrl: 'https://via.placeholder.com/150',
    email: 'adamhash@gmail.com',
    phone: '796665950',
    bids: [
      {
        id: '4',
        carTitle: 'Seicento',
        amount: 231,
        created: '09-12-2019'
      },
      {
        id: '5',
        carTitle: 'Opel',
        amount: 322,
        created: '09-12-2019'
      }
    ]
  }
];

export default initialStateItems;
