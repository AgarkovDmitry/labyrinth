import { connect } from 'react-redux'
import commonState from 'components/common-state'
import enchance from 'components/enchance'
import * as actions from 'store/actions'

import Dialog from './dialog'

const state = {
  isOpened: false
}

const commonActions = {
  click: (state, updateCommonState) => {
    updateCommonState({ isOpened: !state.isOpened })
  },
  extSignIn: (state, updateCommonState, { signIn }, { token }) => {
    signIn(token)
    updateCommonState({ isOpened: !state.isOpened })
  }
}

const mapStateToProps = state => ({ token: state.auth.token })

export default enchance(
  commonState(state,commonActions),
  connect(mapStateToProps, actions)
)(Dialog)
