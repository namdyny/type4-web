import React from 'react';


function TextareaField(props) {
  if (props.required == true) {
    return (
      <div className='form-group'>
        <label>{props.verbose}</label> <textarea className='form-control' name={props.name} placeholder={props.placeholder} required></textarea>
        <br/>
      </div>
    )
  } else {
    return (
      <div className='form-group'>
        <label>{props.verbose}</label> <textarea className='form-control' name={props.name} placeholder={props.placeholder}></textarea>
        <br/>
      </div>
    )
  }
}
export default TextareaField