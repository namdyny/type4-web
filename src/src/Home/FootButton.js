import React, { useState } from 'react';
import PageButton from './PageButton';


function FootButton(props) {
  
  return (
    <div class="container" align='center'>
      <div className='btn-group'>
        <PageButton color="btn btn-danger footer-button" page="Record" setPage={props.setPage}/>
        <PageButton color="btn btn-warning footer-button" page="History" setPage={props.setPage}/>
        <PageButton color="btn btn-primary footer-button" page="Analytics" setPage={props.setPage}/>
      </div>
    </div>
  );
}

export default FootButton;
