import React from 'react';


function TextareaField(props) {
  return (
    <div>
      <textarea name={props.name} placeholder={props.placeholder}></textarea>
    </div>
  )
}
export default TextareaField