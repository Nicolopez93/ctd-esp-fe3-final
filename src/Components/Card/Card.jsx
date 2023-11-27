import React from "react";
import { Link } from 'react-router-dom';
import imgDoctor from '../../asserts/doctor.jpg';
import '../Card/card.css';

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

  return (
    <div className="card">
        <Link to={`/dentist/${id}`}>
          <img src={imgDoctor} alt="doctor" />
          <p>Name: {name}</p>
          <p>Username: {username}</p>
          <p>ID: {id}</p>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
