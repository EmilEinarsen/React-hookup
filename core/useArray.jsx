import { useState } from 'react'

const ACTIONS = {
	INDEX: 'index',
	VALUE: 'value',
	ID: 'id',
}

const filter = ({type, payload: { arr, index, value, id }}) => (

	type === ACTIONS.INDEX ? arr.filter((v, i) => i !== index )
		: type === ACTIONS.VALUE ? arr.filter(v => v !== value)
			: type === ACTIONS.ID ? arr.filter(v => v && v.id !== id )
				: arr

)


/**
 * useArray hook - Returns an array of three elements: array, setArray, methods.
 * * _array_ {array}: Contains the value of the state, just like the first element of useState
 * * _setArray_ {function}: Sets the state, just like the second element of useState
 * * _methods_ {object}: Contains five propertys useful for states containing an array:
 * 	* _add_ {function}: Pushes the param _value_ to the array and updates state
 * 	* _clear_ {function}: Clears the state to an empty array and updates state
 * 	* _removeByIndex_ {function}: Removes the element at the index of the value of param _index_ and updates state
 * 	* _removeByValue_ {function}: Removes an element with the value of the param _value_ and updates state
 * 	* _removeById_ {function}: Removes the element containing an property id with the value of the param _id_ and updates state. Useful for an array of object containing an id
 * 
 * @param {array} initial - Initial state
 * @return {array} [ array, setArray, {object} methods ]
 */
const useArray = initial => {
	const [ array, setArray ] = useState(initial)

	const methods = {
		add: val => setArray( arr => [ ...arr, val ]),
		clear:  () => setArray([]),
		removeByIndex: index => setArray( arr => filter({action: ACTIONS.INDEX, payload: {arr, index}}) ),
		removeByValue: value => setArray( arr => filter({action: ACTIONS.VALUE, payload: {arr, value}})),
		removeById: id => setArray( arr => filter({action: ACTIONS.INDEX, payload: {arr, id}})),
	}

	return [
		array,
		setArray,
		methods,
	]
}

export default useArray
