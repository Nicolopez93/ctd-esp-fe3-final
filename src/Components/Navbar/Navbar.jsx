import React ,{useContext}from 'react'
import { Link } from 'react-router-dom';
import { useContextGlobal } from '../utils/global.context'
import './navBar.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, toggleTheme} = useContextGlobal();

  const routes = [
    { path: '/home', name: 'Home' },
    { path: '/favs', name: 'Favs' },
    { path: '/contact', name: 'Contact' },
  ]


  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar