import React from 'react'

import SingInForm from 'containers/forms/sign-in-form'

export default ({ extSignIn, isOpened, click }) => {
  return (
    isOpened ?
    <div onClick={click} className='modal'>
      <div className='signin-modal-body' onClick={e => e.stopPropagation()}>
        <SingInForm signIn={extSignIn}/>
      </div>
    </div> : null
  )
}
