import React from 'react';
import RecordForm from './RecordForm';


function FoodForm(props) {
  return(
    <RecordForm lastDefault={props.lastDefault} editMode={props.editMode} type={props.type} setPage={props.setPage}/>
  )
}

export default FoodForm