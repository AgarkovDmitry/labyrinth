import React from 'react'

export default ({ token, signOut, click }) => {
  return (
    !token ?
      <button className='signinButton' onClick={click}/> :
      <button className='signoutButton' onClick={signOut}/>
  )
}
