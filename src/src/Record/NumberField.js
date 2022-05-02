import React from 'react';


function NumberField(props) {
  return (
    <div>
      <input type="number" name={props.name} value={props.value}></input>
    </div>
  )
}
export default NumberField