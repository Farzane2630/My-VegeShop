// actionTypes

const getInputValue = "GET_INPUT_VALUE";

// reducer

export function reducer(state = "", action) {
  switch (action.type) {
    case getInputValue: {
      let value = action.payload;
      return { ...state, ...value };
    }
    default:
      return state;
  }
}

// actionCreators

export const getInputValueAction = (value) => {
  return {
    type: getInputValue,
    payload: value,
  };
};
