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
    <div className={`detail`}>
      <h1>Dentista N°{state.detail && state.detail.id} </h1>
      {state.detail && (
        <>
<table className='table-style'>
  <tbody>
    <tr>
      <td>Nombre:</td>
      <td>{state.detail.name}</td>
    </tr>
    <tr>
      <td>Email:</td>
      <td>{state.detail.email}</td>
    </tr>
    <tr>
      <td>Teléfono:</td>
      <td>{state.detail.phone}</td>
    </tr>
    <tr>
      <td>Sitio web:</td>
      <td>{state.detail.website}</td>
    </tr>
  </tbody>
</table>
        </>
      )}
      </div>
  )
}

export default Detail