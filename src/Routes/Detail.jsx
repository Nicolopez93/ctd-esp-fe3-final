import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id }  = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentista, setDentista] = useState();

  useEffect(() => {
    const dentistaEncontrado = state.dentista.find(dentista => dentista.id === id);
    if (dentistaEncontrado) { 
      setDentista(dentistaEncontrado);
    }
  }, [state.dentista, id]);

  if(!dentista) return <p className='Detail NotFound'>Dentista No encontrado</p>

  return (
    <div className='Detail'>
      <h1>Detail {dentista.id} </h1>
      <p>Username: {dentista.name}</p>
      <p>Email: {dentista.email}</p>
      <p>Phone: {dentista.phone}</p>
      <p>Website: {dentista.website}</p>
      </div>
  )
}

export default Detail