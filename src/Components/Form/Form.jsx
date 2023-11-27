import React from "react";
import './form.css';

// modifique el css para que quede mas prolijo 

const Form = () => {
  const [formData, setFormData] = React.useState({
    nombreCompleto: "",
    email: "",
    texto: "",
  })
  const [error , setError] = React.useState("")
  const handelChange = (e) => {
    setFormData({
      ...formData,[e.target.name]: e.target.value,
    });
  }
  const handelSubmite = (e) => {
    e.preventDefault();
    if (formData.nombreCompleto.length <= 5){
      setError("Por favor ingrese un nombre valido con una longitud mayor a 5");
      return;
    } 
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Por favor, ingrese un correo electrónico válido.");
      return;
    }
    setError ("");

    console.log("Formulario enviado con exito : ", formData);
    alert(`Gracias ${formData.nombreCompleto}, te contactaremos vía mail`);
  }

  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={handelSubmite}>
      <label>
        Nombre Completo :
        <input type="text" name="nombreCompleto" value={formData.nombreCompleto} onChange={handelChange} />
      </label>
      <br/>
      <label>
        Email :
        <input type="email" name="email" value={formData.email} onChange={handelChange} />
      </label>
      <br/>
      <label>
          Envianos tu preguntas:
          <textarea name="texto" value={formData.texto} onChange={handelChange}/>
        </label>
      <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Form;
