import React from 'react'
import Form from '../Components/Form/Form'
import { useContextGlobal } from '../utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useContextGlobal();
  return (
    <div className={`contact ${state.theme}`}>
      <h2>¿Quiere saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact