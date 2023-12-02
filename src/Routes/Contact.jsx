import React from 'react'
import Form from '../Components/Form/Form'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className={`contact`} style={{textAlign: 'center'}}>
      <h2>¿Querés saber más?</h2>
      <p>Envianos tus preguntas y te contactaremos a la brevedad!</p>
      <Form/>
    </div>
  )
}

export default Contact