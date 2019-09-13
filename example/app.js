import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import ButtonA11y from '../'

const App = () => {
  const [isBtn1Pressed, pressBtn1] = useState(false)
  const [isBtn2Pressed, pressBtn2] = useState(false)

  const handleBtn1Click = useCallback(() => pressBtn1(x => !x), [])
  const handleBtn2Click = useCallback(() => pressBtn2(x => !x), [])

  const btn1Label = isBtn1Pressed ? 'Pressed' : 'Press me'
  const btn1Class = 'btn--words'.concat(isBtn1Pressed ? ' btn--pressed' : '')

  const btn2Label = isBtn2Pressed ? 'Pressed' : 'Press me'
  const btn2Class = 'btn--noWords'.concat(isBtn2Pressed ? ' btn--pressed' : '')

  return (
    <div>
      <section>
        <h2>Button with children</h2>
        <ButtonA11y className={btn1Class} onClick={handleBtn1Click}>
          {btn1Label}
        </ButtonA11y>
      </section>
      <section>
        <h2>Button without children</h2>
        <ButtonA11y
          aria-label={btn2Label}
          className={btn2Class}
          onClick={handleBtn2Click}
        />
      </section>
    </div>
  )
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
