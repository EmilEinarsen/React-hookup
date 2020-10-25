import { useEffect } from 'react'
import { useBoolean, useWindowScroll } from '..'
import Throttle from 'bjork_restrain/modules/Throttle'

const elementYPos = (ref, offset) => ref.getBoundingClientRect().top + window.pageYOffset - window.innerHeight + offset


/**
 * useInView hook - Returns an array of two elements: isInView, setInViewByScrollTo
 * * _isInView_ {boolean}: Contains the state, just like the first element of useState. Only depends on if the provided element is "in view" by the Y-axis
 * * _setInViewByScrollTo_ {function}: Sets the state, just like the second element of useState, only does this without any additonall params throught _ref_. Inadditon, scrolls the element into view
 * 
 * @param {element} ref - Ref to the DOMelement
 * @param {number} offset - Offsets where the element is considerd "in view" by the Y-axis, defualt 0
 * @return {array} [ isInView, setInViewByScrollTo ]
 */
const useInView = (ref, offset = 0) => {
	if (!ref) return
	const [ isInView, , { setTrue }] = useBoolean()
	const { y } = useWindowScroll()[0]
	const throttle = (new Throttle()).process

	useEffect(() => {
		throttle(() => y >= elementYPos(ref, offset) ? setTrue() : '', 200)
	}, [ref, offset, y])

	const setInViewByScrollTo = () => {
		const { top: y } = ref.getBoundingClientRect()
		const x = 0
		window.scrollTo(x, y)
	}

	return [
		isInView,
		setInViewByScrollTo,
	]
}

export default useInView