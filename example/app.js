import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ButtonA11y from '../'

class App extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <h2>Button with children</h2>
          <ButtonA11y
            className="btn--words"
            onClick={() => window.alert('pressed first one')}
          >
            This does something
          </ButtonA11y>
        </section>
        <section>
          <h2>Button without children</h2>
          <ButtonA11y
            aria-label="This does something"
            className="btn--noWords"
            onClick={() => window.alert('pressed second one')}
          />
        </section>
      </div>
    )
  }
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
