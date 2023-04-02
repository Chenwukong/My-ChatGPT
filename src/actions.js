// actions.js
export const addText = (text) => ({
  type: "ADD_TEXT",
  payload: text,
});

export const toggleEmoji = () => ({
  type: "SHOW_EMOJI",
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: "SET_IS_LOGGED_IN",
  payload: isLoggedIn,
});
