import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListCitas from "./components/ListCitas";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("ArrayCitas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [ArrayCitas, setArrayCitas] = useState(citasIniciales);
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("ArrayCitas", JSON.stringify(ArrayCitas));
    } else {
      localStorage.setItem("ArrayCitas", JSON.stringify([]));
    }
  }, [ArrayCitas]);
  const handleSaveDates = (cita) => {
    setArrayCitas([...ArrayCitas, cita]);
  };
  const handleDelete = (id) => {
    const newArrayCitas = ArrayCitas.filter((cita) => cita.id != id);
    setArrayCitas(newArrayCitas);
  };

  return (
    <>
      <h1>Administrador de Pascientes</h1>
      <div className="wrapperCards">
        <div className="wrapperForm">
          <Formulario handleSaveDates={handleSaveDates} />
        </div>
        <div className="wrapperCitas">
          <ListCitas Arraycitas={ArrayCitas} callback={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
