import React from 'react';


function SelectType(props) {
  
  function handleSelectTypeChange(params) {
    if (props.type.includes("food")) {
      props.setType("faecal:💩")
    } else {
      props.setType("food:🍱")
    }
  }

  return (
    <div>

      <input onChange={handleSelectTypeChange} type="checkbox" id="select-type" name="type" value="0" ></input>
    
    </div>
  )
}
  
export default SelectType