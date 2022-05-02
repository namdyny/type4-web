import React from 'react';


function PageButton(props) {
  
  function handleHomeButtonClick(params) {
    props.setPage(props.page.toLowerCase())
  }

  return (
    <div>

      <button onClick={handleHomeButtonClick}>{props.page}</button>
    
    </div>
  );
}
export default PageButton;