import { useState } from 'react'

const useHover = () => {
	const [isHover, setIsHover] = useState(false)
	return [
		isHover,
		{
			onMouseenter: () => setIsHover(true),
			onMouseleave: () => setIsHover(false),
		},
	]
}

export default useHover
