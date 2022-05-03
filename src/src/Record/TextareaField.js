import React from 'react';


function TextareaField(props) {
  if (props.required == true) {
    return (
      <div>
        <span>{props.verbose}</span> <textarea name={props.name} placeholder={props.placeholder} required></textarea>
      </div>
    )
  } else {
    return (
      <div>
        <span>{props.verbose}</span> <textarea name={props.name} placeholder={props.placeholder}></textarea>
      </div>
    )
  }
}
export default TextareaField