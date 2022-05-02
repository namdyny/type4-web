import React, { useState } from 'react';
import PageButton from './PageButton';


function Home(props) {
  
  return (
    <div>

      {props.page}
      <PageButton page="Record" setPage={props.setPage}/>
      <PageButton page="History" setPage={props.setPage}/>
      <PageButton page="Analytics" setPage={props.setPage}/>

    </div>
  );
}

export default Home;
