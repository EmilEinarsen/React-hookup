# `useStorage`
Manages state and storage simultaneously. Choose between local, session and cookie. 
Utilizes and therefor depends on bjork_useStorage. For more information check out [bjork_usestorage](https://github.com/EmilEinarsen/bjork_usestorage)

## Usage
```jsx
import { useStorage } from 'bjork_react-hookup'

const Storage = () => {
	const [ state, setState ] = useStorage( 'local', 'value' )

	return (
		<>
			<p>{ !state ? '💀 Empty' : `😎 Stored : ${state}` }</p>
			<input 
				onChange={e => setState(e.target.value)}
				value={state}
			></input>
		</>
	)
}
```
