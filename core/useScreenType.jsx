import Throttle from 'bjork_restrain/modules/Throttle'
import { useState, useEffect } from 'react'

const throttle = (new Throttle).process

const EventlisnerOptions = {
	capture: false,
	passive: true,
}

const SIZE = {
	XS: [ 'xs', 0 ],
	SM: [ 'sm', 600 ],
	MD: [ 'md', 960 ],
	LG: [ 'lg', 1280 ],
	XL: [ 'xl', 1920 ],
}

const matchMedia = size => !window.matchMedia(`(max-width: ${size}px)`).matches 

const getScreenType = ({ XS, SM, MD, LG, XL } = SIZE) => ({
	[XS[0]]: matchMedia(XS[1]),
	[SM[0]]: matchMedia(SM[1]),
	[MD[0]]: matchMedia(MD[1]),
	[LG[0]]: matchMedia(LG[1]),
	[XL[0]]: matchMedia(XL[1]),
})


/**
 * useScreenType hook - Returns and an array with an element, type
 * _types_ {object}: contains 5 propertys, xs - xl. Each property can either be true or false, to represent a breakpoint
 * 
 * @return {array} [ type ]
 */
const useScreenType = () => {
	const [type, setType] = useState(getScreenType())

	const onHandleResize = () => throttle(() => setType(getScreenType()), 100)

	useEffect(() => {
		window.addEventListener('resize', onHandleResize, EventlisnerOptions)

		return () => {
			window.removeEventListener('resize', onHandleResize, EventlisnerOptions)
		}
	})

	return [
		type
	]
}

export default useScreenType
