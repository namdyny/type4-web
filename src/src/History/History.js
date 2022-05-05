import React from 'react';
import SelectType from '../Record/SelectType';
import HistoryTable from './HistoryTable';


function History(props) {
  
  return (
    <div className='container'>
      
      <h2>History</h2>

      <SelectType
        type={props.type}
        setType={props.setType}
      />

      <hr/>

      <HistoryTable type={props.type}/>

    </div>
  )
}
  
export default History