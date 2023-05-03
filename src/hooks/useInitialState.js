import React, {createContext, useContext, useState} from 'react';
const img1=require('../img/alex.PNG')
const img2=require('../img/angel.PNG')
const AlumnosContext=createContext();

const AlumnosProvider = ({children}) => {
    const [message,setMessage]=useState('');
    const [alumnos, setAlumnos] = React.useState([
        {
            "id":"201901",
            "nombre":"Alexia Antonio",
            "carrera":"Ing Sistemas",
            "foto":img1,
        },
        {
            "id":"201902",
            "nombre":"Angel Rosas",
            "carrera":"Ing Civil",
            "foto":img2,
        },
    ],);



    const initialState={
        message,
        alumnos,
       setMessage,
        setAlumnos,
    };
    return (
        <AlumnosContext.Provider value={initialState}>
            {children}
        </AlumnosContext.Provider>
    );

};

const useInitialState=()=>{
    const state=useContext(AlumnosContext);
    return state;
}

export {
    AlumnosProvider,
    useInitialState
}