import useBoolean from './useBoolean'

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
