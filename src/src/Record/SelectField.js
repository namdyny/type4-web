import React from 'react';


function SelectField(props) {
  
  var options = []
  
  if (props.display == "name") {
    props.value.forEach(element => {
      options.push(<option value={element[1]}>{element[0]}</option>)
    });
  } else if (props.display == "value") {
    props.value.forEach(element => {
      options.push(<option value={element[1]}>{element[1]}</option>)
    });
  }

  
  var listOptions = options.map((option) =>
    option
  );
  
  return (
    <div className='form-group'>
      <label>{props.verbose}</label> <select className='form-control' name={props.name}>
        {listOptions}
      </select>
      <br/>
    </div>
  )
}
export default SelectField