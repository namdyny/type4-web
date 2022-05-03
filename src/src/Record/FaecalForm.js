import React from 'react';
import RecordForm from './RecordForm';


function FaecalForm(props) {
  return(
    <RecordForm type={props.type} setPage={props.setPage}/>
  )
}

export default FaecalForm