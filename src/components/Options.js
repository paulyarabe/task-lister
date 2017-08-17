import React from 'react'

const Option = (props) => 
  <select id="listDropdown" name="listId" onChange={props.handleSelect}>
      {props.addOption()}
  </select>

export default Option
