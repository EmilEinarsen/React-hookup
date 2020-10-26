# `useOnClickOutside`
Listens for clicks outside of element. Requires ref to function.

## Arguments
- `ref {element}`: ref to the targeted element/component
- `func {function}`: function to be executed opon pressing outside of ref

## Usage
```jsx
// ---------- Logic ---------- \\

import { useOnClickOutside, useBoolean } from 'bjork_react-hookup'
import OnClickOutside from './OnClickOutside'

const OnClickOutsideContainer = () => {
	const [ isVisible, , { setTrue, setFalse } ] = useBoolean()
	const ref = useRef()
	useOnClickOutside(ref, setFalse)

	return <OnClickOutside props={{ ref, isVisible, setTrue }} />
}


// ---------- Logic ---------- \\

const style = {
	display: 'block',
	width: '200px',
	wrap: 'nowrap',
	backgroundColor: 'black',
	color: 'whitesmoke',
	padding: '20px',
}

const OnClickOutside = ({ 
	props: { 
		ref, 
		isVisible, 
		setTrue 
	} 
}) => (
	<>
		{ isVisible ?
			<div ref={ref} style={style}>
				👋 Click anywhere outside of me to close
			</div>
		: <button onClick={setTrue}>Show</button> }
	</>
)
```
