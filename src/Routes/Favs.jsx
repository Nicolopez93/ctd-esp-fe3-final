import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favCards, setFavCards] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavCards(storedFavs);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favCards.map(({ id, name, username }) => (
        <Card key={id} id={id} name={name} username={username} />
        ))}
      </div>
    </>
  );
};

export default Favs;
