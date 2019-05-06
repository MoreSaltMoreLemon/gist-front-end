import React from 'react'
import '../css/unitSelector.css'
import units from '../helpers/units'

const UnitSelector = ({name, className, onChange, value}) => {

  const options = ((units) => {
    return units.map(unit => {
      return <option className='select-option' value={unit.value} >{unit.label}</option>
    })
  })(units)

  return (
    <select 
      className={`unit-select ${className}`}
      name={name}
      onChange={onChange}
      value={value}
    >
      {options}
    </select>
  )
}

export default UnitSelector