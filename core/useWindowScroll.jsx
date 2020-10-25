import { useEffect, useState } from 'react'
import Throttle from 'bjork_restrain/modules/Throttle'

const throttle = (new Throttle()).process

const EventlisnerOptions = {
	capture: false,
	passive: true,
}

const getCoordinates = () => ({
	x: window.pageXOffset,
	y: window.pageYOffset,
})


/**
 * useWindowScroll hook - Adds Eventlisners to the window and returns and an array of two elemnts: state and setCoordinatesAndScrollTo
 * _coordinates_ {object}: Contains two propertys x {number} and y {number}. Each contains the scroll "position" by x, respectivly y.
 * 
 * @return {array} [ coordinates, setCoordinatesAndScrollTo ]
 */
const useWindowScroll = () => {
	const [coordinates, setCoordinates] = useState( getCoordinates() )

	useEffect(() => {
		const handler = () => throttle( () => setCoordinates( getCoordinates() ), 50)

		window.addEventListener('scroll', handler, EventlisnerOptions)
	
		return () => {
			window.removeEventListener('scroll', handler, EventlisnerOptions)
		}
	}, [])

	const setCoordinatesAndScrollTo = ({x,y}) => {
		window.scrollTo(x, y)
		setCoordinates({x, y})
	}

	return [
		coordinates,
		setCoordinatesAndScrollTo,
	]
}

export default useWindowScroll