import React, { useState } from 'react';
import Home from './Home';


function App() {
  
  var [state, setState] = useState({
    "page": "home",
    "type": "food"
  });
  
  function HandleClickRecord(params) {
    setState({
      "page": "record",
      "type": state["type"]
    })
  }

  return (
    <><div className="App">
        <button onClick={HandleClickRecord}>Record</button>
        {state["page"]}

        <Home setState={setState} state={state}/>

        <hr/>
        {state["page"]} {state["type"]}
    </div>
    </>

  );
}

export default App;
