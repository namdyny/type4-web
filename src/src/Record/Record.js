import React from 'react';
import FaecalForm from './FaecalForm';
import FoodForm from './FoodForm';
import SelectType from "./SelectType"


function Record(props) {
  
  if (props.type.includes("food")) {
    var recordForm = <FoodForm lastDefault={props.lastDefault} editMode={props.editMode} type={props.type} setPage={props.setPage}/>
  } else {
    var recordForm = <FaecalForm lastDefault={props.lastDefault} editMode={props.editMode} type={props.type} setPage={props.setPage}/>
  }
  
  return (
    <div className='container'>
      <br/>
      <h1 align='center'>✍🏻 {props.editMode}...</h1>

      <SelectType
        type={props.type}
        page={props.page}
        setType={props.setType}
        setEditMode={props.setEditMode}
      />

      <hr/>

      {recordForm}

    </div>
  )
}

export default Record