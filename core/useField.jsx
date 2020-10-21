import { useState } from 'react'

const useField = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => set(initialValue),
    bind: {
      value,
      onChange: e => set(e.target.value),
    },
  }
}

export default useField