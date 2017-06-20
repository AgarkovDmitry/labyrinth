import React from 'react'

export default (state, actions) => Component => {
  return class CommonState extends React.Component {
    constructor(props){
      super(props)

      this.state = { ...state }
      this.actions = {}
      this.updateCommonState = this.updateCommonState.bind(this)
      for(let key in actions)
        this.actions[key] = (params) => actions[key](this.state, this.updateCommonState, this.props, params)
    }

    updateCommonState(newState) {
      this.setState(prev => ({ ...prev, ...newState }))
    }

    render() {
      return (
        <Component {...this.state} {...this.props} updateCommonState={this.updateCommonState} {...this.actions}/>
      )
    }
  }
}
