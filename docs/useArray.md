# `useArray`
Manipulate and read an array

## Arguments
- `initial {array}`: init of array

## Returns
* _array_ {array}: Contains the value of the state, just like the first element of useState
* _setArray_ {function}: Sets the state, just like the second element of useState
* _methods_ {object}: Contains five propertys useful for states containing an array:
	* _add_ {function}: Pushes the param _value_ to the array and updates state
	* _clear_ {function}: Clears the state to an empty array and updates state
	* _removeByIndex_ {function}: Removes the element at the index of the value of param _index_ and updates state
	* _removeByValue_ {function}: Removes an element with the value of the param _value_ and updates state
	* _removeById_ {function}: Removes the element containing an property id with the value of the param _id_ and updates state. Useful for an array of object containing an id

## Usage
```jsx
import { useArray } from 'bjork_react-hookup'

const Array = () => {
	const [ 
		array, 
		setArray, 
		{ 
			add, 
			clear, 
			removeByIndex, 
			removeByValue 
		} 
	] = useArray(['cat 🐈', 'fish 🐠', 'turtile 🐢'])

	return (
		<>
			<p>{ array.length ? array.join(' ') : '🏜'}</p>
			<button onClick={() => add('dog 🐕')}>Add dog 🐕</button>
			<button onClick={() => removeByValue('cat 🐈')}>Remove cat 🐈</button>
			
			{ array.length && 
				<button onClick={() => removeByIndex(array.length-1)}>
					Remove last ({array[array.length-1]})
				</button>
			}

			<button onClick={() => clear()}>Remove all 🗑</button>
		</>
	)
}
```
