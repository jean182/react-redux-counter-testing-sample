const initialState = {
  users: [
    {
      name: "Bob",
      age: 27
    },
    {
      name: "Anne",
      age: 18
    },
    {
      name: "Paul",
      age: 15
    },
    {
      name: "Pam",
      age: 30
    },
  ]
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// Selectors

export const usersByAgeSelector = state => {
  return state.userReducer.users.sort((a, b) => a.age - b.age);
}
