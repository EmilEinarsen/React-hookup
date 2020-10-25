import { useLayoutEffect } from 'react'

const EventlisnerOptions = {
	capture: false,
	passive: true,
}

/**
 * useOnClickOutside hook - Adds Eventlisners to the element _ref_ and executes _func_ on click outside.
 * 
 * @param {element} ref - Ref to the DOMelement
 * @param {element} offset - Offsets where the element is considerd "in view" by the Y-axis
 */
function useOnClickOutside(ref, func) {
	useLayoutEffect(() => {
		const listener = (e) => {
			if (!ref.current || ref.current.contains(e.target)) return
			func(e)
		}

		document.addEventListener('mousedown', listener, EventlisnerOptions)
		document.addEventListener('touchstart', listener, EventlisnerOptions)

		return () => {
			document.removeEventListener('mousedown', listener, EventlisnerOptions)
			document.removeEventListener('touchstart', listener, EventlisnerOptions)
		}
	}, [])
}

export default useOnClickOutside