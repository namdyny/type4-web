import React from 'react';
import RecordForm from './RecordForm';


function FoodForm(props) {
  return(
    <RecordForm type={props.type}/>
  )
}

export default FoodForm