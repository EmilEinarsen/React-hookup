# `useInView`
Detects if refrenced element/component is in view. Requires ref to function.

## Returns
* _coordinates_ {object}: Contains two propertys x {number} and y {number}. Each contains the scroll "position" by x, respectivly y.
* _setCoordinates_ {function}: Scrolls to and, therefor, sets the coordinates, the param needs to be an object with two propertys x and y

## Usage
```jsx
import { useWindowScroll } from 'bjork_react-hookup'

const style = {
	display: 'block',
	backgroundColor: "black",
	color: 'whitesmoke',
	padding: '20px',
	width: '250px',
	position: 'fixed',
	top: '0',
	right: '0',
}

const WindowScroll = () => {
	const [ state ] = useWindowScroll()
	const { x, y } = state

	return (
		<div style={style}>
			Your scroll position is X:{Math.floor(x)}, Y:{Math.floor(y)}
		</div>
	)
}
```
