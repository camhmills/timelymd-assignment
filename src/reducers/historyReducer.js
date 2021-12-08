const initialState = [];

const addCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default addCityReducer;
