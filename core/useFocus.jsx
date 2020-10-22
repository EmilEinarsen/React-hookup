import useBoolean from './useBoolean'


/**
 * useFocus hook - Returns an array of two elements: isFocus, bind:
 * * _isFocus_ {boolean}: Contains the state, just like the first element of useState. Only exclusivly boolean
 * * _bind_ {object}: After spreading onto the targeted element, allows the useFocus functionality
 * 
 * @return {array} [ isFocus, {object} bind ]
 */
const useFocus = () => {
	const [ isFocus, setIsFocus, { setTrue, setFalse } ] = useBoolean()

	const bind = {
		onFocus: setTrue,
		onBlur: setFalse,
	}

	return [
		isFocus,
		bind,
	]
}

export default useFocus
