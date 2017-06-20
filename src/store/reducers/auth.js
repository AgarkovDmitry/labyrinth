const initState = {
  token: undefined,
  content: false,
  user: false,
  order: false,
  email: false,
  question: false
}

export default (state = initState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SIGNIN':
      localStorage.setItem('token', JSON.stringify({ value: payload, expiresIn: (new Date()).getTime() + 86400 }))
      return { token: payload }
    case 'AUTH_SIGNOUT':
      localStorage.removeItem('token')
      return initState
    default:
      return state
  }
}
