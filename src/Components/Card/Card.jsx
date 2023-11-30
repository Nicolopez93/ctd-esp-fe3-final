import React from "react";
import { Link } from 'react-router-dom';
import imgDoctor from '../../asserts/doctor.jpg';
import './card.css';
import { useContextGlobal } from "../../utils/global.context";
const Card = ({ name, username, id }) => {

  const {state, dispatch} = useContextGlobal();

  const addFav = () => {
    const isCardInFavs = state.favlist.some(card => card.id === id);

    if (!isCardInFavs) {
      dispatch({ type: 'ADD_FAV', payload: { id, name, username } });
      alert('Se agregó la tarjeta correctamente a favoritos');
    } else {
      alert('La tarjeta ya está en favoritos');
    }
  }

  const deleteFav = () => {
    dispatch({ type: 'REMOVE_FAV', payload: { id, name, username } });
    alert('Se eliminó la tarjeta de favoritos');
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src={imgDoctor} alt="doctor" />
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>ID: {id}</p>
      </Link>
      {(window.location.pathname === '/home'|| window.location.pathname === '/') && (
        <button onClick={addFav} className="favButton">Add fav</button>
      )}
      {window.location.pathname === '/favs' && (
        <button onClick={deleteFav} className="favButton">Delete fav</button>
      )}
    </div>
  );
};


export default Card;
