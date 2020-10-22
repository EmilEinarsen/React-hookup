import { useState } from 'react'

const useField = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	const bind = {
		value,
		onChange: e => setValue(e.target.value),
	}

	return [
		value,
		setValue,
		bind,
	]
}

export default useField