import { useState } from 'react'

const useArray = initial => {
	const [ array, setArray ] = useState(initial)

	const methods = {
		add: val => setArray( arr => [ ...arr, val ]),
		clear:  () => setArray([]),
		removeByIndex: index => setArray( arr => arr.filter((v, i) => i !== index )),
		removeByValue: value => setArray( arr => arr.filter((v, i) => v !== value )),
		removeById: id => setArray( arr => arr.filter(v => v && v.id !== id )),
	}

	return [
		array,
		setArray,
		methods,
	]
}

export default useArray
