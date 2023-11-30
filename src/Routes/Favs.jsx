import React, { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import { useContextGlobal } from "../utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favCards, setFavCards] = useState([]);
  const { theme } = useContextGlobal();


  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavCards(storedFavs);
  }, []);

  const handeleDelete = (id) => {
    // Filtrar las tarjetas para eliminar la tarjeta con el id
    const updatedCards = favCards.filter(card => card.id !== id);
    // Actualizar el estado favCards con las tarjetas filtradas
    setFavCards(updatedCards);
     // Actualizar el almacenamiento local con las tarjetas filtradas
    localStorage.setItem('favs', JSON.stringify(updatedCards));
    alert('Se eliminó el Dentista de favoritos');
  }

  return (
    <>
    <div className={`favs ${theme}`}>
      <h1>Dentistas Favoritos</h1>
        <div className="card-grid">
          {favCards.map(({ id, name, username }) => (
          <Card key={id} id={id} name={name} username={username} onDelete={() => handeleDelete(id)}/>
          ))}
        </div>
    </div>
    </>
  );
};

export default Favs;
