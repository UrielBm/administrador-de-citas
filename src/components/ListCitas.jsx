import Cita from "./Cita";
import PropTypes from "prop-types";
const ListCitas = ({ Arraycitas, callback }) => {
  const handleDelete = (id) => {
    callback(id);
  };
  const titulo =
    Arraycitas.length === 0 ? "Aun No hay Citas" : "Citas Agendadas";
  return (
    <div className="wrapperListCitas">
      <h2>{titulo}</h2>
      <div className="ListCitas">
        {Arraycitas.map((cita) => {
          return <Cita cita={cita} key={cita.id} Delete={handleDelete} />;
        })}
      </div>
    </div>
  );
};
ListCitas.propTypes = {
  Arraycitas: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
};
export default ListCitas;
