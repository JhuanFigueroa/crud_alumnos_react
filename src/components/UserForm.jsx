import React, {useRef} from 'react';
import axios from 'axios';
import '../css/UserForm.css'
import {useNavigate} from 'react-router-dom';
import {useInitialState} from "../hooks/useInitialState";


function UserForm() {

    const state= useInitialState();
    const alumnos=state.alumnos;

    const [imagenUrl, setImagenUrl] = React.useState(null);

    function handleImagenChange(event) {
        const archivo = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setImagenUrl(event.target.result);
        };
        console.log(imagenUrl)
        reader.readAsDataURL(archivo);
    }

    let navigate = useNavigate();

    const form = useRef(null);


    const agregarUsuario =  (e) => {
        e.preventDefault();
        const data = new FormData(form.current);
        const nuevoAlumno={
            "id": data.get('id'),
            "nombre": data.get('nombre'),
            "carrera": data.get('carrera'),
            "foto":imagenUrl,
        }

        const newList=[...alumnos,nuevoAlumno];
        console.log(newList)
        state.setAlumnos(newList);

        navigate(`/`);

    }


    return (

        <div className="contenedor">
            <form className='form-crear' onSubmit={agregarUsuario} ref={form}>

                <label htmlFor="id">Clave:</label>
                <input type="text" name="id"
                />
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre"
                />

                <label htmlFor="carrera">Carrera:</label>
                <select name="carrera">
                    <option value="">--Seleccione--</option>
                    <option value="Ing sistemas">Ing sistemas</option>
                    <option value="Ing Mecatronica">Ing Mecatronica</option>
                    <option value="Ing Civil">Ing Civil</option>
                    <option value="Ing Quimica">Ing Quimica</option>
                    <option value="Lic. Administracion">Lic. Administracion</option>
                </select>

                <label htmlFor="foto">
                    Foto:

                </label>
                <input type="file" name="foto" onChange={handleImagenChange} />

                <button type='submit'>Agregar</button>
            </form>

        </div>

    );
}

export {UserForm};