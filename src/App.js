import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [githubUser, setGithubUser] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [terms, setTerms] = useState(false);

  const sendInfo = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users/create", {
        githubUser: githubUser,
        email: email,
      })
      .then(() => {
        alert("Se creó satisfactoriamente");
        axios.get("http://localhost:8000/users/list").then((response) => {
          setUsers(response.data);
        });
      })
      .catch(() => {
        alert("Intenta de nuevo");
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
          <input
            type="checkbox"
            onChange={(event) => setTerms(event.target.checked)}
          />
          <p className="accept"> Acepto términos y condiciones </p>
        </div>

        <button
          disabled={!terms}
          onClick={(event) => sendInfo(event)}
          className="registro"
        >
          Registrarse
        </button>
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
