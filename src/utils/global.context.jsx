import reducer, { initialState, SET_DATA_API, TOGGLE_THEME } from '../reducer/reducer';
import React, { createContext, useReducer, useContext, useMemo, useEffect } from 'react';

export const ContextGlobal = createContext(initialState);

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