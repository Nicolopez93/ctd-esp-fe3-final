import React from 'react'
import Card from '../Components/Card/Card'
import { useContextGlobal } from "../utils/global.context";

const Home = () => {

  const { state } = useContextGlobal();
  

  return (
    <main className={`home`} >
      <h1>Home</h1>
      <div className='card-grid'>
      {state.data.map(({ id, name, username }) => (
          <Card key={id} id={id} name={name} username={username} />
        ))}     
      </div>
    </main>
  )
}

export default Home