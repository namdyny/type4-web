import React, { useState, useEffect} from 'react';


function TextareaField(props) {

  var [value, setValue] = useState(props.value)
  function handleValueChange(event) {
    setValue(event.target.value)
  }

  if (props.required == true) {
    return (
      <div className='form-group'>
        <label>{props.verbose}</label> <textarea onChangeCapture={handleValueChange} className='form-control' name={props.name} placeholder={props.placeholder} value={value} required></textarea>
        <br/>
      </div>
    )
  } else {
    return (
      <div className='form-group'>
        <label>{props.verbose}</label> <textarea onChangeCapture={handleValueChange} className='form-control' name={props.name} placeholder={props.placeholder} value={value}></textarea>
        <br/>
      </div>
    )
  }
}
export default TextareaField