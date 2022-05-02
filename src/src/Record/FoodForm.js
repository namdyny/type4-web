import React, { useState, useEffect} from 'react';
import DateField from './DateField';
import TextField from './TextField';


function FoodForm(props) {
  
  var [formFields, setFormFields] = useState("")
  var componentFields = []
  const fetchData = () => {
    return fetch(
      "http://192.168.1.101:8000/dinning_records/fget/form_fields",
      {headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}
    )
      .then((response) => response.json())
      .then((data) => setFormFields(data["fields"]));
  }
  useEffect(() => { fetchData(); }, []);
  try {
    formFields.forEach(element => {
      console.log(element["name"])
      if (element["type"] == "date") {
        componentFields.push(<DateField value={element["value"]}/>)
      } else {
        
      }
    });
    var listFields = componentFields.map((field) =>
      <div>{field}</div>
    );
  } catch {}
  

  // fetch("http://192.168.1.101:8000/dinning_records/fget/form_fields")
  //   .then(res => res.json())
  //   .then(data => defaultField = data)
  //   .then(() => console.log(defaultField));
  
  // defaultField.fields.forEach(element => {
  //   console.log("123")
  // });

  // const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
  
  return(
    <div>
      <form>
        {listFields}
      </form>
    </div>
  )
}

export default FoodForm