import React, { useState, useEffect} from 'react';
import DateField from './DateField';
import NumberField from './NumberField';
import CheckboxField from './CheckboxField';
import TextareaField from './TextareaField';
import SelectField from './SelectField';


function FoodForm(props) {
  
  if (props.type.includes("food")) {
    var getUrl = "http://0.0.0.0:8000/dinning_records/fget/form_fields"
    if (props.editMode == "insert") {
      var postUrl = "http://0.0.0.0:8000/dinning_records/add"
    } else {
      var postUrl = `http://0.0.0.0:8000/dinning_records/add?id=${props.lastDefault["id"]}`
    }
  } else {
    var getUrl = "http://0.0.0.0:8000/faecal_records/fget/form_fields"
    if (props.editMode == "insert") {
      var postUrl = "http://0.0.0.0:8000/faecal_records/add"
    } else {
      var postUrl = `http://0.0.0.0:8000/faecal_records/add?id=${props.lastDefault["id"]}`
    }
  }
  
  var [formFields, setFormFields] = useState("")
  const fetchData = () => {
    return fetch(
      getUrl,
      {headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}
      )
      .then((response) => response.json())
      .then((data) => setFormFields(data["fields"]));
    }
  useEffect(() => { fetchData(); }, []);
    
  var fieldRows = []
  try {
    console.log(props.editMode)
    console.log(props.lastDefault)
    if (props.editMode == "insert") {
      formFields.forEach(element => {
        if (element["type"] == "date") {
          fieldRows.push(<DateField verbose={element["verbose"]} name={element["name"]} value={element["value"]}/>)
        } else if (element["type"] == "textarea") {
          fieldRows.push(<TextareaField verbose={element["verbose"]} name={element["name"]} placeholder={element["placeholder"]} required={element["required"]}/>)
        } else if (element["type"] == "number") {
          fieldRows.push(<NumberField verbose={element["verbose"]} name={element["name"]} value={element["value"]} min={element["min"]} max={element["max"]}/>)
        } else if (element["type"] == "checkbox") {
          fieldRows.push(<CheckboxField verbose={element["verbose"]} name={element["name"]} value={element["value"]}/>)
        } else if (element["type"] == "select") {
          // TODO if defaultValue and value == option
          fieldRows.push(<SelectField verbose={element["verbose"]} name={element["name"]} value={element["value"]} display={element["display"]} selected={element["selected"]}/>)
        }
      });
    } else if (props.editMode == "update") {
      formFields.forEach(element => {
        if (element["type"] == "date") {
          fieldRows.push(<DateField verbose={element["verbose"]} name={element["name"]} value={props.lastDefault[element["name"]]}/>)
        } else if (element["type"] == "textarea") {
          fieldRows.push(<TextareaField verbose={element["verbose"]} name={element["name"]} placeholder={element["placeholder"]} value={props.lastDefault[element["name"]]} required={element["required"]}/>)
        } else if (element["type"] == "number") {
          fieldRows.push(<NumberField verbose={element["verbose"]} name={element["name"]} value={props.lastDefault[element["name"]]} min={element["min"]} max={element["max"]}/>)
        } else if (element["type"] == "checkbox") {
          fieldRows.push(<CheckboxField verbose={element["verbose"]} name={element["name"]} value={props.lastDefault[element["name"]]}/>)
        } else if (element["type"] == "select") {
          // TODO if defaultValue and value == option
          fieldRows.push(<SelectField verbose={element["verbose"]} name={element["name"]} value={element["value"]} display={element["display"]} selected={props.lastDefault[element["name"]]}/>)
        }
      });
    }
      
    var listFields = fieldRows.map((field) =>
      <div>{field}</div>
    );
  } catch {}

  function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(formFields)
      var formData = {}
      formFields.forEach(element => {
        formData[element["name"]] = document.getElementsByName(element["name"])[0].value
      });
      console.log(formData)
      var requestOptions = {
          method: 'POST',
          headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
      };
      fetch(postUrl, requestOptions).then(
          console.log(JSON.stringify(formData))
      ).then(function(response){
          console.log(response)
          alert(response.statusText)
          return response.json();
      });
      props.setPage("history")
    } catch {}
  }


  return(
    <div className='container'>
      <form onSubmit={handleSubmit}>
        {listFields}
        <div className='container'>
          <div className='row'>
            <button className='btn btn-success btn-block' value="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FoodForm