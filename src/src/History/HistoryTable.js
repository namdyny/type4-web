import React, { useState, useEffect} from 'react';


function HistoryTable(props) {

  if (props.type.includes("food")) {
    var getHistoryUrl = "http://0.0.0.0:8000/dinning_records/get?filter=7d"
    var getFieldUrl = "http://0.0.0.0:8000/dinning_records/fget/form_fields"
  } else {
    var getHistoryUrl = "http://0.0.0.0:8000/faecal_records/get?filter=7d"
    var getFieldUrl = "http://0.0.0.0:8000/faecal_records/fget/form_fields"
  }

  var [historyRecords, setHistoryRecord] = useState("")
  var [refresh, setRefresh] = useState(false)
  var [formFields, setFormFields] = useState("")
  const fetchHistoryData = () => {
    setRefresh(false)
    return fetch(
      getHistoryUrl,
      {headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}
      )
      .then((response) => response.json())
      .then((data) => setHistoryRecord(data["data"])
    );
  }
  const fetchFieldData = () => {

    return fetch(
      getFieldUrl,
      {headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}
      )
      .then((response) => response.json())
      .then((data) => setFormFields(data["fields"])
    );
  }
  useEffect(() => { fetchHistoryData(); }, [props.type, refresh]);
  useEffect(() => { fetchFieldData(); }, [props.type, refresh]);
  
  // TODO handle record update
  const handleUpdateRecordIdClick = (id) => (event) => {
    if (props.type.includes("food")) {
      var type = "dinning_records"
    } else {
      var type = "faecal_records"
    }
    fetch(
      `http://0.0.0.0:8000/${type}/get/with?id=${id}`,
      {headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}
      )
      .then((response) => response.json())
      .then((data) => props.setLastDefault(data["data"])
    )
    console.log(id)
    props.setEditMode("update")
    props.setPage("record")
    // fetch record value and allow update as defaultValue 
  }

  const handleRemoveRecordIdClick = (id) => (event) => {
    if (window.confirm("You' are about to delete a record!")) {
      if (props.type.includes("food")) {
        var type = "dinning_records"
      } else {
        var type = "faecal_records"
      }
      fetch(
        `http://0.0.0.0:8000/${type}/remove?id=${id}`,
        {headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }}
      )
      .then(function(response){
        console.log(response)
        alert(response.statusText)
        return response.json();
      })
      setRefresh(true)
      // fetch record value and allow update as defaultValue 
    }
  }
  
  var historyRows = []
  var historyHead = [
    <th>id</th>
  ]
  try {
    console.log(historyRecords)
    console.log(formFields)

    formFields.forEach(field => {
      historyHead.push(
        <th>{field["header"]}</th>
      )
    });
    historyHead.push(
      <th>🗑️</th>
    )
    var listHead = <tr>{historyHead}</tr>
    var count = 1
    historyRecords.forEach(history => {
      
      var thisRow = [
        <td><a onClick={handleUpdateRecordIdClick(history["id"])}>{count}</a></td>
      ]
      count += 1
      formFields.forEach(field => {
        if (field["type"] == "checkbox") {
          if (history[field["name"]] == true) {
            thisRow.push(
              <td>yes</td>
            )
          } else {
            thisRow.push(
              <td>no</td>
            )
          }
        } else {
          thisRow.push(
            <td>{history[field["name"]]}</td>
          )
        }
      });
      thisRow.push(
        <td><a onClick={handleRemoveRecordIdClick(history["id"])}>❌</a></td>
      )
      historyRows.push(thisRow)
    });
    var listHistory = historyRows.map((history) =>
      <tr>{history}</tr>
    );
    console.log(historyRows)
  } catch {}

  
  return (
    <div class="table-responsive">
      <table className='table table-striped table-dark'>
        <thead>{listHead}</thead>
        <tbody>{listHistory}</tbody>
      </table>
    </div>
  )
  
}
export default HistoryTable