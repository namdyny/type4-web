import React, { useState } from 'react';
import History from './History/History';
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
        setPage={setPage}
      />
    )

  } else if (page == "history") {
    
    return (
      <History
        type={type}
        setType={setType}
        setPage={setPage}
      />
    )

  } else if (page == "analytics") {
    
  }
}

export default App;
