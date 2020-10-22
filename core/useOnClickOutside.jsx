import { useLayoutEffect } from 'react'


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

		document.addEventListener('mousedown', listener, {
			capture: false,
			passive: true,
		})
		document.addEventListener('touchstart', listener, {
			capture: false,
			passive: true,
		})

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [])
}

export default useOnClickOutside