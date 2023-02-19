import React, { useState } from "react";
import '../App.css'

function ListaTareas({item,onUpdate,onDelete}){

    const[isEdit,setIsEdit]=useState(false);

    function handleClick(){
        setIsEdit(true);
    }

   

    
    function FormularioEdit(){
        const[newValue,setNewValue]=useState(item.nombreTarea);

        function handleChange(e){
            const value= e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTarea(){
            onUpdate(item.id,newValue);
            setIsEdit(false);
        }

        return (
            <form className="tareaUpdateForm">
                <input type="text" onChange={handleChange} value={newValue}></input>
                <button onClick={handleClickUpdateTarea}>Update</button>
            </form>
        )
    }

    function Tarea(){
        return (
            <div className='tareaInfo'>
              <span className="tareaTitle">{item.nombreTarea}</span>
              <button onClick={handleClick} className={'boton-editar'}>Editar</button>
              <button onClick={(e)=>{onDelete(item.id)}} className={'boton-eliminar'}>Eliminar</button>
            </div>
        )
    }

    return(
        <div className="tarea">
            {isEdit ? <FormularioEdit></FormularioEdit>: <Tarea></Tarea>}
        </div>   
    )
}

export default ListaTareas;