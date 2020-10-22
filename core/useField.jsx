import { useState } from 'react'


/**
 * useField hook - Returns an array of three elements: value, setValue, bind:
 * * _value_ {boolean}: Contains the state, just like the first element of useState. Depends on the value of the targeted field
 * * _setValue_ {function}: Sets the state, just like the second element of useState. Controlls the value of the targeted field
 * * _bind_ {object}: After spreading onto the targeted element/field, allows the useField functionality
 * 
 * @param {*} initial - Initial state
 * @return {array} [ value, setValue, {object} bind ]
 */
const useField = initial => {
	const [value, setValue] = useState(initial)

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