import { useState } from 'react'

const useFocus = () => {
	const [isFocus, setFocus] = useState(false)
	return {
		isFocus,
		props: {
			onFocus: () => setFocus(true),
			onBlur: () => setFocus(false),
		},
	}
}

export default useFocus
