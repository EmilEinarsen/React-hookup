# `useHover`
Manages detection of hover. Requires spreading the second param __bind__ over the targeted element/component to function.

## Arguments
- `initial {*}`: Initial state

## Returns
* _isHover_ {boolean}: Contains the state, just like the first element of useState. Only exclusivly boolean
* _bind_ {object}: After spreading onto the targeted element, allows the useHover functionality

## Usage
```jsx
import { useHover } from 'bjork_react-hookup'

const style = {
	height: "50px", 
	width: "50px", 
	backgroundColor: "black",
	display: 'grid',
	placeContent: 'center',
}

const Hover = () => {
	const [ isHover, bind ] = useHover() 

	return (
		<>
			<div {...bind} style={style}>
				{isHover ? '😁' : '☹️'}
			</div>
		</>
	)
}
```
