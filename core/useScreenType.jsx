import { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize'

const SIZE = {
	XS: [ 'xs', 0 ],
	SM: [ 'sm', 600 ],
	MD: [ 'md', 960 ],
	LG: [ 'lg', 1280 ],
	XL: [ 'xl', 1920 ],
}

const matchMedia = size => window.matchMedia(`(max-width: ${size}px)`).matches 

const getSreenType = ({ XS, SM, MD, LG, XL } = SIZE) => ({
	[XS[0]]: matchMedia(XS[1]),
	[SM[0]]: matchMedia(SM[1]),
	[MD[0]]: matchMedia(MD[1]),
	[LG[0]]: matchMedia(LG[1]),
	[XL[0]]: matchMedia(XL[1]),
})

const useScreenType = () => {
	const [ type, setType ] = useState(getSreenType())
	const { width } = useWindowSize()[0]

	useEffect(() => {
		setType( getSreenType() )
	}, [width])
	
	return [
		type
	]
}

export default useScreenType
