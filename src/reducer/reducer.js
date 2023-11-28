

export const initialState = { theme: "light", data: [] };

export const SET_THEME = "SET_THEME";
export const SET_DATA_API = "SET_DATA_API";
export const TOGGLE_THEME = "TOGGLE_THEME";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_DATA_API:
      return { ...state, data: action.payload };
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export default reducer;
