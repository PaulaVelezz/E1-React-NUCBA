import React from 'react'
import Check from './Check';

const TaskLista = props => {

  const {lista, setLista} = props;

  const onChangeStatus = e => {
      const { name, checked } = e.target;

      const updateList = lista.map(item => ({...item,
      done: item.id === name ? checked : item.done
  }));

  setLista(updateList);
};

const onClickRemoveItem = e => {
  const updateList = lista.filter(item => !item.done);
  setLista(updateList);
};

  const check = lista.map(item => (
    <Check key={item.id} data={item} onChange={onChangeStatus} />
  ));

  return (
    <div className='td_lista'>
      {lista.length ? check : "No tenes ninguna tarea"}
      {lista.length ? (
        <p>
          <button className='btn_delete' onClick={onClickRemoveItem}> Eliminar todas las tareas chequeadas</button>
        </p>
      ) : null}
    </div>
  )
}

export default TaskLista;