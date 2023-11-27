import React from 'react'
import Form from '../Components/Form/Form'
import { useContextGlobal } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContextGlobal();
  return (
    <div className={`contact ${theme}`}>
      <h2>¿Quiere saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact