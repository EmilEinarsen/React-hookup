import { useState, useEffect } from 'react'

const useThrottle = () => {
	
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
