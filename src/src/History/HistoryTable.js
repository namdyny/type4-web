import React, { useState, useEffect} from 'react';


function HistoryTable(props) {

  if (props.type.includes("food")) {
    var getHistoryUrl = "http://192.168.1.101:8000/dinning_records/get?filter=7d"
    var getFieldUrl = "http://192.168.1.101:8000/dinning_records/fget/form_fields"
  } else {
    var getHistoryUrl = "http://192.168.1.101:8000/faecal_records/get?filter=7d"
    var getFieldUrl = "http://192.168.1.101:8000/faecal_records/fget/form_fields"
  }

  var [historyRecords, setHistoryRecord] = useState("")
  var [formFields, setFormFields] = useState("")
  const fetchHistoryData = () => {
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
      .then((data) => setFormFields(data["fields"]));
    }
  useEffect(() => { fetchHistoryData(); }, [props.type]);
  useEffect(() => { fetchFieldData(); }, [props.type]);
  
  var historyRows = []
  var historyHead = []
  try {
    console.log(historyRecords)
    console.log(formFields)

    formFields.forEach(field => {
      historyHead.push(
        <th>{field["header"]}</th>
      )
    });
    var listHead = <tr>{historyHead}</tr>
    
    historyRecords.forEach(history => {
      var thisRow = []
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