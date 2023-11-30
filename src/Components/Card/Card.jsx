import React from "react";
import { Link } from 'react-router-dom';
import imgDoctor from '../../asserts/doctor.jpg';
import './card.css';

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
  
    // Obtener las tarjetas existentes del localStorage
    const existingCards = JSON.parse(localStorage.getItem('favs')) || [];
  
    // Verificar si la tarjeta actual ya está en favoritos
    const isCardInFavs = existingCards.some(card => card.id === id);

    if (!isCardInFavs) {
      const updatedCards = [...existingCards, { id, name, username }];
      localStorage.setItem('favs', JSON.stringify(updatedCards));
      alert('Se agrego la card correctamente a favoritos');
    } else {
      alert('La card ya esta en favoritos');
    }
  }

  const deleteFav = ()=>{
    
    const existingCards = JSON.parse(localStorage.getItem('favs')) || [];

    const updatedCards = existingCards.filter(card => card.id !== id);

    localStorage.setItem('favs', JSON.stringify(updatedCards));

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
        {window.location.pathname === '/home' && (
        <button onClick={addFav} 
        className="favButton">Add fav</button>)}
        {window.location.pathname === '/favs' &&<button onClick={deleteFav} 
        className="favButton">Delete fav</button>}
    </div>
  );
};

export default Card;
