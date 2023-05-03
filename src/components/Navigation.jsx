import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navigation.css'

 function Navigation() {
  return (
    <div className='Navigation'>
        <p>CRUD ALUMNOS</p>

        <section className="menu">
        
            <li>
                <Link to="/">Ver</Link>
            </li>

            <li>
                <Link to="/create">Crear</Link>
            </li>
           

        </section>
     
    </div>
  )
}

export {Navigation};
