import React, { useState } from 'react';
import History from './History/History';
import FootButton from './Home/FootButton';
import Head from './Home/Head';
import Record from './Record/Record';


function App() {
  
  const title = "Type4"
  
  var [page, setPage] = useState("home") // home | record | history | analytics
  var [type, setType] = useState("food:🍲") // food:🍲 | faecal:💩
  var [editMode, setEditMode] = useState("insert") // food:🍲 | faecal:💩
  var [lastDefault, setLastDefault] = useState("") // food:🍲 | faecal:💩

  var footButton = <FootButton
    page={page}
    setPage={setPage}
    type={type}
    setType={setType}
    editMode={editMode}
    setEditMode={setEditMode}
  />

  // for testing logics
  // alert(page + " " + type)

  if (page == "home") {
    
    return (
      <>
        <br/><br/><br/>
        {footButton}
      </>
    );

  } else if (page == "record") {
    
    return (
      <>
        <main>
          <Record
            type={type}
            page={page}
            setType={setType}
            setPage={setPage}
            setEditMode={setEditMode}
            editMode={editMode}
            lastDefault={lastDefault}
          />
        </main>
        {/* TODO as margin */}
        <br/><br/><br/><br/><br/>
        {footButton}
      </>
    )

  } else if (page == "history") {
    
    return (
      <>
        <History
          page={page}
          type={type}
          setType={setType}
          setPage={setPage}
          setLastDefault={setLastDefault}
          setEditMode={setEditMode}
        />
        <br/><br/><br/>
        {footButton}
      </>
    )

  } else if (page == "analyze") {
    return (
      <>
        <br/><br/><br/>
        {footButton}
      </>
    )
  }
}

export default App;
