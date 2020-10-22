import useBoolean from './useBoolean'

const useFocus = () => {
	const [isFocus, setIsFocus, { setTrue, setFalse }] = useBoolean()

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
