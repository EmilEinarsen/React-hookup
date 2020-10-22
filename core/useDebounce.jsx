import { useRef, useState } from 'react'

/**
 * useDebounce hook - Returns an array of two elements: state, setStateByDebounce.
 * * _state_ {*}: Contains the value of the state, just like the first element of useState.
 * * _setStateByDebounce_ {function}: Sets the state, just like the second element of useState. Delays execution of setState until idle for duration of _delay_
 * 
 * @param {*} initial - Initial state
 * @return {array} [ state, setStateByDebounce ]
 */
const useDebounce = initial => {
	const timeout = useRef(null)
	const [ state, setState ] = useState(initial)

	const setStateByDebounce = (value, delay) => {
		clearTimeout(timeout.current)
		timeout.current = setTimeout(() => setState(value), delay)
	}

	return [
		state,
		setStateByDebounce,
	]
	
}

export default useDebounce
