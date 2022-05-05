import React from 'react';


function SelectType(props) {
  
  // function handleSelectTypeChange(params) {
  //   if (props.type.includes("food")) {
  //     props.setType("faecal:💩")
  //   } else {
  //     props.setType("food:🍱")
  //   }
  // }
  function handleSelectFaecalChange(params) {
    props.setType("faecal:💩")
  }
  function handleSelectFoodChange(params) {
    props.setType("food:🍱")
  }

  return (
    <div className='d-flex justify-content-center'>
        <input type="radio" class="btn-check" name="options-outlined" id="primary-outlined" autocomplete="off" checked/>
        <label class="btn btn-outline-primary" for="primary-outlined" onClick={handleSelectFoodChange}>Type 🍱</label>
        <input type="radio" class="btn-check" name="options-outlined" id="warning-outlined" autocomplete="off"/>
        <label class="btn btn-outline-warning" for="warning-outlined" onClick={handleSelectFaecalChange}>Type 💩</label>
        {/* <input className='form-check-input' onChange={handleSelectTypeChange} type="checkbox" id="select-type" name="type" value="0" ></input> */}
    </div>
  )
}
  
export default SelectType