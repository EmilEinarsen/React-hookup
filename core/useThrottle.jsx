import { useState, useEffect } from 'react'

const useThrottle = () => {
	
	const [ state, setState ] = useState()
	let timeout

	useEffect(() => {

		timeeout = setTimeout(() => {

			setState(value)
			
			clearTimeout(timeeout)
			
		}, delay)
		

	}, [ value, delay, timeeout ])

	return state

}

export default useThrottle
