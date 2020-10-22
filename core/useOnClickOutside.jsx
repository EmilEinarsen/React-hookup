import { useLayoutEffect } from 'react'

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