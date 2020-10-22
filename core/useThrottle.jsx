import { useState, useRef } from 'react'

const useThrottle = (initialValue) => {
	const timeout = useRef(null)
	const [ state, setState ] = useState(initialValue)

	const setStateByTHrottle = (value, delay) => {
		if(!timeout.current)
			timeout.current = setTimeout(() => {
				setState(value)
				timeout.current = null
			}, delay)
	}

	return [
		state,
		setStateByTHrottle,
	]

}

export default useThrottle