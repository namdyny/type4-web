import React from 'react';


function DateField(props) {
  return (
    <div>
      <input type="date" name={props.name} value={props.value}></input>
    </div>
  )
}
export default DateField