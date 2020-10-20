import { useState } from 'react'

const useDebounce = (initialValue) => {
	const [ state, setState ] = useState(initialValue)
	let timeout

	return [
		state,
		(value, delay) => {
			timeout = setTimeout(() => setState(value), delay)
		}
	]
	
}

export default useDebounce
