import React, { useState, useEffect} from 'react';


function CheckboxField(props) {

  var [value, setValue] = useState(props.value)
  function handleCheckboxChange () {
    if (value == true) {
      setValue(false)
    } else {
      setValue(true)
    }
  }
  
  if (value == false) {
    return (
      <><div className='form-group'>
        <label>{props.verbose}</label> <input onChange={handleCheckboxChange} className='form-check-input position-static' type="checkbox" name={props.name} value={value}></input>
      </div><br /></>
    )
  } else {
    return (
      <><div className='form-group'>
        <label>{props.verbose}</label> <input onChange={handleCheckboxChange} className='form-check-input position-static' type="checkbox" name={props.name} value={value} checked></input>
      </div><br /></>
    )
  }
}
export default CheckboxField