# `useFocus`
Manages detection of focus. Requires spreading the second param __bind__ over the targeted field to function.

## Arguments
- `initial {*}`: Initial state

## Returns
* _isFocus_ {boolean}: Contains the state, just like the first element of useState. Only exclusivly boolean
* _bind_ {object}: After spreading onto the targeted element, allows the useFocus functionality

## Usage
```jsx
import { useFocus } from 'bjork_react-hookup'

const Focus = () => {
	const [ isFocus, bind ] = useFocus()

	return (
		<>
			<p>{isFocus ? '😁' : '☹️'}</p>
			<input {...bind} ></input>
		</>
	)
}
```
