import { useBoolean } from '..'


/**
 * useActive hook - Returns an array of two elements: isAcive, bind:
 * * _isActive_ {boolean}: Contains the state, just like the first element of useState. Only exclusivly boolean
 * * _bind_ {object}: After spreading onto the targeted element, allows the useActive functionality
 * 
 * @return {array} [ isActive, {object} bind ]
 */
const useActive = () => {
	const [ isActive, , { setTrue, setFalse } ] = useBoolean()

	const bind = {
		onMouseDown: setTrue,
		onMouseUp: setFalse,
	}

	return[ 
		isActive,
		bind,
	]
}

export default useActive;