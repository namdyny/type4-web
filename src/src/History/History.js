import React from 'react';
import SelectType from '../Record/SelectType';
import HistoryTable from './HistoryTable';


function History(props) {
  
  return (
    <div className='container'>
      <br/>
      <h1 align='center'>📜</h1>

      <SelectType
        type={props.type}
        setType={props.setType}
      />

      <hr/>

      <HistoryTable 
        page={props.page}
        setPage={props.setPage}
        type={props.type}
        setType={props.setType}
        setEditMode={props.setEditMode}
        setLastDefault={props.setLastDefault}
      />

    </div>
  )
}
  
export default History