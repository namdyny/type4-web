import React from 'react';
import FaecalForm from './FaecalForm';
import FoodForm from './FoodForm';
import SelectType from "./SelectType"


function Record(props) {
  
  if (props.type.includes("food")) {
    var recordForm = <FoodForm/>
  } else {
    var recordForm = <FaecalForm/>
  }
  
  return (
    <div>
      
      <div>Record</div>
      
      {props.type}
      <SelectType
        type={props.type}
        setType={props.setType}
      />

      {recordForm}
    </div>
  )
}

export default Record