import React, { useState } from 'react'
import TaskLista from './TaskLista';
import FormToDo from  './FormToDo';

const Container = () => {
  const [lista, setLista] = useState ([]);
  const handleAddItem = agregoItem => {
    setLista ([...lista, agregoItem]);
  };

  return (
    <div>
      <FormToDo handleAddItem={handleAddItem} />
      <TaskLista lista={lista} setLista={setLista} />
    </div>
  )
}

export default Container;