import React from 'react';


function CheckboxField(props) {
  if (props.value == false) {
    return (
      <div>
        <input type="checkbox" name={props.name} value={props.value}></input>
      </div>
    )
  } else {
    return (
      <div>
        <input type="checkbox" name={props.name} value={props.value} checked></input>
      </div>
    )
  }
}
export default CheckboxField