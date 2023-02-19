import React, { useState } from "react";
import '../App.css'
import ListaTareas from "./ListaTareas";

function Formulario(){

    const[tarea,setTarea]=useState("Limpiar los platos");
    const[tareas,setTareas]=useState([])

    

    function handleChange(event){
        const valor=event.target.value;
        setTarea(valor);
    }

    function handleSubmit(e){
        e.preventDefault();
        const newTarea={
            id: crypto.randomUUID(),
            nombreTarea:tarea,
            completed: false
        };
        
        const temp=[...tareas];
        temp.unshift(newTarea);
        setTareas(temp);
    }

    function handleUpdate(id,value){
        const temp=[...tareas];
        const item= temp.find(x=>x.id===id)
        item.nombreTarea=value;
        setTareas(temp);
    }

    function handleDelete(id){
        const temp= tareas.filter(item => item.id !== id);
        setTareas(temp);
    }


    return(
      <div className="tareaContenedor">

        <form className="tareaCreateForm" onSubmit={handleSubmit}>
            <input className="tareaInput" value={tarea}  onChange={handleChange}></input>
            <input type='submit' value='Crear Tarea' className="botonCrear" onClick={handleSubmit}></input>
        </form>

        <div className="tareasContenedor">
            {
                tareas.map(item => (
                    <ListaTareas item={item} onUpdate={handleUpdate} onDelete={handleDelete}></ListaTareas>
                ))
            }
        </div>

      </div>
    )
}

export default Formulario;