import React from 'react';


function DateField(props) {
  return (
    <div>
      <input type="date" value={props.value}></input>
    </div>
  )
}
export default DateField