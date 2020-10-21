import { useLayoutEffect } from 'react'

function useOnClickOutside(ref, callback) {
	useLayoutEffect(() => {
		const listener = (e) => {
			if (!ref.current || ref.current.contains(e.target)) return
			callback(e)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [])
}

export default useOnClickOutside