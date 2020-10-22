import { useEffect, useReducer } from 'react'

const ACTION = {
	FETCH: 'fetch',
	RESPONSE: 'response'
}

const fetchRefucer = (state, action) => {
	switch (action.type) {
		case ACTION.FETCH: return {
			...initalState,
			pending: true
		}
		case ACTION.RESPONSE: return {
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