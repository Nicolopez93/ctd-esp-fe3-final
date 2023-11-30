const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA_API":
      return { ...state, data: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      case "ADD_FAV":
        return { ...state, favlist :[...state.favlist, action.payload] };
      case "REMOVE_FAV":
        return { ...state, deletelist : state.favlist.filter((item) => item.id !== action.payload.id) };
      case "SET_DETAIL":
        return { ...state, detail: action.payload };
        default:
      return state;
  }
};

export default reducer;
