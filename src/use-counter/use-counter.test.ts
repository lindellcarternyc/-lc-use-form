import { renderHook, act, HookResult } from '@testing-library/react-hooks'

import useCounter, { UseCounterAPI } from './use-counter'

describe('useCounter', () => {
  // let result: HookResult<[number, UseCounterAPI]>
  
  describe('set up', () => {
    it('should default to 0', () => {
      const { result } = renderHook(() => useCounter())
      expect(result.current[0]).toBe(0)
    })

    it('should start from another value', () => {
      const { result } = renderHook(() => useCounter(100))
      expect(result.current[0]).toBe(100)
    })
  })

  describe('increment', () => {
    it('should increment a value', async () => {
      const { result } = renderHook(() => useCounter())
      expect(result.current[0]).toBe(0)

      act(() => result.current[1].increment())
      expect(result.current[0]).toBe(1)
    })
  })

  describe('decrement', () => {
    it('should decrement a value', () => {
      const { result } = renderHook(() => useCounter(100))
      expect(result.current[0]).toBe(100)
      act(() => result.current[1].decrement())
      expect(result.current[0]).toBe(99)
    })
  })

  describe('set', () => {
    it('should set a number value', () => {
      const { result } = renderHook(() => useCounter(100))
      expect(result.current[0]).toBe(100)
      act(() => result.current[1].setCount(6969))
      expect(result.current[0]).toBe(6969)
    })
  })
})