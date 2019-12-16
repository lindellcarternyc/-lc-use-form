import { useState } from 'react'

export interface UseCounterAPI {
  increment: () => void
  decrement: () => void
  setCount: (count: number) => void
}

const useCounter = (initialCount: number = 0): [number, UseCounterAPI] => {
  const [count, setCountValue] = useState(initialCount)

  const increment = () => {
    return setCountValue(count => count + 1)
  }

  const decrement = () => setCountValue(count => count - 1)
  const setCount = (count: number) => setCountValue(count)

  return [
    count, 
    {
      increment,
      decrement,
      setCount
    }
  ]
}

export default useCounter