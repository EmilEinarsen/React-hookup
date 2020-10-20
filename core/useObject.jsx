import React from 'react'

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

const useArray = initial => {
	const [ object, setObject ] = useState(initial)

	return [
		object,
		setObject,
		{
			add: val => setObject( obj => ({ ...obj, val }) ),
			clear:  setObject({}),
			removeByKey: index => setObject( () => filterBy(object, ACTIONS.KEY, index)),
			removeByValue: value => setObject( () => filterBy(object, ACTIONS.VALUE, value)),
		}
	]
}

export default useArray