import React, { useState } from 'react';
import Home from './Home/Home';
import Record from './Record/Record';


function App() {
  
  const title = "Type4"
  
  var [page, setPage] = useState("home") // home | record | history | analytics
  var [type, setType] = useState("food:🍱") // food:🍱 | faecal:💩

  // for testing logics
  // alert(page + " " + type)

  if (page == "home") {
    
    return (
      <Home
        page={page}
        setPage={setPage}
        type={type}
        setType={setType}
      />
    );

  } else if (page == "record") {
    
    return (
      <Record
        type={type}
        setType={setType}
      />
    )

  } else if (page == "history") {
    
  } else if (page == "analytics") {
    
  }
}

export default App;
