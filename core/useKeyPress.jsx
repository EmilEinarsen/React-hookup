import { useState, useEffect } from 'react'

const getKeyPressData = ({
	key, 
	which,
	shiftKey, 
	altKey, 
	ctrlKey, 
	metaKey 
}) => ({
	key,
	code: which,
	shiftKey, 
	altKey, 
	ctrlKey, 
	metaKey
})

const useKeyPress = () => {
	const [ state, setState ] = useState({})

	const handler = e => setState( getKeyPressData(e) )

	useEffect(() => {
		window.addEventListener('keydown', handler)
		
		return () => {
			window.removeEventListener('keydown', handler)
		}
	}, [handler])

	return [
		state ? state : {}
	]
}

export default useKeyPress