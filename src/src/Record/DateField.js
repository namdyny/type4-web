import React, { useState, useEffect} from 'react';


function DateField(props) {

  var [value, setValue] = useState(props.value)
  function handleValueChange(event) {
    setValue(event.target.value)
  }
  
  return (
    // FIXME make me dynamic
    <div className='form-group'>
      <label>{props.verbose}</label> <input onChange={handleValueChange} className='form-control' type="date" name={props.name} value={value} required></input>
      <br/>
    </div>
  )
}
export default DateField