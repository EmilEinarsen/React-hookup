# `useAsync`
useAsync reduces littering in your component by abstracting logic and management of multiple states.

## Arguments
- `asyncFunction {function}`: async function to be executed
- `immediate {boolean}`: determens wether or not asyncFunction should be executed opon initialization, defualt true

## Returns
* _state_ {object}: contains three propertys: pending, value and error. 
 	* _pending_ {boolean}: Indicates whether or not a _value_ is pending, default false
 	* _value_ {*}: Contains the resolved value from _asyncFunction_, default null
 	* _error_ {*}: Contains the rejected value from _asyncFunction_, default null
* _execute_ {function}: that executes the provided function _asyncFunction_ and updates the state, depending on resolve or reject

## Usage
```jsx
import { useAsync } from 'bjork_react-hookup'

const delayedValue = () => (
	new Promise((resolve, reject) => {
		setTimeout(()=> {
			let number  = Math.floor(Math.random() * 10)
			number >= 3 ? resolve('🤯') : reject('🤬')
		}, 2000)
	})
)
 
const Async = () => {
	const [ state, execute ] = useAsync(delayedValue, false)

	const { pending, value, error } = state

	return (
		<>
			<p>{ value ? value : error ? error : '🏜'}</p>

			<button onClick={() => !pending ? execute() : ''}>
				{ pending ? 'pending ...' : 'fetch' }
			</button>
		</>
	)
}
```
