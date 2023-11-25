import React, { createContext, useReducer, useContext, useMemo, useEffect } from 'react';

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(initialState);

const SET_THEME = "SET_THEME";
const SET_DATA_API = "SET_DATA_API";
const TOGGLE_THEME = "TOGGLE_THEME";

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

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        dispatch({ type: SET_DATA_API, payload: data });
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };
    fetchData();
  }, []);

  const contextValue = useMemo(() => ({
    theme: state.theme,
    data: state.data,
    toggleTheme: () => dispatch({ type: TOGGLE_THEME }),
  }), [state.theme, state.data]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
