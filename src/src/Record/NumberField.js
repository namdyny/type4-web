import React from 'react';


function NumberField(props) {
  // FIXME make me dynamic
  return (
    <div className='form-group'>
      <label>{props.verbose}</label> <input className='form-control' type="number" name={props.name} min={props.min} max={props.max} required></input>
      <br/>
    </div>
  )
}
export default NumberField