import { useState } from "react";
import "./App.css";

function App() {
  const users = [
    {
      githubUser: "Alejandra",
      email: "alejandra_lorduy@hotmail.com",
    },
    {
      githubUser: "Laura",
      email: "laurabernalc@gmail.com",
    },
    {
      githubUser: "Felipe",
      email: "fherrerav123@gmail.com",
    },
    {
      githubUser: "Sonia",
      email: "soniamatilde26@hotmail.com",
    },
  ];

  return (
    <div className="App">
      <form className="form">
        <h1 className="title">Formulario de Registro</h1>
        <p className="label">Usuario Github:</p>
        <input className="input" type="text" placeholder="Ingresa un usuario" />
        <p className="label">Correo:</p>
        <input className="input" type="text" placeholder="Ingresa un correo" />
        <div className="terminos">
          <input type="checkbox" />
          <p className="accept"> Acepto términos y condiciones </p>
        </div>

        <button className="registro">Registrarse</button>
      </form>

      <div className="card">
        {users.map((user) => (
          <div className="userCard">
            <p>Usuario Github: {user.githubUser}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
