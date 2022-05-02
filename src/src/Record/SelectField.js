import React from 'react';


function SelectField(props) {
  
  var options = []
  props.value.forEach(element => {
    options.push(<option value={element}>{element}</option>)
  });
  var listOptions = options.map((option) =>
    option
  );
  
  return (
    <div>
      <select name={props.name}>
        {listOptions}
      </select>
    </div>
  )
}
export default SelectField