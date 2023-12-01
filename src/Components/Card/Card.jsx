import React from "react";
import { Link } from 'react-router-dom';
import imgDoctor from '../../assets/doctor.jpg';
import './card.css';
import { useContextGlobal } from "../../utils/global.context";
const Card = ({ name, username, id }) => {

  const {state, dispatch} = useContextGlobal();

  const addFav = () => {
    const isCardInFavs = state.favlist.some(card => card.id === id);

    if (!isCardInFavs) {
      dispatch({ type: 'ADD_FAV', payload: { id, name, username } });
      alert('La tarjeta se agregó correctamente a tus favoritos!');
    } else {
      alert('La tarjeta ya se encuentra añadida a tus favoritos!');
    }
  }

  const deleteFav = () => {
    dispatch({ type: 'REMOVE_FAV', payload: { id, name, username } });
    alert('La tarjeta se ha eliminado correctamente de tus favoritos!');
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src={imgDoctor} alt="doctor" />
        <p>Nombre: {name}</p>
        <p>Usuario: {username}</p>
        <p>ID: {id}</p>
      </Link>
      {(window.location.pathname === '/home'|| window.location.pathname === '/') && (
        <button onClick={addFav} className="favButton">Agregar a favoritos</button>
      )}
      {window.location.pathname === '/favs' && (
        <button onClick={deleteFav} className="favButton">Eliminar de favoritos</button>
      )}
    </div>
  );
};


export default Card;
