import React, { useState } from 'react';
import PageButton from './PageButton';


function FootButton(props) {
  
  return (
    <footer class="footer mt-auto py-3 bg-dark text-white">
      <hr/>
      <div class="container" align='center'>
        <div className='btn-group'>
          <PageButton color="btn btn-danger footer-button color-record" page="record" setPage={props.setPage}/>
          <PageButton color="btn btn-warning footer-button color-history" page="history" setPage={props.setPage}/>
          <PageButton color="btn btn-primary footer-button color-analytics" page="analyze" setPage={props.setPage}/>
        </div>
      </div>
    </footer>
  );
}

export default FootButton;
