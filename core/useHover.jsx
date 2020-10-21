import { useState } from 'react'

const useHover = () => {
	const [isHover, setIsHover] = useState(false)
	return [
		isHover,
		{
			onMouseEnter: () => setIsHover(true),
			onMouseLeave: () => setIsHover(false),
		},
	]
}

export default useHover
