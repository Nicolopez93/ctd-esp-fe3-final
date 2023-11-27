import React, { useEffect } from 'react'
import Card from '../Components/Card/Card'
import { useContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, data: apiData } = useContextGlobal();

    useEffect(() => {
      console.log(apiData);
    }, [])
  return (
    <main className={`home ${theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
      {apiData.map(({ id, name, username }) => (
          <Card key={id} id={id} name={name} username={username} />
        ))}     
      </div>
    </main>
  )
}

export default Home