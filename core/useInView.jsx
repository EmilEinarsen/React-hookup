import { useEffect } from 'react'
import { useBoolean, useWindowScroll } from '..'
import Throttle from 'bjork_restrain/modules/Throttle';

const elementYPos = () => ref.getBoundingClientRect().top + window.pageYOffset - window.innerHeight + offset

const useInView = (ref, offset = 0) => {
	if (!ref) return

	const throttle = (new Throttle()).process
	const [ isInView, setIsInView { setTrue }] = useBoolean()
	const { y } = useWindowScroll()[0]

	useEffect(() => {
		throttle(() => y >= elementYPos() ? setTrue() : '', 200)
	}, [ref, offset, y])

	return [
		isInView,
	]
}

export default useInView