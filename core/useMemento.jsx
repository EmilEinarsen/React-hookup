/* eslint-disable indent */
import { useReducer } from 'react'

const ACTIONS = {
	UNDO: 'undo',
	REDO: 'redo',
	SET: 'set',
	CLEAR: 'clear',
	LATEST: 'latest',
}

const initialState = {
	past: [],
	present: null,
	future: []
}

const reducerMemento = (state, action) => {
	const { past, present, future } = state
	const { type, payload: { initial, newPresent } = {} } = action

	switch (type) {
		case ACTIONS.UNDO: return {
			past: past.slice(0, past.length - 1),
			present: past[past.length - 1],
			future: [present, ...future]
		}
		case ACTIONS.REDO: return {
			past: [...past, present],
			present: future[0],
			future: future.slice(1)
		}
		case ACTIONS.SET: return newPresent !== present ? {
			past: [...past, present],
			present: newPresent,
			future: []
		} : state
		case ACTIONS.CLEAR: return {
			...initialState,
			present: initial
		}
		case ACTIONS.LATEST: return {
			past: [ ...past, present, ...future.slice(0, future.length - 1) ],
			present: future[future.length - 1],
			future: []
		}
	}
}


/**
 * useMemento hook - Returns an array of two elements: state, methods.
 * * _state_ {object}: Contains the present value of the state, can be modified to be an object with past, present and future as propertys by setting the property _fullState_ to true
 * * _methods_ {object}: Contains five propertys/methods responsible for timeline management:
 * 	* _undo_ {function}: Basicly a Ctrl+z. More detailed, sets the present value as the first element in future and the last element in past to the present value 
 * 	* _redo_ {function}: Basicly Ctrl+y. More detailed, set the present value as the last element in past and the first element in future to the present value 
 * 	* _set_ {function}: Sets the present value as the first element in past, the new value as present and clears future
 * 	* _clear_ {function}: Clears all past, present and future by reseting to the inital state
 * 	* _latest_ {function}: Basicly jumps to the last future value. More detailed, sets the last future element as the present value and everything before as elements of past 
 * 	
 * @param {object} [options] - Optional paramaters
 * @param {object} [options.initial] - inital value, defualt ''
 * @param {object} [options.fullState] - if false state contains present, if true state is an object with three propertys: {array} past, {*} present and {array} future
 * @return {object} [ { * || object } state, {object} mathods ]
 */
const useMemento = (options = {}) => {
	const {
		initial = '',
		fullState = false
	} = options

	const [state, dispatch] = useReducer(reducerMemento, {
		...initialState,
		present: initial
	})

	const methods = {
		undo: () => state.past.length !== 0 && dispatch({ type: ACTIONS.UNDO }),

		redo: () => state.future.length !== 0 && dispatch({ type: ACTIONS.REDO }),

		set: newPresent => dispatch({ type: ACTIONS.SET, payload: { newPresent } }),
		
		clear: () => dispatch({ type: ACTIONS.CLEAR, payload: { initial } }),

		latest: () => dispatch({ type: ACTIONS.LATEST })
	}
	
	return [
		fullState ? state : state.present,
		methods,
	]
}

export default useMemento