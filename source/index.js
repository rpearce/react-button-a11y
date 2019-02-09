import { createElement, memo, useCallback } from 'react'
import withForwardedRef from 'react-with-forwarded-ref'

// isSelect :: KeyboardEvent -> Bool
const isSelect = e =>
  e.key === 'Enter' ||
  e.key === ' ' ||
  e.key === 'Spacebar' ||
  e.keyCode === 13 ||
  e.keyCode === 32

const ButtonA11y = ({
  children,
  element,
  forwardedRef,
  onClick,
  onKeyDown,
  strictMode,
  ...rest
}) => {
  if (strictMode && !children && !rest['aria-label']) {
    throw new Error('react-button-a11y: `aria-label` required for accessibility')
  }

  const handleKeyDown = useCallback(
    e => {
      onKeyDown(e)

      if (isSelect(e)) {
        e.preventDefault()
        onClick(e)
      }
    },
    []
  )

  return createElement(element, {
    ...rest,
    children,
    onClick,
    onKeyDown: handleKeyDown,
    ref: forwardedRef,
    role: 'button',
    tabIndex: '0'
  })
}

ButtonA11y.defaultProps = {
  element: 'span',
  onClick: Function.prototype,
  onKeyDown: Function.prototype,
  strictMode: true
}

export default memo(withForwardedRef(ButtonA11y))
