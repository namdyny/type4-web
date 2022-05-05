import React, { useState } from 'react';
import History from './History/History';
import FootButton from './Home/FootButton';
import Head from './Home/Head';
import Record from './Record/Record';


function App() {
  
  const title = "Type4"
  
  var [page, setPage] = useState("home") // home | record | history | analytics
  var [type, setType] = useState("food:🍱") // food:🍱 | faecal:💩

  // for testing logics
  // alert(page + " " + type)

  if (page == "home") {
    
    return (
      <>
        <Head/>
        <hr/>
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
        <Head/>
        <Record
        type={type}
        setType={setType}
        setPage={setPage}
        />
        <hr/>
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
        <Head/>
        <History
          type={type}
          setType={setType}
          setPage={setPage}
        />
        <hr/>
        <FootButton
          page={page}
          setPage={setPage}
          type={type}
          setType={setType}
        />
      </>
    )

  } else if (page == "analytics") {
    return (
      <>
        <Head/>
        <hr/>
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
