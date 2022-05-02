import React, { useState, useEffect} from 'react';
import DateField from './DateField';
import NumberField from './NumberField';
import CheckboxField from './CheckboxField';
import TextareaField from './TextareaField';
import SelectField from './SelectField';


function FoodForm(props) {
  
  if (props.type.includes("food")) {
    var url = "http://192.168.1.101:8000/dinning_records/fget/form_fields"
  } else {
    var url = "http://192.168.1.101:8000/faecal_records/fget/form_fields"
  }
  var [formFields, setFormFields] = useState("")
  const fetchData = () => {
    return fetch(
      url,
      {headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}
      )
      .then((response) => response.json())
      .then((data) => setFormFields(data["fields"]));
    }
  useEffect(() => { fetchData(); }, []);
    
  var componentFields = []
  try {
    formFields.forEach(element => {
      if (element["type"] == "date") {
        componentFields.push(<DateField name={element["name"]} value={element["value"]}/>)
      } else if (element["type"] == "textarea") {
        componentFields.push(<TextareaField name={element["name"]} placeholder={element["placeholder"]}/>)
      } else if (element["type"] == "number") {
        componentFields.push(<NumberField name={element["name"]} value={element["value"]}/>)
      } else if (element["type"] == "checkbox") {
        componentFields.push(<CheckboxField name={element["name"]} value={element["value"]}/>)
      } else if (element["type"] == "select") {
        componentFields.push(<SelectField name={element["name"]} value={element["value"]}/>)
      }
    });
    var listFields = componentFields.map((field) =>
      <div>{field}</div>
    );
  } catch {}
  
  return(
    <div>
      <form>
        {listFields}
        <button value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default FoodForm