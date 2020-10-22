import { useState, useRef } from 'react'

/**
 * useDebounce hook - Returns an array of two elements: state, setStateByThrottle.
 * * _state_ {*}: Contains the value of the state, just like the first element of useState.
 * * _setStateByThrottle_ {function}: Sets the state, just like the second element of useState. Restrains execution of given function to one every set delay
 * 
 * @param {*} initial - Initial state
 * @return {array} [ state, setStateByThrottle ]
 */
const useThrottle = initial => {
	const timeout = useRef(null)
	const [ state, setState ] = useState(initial)

	const setStateByThrottle = (value, delay) => {
		if(!timeout.current)
			timeout.current = setTimeout(() => {
				setState(value)
				timeout.current = null
			}, delay)
	}

	return [
		state,
		setStateByThrottle,
	]

}

export default useThrottle