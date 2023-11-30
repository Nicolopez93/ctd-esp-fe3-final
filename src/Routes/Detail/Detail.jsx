import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../../utils/global.context';
import './detail.css';

const Detail = () => {

  const {id}  = useParams();
  const { state, dispatch } = useContextGlobal();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        dispatch({ type: 'SET_DETAIL', payload: res.data });
      })
      .catch((error) => {
        console.error('Error fetching dentist details:', error);
      });
  }, [url, dispatch]);
  
  return (
    <div className={`detail ${state.theme}`}>
      <h1>Dentista {state.detail && state.detail.id} </h1>
      {state.detail && (
        <>
          <p>Username: {state.detail.name}</p>
          <p>Email: {state.detail.email}</p>
          <p>Phone: {state.detail.phone}</p>
          <p>Website: {state.detail.website}</p>
        </>
      )}
      </div>
  )
}

export default Detail