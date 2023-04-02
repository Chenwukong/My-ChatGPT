const initialState = {
  texts: [],
  showEmoji: false,
  isLoggedIn: false, // added isLoggedIn state
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return {
        ...state,
        texts: [...state.texts, action.payload],
      };
    case "SHOW_EMOJI":
      return { ...state, showEmoji: !state.showEmoji };
    case "SET_IS_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload }; // set isLoggedIn state
    default:
      return state;
  }
};

export default reducer;
