import React from 'react';


function PageButton(props) {
  
  function handleHomeButtonClick(params) {
    props.setPage(props.page.toLowerCase())
  }

  return (
      <button className={props.color} type='button' onClick={handleHomeButtonClick}>{props.page}</button>
  );
}
export default PageButton;