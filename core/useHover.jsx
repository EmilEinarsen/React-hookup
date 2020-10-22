import useBoolean from './useBoolean'


/**
 * useHover hook - Returns an array of two elements: isHover, bind:
 * * _isHover_ {boolean}: Contains the state, just like the first element of useState. Only exclusivly boolean
 * * _bind_ {object}: After spreading onto the targeted element, allows the useHover functionality
 * 
 * @return {array} [ isHover, {object} bind ]
 */
const useHover = () => {
	const [isHover, setIsHover, { setTrue, setFalse }] = useBoolean()

	const bind = {
		onMouseEnter: setTrue,
		onMouseLeave: setFalse,
	}

	return [
		isHover,
		bind,
	]
}

export default useHover
