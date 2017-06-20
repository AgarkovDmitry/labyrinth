import React from 'react'

export default ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type='password'/>
    <span>{touched && error && error}</span>
  </div>
)
