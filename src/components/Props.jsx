import React from "react";

const Props = (props) => {
  const {
    texto,
    numero,
    booleano,
    arreglo,
    objeto,
    funcion,
    elementoReact,
    componenteReact,
  } = props;

  console.log("Este console es llamado desde el componente props", arreglo);

  return <div></div>;
};

export default Props;
