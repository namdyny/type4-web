import React from 'react';


function DateField(props) {
  return (
    // FIXME make me dynamic
    <div className='form-group'>
      <label>{props.verbose}</label> <input className='form-control' type="date" name={props.name} required></input>
      <br/>
    </div>
  )
}
export default DateField