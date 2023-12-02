import React from 'react'
import { Link } from 'react-router-dom';
import { useContextGlobal } from '../../utils/global.context';
import './navBar.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { dispatch} = useContextGlobal();

  const routes = [
    { path: '/home', name: 'Home' },
    { path: '/favs', name: 'Favs' },
    { path: '/contacto', name: 'Contacto' },
  ]


  return (
    <nav className={`navbar`}>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({type: 'TOGGLE_THEME'})}>Cambiar tema</button>
    </nav>
  )
}

export default Navbar