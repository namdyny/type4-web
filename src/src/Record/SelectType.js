import React, { useState, useEffect} from 'react';


function SelectType(props) {
  if (props.type.includes("food")) {
    var type = "Type:🍲"
  } else {
    var type = "Type:💩"
  }
  var [recordType, setRecordType] = useState(type)

  function handleSelectTypeChange(params) {
    if (props.type.includes("food")) {
      props.setType("faecal:💩")
      setRecordType("Type:💩")
    } else {
      props.setType("food:🍲")
      setRecordType("Type:🍲")
    }
  }

  return (
    <div className='d-flex justify-content-center'>
      <div class="form-check form-switch">
        <input onChange={handleSelectTypeChange} class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
        <label class="form-check-label" for="flexSwitchCheckChecked">{recordType}</label>
      </div>
    </div>
  )
}
  
export default SelectType