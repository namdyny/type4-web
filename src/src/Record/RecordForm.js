import React, { useState, useEffect} from 'react';
import DateField from './DateField';
import NumberField from './NumberField';
import CheckboxField from './CheckboxField';
import TextareaField from './TextareaField';
import SelectField from './SelectField';


function FoodForm(props) {
  
  if (props.type.includes("food")) {
    var getUrl = "http://192.168.1.101:8000/dinning_records/fget/form_fields"
    var postUrl = "http://192.168.1.101:8000/dinning_records/add"
  } else {
    var getUrl = "http://192.168.1.101:8000/faecal_records/fget/form_fields"
    var postUrl = "http://192.168.1.101:8000/faecal_records/add"
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
    formFields.forEach(element => {
      if (element["type"] == "date") {
        fieldRows.push(<DateField verbose={element["verbose"]} name={element["name"]} value={element["value"]}/>)
      } else if (element["type"] == "textarea") {
        fieldRows.push(<TextareaField verbose={element["verbose"]} name={element["name"]} placeholder={element["placeholder"]} required={element["required"]}/>)
      } else if (element["type"] == "number") {
        fieldRows.push(<NumberField verbose={element["verbose"]} name={element["name"]} value={element["value"]}/>)
      } else if (element["type"] == "checkbox") {
        fieldRows.push(<CheckboxField verbose={element["verbose"]} name={element["name"]} value={element["value"]}/>)
      } else if (element["type"] == "select") {
        fieldRows.push(<SelectField verbose={element["verbose"]} name={element["name"]} value={element["value"]}/>)
      }
    });
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
    <div>
      <form onSubmit={handleSubmit}>
        {listFields}
        <button value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default FoodForm