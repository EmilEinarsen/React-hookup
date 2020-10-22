import { useState } from 'react'

/**
 * useBoolean hook - Returns an array of three elements: is, setIsByBoolean, methods.
 * * _is_ {boolean}: Contains the state, just like the first element of useState, only exclusivly boolean  
 * * _setIsByBoolean_ {function}: Sets the state, just like the second element of useState, converts any given value to a boolean
 * * _methods_ {object}: Contains three propertys useful for managing boolean state:
 * 	* _toggle_ {function}: Toggles the state and updates
 * 	* _setTrue_ {function}:	Sets the state to true and updates
 * 	* _setFalse_ {function}: Sets the state to false and updates
 * 
 * @param {*} initial - Initial state, also converts _initial_ to boolean
 * @return {array} [ is, setIsByBoolean, {object} methods ]
 */
const useBoolean = initial => {
	const [is, setIs] = useState(Boolean(initial))

	const methods = {
		toggle: () => setIs(!value),
		setTrue: () => setIs(true),
		setFalse: () => setIs(false),
	}

	const setIsByBoolean = value => setIs( Boolean(value) )

	return [
		is,
		setIsByBoolean,
		methods,
	]
}

export default useBoolean