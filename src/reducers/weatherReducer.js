const initialState = []

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_WEATHER":
            return state;
        default:
            return state;
    }
}

export default weatherReducer;