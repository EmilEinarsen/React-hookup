import { useEffect, useReducer } from 'react'

const fetchRefucer = (state, action) => {
	switch (action.type) {
		case 'fetch': return {
			...initalState,
			pending: true
		}
		case 'response': return {
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
		dispatch({type: 'fetch'})

		try {

			let response = await asyncFunction()
			dispatch({type: 'response', payload: {value: response}})

		} catch (error) {

			dispatch({type: 'response', payload: {error}})

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