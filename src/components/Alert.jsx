import React from 'react';
import axios from 'axios';

import AppContext from '../context/AppContext';
import {useInitialState} from "../hooks/useInitialState";

function Alert(props){
    const baseURL = "https://crudbackend-production-5f61.up.railway.app/api/users/delete/";

   const state = useInitialState();
    const alumnos=state.alumnos;
    const deleteUser=async ()=>{

        const newist=alumnos.filter(alumnos=>alumnos.id !== props.id);
        console.log(newist)
        state.setAlumnos(newist);
        console.log('eliminado '+props.user);
        props.setOpenModal(false);
        props.setMostrar(true);

    }

    const cancelar=()=>{
        props.setOpenModal(false);
        console.log('cancelando');
    }

    return(
        <div className="alert">
            <p className="txt-alert">¿Seguro de eliminar a {props.user}?</p>
            <div className="btn-container">
                <button
                    onClick={deleteUser}
                >Si</button>
                <button
                    onClick={cancelar}>No</button>
            </div>
        </div>
    );

}

export {Alert};