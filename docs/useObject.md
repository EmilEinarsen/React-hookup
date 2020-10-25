# `useObject`
Manipulate and read an object

## Arguments
- `initial {object}`: init of object

## Returns
* _object_ {object}: Contains the value of the state, just like the first element of useState
* _setObject_ {function}: Sets the state, just like the second element of useState
* _methods_ {object}: Contains four propertys useful for states containing an objects:
	* _add_ {function}: Spreads the param {object} _val_ to the object and updates state
	* _clear_ {function}: Clears the state to an empty object and updates state
	* _removeByKey_ {function}: Removes the property at the key of the value of param _key_ and updates state
	* _removeByValue_ {function}: Removes the property with the value of the param _value_ and updates state

## Usage
```jsx
import { useObject } from 'bjork_react-hookup'

const Object_ = () => {
	const [ 
		object, setObject, { add, clear, removeByKey, removeByValue }
	] = useObject({ name: 'Bjork', age: 1, country: 'sweden' })
	
	const { name, age, country } = object

	return (
		<>
			{ Object.keys(object).length ?
				<p>{ name && `My name is ${name}. ` }{  age && `I'm less then ${age} year old. ` }I was developed in {country}</p>
			: <p>Nothing here</p> }
			<button onClick={() => add({country: 'Sweden'})}>
				Update country
			</button>
			<button onClick={() => removeByKey('age')}>
				Remove age
			</button>
			<button onClick={() => clear()}>
				Go incognito
			</button>
		</>
	)
}
```
