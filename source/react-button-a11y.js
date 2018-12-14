import { PureComponent, createElement } from 'react'

// isSelect :: KeyboardEvent -> Bool
const isSelect = e =>
  e.key === 'Enter' ||
  e.key === ' ' ||
  e.key === 'Spacebar' ||
  e.keyCode === 13 ||
  e.keyCode === 32

export default class ButtonA11y extends PureComponent {
  constructor(...params) {
    super(...params)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown(e) {
    const { onClick, onKeyDown } = this.props

    onKeyDown(e)

    if (isSelect(e)) {
      e.preventDefault()
      onClick(e)
    }
  }

  render() {
    const { children, element, strictMode, ...rest } = this.props

    if (strictMode && !children && !rest['aria-label']) {
      throw new Error('react-button-a11y: `aria-label` required for accessibility')
    }

    return createElement(element, {
      ...rest,
      children,
      onKeyDown: this.handleKeyDown,
      role: 'button',
      tabIndex: '0'
    })
  }
}

ButtonA11y.defaultProps = {
  element: 'div',
  onClick: Function.prototype,
  onKeyDown: Function.prototype,
  strictMode: true
}
