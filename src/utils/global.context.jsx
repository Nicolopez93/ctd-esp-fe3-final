import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import reducer from '../reducer/reducer'; 

export const ContextGlobal = createContext();

const initialState = {
  data: [],
  theme: 'light',
  favlist: JSON.parse(localStorage.getItem('favlist')) || [],
};
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = 'https://jsonplaceholder.typicode.com/users';
  
  useEffect(() => {
    axios.get(url).then(res => dispatch({ type: "SET_DATA_API", payload: res.data }));
  }, []);

  useEffect(() => {
    localStorage.setItem('favlist', JSON.stringify(state.favlist));
  }, [state.favlist]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);