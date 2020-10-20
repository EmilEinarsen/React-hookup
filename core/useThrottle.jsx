import { useState } from 'react'

const useThrottle = (initialValue) => {
	
	const [ state, setState ] = useState(initialValue)
	let timeout = undefined

	return [
		state,
		(value, delay) => {
			if(!timeout) setTimeout(() => {
				setState(value)
				timeout = undefined
			}, delay)
		}
	]

}

export default useThrottle
