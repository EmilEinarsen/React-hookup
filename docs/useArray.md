# `useArray`

Manipulate and read an Array

## Arguments

- `initialValue {Array}`: init of array

## Returns

```
[
	array,
	setArray,
	{
		add,
		clear,
		removeByIndex,
		removeByValue,
		removeById,
	},
]
```

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
			
			{ array.length ? 
				<button 
					onClick={() => removeByIndex(array.length-1)}
				>Remove last ({array[array.length-1]})</button>
			: ''}

			<button onClick={() => clear()}>Remove all 🗑</button>
		</>
	)
}
```
