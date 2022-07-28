import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="logo-freeCodeCamp-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freeCodeCamp-logo"
          alt="logo freeCodeCamp"
        />
      </div>
      <div className="contenedor-del-contador"></div>
    </div>
  );
}

export default App;

/*  esta es una manera distinta de agregar imagenes sin la forma anterior que ese hizo en testimonio con required
al importar se le coloca un nombre que queramos identificarlo, se le dá la ruta, y luego en src se le coloca el nombre
que se le habia asiganado al importar. */
