import React, { useState } from 'react';


function Home(props) {

  function HandleClickType(params) {
    props.setState({
      "page": props.state["page"],
      "type": "faecal"
    })
  }
  
  return (

    <><button onClick={HandleClickType}>Type</button><div>{props.state["type"]}</div></>
    
  );
}

export default Home;
