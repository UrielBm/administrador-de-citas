import Button from "./Button";
import PropTypes from "prop-types";
const Cita = ({ cita, Delete }) => {
  const handleDelete = (id) => {
    Delete(id);
  };
  const { petName, propietaryName, date, time, sintomas, id } = cita;
  return (
    <div className="cita">
      <div className="dataGeneral">
        <p>
          Nombre Mascota:<span>{petName}</span>
        </p>
        <p>
          Nombre Cliente:<span>{propietaryName}</span>
        </p>
      </div>
      <div className="wrapperDate">
        <p>
          Fecha:<span>{date}</span>
        </p>
        <p>
          Hora:<span>{time}</span>
        </p>
      </div>
      <div className="wrapperSintomas">
        <p>
          Sintomas:<span>{sintomas}</span>
        </p>
      </div>
      <div className="wrapperButton">
        <Button
          type="button"
          text="Eliminar"
          style={`borrar`}
          id={id}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};
Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  Delete: PropTypes.func.isRequired,
};
export default Cita;
