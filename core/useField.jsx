import { useState } from 'react'

const useField = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	return [
		value,
		setValue,
		{
			value,
			onChange: e => setValue(e.target.value),
		},
	]
}

export default useField