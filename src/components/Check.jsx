import React, {Fragment} from 'react'

const Check = props => {
  const { onChange, data: { id, descripcion, done } 
    } = props;

  return (
    <Fragment>
      <label className='nuevo_item'>
        <input 
        className='estado_tarea' 
        type="checkbox" 
        name= {id} 
        defaultChecked={done} 
        onChange={onChange} 
        />
        
        <div className='texto_tarea'> {descripcion} </div>
      </label>
    </Fragment>
  )
}

export default Check;