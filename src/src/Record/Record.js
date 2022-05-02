import React from 'react';
import FaecalForm from './FaecalForm';
import FoodForm from './FoodForm';
import SelectType from "./SelectType"


function Record(props) {
  
  if (props.type.includes("food")) {
    var recordForm = <FoodForm type={props.type}/>
  } else {
    var recordForm = <FaecalForm type={props.type}/>
  }
  
  return (
    <div>
      
      <div>Record</div>
      
      {props.type}
      <SelectType
        type={props.type}
        setType={props.setType}
      />

      <hr/>

      {recordForm}

    </div>
  )
}

export default Record