import React, { useEffect} from "react";
import Card from "../Components/Card/Card";
import { useContextGlobal } from "../utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state, dispatch } = useContextGlobal();

  useEffect(() => {

    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    dispatch({ type: 'SET_FAVS', payload: storedFavs });
  }, [dispatch]);

  const handleDelete = (id) => {

    dispatch({ type: 'REMOVE_FAV', payload: { id } });
    alert('Se eliminó el Dentista de favoritos');
  }

  return (
    <>
    <div className={`favs`}>
      <h1>Dentistas Favoritos</h1>
        <div className="card-grid">
          {state.favlist.map(({ id, name, username }) => (
          <Card key={id} id={id} name={name} username={username} onDelete={() => handleDelete(id)}/>
          ))}
        </div>
    </div>
    </>
  );
};

export default Favs;
