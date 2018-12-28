# API Documentation

| Prop | Type | Required | Default  | Details |
| ---  | --- | ---  | --- | --- |
| `aria-label` | String | yes if `children` absent | none | Pass an `aria-label` if you don't pass children with descriptive text |
| `children` | Node | yes if `aria-label` absent | none | Pass `children` with descriptive text if you don't pass an `aria-label` |
| `element` | String | no | `'span'` | The default element is a `div`, but you can pass a `span`, e.g., if you like |
| `onClick` | Function | yes | `Function.prototype` | When the button is "pressed" (via Enter or Spacebar or click), this callback will be triggered with the event |
| `strictMode` | Bool | no | `true` | An error will be thrown if enabled and you fail to pass both an `aria-label` and `children` |

## Usage

### With `aria-label`
```js
import ButtonA11y from 'react-button-a11y'

// ...

<ButtonA11y
  aria-label="Click this to do X"
  className="some-className"
  onClick={evt => { console.log('press happened: ', evt) }}
/>
```

### Without `aria-label`
If you don't provide an `aria-label`, you need to provide `children` so that
there is something to describe what clicking / tapping this button does.
```js
import ButtonA11y from 'react-button-a11y'

// ...

<ButtonA11y
  className="some-className"
  onClick={evt => { console.log('press happened: ', evt) }}
>
  Click this to do X
</ButtonA11y>
```
