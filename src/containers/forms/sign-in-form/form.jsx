import React from 'react'
import { Field } from 'redux-form'
import { TextInput, PasswordInput } from 'components/form-fields'

export default ({ error, handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      {
        error && <div role='alert'>
          <span>{error}</span>
        </div>
      }
      <Field name='login' component={TextInput} label='Login'/>
      <Field name='password' component={PasswordInput} label='Password'/>

      <button type='submit' disabled={pristine || submitting}>Sign in</button>
      <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </form>
  )
}
