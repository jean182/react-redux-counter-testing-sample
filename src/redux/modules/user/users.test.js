import { usersByAgeSelector } from "./users";

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

describe("selectors", () => {
  const state = {
    userReducer: {
      ...initialState,
    }
  };
  const orderedUsers = [
    {
      name: "Paul",
      age: 15
    },
    {
      name: "Anne",
      age: 18
    },
    {
      name: "Bob",
      age: 27
    },
    {
      name: "Pam",
      age: 30
    },
  ];
  describe("#usersByAgeSelector", () => {
    it("sorts the users based on the age attribute", () => {
      expect(usersByAgeSelector(state)).toEqual(orderedUsers);
    });
  });
});
