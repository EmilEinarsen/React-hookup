import { useState } from 'react'

export const ACTIONS = {
	KEY: 'key',
	VALUE: 'value'
}

const filterBy = (object, action, value) => (
	Object.keys(object)
		.filter(key => (
			action === ACTIONS.KEY ? key !== value
				: action === ACTIONS.VALUE ? object[key] !== value
				: true
		)).reduce((obj, key) => (
			{ ...obj, [key]: object[key] }
		), {})
)

const useObject = initial => {
	const [ object, setObject ] = useState(initial)

	console.log(object)

	return [
		object,
		setObject,
		{
			add: val => setObject( obj => ({ ...obj, ...val }) ),
			clear: () => setObject({}),
			removeByKey: index => setObject( obj => filterBy(obj, ACTIONS.KEY, index) ),
			removeByValue: value => setObject( obj => filterBy(obj, ACTIONS.VALUE, value) ),
		}
	]
}

export default useObject