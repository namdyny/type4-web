import React from 'react';
import FaecalForm from './FaecalForm';
import FoodForm from './FoodForm';
import SelectType from "./SelectType"


function Record(props) {
  
  if (props.type.includes("food")) {
    var recordForm = <FoodForm type={props.type} setPage={props.setPage}/>
  } else {
    var recordForm = <FaecalForm type={props.type} setPage={props.setPage}/>
  }
  
  return (
    <div className='container'>
      <br/>
      <h1 align='center'>✍🏻</h1>

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