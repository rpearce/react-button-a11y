import { PureComponent, createElement } from 'react'
import withForwardedRef from 'react-with-forwarded-ref'

// isSelect :: KeyboardEvent -> Bool
const isSelect = e =>
  e.key === 'Enter' ||
  e.key === ' ' ||
  e.key === 'Spacebar' ||
  e.keyCode === 13 ||
  e.keyCode === 32

export class ButtonA11y extends PureComponent {
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
    const { children, element, forwardedRef, strictMode, ...rest } = this.props

    if (strictMode && !children && !rest['aria-label']) {
      throw new Error('react-button-a11y: `aria-label` required for accessibility')
    }

    return createElement(element, {
      ...rest,
      children,
      onKeyDown: this.handleKeyDown,
      ref: forwardedRef,
      role: 'button',
      tabIndex: '0'
    })
  }
}

ButtonA11y.defaultProps = {
  element: 'span',
  onClick: Function.prototype,
  onKeyDown: Function.prototype,
  strictMode: true
}

export default withForwardedRef(ButtonA11y)
