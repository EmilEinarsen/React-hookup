# `useField`
Manages basic manipulation and controll of field. Requires spreading the third param __bind__ over targeted field to function.

## Arguments
- `initial {*}`: Initial state

## Returns
* _value_ {boolean}: Contains the state, just like the first element of useState. Depends on the value of the targeted field
* _setValue_ {function}: Sets the state, just like the second element of useState. Controlls the value of the targeted field
* _bind_ {object}: After spreading onto the targeted element/field, allows the useField functionality

## Usage
```jsx
import { useField } from 'bjork_react-hookup'

const Field = () => {
	const [ state, setState, bind ] = useField()

	return (
		<>
			<p>{ !state ? '💀 Empty' : `😎 Value: ${state}` }</p>
			<input {...bind}></input>
		</>
	)
}
```
