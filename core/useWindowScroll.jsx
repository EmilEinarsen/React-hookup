import { useEffect, useState } from 'react'
import Throttle from 'bjork_restrain/modules/Throttle'

const throttle = (new Throttle()).process
const getCoordinates = () => ({
	x: window.pageXOffset,
	y: window.pageYOffset,
})
	
const useWindowScroll = () => {
	const [state, setState] = useState( getCoordinates() )

	useEffect(() => {
		const handler = () => throttle( () => setState( getCoordinates() ), 50)

		window.addEventListener('scroll', handler, {
			capture: false,
			passive: true,
		})
	
		return () => {
			window.removeEventListener('scroll', handler);
		}
	}, [])

	return [
		state,
		({x,y}) => {
			window.scrollTo(x, y)
			setState({x, y})
		},
	]
}

  export default useWindowScroll;