# `useOnClickOutside`
Listens for click events outside of element. Requires ref to function.

## Arguments
- `ref {element}`: ref to the targeted element/component
- `func {function}`: function to be executed opon pressing outside of ref

## Usage
```jsx
import { useOnClickOutside, useBoolean } from 'bjork_react-hookup'

style = {
	display: 'block',
	width: '200px',
	wrap: 'nowrap',
	backgroundColor: 'black',
	color: 'whitesmoke',
	padding: '20px',
}

const Hover = () => {
	const [ isVisible, setIsVisible, { setTrue, setFalse } ] = useBoolean()
	const ref = useRef()
	useOnClickOutside(ref, setFalse)

	return (
		<>
			{ isVisible ?
				<div ref={ref} style={style}>
					👋 Click anywhere outside of me to close
				</div>
			: <button onClick={setTrue}>Show</button> }
		</>
	)
}
```