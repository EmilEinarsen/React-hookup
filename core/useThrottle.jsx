import { useState, useRef } from 'react'

const useThrottle = (initialValue) => {
	const timeout = useRef(null)
	const [ state, setState ] = useState(initialValue)

	return [
		state,
		(value, delay) => {
			if(!timeout.current) {
				timeout.current = setTimeout(() => {
					setState(value)
					timeout.current = null
				}, delay)
			}
		}
	]

}

export default useThrottle
