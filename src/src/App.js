import React, { useState } from 'react';
import History from './History/History';
import FootButton from './Home/FootButton';
import Head from './Home/Head';
import Record from './Record/Record';


function App() {
  
  const title = "Type4"
  
  var [page, setPage] = useState("home") // home | record | history | analytics
  var [type, setType] = useState("food:🍲") // food:🍲 | faecal:💩

  // for testing logics
  // alert(page + " " + type)

  if (page == "home") {
    
    return (
      <>
        <br/><br/><br/>
        <FootButton
          page={page}
          setPage={setPage}
          type={type}
          setType={setType}
        />
      </>
    );

  } else if (page == "record") {
    
    return (
      <>
        <Record
        type={type}
        setType={setType}
        setPage={setPage}
        />
        {/* TODO as margin */}
        <br/><br/><br/><br/><br/>
        <FootButton
          page={page}
          setPage={setPage}
          type={type}
          setType={setType}
        />
      </>
    )

  } else if (page == "history") {
    
    return (
      <>
        <History
          type={type}
          setType={setType}
          setPage={setPage}
        />
        <br/><br/><br/>
        <FootButton
          page={page}
          setPage={setPage}
          type={type}
          setType={setType}
        />
      </>
    )

  } else if (page == "analyze") {
    return (
      <>
        <br/><br/><br/>
        <FootButton
          page={page}
          setPage={setPage}
          type={type}
          setType={setType}
        />
      </>
    )
  }
}

export default App;
