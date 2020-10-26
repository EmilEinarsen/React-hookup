import { useEffect, useReducer } from 'react'

const ACTION = {
	FETCH: 'fetch',
	RESPONSE: 'response'
}

const fetchRefucer = (state, action) => {
	switch (action.type) {
	case ACTION.FETCH: 
		return {
			...initalState,
			pending: true
		}
	case ACTION.RESPONSE: 
		return {
			...state,
			...action.payload,
			pending: false,
		}
	}
}

const initalState = {
	pending:  false,
	value:  null,
	error: null,
}

/**
 * useAsync hook - Returns an array of two elements: state and execute. 
 * * _state_ {object}: contains three propertys: pending, value and error. 
 * 	* _pending_ {boolean}: Indicates whether or not a _value_ is pending, default false
 * 	* _value_ {*}: Contains the resolved value from _asyncFunction_, default null
 * 	* _error_ {*}: Contains the rejected value from _asyncFunction_, default null
 * * _execute_ {function}: that executes the provided function _asyncFunction_ and updates the state, depending on resolve or reject
 * 
 * @param {array} asyncFunction - Function to be executed on dispatch
 * @param {array} immediate - Determens whether or not _asyncFunction_ should be executed immediatly, defualt true
 * @return {array} [ {object} state, {function} execute ]
 */
const useAsync = (asyncFunction, immediate = true) => {
	const [ state, dispatch ] = useReducer(fetchRefucer, initalState)
	
	const execute = async () => {
		dispatch({type: ACTION.FETCH})

		try {

			let response = await asyncFunction()
			dispatch({type: ACTION.RESPONSE, payload: {value: response}})

		} catch (error) {

			dispatch({type: ACTION.RESPONSE, payload: {error}})

		}
	}

	useEffect(() => {
		if (immediate) execute()
	}, [execute, immediate])

	return [
		state,
		execute,
	]
}

export default useAsync