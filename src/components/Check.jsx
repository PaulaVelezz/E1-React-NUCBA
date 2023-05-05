import React, {Fragment} from 'react'

const Check = props => {
  const { onChange, data: { id, description, done } 
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
        
        <div className='texto_tarea'> {description} </div>
      </label>
    </Fragment>
  )
}

export default Check;