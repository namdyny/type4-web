import React from 'react';


function PageButton(props) {
  
  function handleHomeButtonClick(params) {
    props.setPage(props.page)
  }

  if (props.page == "record") {
    var page = "Record✍🏻"
  } else if (props.page == "history") {
    var page = "History📜"
  } else if (props.page == "analyze") {
    var page = "Analyze💻"
  }

  return (
      <button className={props.color} type='button' onClick={handleHomeButtonClick}>{page}</button>
  );
}
export default PageButton;