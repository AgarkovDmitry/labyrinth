import { reduxForm, SubmissionError } from 'redux-form'
import { graphql, gql } from 'react-apollo'
import enchance from 'components/enchance'

import Form from './form'

const validate = values => {
  const errors = {}

  if (!values.login) {
    errors.login = 'Required'
  } else if (values.login.length <= 3) {
    errors.login = 'Invalid login'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length <= 3) {
    errors.password = 'Must be at least 4 characters'
  }

  return errors
}

const onSubmit = (variables, action, { mutate, signIn }) => mutate({ variables }).then(
  res => {
    if (!res.data.signIn.error) signIn({ token: res.data.signIn.token })
    else throw new SubmissionError({ _error: res.data.signIn.error })
  }
)

const mutation = gql`mutation signIn($ login: String!, $password: String!) {
  signIn(login: $ login, password: $password) {
    token
    error
  }
}`

export default enchance(
  reduxForm({
    form: 'SignInForm',
    validate,
    onSubmit
  }),
  graphql(mutation)
)(Form)
