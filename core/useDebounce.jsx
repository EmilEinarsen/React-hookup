import { useRef, useState } from 'react'

const useDebounce = (initialValue) => {
	const timeout = useRef(null)
	const [ state, setState ] = useState(initialValue)

	return [
		state,
		(value, delay) => {
			clearTimeout(timeout.current)
			timeout.current = setTimeout(() => setState(value), delay)
		}
	]
	
}

export default useDebounce
