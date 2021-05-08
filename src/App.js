import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
