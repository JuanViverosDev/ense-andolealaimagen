import Props from "./components/Props";
import Titulo from "./components/Titulo";

function App() {
  // ------------------ Promesas -------------------
  const promisePanceroti = new Promise((resolve, reject) => {
    const panzeroti = false;

    if (panzeroti) {
      resolve("Panzeroti entregado");
    } else {
      reject("Panzeroti no entregado");
    }
  })

  // promisePanceroti
  //   .then((res) => {
  //     function hacerPanzeroti() {
  //       let resultado = 1 + 1;
  //       return resultado;
  //     }
  //     console.log(hacerPanzeroti());
  //   })
  //   .catch((err) => {
  //     console.log(" Err de catch: ", err);
  //   });

  const esperarPanceroti = async () => {
    try {
      console.log("Esperando panzeroti");
      const resultado = await promisePanceroti;
      console.log(resultado);
    } catch (error) {
      console.log("error", error);
    }
  };

  esperarPanceroti();

  console.log(promisePanceroti);

  return (
    <>
      {/* ------------------ Props ------------------- */}
      {/* <Props
        texto="Este texto es enviado desde el componente App.jsx"
        numero={2}
        booleano={true}
        arreglo={[1, 2, 3]}
        objeto={{ nombre: "Juan", edad: 20 }}
        funcion={(num) => num * num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteReact={<Titulo texto="Este texto es enviado desde el componente App.jsx" />}
      /> */}
    </>
  );
}

export default App;
