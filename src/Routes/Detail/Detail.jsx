import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../../utils/global.context';
import './detail.css';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {id}  = useParams();
  const { theme } = useContextGlobal();
  const [dentist, setDentist] = useState();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(url)
      .then(res => {
        setDentist(res.data);
      })
      .catch(error => {
        console.error('Error fetching dentist details:', error);
      });
  }, [url]);

  const detailClassName = `Detail ${theme}`;
  
  return (
    <div className={detailClassName}>
      <h1>Dentista {dentist && dentist.id} </h1>
      {dentist && (
        <>
          <p>Username: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </>
      )}
      </div>
  )
}

export default Detail