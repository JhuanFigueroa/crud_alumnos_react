import React, {useContext, useEffect} from "react";
import { Alert } from "./Alert";
import { Message } from "./Message";
import "../css/ListUsers.css";
import { Link } from "react-router-dom";
import { useInitialState} from "../hooks/useInitialState";


function ListUsers(props) {
  const state = useInitialState();

  const alumnos=state.alumnos;
  const message=state.message;
  const [listaAlumnos, setAlumnos] = React.useState([]);

  const [user, setUser] = React.useState("");
  const [id, setId] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [mostrar, setMostrar] = React.useState(false);

  const mostrarAlerta = (user, id) => {
    setOpenModal(true);
    setId(id);
    setUser(user);
  };

useEffect(() =>{
  setAlumnos(alumnos)
},[alumnos])

  return (
    <div className="contenedor">
      <h2>Lista de alumnos</h2>

    {!!message &&(
        <Message message={message}/>
    )}

      <table border={1}>
        <thead>
        <th>Matricula</th>
        <th>Nombre</th>
        <th>Carrera</th>
        <th>Foto</th>
        </thead>
        <tbody>
        {alumnos.map(alumno=>(
            <tr key={alumno.id}>
              <td  > {alumno.id}</td>
              <td >{alumno.nombre}</td>
              <td >{alumno.carrera}</td>
              <td >{alumno.foto && <img src={alumno.foto} alt="Imagen seleccionada" />}</td>
              <td > <Link className="btn-editar" to={`/edit/${alumno.id}`}>E</Link></td>
              <td className="btn-eliminar"  onClick={() =>
                  mostrarAlerta(alumno.nombre ,alumno.id)
              }>D</td>
            </tr>
        ))}
        </tbody>
      </table>

      {!!openModal && (
        <Alert
          id={id}
          user={user}
          setOpenModal={setOpenModal}
          setMostrar={setMostrar}
          state={state}
        ></Alert>
      )}
    </div>
  );
}

export { ListUsers };
