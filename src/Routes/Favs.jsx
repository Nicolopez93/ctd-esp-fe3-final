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

  return (
    <>
    <div className={`favs ${theme}`}>
      <h1>Dentists Favs</h1>
        <div className="card-grid">
          {favCards.map(({ id, name, username }) => (
          <Card key={id} id={id} name={name} username={username} />
          ))}
        </div>
    </div>
    </>
  );
};

export default Favs;
