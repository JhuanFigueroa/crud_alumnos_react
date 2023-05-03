import React, {useEffect} from 'react';

import '../css/UserForm.css'

import {useNavigate, useParams} from 'react-router-dom';

import AppContext from '../context/AppContext';
import {useInitialState} from "../hooks/useInitialState";

function EditUser() {

    let navigate = useNavigate();

    const {id} = useParams();

    const state = useInitialState();
    const alumnos = state.alumnos;

    let alumno = alumnos.filter(alumnos => alumnos.id === id);
    alumno = alumno[0];

    const [imagenUrl, setImagenUrl] = React.useState(null);
    const [name, setName] = React.useState(alumno.nombre);
    const [clave, setClave] = React.useState(alumno.id);
    const [carrera, setCarrera] = React.useState(alumno.carrera);

    const actualizarUsuario = async (e) => {
        e.preventDefault();


        const nuevoAlumno = {
            "id": clave,
            "nombre": name,
            "carrera": carrera,
            "foto":imagenUrl,
        }
        state.setAlumnos((elementosAnteriores) =>
            elementosAnteriores.map((elemento) =>
                elemento.id === nuevoAlumno.id ? {...alumno,...nuevoAlumno,foto: imagenUrl || alumno.foto} : elemento

            )
        );
        state.setMessage('Usuario editado');
        navigate(`/`);
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onCarreraChange = (e) => {
        setCarrera(e.target.value);
    }

    const onFotoChange = (url) => {
        setImagenUrl(url);
    }

    function handleImagenChange(event) {
        const archivo = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setImagenUrl(event.target.result);
        };
        console.log(imagenUrl)
        reader.readAsDataURL(archivo);
        onFotoChange(imagenUrl);
    }


    useEffect(() => {
        console.log(alumno)
    }, [])
    return (

        <div className="contenedor">
            <form className='form-crear' onSubmit={actualizarUsuario}>

                <label htmlFor="name">Name:</label>
                <input type="text" name="name"
                       onChange={onChangeName} value={name}/>

                <label htmlFor="carrera">Carrera:</label>
                <select name="carrera" onChange={onCarreraChange} value={carrera}>
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
                <input type="file" name="foto" onChange={handleImagenChange}/>

                <button type='submit'>Actualizar</button>
            </form>
        </div>


    );
}

export {EditUser};