import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [githubUser, setGithubUser] = useState("");
  const [email, setEmail] = useState("");

  const sendInfo = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users/create", {
        githubUser: githubUser,
        email: email,
      })
      .then(() => {
        alert("Se creó satisfactoriamente");
      })
      .catch(() => {
        alert("intenta de nuevo");
      });
  };

  return (
    <div className="App">
      <form className="form">
        <h1 className="title">Formulario de Registro</h1>

        <p className="label">Usuario Github:</p>
        <input
          className="input"
          type="text"
          placeholder="Ingresa un usuario"
          onChange={(event) => setGithubUser(event.target.value)}
        />
        <p className="label">Correo:</p>
        <input
          className="input"
          type="text"
          placeholder="Ingresa un correo"
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="terminos">
          <input type="checkbox" />
          <p className="accept"> Acepto términos y condiciones </p>
        </div>

        <button onClick={(event) => sendInfo(event)} className="registro">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default App;
