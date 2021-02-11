import { useState } from "react";
import Button from "./Button";
import Inputs from "./Inputs";
import TextArea from "./TextArea";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
const Formulario = ({ handleSaveDates }) => {
  const [cita, setCita] = useState({
    petName: "",
    propietaryName: "",
    date: "",
    time: "",
    sintomas: "",
  });
  const [error, setError] = useState(false);
  const handleOnChange = (value, name) => {
    setCita({
      ...cita,
      [name]: value,
    });
  };
  const { petName, propietaryName, date, time, sintomas } = cita;
  const handleSubmit = (e) => {
    e.preventDefault();

    // validación
    if (
      petName.trim() === "" ||
      propietaryName.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    //Eliminar status error
    setError(false);
    //Guardando cita
    cita.id = uuidv4();
    handleSaveDates(cita);
    // Reset Form
    setCita({
      petName: "",
      propietaryName: "",
      date: "",
      time: "",
      sintomas: "",
    });
  };
  return (
    <>
      <h2>Formulario</h2>
      {error ? (
        <p className="alerta-error">Son necesarios todos los campos</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="wrapperInputs">
          <Inputs
            title="Nombre de la mascota:"
            type="text"
            name="petName"
            placeholder="nombre de la mascota"
            callback={handleOnChange}
            value={petName}
          />
          <Inputs
            title="Nombre del dueño:"
            type="text"
            name="propietaryName"
            placeholder="nombre del dueño"
            callback={handleOnChange}
            value={propietaryName}
          />
          <Inputs
            title="Fecha a reservar:"
            type="date"
            name="date"
            placeholder="date"
            callback={handleOnChange}
            value={date}
          />
          <Inputs
            title="Hora de la cita:"
            type="time"
            name="time"
            placeholder="time"
            callback={handleOnChange}
            value={time}
          />
          <TextArea
            title="Síntomas"
            name="sintomas"
            callback={handleOnChange}
            value={sintomas}
          />
          <Button text="Registrar" type="Submit" style={`registrar`} />
        </div>
      </form>
    </>
  );
};
Formulario.propTypes = {
  handleSaveDates: PropTypes.func.isRequired,
};
export default Formulario;
