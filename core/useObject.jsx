import { useState } from 'react'

export const ACTIONS = {
	KEY: 'key',
	VALUE: 'value'
}

const filter = ({type, payload: { obj: providedObj, key: providedKey, value }}) => (
	Object.keys(providedObj)
		.filter(key => (

			type === ACTIONS.KEY ? key !== providedKey
				: type === ACTIONS.VALUE ? providedObj[key] !== value
					: true
			
		)).reduce((obj, key) => (
			{ ...obj, [key]: providedObj[key] }
		), {})
)


/**
 * useObject hook - Returns an object of three elements: object, setObject, methods.
 * * _object_ {object}: Contains the value of the state, just like the first element of useState
 * * _setObject_ {function}: Sets the state, just like the second element of useState
 * * _methods_ {object}: Contains four propertys useful for states containing an objects:
 * 	* _add_ {function}: Spreads the param {object} _val_ to the object and updates state
 * 	* _clear_ {function}: Clears the state to an empty object and updates state
 * 	* _removeByKey_ {function}: Removes the property at the key of the value of param _key_ and updates state
 * 	* _removeByValue_ {function}: Removes the property with the value of the param _value_ and updates state
 * 	
 * @param {object} initial - Initial state
 * @return {object} [ object, setObject, {object} methods ]
 */
const useObject = initial => {
	const [ object, setObject ] = useState(initial)

	const methods = {
		add: val => setObject( obj => ({ ...obj, ...val }) ),
		clear: () => setObject({}),
		removeByKey: key => setObject( obj => filter({action: ACTIONS.KEY, payload: {obj, key}}) ),
		removeByValue: value => setObject( obj => filter({action: ACTIONS.VALUE, payload: {obj, value}}) ),
	}

	return [
		object,
		setObject,
		methods,
	]
}

export default useObject