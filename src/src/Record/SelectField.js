import React from 'react';


function SelectField(props) {
  
  var options = []
  props.value.forEach(element => {
    options.push(<option value={element[1]}>{element[0]}</option>)
  });
  var listOptions = options.map((option) =>
    option
  );
  
  return (
    <div>
      <span>{props.verbose}</span> <select name={props.name}>
        {listOptions}
      </select>
    </div>
  )
}
export default SelectField