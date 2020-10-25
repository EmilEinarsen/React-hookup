import { useState, useEffect } from 'react'
import Throttle from 'bjork_restrain/modules/Throttle'

const throttle = (new Throttle()).process

const EventlisnerOptions = {
	capture: false,
	passive: true,
}

const getSize = () => ({
	width: window.innerWidth,
	height: window.innerHeight,
})
 
const useWindowSize = () => {
	const [ size, setSize ] = useState(getSize())

	useEffect(() => {
		const handleResize = () => throttle(() => setSize(getSize()), 100)

		window.addEventListener('resize', handleResize, EventlisnerOptions)
		return () => window.removeEventListener('resize', handleResize, EventlisnerOptions)
	}, [])

	return [
		size
	]
}

export default useWindowSize
