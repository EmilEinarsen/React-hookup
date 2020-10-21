import { useEffect, useState } from 'react'

const getCoordinates = () => ({
	x: window.pageXOffset,
	y: window.pageYOffset,
})
	
const useWindowScroll = () => {
	const [state, setState] = useState( getCoordinates() )

	useEffect(() => {
		const handler = () => {
			setState( getCoordinates() )
		}

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