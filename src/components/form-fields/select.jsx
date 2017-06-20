import React from 'react'

export default ({ input, options, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <select {...input}>
      <option/>
      {options.map((item, key) => <option key={key}>{item}</option>)}
    </select>
    <span>{touched && error && error}</span>
  </div>
)
