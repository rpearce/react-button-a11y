import React, { createRef } from 'react'
import { fireEvent, render } from 'react-testing-library'
import 'jest-dom/extend-expect'

import ButtonA11y from '../source'

test('renders with aria-label, handles click', () => {
  const onClick = jest.fn()
  const { getByLabelText } = render(
    <ButtonA11y
      aria-label="Mock Label"
      className="mock-className"
      onClick={onClick}
    />
  )
  const el = getByLabelText('Mock Label')

  expect(el).toBeInTheDocument()

  fireEvent.click(el)

  expect(onClick).toHaveBeenCalledWith(expect.any(Object))
})

test('renders with children, handles click', () => {
  const onClick = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onClick={onClick}
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()

  fireEvent.click(el)

  expect(onClick).toHaveBeenCalledWith(expect.any(Object))
})

test('renders with button role and tabIndex 0', () => {
  const onClick = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onClick={onClick}
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()
  expect(el.getAttribute('role')).toEqual('button')
  expect(el.getAttribute('tabindex')).toEqual('0')
})

test('calls onKeyDown and onClick when key is Enter', () => {
  const onClick = jest.fn()
  const onKeyDown = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onKeyDown={onKeyDown}
      onClick={onClick}
      type=""
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()

  fireEvent.keyDown(el, { key: 'Enter' })

  expect(onKeyDown).toHaveBeenCalledWith(expect.any(Object))
  expect(onClick).toHaveBeenCalledWith(expect.any(Object))
})

test('calls onKeyDown and onClick when key is empty space', () => {
  const onClick = jest.fn()
  const onKeyDown = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onKeyDown={onKeyDown}
      onClick={onClick}
      type=""
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()

  fireEvent.keyDown(el, { key: ' ' })

  expect(onKeyDown).toHaveBeenCalledWith(expect.any(Object))
  expect(onClick).toHaveBeenCalledWith(expect.any(Object))
})

test('calls onKeyDown and onClick when key is Spacebar', () => {
  const onClick = jest.fn()
  const onKeyDown = jest.fn()
  const onScroll = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onKeyDown={onKeyDown}
      onClick={onClick}
      type=""
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  global.document.addEventListener('scroll', onScroll)

  expect(el).toBeInTheDocument()

  fireEvent.keyDown(el, { key: 'Spacebar' })

  expect(onKeyDown).toHaveBeenCalledWith(expect.any(Object))
  expect(onClick).toHaveBeenCalledWith(expect.any(Object))
  expect(onScroll).not.toHaveBeenCalled()
})

test('calls onKeyDown and onClick when keyCode is 13', () => {
  const onClick = jest.fn()
  const onKeyDown = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onKeyDown={onKeyDown}
      onClick={onClick}
      type=""
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()

  fireEvent.keyDown(el, { keyCode: 13 })

  expect(onKeyDown).toHaveBeenCalledWith(expect.any(Object))
  expect(onClick).toHaveBeenCalledWith(expect.any(Object))
})

test('calls onKeyDown and onClick when keyCode is 32', () => {
  const onClick = jest.fn()
  const onKeyDown = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onKeyDown={onKeyDown}
      onClick={onClick}
      type=""
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()

  fireEvent.keyDown(el, { keyCode: 32 })

  expect(onKeyDown).toHaveBeenCalledWith(expect.any(Object))
  expect(onClick).toHaveBeenCalledWith(expect.any(Object))
})

test('only calls onKeyDown when random key', () => {
  const onClick = jest.fn()
  const onKeyDown = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onKeyDown={onKeyDown}
      onClick={onClick}
      type=""
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()

  fireEvent.keyDown(el, { key: 'Delete' })

  expect(onKeyDown).toHaveBeenCalledWith(expect.any(Object))
  expect(onClick).not.toHaveBeenCalled()
})

test('only calls onKeyDown when random keyCode', () => {
  const onClick = jest.fn()
  const onKeyDown = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onKeyDown={onKeyDown}
      onClick={onClick}
      type=""
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()

  fireEvent.keyDown(el, { keyCode: 17 })

  expect(onKeyDown).toHaveBeenCalledWith(expect.any(Object))
  expect(onClick).not.toHaveBeenCalled()
})

test('does not break when onKeyDown not passed', () => {
  const onClick = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onClick={onClick}
      type=""
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()

  fireEvent.keyDown(el, { key: 'Enter' })

  expect(onClick).toHaveBeenCalledWith(expect.any(Object))
})

test('does not break when onClick not passed', () => {
  const onKeyDown = jest.fn()
  const { getByText } = render(
    <ButtonA11y
      className="mock-className"
      onKeyDown={onKeyDown}
      type=""
    >
      Click Me
    </ButtonA11y>
  )
  const el = getByText('Click Me')

  expect(el).toBeInTheDocument()

  fireEvent.keyDown(el, { key: 'Enter' })

  expect(onKeyDown).toHaveBeenCalledWith(expect.any(Object))
})

test('renders as div element', () => {
  const { container, getByText } = render(
    <ButtonA11y
      className="mock-className"
      element="div"
      onClick={jest.fn()}
    >
      Click Me
    </ButtonA11y>
  )

  expect(getByText('Click Me')).toBeInTheDocument()
  expect(container.firstChild.tagName).toEqual('DIV')
})

test('forwards a ref', () => {
  const ref = createRef()
  render(
    <ButtonA11y
      className="mock-className"
      onClick={jest.fn()}
      ref={ref}
    >
      Click Me
    </ButtonA11y>
  )

  expect(ref.current).toBeInTheDocument()
})

test('errors when no children & no aria-label', () => {
  expect(() => {
    render(
      <ButtonA11y
        className="mock-className"
        element="span"
        onClick={jest.fn()}
      />
    )
  }).toThrow(
    'react-button-a11y: `aria-label` required for accessibility'
  )
})

// This is allowed but is unwise for accessibility
test('renders when not strictMode, no children & no aria-label', () => {
  const { getByRole } = render(
    <ButtonA11y
      className="mock-className"
      element="span"
      onClick={jest.fn()}
      strictMode={false}
    />
  )
  const el = getByRole('button')

  expect(el).toBeInTheDocument()
})
