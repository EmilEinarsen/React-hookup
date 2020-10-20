import { useState } from 'react'

/**
 * @function useBoolean - hook
 * @param {mixed} initial
 * @return {Object}
 */
const useBoolean = initial => {
	const [value, setValue] = useState(initial)

	const methods = {
		toggle: () => setValue(!value),
		setTrue: () => setValue(true),
		setFalse: () => setValue(false),
	}

	return [
		value,
		setValue,
		methods,
	]
}

export default useBoolean