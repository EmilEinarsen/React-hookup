# `useThrottle`
Functions like useState, but with an built-in throttle

## Arguments
- `initial {*}`: Initial state

## Returns
* _state_ {*}: Contains the value of the state, just like the first element of useState.
* _setStateByDebounce_ {function}: Sets the state, just like the second element of useState. Delays execution of setState until idle for duration of _delay_

## Usage
```jsx
// ---------- Logic ---------- \\

import { useThrottle } from 'bjork_react-hookup'
import Throttle from './Throttle'

const ThrottleContainer = () => {
	const [ count, setCount ] = useThrottle(0)
	const [ clicked, setClicked ] = useState(0)

	return <Throttle props={{ count, setCount, clicked, setClicked }} />
}


// ---------- Visual ---------- \\

const Throttle = ({ 
	props: { 
		count, 
		setCount, 
		clicked, 
		setClicked 
	} 
}) => (
	<>
		<p>I'm {count}, but clicked {clicked}</p>
		<button onClick={() => { 
			setCount(++count, 1000) 
			setClicked(++clicked)
		}}>
			Throttle
		</button>
	</>
)
```
