import React from 'react';


function CheckboxField(props) {
  if (props.value == false) {
    return (
      <><div className='form-group'>
        <label>{props.verbose}</label> <input className='form-check-input position-static' type="checkbox" name={props.name} value={props.value}></input>
      </div><br /></>
    )
  } else {
    return (
      <><div className='form-group'>
        <label>{props.verbose}</label> <input className='form-check-input position-static' type="checkbox" name={props.name} value={props.value} checked></input>
      </div><br /></>
    )
  }
}
export default CheckboxField