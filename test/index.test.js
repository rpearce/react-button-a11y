import React, { createRef } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Container, { ButtonA11y } from '../source'

describe('ButtonA11y', () => {

  describe('container', () => {

    it('renders', () => {
      const wrapper = shallow(
        <Container
          aria-label="Mock Label"
          className="mock-className"
          onClick={jest.fn()}
        />
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('handles ref', () => {
      const ref = createRef()
      renderIntoDocument(
        <Container
          aria-label="Mock Label"
          className="mock-className"
          onClick={jest.fn()}
          ref={ref}
        />
      )
      expect(ref.current).toBeInstanceOf(HTMLSpanElement)
    })

  })

  describe('component', () => {

    it('renders, no children', () => {
      const wrapper = shallow(
        <ButtonA11y
          aria-label="Mock Label"
          className="mock-className"
          onClick={jest.fn()}
        />
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, children', () => {
      const wrapper = shallow(
        <ButtonA11y
          aria-label="Mock Label"
          className="mock-className"
          onClick={jest.fn()}
        >
          Click me
        </ButtonA11y>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, span element', () => {
      const wrapper = shallow(
        <ButtonA11y
          aria-label="Mock Label"
          className="mock-className"
          element="span"
          onClick={jest.fn()}
        />
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, strict mode disabled', () => {
      const wrapper = shallow(
        <ButtonA11y
          aria-label="Mock Label"
          className="mock-className"
          onClick={jest.fn()}
          strictMode={false}
        />
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, ref passed in', () => {
      const ref = createRef()
      const wrapper = mount(
        <ButtonA11y
          aria-label="Mock Label"
          className="mock-className"
          forwardedRef={ref}
          onClick={jest.fn()}
        />
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('errors when no children AND aria-label not passed', () => {
      const render = () =>
        shallow(
          <ButtonA11y
            className="mock-className"
            element="span"
            onClick={jest.fn()}
          />
        )

      expect(render).toThrow(
        'react-button-a11y: `aria-label` required for accessibility'
      )
    })

    it('does not break when onClick not passed', () => {
      const onKeyDown = jest.fn()
      const preventDefault = jest.fn()
      const e = { key: 'Enter', preventDefault }
      const wrapper = shallow(
        <ButtonA11y
          aria-label="Mock Label"
          className="mock-className"
          element="span"
          onKeyDown={onKeyDown}
        />
      )

      wrapper.first().prop('onKeyDown')(e)

      expect(preventDefault).toHaveBeenCalled()
      expect(onKeyDown).toHaveBeenCalledWith(e)
    })

    it('does not break when onKeyDown not passed', () => {
      const onClick = jest.fn()
      const preventDefault = jest.fn()
      const e = { key: 'Enter', preventDefault }
      const wrapper = shallow(
        <ButtonA11y
          aria-label="Mock Label"
          className="mock-className"
          element="span"
          onClick={onClick}
        />
      )

      wrapper.first().prop('onKeyDown')(e)

      expect(preventDefault).toHaveBeenCalled()
      expect(onClick).toHaveBeenCalledWith(e)
    })

    it('does not break when onKeyDown AND onClick not passed', () => {
      const preventDefault = jest.fn()
      const e = { key: 'Enter', preventDefault }
      const wrapper = shallow(
        <ButtonA11y
          aria-label="Mock Label"
          className="mock-className"
          element="span"
        />
      )

      wrapper.first().prop('onKeyDown')(e)

      expect(preventDefault).toHaveBeenCalled()
    })

    describe('when random keydown key', () => {

      it('only calls onKeyDown', () => {
        const onClick = jest.fn()
        const onKeyDown = jest.fn()
        const preventDefault = jest.fn()
        const e = { key: 'ArrowDown', preventDefault }
        const wrapper = shallow(
          <ButtonA11y
            aria-label="Mock Label"
            className="mock-className"
            onClick={onClick}
            onKeyDown={onKeyDown}
          />
        )

        wrapper.first().prop('onKeyDown')(e)

        expect(preventDefault).not.toHaveBeenCalled()
        expect(onClick).not.toHaveBeenCalled()
        expect(onKeyDown).toHaveBeenCalledWith(e)
      })

    })

    describe('when random keydown keyCode', () => {

      it('only calls onKeyDown', () => {
        const onClick = jest.fn()
        const onKeyDown = jest.fn()
        const preventDefault = jest.fn()
        const e = { keyCode: 10, preventDefault }
        const wrapper = shallow(
          <ButtonA11y
            aria-label="Mock Label"
            className="mock-className"
            onClick={onClick}
            onKeyDown={onKeyDown}
          />
        )

        wrapper.first().prop('onKeyDown')(e)

        expect(preventDefault).not.toHaveBeenCalled()
        expect(onClick).not.toHaveBeenCalled()
        expect(onKeyDown).toHaveBeenCalledWith(e)
      })

    })

    describe('when keydown is enter-like', () => {

      describe('when key of Enter', () => {

        it('prevents default & calls onClick callback', () => {
          const onClick = jest.fn()
          const onKeyDown = jest.fn()
          const preventDefault = jest.fn()
          const e = { key: 'Enter', preventDefault }
          const wrapper = shallow(
            <ButtonA11y
              aria-label="Mock Label"
              className="mock-className"
              onClick={onClick}
              onKeyDown={onKeyDown}
            />
          )

          wrapper.first().prop('onKeyDown')(e)

          expect(preventDefault).toHaveBeenCalled()
          expect(onClick).toHaveBeenCalledWith(e)
          expect(onKeyDown).toHaveBeenCalledWith(e)
        })

      })

      describe('when keyCode of 13', () => {

        it('prevents default & calls onClick callback', () => {
          const onClick = jest.fn()
          const onKeyDown = jest.fn()
          const preventDefault = jest.fn()
          const e = { keyCode: 13, preventDefault }
          const wrapper = shallow(
            <ButtonA11y
              aria-label="Mock Label"
              className="mock-className"
              onClick={onClick}
              onKeyDown={onKeyDown}
            />
          )

          wrapper.first().prop('onKeyDown')(e)

          expect(preventDefault).toHaveBeenCalled()
          expect(onClick).toHaveBeenCalledWith(e)
          expect(onKeyDown).toHaveBeenCalledWith(e)
        })

      })

    })

    describe('when keydown is spacebar-like', () => {

      describe('when key of " "', () => {

        it('prevents default & calls onClick callback', () => {
          const onClick = jest.fn()
          const onKeyDown = jest.fn()
          const preventDefault = jest.fn()
          const e = { key: ' ', preventDefault }
          const wrapper = shallow(
            <ButtonA11y
              aria-label="Mock Label"
              className="mock-className"
              onClick={onClick}
              onKeyDown={onKeyDown}
            />
          )

          wrapper.first().prop('onKeyDown')(e)

          expect(preventDefault).toHaveBeenCalled()
          expect(onClick).toHaveBeenCalledWith(e)
          expect(onKeyDown).toHaveBeenCalledWith(e)
        })

      })

      describe('when key of Spacebar', () => {

        it('prevents default & calls onClick callback', () => {
          const onClick = jest.fn()
          const onKeyDown = jest.fn()
          const preventDefault = jest.fn()
          const e = { key: 'Spacebar', preventDefault }
          const wrapper = shallow(
            <ButtonA11y
              aria-label="Mock Label"
              className="mock-className"
              onClick={onClick}
              onKeyDown={onKeyDown}
            />
          )

          wrapper.first().prop('onKeyDown')(e)

          expect(preventDefault).toHaveBeenCalled()
          expect(onClick).toHaveBeenCalledWith(e)
          expect(onKeyDown).toHaveBeenCalledWith(e)
        })

      })

      describe('when keyCode of 32', () => {

        it('prevents default & calls onClick callback', () => {
          const onClick = jest.fn()
          const onKeyDown = jest.fn()
          const preventDefault = jest.fn()
          const e = { keyCode: 32, preventDefault }
          const wrapper = shallow(
            <ButtonA11y
              aria-label="Mock Label"
              className="mock-className"
              onClick={onClick}
              onKeyDown={onKeyDown}
            />
          )

          wrapper.first().prop('onKeyDown')(e)

          expect(preventDefault).toHaveBeenCalled()
          expect(onClick).toHaveBeenCalledWith(e)
          expect(onKeyDown).toHaveBeenCalledWith(e)
        })

      })

    })

  })

})
