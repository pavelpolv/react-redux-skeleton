import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import TestComponents from './components/Test Components'

import { actionSetComponent } from './action/common'

@connect(state => ({ show: state.common.show }), { actionSetComponent })
class App extends Component {
  componentDidMount () {
    const { actionSetComponent } = this.props

    actionSetComponent(true, 1000)
  }

  render () {
    const { show } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {show && <TestComponents/>}
        </header>
      </div>
    )
  }
}

export default App
