// importamos react del paquete react
import React from "react";
import '../style/Testimonio.css';

//componente funcional
export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        // src={require(`../imagenes/Emma Bostian.png`)}
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="Emma Bostian" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> <strong>{props.nombre}</strong> en {props.pais} </p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa} </p>
        <p className="texto-testimonio">"{props.testimonio} "</p>
      </div>
    </div>
  );
}

//export default Testimonio;
//ver en notas la diferencia entre las exportaciones e importaciones nombradas y por defecto linea 257-282

/* dentro de los paréntesis del return describimos con JSX la estructura del componente */

/* para incluir una IMAGEN no basta con src y la ruta, en react, es necesario colocarlo entre llaves y agregar REQUIRE ó también se puede realizar mediante una importación (import)*/

