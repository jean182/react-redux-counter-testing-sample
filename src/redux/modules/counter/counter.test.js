import counterReducer from "./counter";

const initialState = {
  counter: 0
};

describe("reducers", () => {
  describe("visualization", () => {
    let updatedState = {};
    it("provides the initial state", () => {
      expect(counterReducer(undefined, {})).toEqual(initialState);
    });

    it("handles INCREMENT action", () => {
      updatedState = {
        counter: 1
      };
      expect(
        counterReducer(
          { ...initialState },
          { type: "INCREMENT" }
        )
      ).toEqual(updatedState);
    });
  });
});
