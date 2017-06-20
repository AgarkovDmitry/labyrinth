import React from 'react'

import Group from './group'

export default class extends React.Component{
  constructor(props){
    super(props)

    this.sections = this.props.children.map((child, key) => ({
      top: key,
      left: (child.type == Group) ? (child.props.children).map((item, key) => key) : [0],
      defaultIndex: (child.type == Group) ? child.props.defaultIndex || 0 : undefined
    }))

    this.state = {
      vertIndex: 0,
      horIndex: 0,

      upScroll: false,
      leftScroll: false,
      downScroll: true,
      rightScroll: false,

      duration: 0
    }

    this.handleWheel = this.handleWheel.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.upClick = this.handleKeyDown.bind(this, 'ArrowUp')
    this.leftClick = this.handleKeyDown.bind(this, 'ArrowLeft')
    this.downClick = this.handleKeyDown.bind(this, 'ArrowDown')
    this.rightClick = this.handleKeyDown.bind(this, 'ArrowRight')
  }

  handleWheel({ deltaY }){
    if(deltaY > 0)
      this.scrollDown()
    else
      this.scrollUp()
  }

  handleKeyDown(key){
    if(key == 'ArrowUp' || key == 'w') this.scrollUp()
    if(key == 'ArrowLeft' || key == 'a') this.scrollLeft()
    if(key == 'ArrowDown' || key == 's') this.scrollDown()
    if(key == 'ArrowRight' || key == 'd') this.scrollRight()
  }

  scrollUp(){
    if(this.state.upScroll){
      let index = this.state.vertIndex
      let section = this.sections[index - 1]
      this.setState(prev => ({
        ...prev,

        vertIndex: prev.vertIndex - 1,
        horIndex: section.defaultIndex || prev.horIndex,

        upScroll: !!(prev.vertIndex - 1),
        leftScroll: section.defaultIndex > 0,
        downScroll: true,
        rightScroll: section.defaultIndex < section.left.length - 1,

        duration: 0
      }))
    }
  }

  scrollLeft(){
    if(this.state.leftScroll){
      this.setState(prev => ({
        ...prev,

        horIndex: prev.horIndex - 1,

        leftScroll: !!this.props.children[this.state.vertIndex].props.children[prev.horIndex - 2],
        rightScroll: true,

        duration: 1000
      }))
    }
  }

  scrollDown(){
    if(this.state.downScroll){
      let index = this.state.vertIndex
      let section = this.sections[index + 1]
      this.setState(prev => ({
        ...prev,

        vertIndex: prev.vertIndex + 1,
        horIndex: section.defaultIndex || prev.horIndex,

        upScroll: true,
        leftScroll: section.defaultIndex > 0,
        downScroll: index != this.props.children.length - 2,
        rightScroll: section.defaultIndex < section.left.length - 1,

        duration: 0
      }))
    }
  }

  scrollRight(){
    if(this.state.rightScroll){
      this.setState(prev => ({
        ...prev,

        horIndex: prev.horIndex + 1,

        leftScroll: true,
        rightScroll: !!this.props.children[this.state.vertIndex].props.children[prev.horIndex + 2],

        duration: 1000
      }))
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', e => this.handleKeyDown(e.key))
  }

  render(){
    const children = this.props.children.map(
      (Child, key) => Child.type == Group
      ? React.cloneElement(Child, { key, index: this.state.horIndex, duration: this.state.duration })
      : Child
    )
    return (
      <div className='presentation'>
        <div onWheel={this.handleWheel} onKeyDown={this.handleKeyDown} style={{
          transform: `translateY(${-this.state.vertIndex * window.innerHeight}px)`
        }}>
          {children}
        </div>
        { this.props.navButtons && <button onClick={this.upClick} className='up' disabled={!this.state.upScroll}/> }
        { this.props.navButtons && <button onClick={this.leftClick} className='left' disabled={!this.state.leftScroll}/> }
        { this.props.navButtons && <button onClick={this.downClick} className='down' disabled={!this.state.downScroll}/> }
        { this.props.navButtons && <button onClick={this.rightClick} className='right' disabled={!this.state.rightScroll}/> }
      </div>
    )
  }
}
