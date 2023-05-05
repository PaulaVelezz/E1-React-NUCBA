import React, { useState } from 'react'
 
/*genero el estado descripcion y se lo asigno al input, despues con el 
manejador de eventos lo controlo*/

const FormToDo = props => {
  const { handleAddItem } = props;
  
  const [descripcion, setDescripcion] = useState ("");

  const handleSubmit = e => {
    e.preventDefault();

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      descripcion
    });

    setDescripcion("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='td_list'>
        <h1>To Do App</h1>
        <div className='td_input'>
          <input 
          className='text'
          type="text" 
          placeholder='que tareas queres agregar?' 
          value={descripcion} 
          onChange={e => setDescripcion(e.target.value)} 
          />
          
          <button disabled={descripcion ? "" : "disabled"}
          className='btn_input'> Agregar </button>
        </div>
      </div>
    </form>
  )
};

export default FormToDo;