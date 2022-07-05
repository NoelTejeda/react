// importamos react del paquete react
import React from "react";

//componente funcional
export function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/Emma Bostian.png")}
        alt="Emma Bostian" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eos officiis explicabo error illo dolore. Animi sint, deserunt doloribus quidem maiores cum libero cumque magni necessitatibus ea repudiandae quis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, quo mollitia sint molestiae molestias nihil explicabo deleniti dolorum eveniet quas.</p>

      </div>
    </div>
  );
}

//export default Testimonio;
//ver en notas la diferencia entre las exportaciones e importaciones nombradas y por defecto linea 257-282

/* dentro de los paréntesis del return describimos con JSX la estructura del componente */

/* para incluir una IMAGEN no basta con src y la ruta, en react, es necesario colocarlo entre llaves y agregar REQUIRE ó también se puede realizar mediante una importación (import)*/

