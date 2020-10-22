import { useRef, useState } from 'react'

const useDebounce = (initialValue) => {
	const timeout = useRef(null)
	const [ state, setState ] = useState(initialValue)

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
