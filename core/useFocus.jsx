import { useState } from 'react'

const useFocus = () => {
	const [isFocus, setIsFocus] = useState(false)
	return [
		isFocus,
		{
			onFocus: () => setIsFocus(true),
			onBlur: () => setIsFocus(false),
		},
	]
}

export default useFocus
