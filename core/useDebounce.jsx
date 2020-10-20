import { useState, useEffect } from 'react'

const useDebounce = (value, delay) => {

	const [ state, setState ] = useState()

	useEffect(() => {

		const timeeout = setTimeout(() => {
			setState(value)
		}, delay)

		return () => {
			clearTimeout(timeeout)
		}

	}, [ value, delay ])

	return state
	
}

export default useDebounce
